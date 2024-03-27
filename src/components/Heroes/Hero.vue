<script setup>
defineProps({
  hero: Object,
})
</script>

<template>
    <div>
        <img :src="hero.image" :alt="hero.name" />
        <p>{{ hero.name }}</p>
    </div>
</template>