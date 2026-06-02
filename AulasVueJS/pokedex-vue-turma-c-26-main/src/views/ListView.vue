<script lang="ts">
import axios from 'axios';
import PokemonCard from '@/components/PokemonCard.vue';

export default {
    name: "ListView",
    components: {
        PokemonCard
    },
    data() {
        return {
            pokemons: [],
            limit: 20,
            total: 0,
            page: 1,
            offset: 0,
            busca: ''
        }
    },
    mounted(){
        this.listarPokemons()
    },
    computed: {
        pokemonsFiltrados() {
            return this.busca 
            ? this.pokemons.filter(p => p.name.includes(this.busca.toLowerCase())) 
            : this.pokemons
        }
    },
    watch: {
        page(newPage) {
            this.offset = (newPage - 1) * this.limit
            this.listarPokemons()
        }
    },
    methods: {
        async listarPokemons() {
            const api = axios.create({
                baseURL: `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
            })

            try {
                let resposta = await api.get("")
                console.log(resposta)
                this.pokemons = resposta.data.results
                this.total = resposta.data.count
            } catch (erro) {
                console.log(erro)
            }
        }
    }
}
</script>
<template>
    <div class="d-flex container align-items-center flex-column">
        <b-form-input
            v-model="busca"
            placeholder="Busque um pokémon pelo nome"
            class="mb-3 w-50"
        />
        <b-row>
            <b-col class="mb-3" v-for="pokemon in pokemonsFiltrados" :key="pokemon.name">
                <PokemonCard :pokemon="pokemon"/>
            </b-col>
        </b-row>
        <b-pagination
            v-model="page"
            :total-rows="total"
            :per-page="limit"
        />
    </div>
</template>
