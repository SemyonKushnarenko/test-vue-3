<script setup>
import HeroList from './components/Heroes/HeroList.vue'
import Search from './components/Search/Search.vue'
import Pagination from './components/Pagination/Pagination.vue'
import RNMService from './services/RNMService'
import { onMounted, ref } from 'vue'

const rnmService = new RNMService()

const heroes = ref([])
const pagesCount = ref(1)
const nameString = ref('')
const statusString = ref('')
const errorMessage = ref('')
const submittedStrings = ref({
  name: '',
  status: '',
})

const getCharacters = async (page = 1, name = '', status = '') => {
  const res = await rnmService.getCharacters(page, name, status)
  if (!res.error) {
    heroes.value = res.results
    pagesCount.value = res.info.pages
    errorMessage.value = ''
  } else {
    pagesCount.value = 0
    heroes.value = []
    errorMessage.value = res.error
  }
}

onMounted(async () => {
  await getCharacters();
})

function changeName(name) {
  nameString.value = name
}

function changeStatus(status) {
  statusString.value = status
}

async function submit() {
  submittedStrings.value.name = nameString.value
  submittedStrings.value.status = statusString.value
  await getCharacters(
    1,
    submittedStrings.value.name,
    submittedStrings.value.status,
  );
}

async function changePage(page) {
  await getCharacters(
    page,
    submittedStrings.value.name,
    submittedStrings.value.status,
  );
}

</script>

<template>
  <Search title="name" @changeSearch="changeName" />
  <Search title="status" @changeSearch="changeStatus" />
  <button @click="submit">Применить</button>
  <main>
    <HeroList :heroes="heroes" :errorMessage="errorMessage" />
  </main>
  <Pagination :pagesCount="pagesCount" @changePage="changePage" />
</template>

<style scoped>
main {
  line-height: 1.5;
}
</style>
