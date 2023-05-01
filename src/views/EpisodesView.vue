<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import type { APIData, Episode } from "@/lib/types";
import { getAllEpisodes } from "@/lib/api";
import BasePagination from "@/components/BasePagination.vue";

const route = useRoute();
const router = useRouter();
const page = Number(route.query?.page ?? 1);

const { data } = useQuery<APIData<Episode>>({
  queryKey: ["episodes", page],
  queryFn: () => getAllEpisodes(page)
});

const goToPreviousPage = () => {
  router.push({ name: "episodes", query: { page: page - 1 } });
};

const goToNextPage = () => {
  router.push({ name: "episodes", query: { page: page + 1 } });
};
</script>

<template>
  <main>
    <h1 class="mb-4 text-3xl text-white glow">Episodes</h1>

    <div class="grid grid-cols-3 gap-4 mb-4">
      <template v-if="data?.results">
        <template v-for="episode in data.results" :key="episode.id">
          <RouterLink
            :to="{ name: 'episode', params: { id: episode.id } }"
            class="px-3 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <p class="text-lg">{{ episode.name }}</p>
            <p class="text-sm font-light">{{ episode.episode }}</p>
          </RouterLink>
        </template>
      </template>
    </div>

    <template v-if="data?.info">
      <BasePagination
        :currentPage="page"
        :pages="data?.info.pages"
        @goToPreviousPage="goToPreviousPage"
        @goToNextPage="goToNextPage"
      />
    </template>
  </main>
</template>
