<script>
import Card from '@/components/Card.vue';

export default {
    name: 'exercicio2',
    components: {
        Card
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <Card/>
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