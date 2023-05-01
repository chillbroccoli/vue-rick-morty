<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NAV } from "@/lib/constants";
</script>

<template>
  <header class="max-w-4xl mx-auto my-8">
    <nav>
      <ul class="flex items-center gap-x-3 text-white text-xl">
        <li v-for="item in NAV" :key="item.id" class="glow font-semibold">
          <RouterLink :to="item.href">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
