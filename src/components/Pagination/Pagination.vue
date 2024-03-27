<script setup>
import { ref } from 'vue';

defineProps({
    pagesCount: String,
})
</script>

<template>
    <button
      v-for="page in pagesCount"
      :key="page"
      @click="$emit('changePage', page)"
    >{{ page }}</button>
</template>

<style scoped>
</style>