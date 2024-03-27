<script setup>
import Hero from "./Hero.vue"
defineProps({
  heroes: Array,
  errorMessage: String
})
</script>

<template>
    <div class="heroes" v-if="heroes.length && !errorMessage">
        <Hero
            v-for="hero in heroes"
            :key="hero.id"
            :hero="hero"
        />
    </div>
    <p v-else>{{ errorMessage }}</p>
</template>

<style scoped>
.heroes {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    border: 1px solid #fff;
}
</style>