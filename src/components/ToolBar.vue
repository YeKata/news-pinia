<template>
  <div ref="appHeader" class="header" :class="{ fixed: isFixed }">
    <img src="../assets/logo.svg" alt="logo" class="logo" />
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isFixed = ref(false);
const appHeader = ref();
</script>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 8px 8px 8px 25px;
  display: flex;
  align-items: center;
}
.header a:visited {
  color: white;
}
.header a:active {
  color: #35495e;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 999;
}
.logo {
  width: 30px;
  margin-right: 18px;
}
a {
  margin: 0 5px;
}
</style>
