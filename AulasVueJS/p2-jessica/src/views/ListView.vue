<script lang="ts">
import axios from 'axios';
import { CONFIG } from '@/config/config.ts'
import OnePieceCard from '@/components/OnePieceCard.vue'
import { BPagination } from 'bootstrap-vue-next'

export default {
  name: "ListView",
  components: {
    OnePieceCard,
    BPagination
  },
  data() {
    return {
      OPCards: [],
      limit: 12,
      total: 0,
      page: 1,
      search: ''
    }
  },
  mounted() {
    this.listOPCards()
  },
  watch: {
    page() {
      this.listOPCards()
    }
  },
  methods: {
    async listOPCards() {
      let url = `/api/api/one-piece/cards?limit=${this.limit}&page=${this.page}`

      if (this.search) {
        url += `&name=${this.search}`
      }

      const api = axios.create({
        baseURL: url,
        headers: {
          "x-api-key": CONFIG.TOKEN,
        }
      })

      try {
        const response = await api.get('')
        console.log(response)
        this.OPCards = response.data.data
        this.total = response.data.total
      } catch (e) {
        console.log(e)
      }
    },

    searchCard() {
      this.page = 1
      this.listOPCards()
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-light">
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" alt="">
    </a>
    <div class="input-group rounded">
      <input v-model="search" @keyup.enter="searchCard" type="search" class="form-control rounded text-light bg-transparent border-2" placeholder="Pesquisar" aria-label="Pesquisar"
        aria-describedby="search-addon" />
      <span class="input-group-text border-0 rounded" id="search-addon" @click="searchCard" style="cursor: pointer;">
        <font-awesome-icon icon="search"/>
      </span>
    </div>
  </nav>
  <main>
    <div class="container text-center">
      <div class="row text-start">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="card in OPCards" :key="card.id">
          <OnePieceCard :card="card" />
        </div>
      </div>
      <b-pagination v-model="page" :total-rows="total" :per-page="limit" size="lg" class="justify-content-center mt-3 mb-3 dark-pagination"/>
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

  .input-group {
    width: 50%;
    gap: 2%;

    .form-control::placeholder {
      color: #fff;
    }
  }
}

main {
  width: 100%;
  min-height: 90vh;
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding-bottom: 10px;

  .container {
    padding-top: 5%;

    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10%;
    }

    .dark-pagination {
      --bs-pagination-bg: #000000;
      --bs-pagination-color: #ffffff;
      --bs-pagination-border-color: #333333;
      --bs-pagination-hover-bg: #222222;
      --bs-pagination-hover-color: #ffffff;
      --bs-pagination-hover-border-color: #444444;
      --bs-pagination-active-bg: #c4c4c4;
      --bs-pagination-active-color: #000000;
      --bs-pagination-active-border-color: #ffffff;
      --bs-pagination-disabled-bg: #111111;
      --bs-pagination-disabled-color: #555555;
      --bs-pagination-disabled-border-color: #222222;
    }
  }
}
</style>
