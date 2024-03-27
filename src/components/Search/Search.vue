<script setup>
import { ref } from 'vue';

defineProps({
    title: String,
})

const searchString = ref('')
</script>

<template>
    <label :for="title">{{ title }}</label>
    <input :id="title" type="text" v-model="searchString" @input="$emit('changeSearch', searchString)">
</template>

<style scoped>
</style>