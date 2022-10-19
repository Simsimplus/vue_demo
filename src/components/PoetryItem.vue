<script setup lang = "ts">
import axios, { type AxiosResponse } from 'axios';
import { computed, ref, watchEffect } from 'vue';
import { AtomSpinner } from 'epic-spinners'
import { Poetry, getRandomPoetry} from '../data/poetry'


var poetry = ref(
  new Poetry()
)
var poetryLoading = ref(true)
function fetchPoetry(){
  getRandomPoetry(
  (p)=>{
    poetry.value.content = p.content
    poetryLoading.value = false
  }
)
}
watchEffect(
  ()=>{
    if(poetryLoading.value){
      fetchPoetry()
    }
  }
)
fetchPoetry()
</script>
<template>
  <atom-spinner v-if="poetryLoading" :animation-duration="1000" :size="60" color="#ff1d5e" />
  <div @click = "poetryLoading = true" v-else v-for="item in poetry.content" >
    <p>{{item}}</p>
  </div>
</template>