<script lang="ts">
import axios from 'axios';
import { CONFIG } from '@/config/config.ts'
import { useRoute } from 'vue-router';

export default {
    name: "ListView",
    data() {
        return {
            OPCard: null,
            imageUrl: ''
        }
    },
    mounted() {
        let route = useRoute()
        this.buscarDetalhesCard(route.params.id)
    },
    methods: {
        async buscarDetalhesCard(id) {
            const api = axios.create({
                baseURL: "/api/api/one-piece/cards",
                headers: {  
                    "x-api-key": CONFIG.TOKEN,
                }
            })

            try {
                let response = await api.get(id)
                this.OPCard = response.data.data
                this.imageUrl = `https://wsrv.nl/?url=https://en.onepiece-cardgame.com/images/cardlist/card/${id}.png?241220`
                console.log(this.OPCard)
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
  <main class="d-flex align-items-center justify-content-center">
        <div class="container text-center">
            
            <b-form-input
            class="mb-4 w-50 mx-auto"
            placeholder="Pesquisar..."
            />
            
            <div class="card d-flex flex-row align-items-center justify-content-center p-4 mx-auto">
                <div v-if="OPCard" class="card-container-left">
                    <div class="card-left-top">
                        <img :src="imageUrl" :alt="OPCard.name">
                        <h1>{{ OPCard.name }}</h1>
                    </div>
                </div>
                <div v-if="OPCard" class="card-container-right">
                    <div class="container-right-top">
                        <div class="card-status">
                            <img :src="`https://wsrv.nl/?url=${OPCard.attribute.image}`" alt="">
                            <h2>{{ OPCard.attribute.name }}</h2>
                        </div>
                    </div>
                </div>
            </div>

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 10vh);
    background-image: url("../assets/background.png");
    background-size: cover;
    background-position: center;

    .container {
        width: 50%;
        height: 80%;
        padding-bottom: 20px;

        .card { 
            width: 100%;
            height: 100%;
            background-image: url("../assets/backgroundCard.png");
            background-size: cover;
            border: 6px solid #ceb29e;

        .card-container-left {
            width: 30%;

            .card-left-top {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10%;
                flex-direction: column;

                img {
                    width: 100%;
                    margin-bottom: 18%;
                }

                h1 {
                    margin-top: 5%;
                    font-size: 4rem;
                    color: #8b796b;
                    font-family: "Sancreek", serif;
                    font-weight: 400;
                }
            }
        }

        .card-container-right {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 70%;

            .card-status {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8%;

                h2 {
                    font-size: 2.2rem;
                    font-weight: 800;
                }
            }
        }
    }
  }
}
</style>