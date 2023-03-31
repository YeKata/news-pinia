<template>
  <ul class="news-list">
    <li v-for="item in ListItems" :key="item.id" class="post">
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="item.domain">
            <a :href="item.url">{{ item.title }}</a>
            <small v-if="item.domain" class="link-text"
              >({{ item.domain }})
            </small>
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            <small>
              <a v-if="item.domain" class="link-text" :href="item.domain">
                ({{ item.domain }})
              </a>
            </small>
          </template>
        </p>
        <small v-if="item.user" class="link-text">
          by
          <router-link :to="`/user/${item.user}`" class="link-text">
            {{ item.user }}
          </router-link>
        </small>
        <small v-if="item.time_ago" class="link-text">
          {{ item.time_ago }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useNewsStore } from "@/store/news";
const store = useNewsStore();
const ListItems = store.list;
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
