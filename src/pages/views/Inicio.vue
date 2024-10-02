<template>
  <div class="inicio-container">
    <h1>Phasmo - Guia</h1>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
h1 {
  padding-top: 50px;
  font-size: 25px;
  font-family: 'Arial Black', sans-serif;
  text-align: center;
  color: #FF9900; /* Naranja brillante */
  text-shadow: 0 0 10px #FF9900, 0 0 20px #FF9900, 0 0 30px #FF9900; /* Sombra naranja */
  animation: parpadeo 2s infinite;
}

@keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>