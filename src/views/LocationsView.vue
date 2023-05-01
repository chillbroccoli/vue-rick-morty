<script setup lang="ts">
import type { APIData, Location } from "@/lib/types";
import { useQuery } from "@tanstack/vue-query";
import { useRoute, useRouter } from "vue-router";
import { getAllLocations } from "@/lib/api";
import BasePagination from "@/components/BasePagination.vue";

const route = useRoute();
const router = useRouter();
const page = Number(route.query?.page ?? 1);

const { data } = useQuery<APIData<Location>>({
  queryKey: ["locations", page],
  queryFn: () => getAllLocations(page)
});

const goToPreviousPage = () => {
  router.push({ name: "locations", query: { page: page - 1 } });
};

const goToNextPage = () => {
  router.push({ name: "locations", query: { page: page + 1 } });
};
</script>

<template>
  <main>
    <h1 class="mb-4 text-3xl text-white glow">Locations</h1>

    <div class="grid grid-cols-3 gap-4 mb-4">
      <template v-if="data?.results">
        <template v-for="location in data.results" :key="location.id">
          <div class="px-3 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm">
            <p class="text-lg">Name: {{ location.name }}</p>
            <p class="text-sm font-light">Dimension: {{ location.dimension }}</p>
            <p class="text-sm font-light">Type: {{ location.type }}</p>
          </div>
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
