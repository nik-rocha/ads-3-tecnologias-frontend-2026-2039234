<script>
</script>

<template>
    <!-- Carla que fez abaixo! -->
    <main>
        <img src="../assets/cachorrochupetao.jpg" alt="" width="400px" height="200px">
        <h1>Cachorro Chupetão</h1>
        <p>O cachorro chupetão é uma criatura mística lendária. Lendas dizem que sua chupeta guarda o maior poder do planeta. NUNCA tire a chupeta desse cachorro</p>
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jim+Nightshade&display=swap');

#app {
    background-image: url("https://static0.srcdn.com/wordpress/wp-content/uploads/2024/06/castles-in-minecraft.jpg?w=1600&h=900&fit=crop");
    /* background-color: #f6f7f9; */
    background-size: cover;
    width: 100vw;
    height: 100vh;
    font-family: "Jim Nightshade", cursive;
}

main {
    color: #fff;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40rem;
    height: 50rem;
    border: 4px solid #fff;
    border-radius: 20px;
    gap: 1rem;
    background-color: #000;

    h1 {
        font-size: 84px;
    }

    p {
        font-size: 34px;
    }

    img {
        border-radius: 20px;
        border: 4px solid #fff;
        transition: transform 0.1s ease-in-out
    }

    img:hover {
        transform: scale(10);
    }
}
</style>