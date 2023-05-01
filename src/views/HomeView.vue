<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  router.push({ name: "characters", query: { page: 1 } });
});
</script>

<template>
  <div></div>
</template>
