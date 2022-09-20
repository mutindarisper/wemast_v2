<template>
  <div id="app" class="app">

    <div class="navbar">
       <Navbar />
    </div>

  </div>
  
  
  
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<style scoped>
  .app{
    height: 100vh;
    width: 100vw;
  }
  .navbar{
    position: absolute;
    top: 3vh;
    left: -18vw;
  }

</style>
