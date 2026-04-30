<script lang="ts">
export default {
  name: 'exercicio1',

  data() {
    return {
      mensagem: 'Olá, Vue!',
    }
  },
  methods: {
    trocarTexto() {
      this.mensagem = "Você clicou no botão!"
    },
  },
}
</script>

<template>
  <h1 id="texto">{{ mensagem }}</h1>
  <button id="button_trocar" @click="trocarTexto">Trocar Texto</button>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

button {
  font-size: 1.2rem;
  width: 20rem;
  height: 3rem;
}

h1 {
  font-size: 68px;
}
</style>
