<script setup lang="ts">
import {useRoute} from "vue-router";
import {useNewsStore} from "../store/newsStore.ts";
import {onMounted} from "vue";

const route = useRoute()
const type = route.params.type;
const newsStore = useNewsStore();

onMounted(async () => {
  await newsStore.getNewsByCategory(type.toString());
})
</script>

<template>
  <div class="news-grid mt-[20px]">
    <div class="card" v-for="(item,index) in newsStore.newsByCategory" :key="index">
      <img :src="item.image" :alt="item.alt">
      <div class="card-content">
        <h3>
          <RouterLink :to="'/news/' + item.id">{{item.name}}</RouterLink>
        </h3>
        <p>{{newsStore.truncateText(item.description,30)}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.card-content {
  padding: 16px;
}
.card h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #0f172a;
}
.card p {
  color: #475569;
  font-size: 0.95rem;
}
</style>