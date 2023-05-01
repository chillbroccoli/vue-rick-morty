<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import NavBar from "./components/NavBar.vue";

const route = useRoute();
</script>

<template>
  <div class="font-rubik">
    <NavBar />

    <div class="bg-pink-500/90 max-w-4xl mx-auto p-3 rounded-md shadow-lg mb-12">
      <RouterView :key="route.fullPath" />
    </div>
  </div>
</template>

<style>
.glow {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073,
    0 0 60px #e60073, 0 0 70px #e60073;
}
</style>
