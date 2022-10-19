<script  setup lang="ts">
var onAboutClick = ()=>alert("this is about!")
</script>

<template>
  <div class="about">
    <h1 v-on:click="onAboutClick">This is an about page</h1>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
