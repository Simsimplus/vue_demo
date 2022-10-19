<script setup lang="ts">
import { reactive } from 'vue';
import axios from "axios"


const uiState = reactive({
  dynamicMsg: makeid(5)
})
function randomMsg() {
  uiState.dynamicMsg = makeid(5)
}
function makeid(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

function getRandomPoetry() {
  axios.get("http://192.168.29.114:8000/poetry/random").catch(
    (e) => alert(e)
  ).then(
    (r) => alert(JSON.stringify(r))
  )
}
defineProps<{
  msg: string;
}>();
</script>


<template>
  <div class="greetings">
    <h1 class="green" v-on:click="randomMsg">{{ msg.replace("you", uiState.dynamicMsg) }}</h1>
    <h3 @click="getRandomPoetry">
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
