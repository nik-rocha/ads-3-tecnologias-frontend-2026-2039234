<script lang="ts">
import { useRoute } from 'vue-router';
import axios from 'axios';
import { capitalize } from 'vue';

export default {
    name: 'DetailsView',
    data() {
        return {
            pokemon: null,
            imageUrl: '',
        }
    },
    mounted() {
        let route = useRoute()
        this.buscarDetalhesPokemon(route.params.id)
    },
    methods: {
        formatarTexto (texto) {
            return capitalize(texto)
        },
        async buscarDetalhesPokemon(id) {
             const api = axios.create({
                baseURL: 'https://pokeapi.co/api/v2/pokemon'
            })

            try {
                let resposta = await api.get(id)
                this.pokemon = resposta.data
                this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
            } catch (erro) {
                console.log(erro)
            }
        }
    }
}
</script>
<template>
    <div class="container text-center d-flex flex-column">
        <b-card v-if="pokemon">
            <h3 class="mb-3">{{ formatarTexto(pokemon.name) }}</h3>
            <b-img 
                :src="imageUrl"
                class="mb-3"
                style="width: 200px; max-height: 200px;"
            />
            <p><strong>Altura:</strong> {{ pokemon.height/10 }} m</p>
            <p><strong>Peso:</strong> {{ pokemon.weight/10 }} Kg</p>
            <p><strong>Tipo: </strong>
                <span v-for="(type_pokemon, index) in pokemon.types">
                    {{ formatarTexto(type_pokemon.type.name) }}<span v-if="index < pokemon.types.length - 1 ">, </span>
                </span>
            </p>
            <b-button @click="$router.back()">
                Voltar
            </b-button>
        </b-card>
    </div>

</template>