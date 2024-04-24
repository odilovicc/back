<template>
  <Navbar />
  <div class="px-5">
    <RouterView />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
</script>