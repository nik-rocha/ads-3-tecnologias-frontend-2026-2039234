<script lang="ts">
import { capitalize } from 'vue';

export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object
    },
    computed: {
         pokemonName() {
            if (this.pokemon) {
                // let name = this.pokemon.name
                // return name.charAt(0).toUpperCase() + name.slice(1)
                return capitalize(this.pokemon.name)
            } else {
                return ''
            }
         },
         imagemPokemon() {
            if (this.pokemon){
                let id = this.pokemon.url.split('/').filter(Boolean).pop()
                console.log(id)
                if (id <= 649) {
                    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
                } else {
                    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                }
                
            } else {
                return ''
            }
         }
    },
    methods: {
        verDetalhes() {
            if (this.pokemon) {
                let id = this.pokemon.url.split('/').filter(Boolean).pop()
                this.$router.push({name: 'pokemon-details', params: {id}})
                console.log(id)   
            }
            
        }
    }
}
</script>
<template>
    <b-card
        :title="pokemonName"
        class="text-center mb-3 card-pokedex"
    >
        <b-img
            :src="imagemPokemon"
            style="height: 100px;"
        />
        <b-button variant="primary" class="mt-1" @click="verDetalhes()">
            Ver Detalhes
        </b-button>
    </b-card>
</template>
<style>
.card-pokedex{
    width: 200px;
}
</style>    