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
    const route = useRoute()
    this.buscarDetalhesCard(route.params.id)
  },
  methods: {
    voltarLista() {
      this.$router.push('/')
    },

    async buscarDetalhesCard(id) {
      const api = axios.create({
        baseURL: "/api/api/one-piece/cards",
        headers: {
          "x-api-key": CONFIG.TOKEN,
        }
      })

      try {
        const response = await api.get(id)
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
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" alt="Logo">
    </a>
  </nav>

  <main class="d-flex align-items-center justify-content-center py-4">
    <div class="container text-center">

      <b-form-input class="mb-4 w-100 w-md-50 mx-auto" placeholder="Pesquisar..." />

      <div class="card p-4 mx-auto">
        <div v-if="OPCard" class="row w-100 m-0">

          <div
            class="col-12 col-md-4 d-flex flex-column justify-content-between align-items-center card-container-left mb-4 mb-md-0">
            <button class="btn btn-lg mb-3" @click="voltarLista()">Voltar</button>
            <div class="card-left-top">
              <img :src="imageUrl" :alt="OPCard.name" class="img-fluid">
            </div>
            <h1 class="mt-3">{{ OPCard.name }}</h1>
            <div class="card-left-bottom mt-2">
              <div id="card-family">
                <p>{{ OPCard.family }}</p>
              </div>
            </div>
          </div>

          <div class="d-none d-md-block card-divider"></div>

          <div class="col-12 col-md-7 ms-md-auto d-flex flex-column justify-content-between card-container-right">

            <div
              class="container-right-top d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
              <div class="card-status mb-3 mb-md-0">
                <img v-if="OPCard.attribute.name" :src="`https://wsrv.nl/?url=${OPCard.attribute.image}`" alt="" class="me-2">
                <img v-else src="../assets/undefinedType.png" alt="" class="me-2" width="18%">
                <h2 v-if="OPCard.attribute.name && OPCard.attribute.name !== '-'">{{ OPCard.attribute.name }}</h2>
                <h2 v-else>Indefinido</h2>
              </div>
              <div class="card-costs d-flex align-items-center justify-content-center">
                <div id="card-power" class="me-3">
                  <p v-if="OPCard.power && OPCard.power !== '-'">{{ OPCard.power }}</p>
                  <p v-else>Indefinido</p>
                </div>
                <div id="card-price">
                  <p>{{ OPCard.cost }}</p>
                </div>
              </div>
            </div>

            <div class="container-right-center text-center text-md-start mb-4">
              <p v-if="OPCard.ability && OPCard.ability !== '-'">{{ OPCard.ability }}</p>
              <p v-else style="font-size: 2rem;">Sem Descrição</p>
            </div>

            <div
              class="container-right-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div class="card-counter mb-3 mb-md-0">
                <img src="../assets/lightning.png" alt="Counter" class="me-2">
                <p v-if="OPCard.counter && OPCard.counter !== '-'" class="m-0">
                  <span>COUNTER + </span>{{ OPCard.counter }}
                </p>
                <p v-else class="m-0">Indefinido</p>
              </div>
              <div class="card-rarity">
                <p v-if="OPCard.rarity && OPCard.rarity !== '-'" class="m-0"><span>Raridade: </span>{{ OPCard.rarity }}
                </p>
                <p v-else class="m-0">Sem Raridade</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <b-pagination class="justify-content-center mt-4" />

    </div>
  </main>
</template>

<style scoped>
.navbar {
  padding: 15px;
  background-color: #000;
  height: 10vh;

  a img {
    width: 150px;
  }
}

main {
  min-height: calc(100vh - 10vh);
  height: auto;
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;

  .container {
    max-width: 1200px;
  }

  .card {
    background-image: url("../assets/backgroundCard.png");
    background-size: cover;
    border: 6px solid #ceb29e;
    border-radius: 15px;

    .card-container-left {
      button {
        background-color: #f0ceb7;
        width: 80%;
        font-size: 1.3rem;
        color: #8b796b;
        font-family: "Sancreek", serif;
        font-weight: 400;
        border: 3px solid #8b796b;
        height: 3.5rem;
        transition: transform 0.2s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: scale(1.05);
        }
      }

      h1 {
        font-size: clamp(1.8rem, 2.5vw, 3.2rem);
        text-align: center;
        color: #8b796b;
        font-family: "Sancreek", serif;
        font-weight: 400;
        word-break: break-word;
        line-height: 1.1;
      }

      #card-family {
        background: radial-gradient(circle, rgba(74, 73, 73, 1) 53%, rgba(0, 0, 0, 1) 100%);
        color: #fff;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 1.2rem;

        p {
          margin: 0;
        }
      }
    }

    .card-divider {
      margin-left: 3%;
      width: 2px;
      min-width: 2px;
      flex: 0 0 2px;
      background-color: #ceb29e;
      padding: 0;
    }

    .card-container-right {
      .card-status {
        display: flex;
        align-items: center;
        gap: 5%;

        h2 {
          margin: 0;
          font-size: 2rem;
          font-weight: 800;
        }
      }

      .card-costs {
        font-size: 1.8rem;
        font-weight: 500;

        #card-power,
        #card-price {
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, rgba(74, 73, 73, 1) 53%, rgba(0, 0, 0, 1) 100%);
          color: #fff;
        }

        #card-power {
          padding: 5px 15px;
          border-radius: 20px;

          p {
            margin: 0;
          }
        }

        #card-price {
          width: 50px;
          height: 50px;
          border-radius: 50%;

          p {
            margin: 0;
          }
        }
      }

      .container-right-center p {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 600;
      }

      .card-counter,
      .card-rarity {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: radial-gradient(circle, rgba(74, 73, 73, 1) 53%, rgba(0, 0, 0, 1) 100%);
        padding: 8px 20px;
        border-radius: 20px;

        img {
          width: 20px;
        }

        p {
          font-size: 1.1rem;
          font-weight: 600;
        }

        span {
          font-weight: 400;
        }
      }
    }
  }
}
</style>
