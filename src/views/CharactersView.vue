<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { getAllCharacters } from "@/lib/api";
import type { Character, APIData } from "@/lib/types";
import BasePagination from "@/components/BasePagination.vue";

const route = useRoute();
const router = useRouter();
const page = Number(route.query?.page ?? 1);

const { data } = useQuery<APIData<Character>>({
  queryKey: ["characters", page],
  queryFn: () => getAllCharacters(page)
});

const goToPreviousPage = () => {
  router.push({ name: "characters", query: { page: page - 1 } });
};

const goToNextPage = () => {
  router.push({ name: "characters", query: { page: page + 1 } });
};
</script>

<template>
  <main>
    <h1 class="mb-4 text-3xl text-white glow">Characters</h1>

    <div class="grid grid-cols-3 gap-4 mb-4">
      <template v-if="data?.results">
        <template v-for="character in data.results" :key="character.id">
          <RouterLink :to="{ name: 'character', params: { id: character.id } }">
            <div>
              <p class="text-lg text-white glow">{{ character.name }}</p>
              <img :src="character.image" :alt="character.name" class="rounded-lg" />
            </div>
          </RouterLink>
        </template>
      </template>
    </div>

    <BasePagination
      :currentPage="page"
      :pages="data?.info.pages"
      @goToPreviousPage="goToPreviousPage"
      @goToNextPage="goToNextPage"
    />
  </main>
</template>
