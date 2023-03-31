<template>
  <div class="home">
    <section class="header-container">
      <UserProfile :user-info="items"></UserProfile>
    </section>
    <section>
      <h2>{{ items.title }}</h2>
      <div class="content" :html="items.content"></div>
    </section>
    <section>
      <h3>Comments</h3>
      <div v-for="item in items.comments" :key="item" class="content">
        <UserProfile :user-info="items"></UserProfile>
        <div :html="items.content"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import UserProfile from "@/components/UserProfile.vue";
import { useNewsStore } from "@/store/news";

const store = useNewsStore();
const items = store.item[0];
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
