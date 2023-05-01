<script setup lang="ts">
type Props = {
  currentPage: number;
  pages?: number;
};

type Emits = {
  (e: "goToPreviousPage"): void;
  (e: "goToNextPage"): void;
};

defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="flex justify-start flex-1 gap-x-2">
    <button
      class="cursor-pointer rounded-md border border-pink-400 bg-pink-800/90 py-1.5 px-3 text-gray-200 hover:bg-pink-800/70 disabled:cursor-not-allowed disabled:bg-pink-900"
      :disabled="currentPage === 1"
      @click="emit('goToPreviousPage')"
    >
      Previous
    </button>
    <button
      class="cursor-pointer rounded-md border border-pink-400 bg-pink-800/90 py-1.5 px-3 text-gray-200 hover:bg-pink-800/70 disabled:cursor-not-allowed disabled:bg-pink-900"
      :disabled="currentPage === pages"
      @click="emit('goToNextPage')"
    >
      Next
    </button>
  </div>
</template>
