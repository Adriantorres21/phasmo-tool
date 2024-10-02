<template>
  <div class="default-container-1">
    <NavBar/>
    <div class="contenido">
      <RouterView></RouterView>
    </div>    
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"

export default {
  components:{ NavBar },
};
</script>

<style scoped>
.default-container-1 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(22, 21, 21, 0.464);
}
</style>