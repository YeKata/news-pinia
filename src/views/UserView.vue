<template>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :user-info="user">
      <template #userName>
        <div>{{ user.id }}</div>
      </template>
      <template #userKarma>
        <span>{{ user.karma }} karma</span>.
      </template>
    </user-profile>
  </div>
</template>

<script setup lang="ts">
import UserProfile from "@/components/UserProfile.vue";
import { useNewsStore } from "@/store/news";
import { computed } from "vue";

const store = useNewsStore();
const user = computed(() => {
  return store.user[0];
});
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>
