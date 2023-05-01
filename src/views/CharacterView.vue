<script setup lang="ts">
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import type { Character } from "@/lib/types";
import { getCharacter } from "@/lib/api";
const route = useRoute();

const { data } = useQuery<Character>({
  queryKey: ["character", route.params?.id],
  queryFn: () => getCharacter(route.params?.id as string)
});
</script>

<template>
  <main v-if="data">
    <h1 class="text-3xl text-white glow mb-4">{{ data.name }}</h1>
    <div class="flex items-start gap-x-4">
      <div>
        <img :src="data.image" :alt="data.name" />
      </div>

      <div>
        <ul class="text-white text-xl font-semibold">
          <li>Status: {{ data.status }}</li>
          <li>Gender: {{ data.gender }}</li>
          <li>Species: {{ data.species }}</li>
          <li>Origin: {{ data.origin.name }}</li>
          <li>Location: {{ data.location.name }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>
