<script lang="ts">
import axios from 'axios';
import { CONFIG } from '@/config/config.ts'
import OnePieceCard from '@/components/OnePieceCard.vue';

export default {
    name: "ListView",
    components: {
        OnePieceCard
    },
    data() {
        return {
            OPCards: [] as any[],
            limit: 20,
            total: 0,
            page: 1,
            offset: 0,
        }
    },
    mounted() {
        this.listOPCards()
    },
    methods: {
        async listOPCards() {
            const api = axios.create({
                baseURL: "/api/api/one-piece",
                headers: {  
                    "x-api-key": CONFIG.TOKEN,
                }
            })

            try {
                let response = await api.get("cards")
                console.log(response)
                this.OPCards = response.data.data
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<template>
  <nav class="navbar navbar-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="">
      </a>
    </nav>
  <main>
    <div class="container text-center">
        
        <b-form-input
            class="mb-4 w-50 mx-auto"
            placeholder="Pesquisar..."
        />
        
        <div class="row text-start">
            <div 
                class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" 
                v-for="card in OPCards" 
                :key="card.id"
            >
                <OnePieceCard :card="card" />
            </div>
        </div>

        <!-- <div class="row text-start">
            <div 
                class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" 
            >
                <OnePieceCard/>
            </div>
        </div> -->

        <b-pagination class="justify-content-center mt-3"/>
    </div>
  </main>
</template>

<style scoped>
  .navbar {
    padding: 15px;
    background-color: #000;
    height: 10vh;

    a {

      img {
        width: 15%;
      }
    }
  }

  main {
    width: 100%;
    height: 100%;
    background-image: url("../assets/background.png");
    background-size: cover;
    background-position: center;

    .container {
        padding-top: 5%;

        .card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 10%;
        }
    }
  }
</style>