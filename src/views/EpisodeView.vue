<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import type { Episode } from "@/lib/types";
import { getEpisode } from "@/lib/api";

const route = useRoute();

const { data } = useQuery<Episode>({
  queryKey: ["episode", route.params?.id],
  queryFn: () => getEpisode(route.params?.id as string)
});

const characters = ref<string[]>([]);

watch(data, (newVal) => {
  if (newVal?.characters) {
    characters.value = newVal?.characters.map((character) => {
      const splitted = character.split("/");
      const indexOfCharacter = splitted.findIndex((item) => item === "character");
      splitted.splice(indexOfCharacter + 1, 0, "avatar");
      splitted[splitted.length - 1] = splitted[splitted.length - 1] + ".jpeg";
      return splitted.join("/");
    });
  }
});
</script>

<template>
  <main v-if="data">
    <h1 class="mb-4 text-3xl text-white glow">{{ data?.name }}</h1>
    <div class="flex items-center gap-x-2">
      <p class="text-white">{{ data.episode }}</p>
      <span class="text-white">-</span>
      <p class="text-white">{{ data.air_date }}</p>
    </div>

    <h2 class="mt-4 mb-1 text-3xl text-white glow">Characters in episode</h2>
    <div class="grid grid-cols-3 gap-4 mb-4">
      <template v-if="characters">
        <template v-for="character in characters" :key="character">
          <div>
            <img :src="character" alt="" class="rounded-lg" />
          </div>
        </template>
      </template>
    </div>
  </main>
</template>
