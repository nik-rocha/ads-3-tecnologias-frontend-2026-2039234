<script lang="ts">
export default {
  name: 'OnePieceCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    verDetalhes() {
      if (this.card) {
        const id = this.card.id
        this.$router.push({ name: 'about', params: { id } })
        console.log(id)
      }

    }
  }
}
</script>

<template>
  <div class="card h-100">
    <img class="card-img-top" :src="`https://wsrv.nl/?url=${card.images.large}`" :alt="card.name">
    <div class="card-body text-center">
      <h5 class="card-title">{{ card.name }}</h5>
      <p v-if="card.ability !== '-'" class="card-text">
        {{ card.ability }}
      </p>
      <p v-else class="card-text">
        Sem Descrição
      </p>
      <button class="btn btn-lg" @click="verDetalhes()">Ver Mais</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sancreek&display=swap');

img {
  width: 80%;
}

.card {
  background-image: url("../assets/backgroundCard.png");
  background-size: cover;
  border: 6px solid #ceb29e;

  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card-body h5 {
    font-size: 2.2rem;
    color: #8b796b;
    font-family: "Sancreek", serif;
    font-weight: 400;
  }

  .card-body p {
    line-clamp: 3;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5%;
  }

  .card-body button {
    background-color: #f0ceb7;
    font-size: 1.5rem;
    color: #8b796b;
    font-family: "Sancreek", serif;
    font-weight: 400;
    border: 3px solid #8b796b;
    height: 3.5rem;
    margin-bottom: 30%;
    margin-top: auto;
    transition: transform 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.1)
    }
  }
}
</style>
