<script setup lang="ts">
import {useRoute} from "vue-router";
import {useNewsStore} from "../store/newsStore.ts";
import {onMounted} from "vue";

  const router = useRoute();
  const id = router.params.id;
  const newsStore = useNewsStore();
  onMounted(async () => {
      await newsStore.getById(Number(id))
  })
</script>

<template>
  <article class="news-article mt-[20px]">
    <img :src="newsStore.news?.image" :alt="newsStore.news?.alt" />
    <h2>{{newsStore.news?.name}}</h2>
    <div class="meta">Опубликовано: {{newsStore.news?.datePublish}}| Автор: {{newsStore.news?.author}}</div>
    <p>{{newsStore.news?.description}}</p>
  </article>
</template>

<style scoped>
.news-article img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
}

.news-article h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary);
}

.news-article .meta {
  font-size: 0.9rem;
  color: var(--gray);
  margin-bottom: 30px;
  font-style: italic;
}

.news-article p {
  font-size: 1.15rem;
  color: var(--dark);
  margin-bottom: 20px;
  text-align: justify;
}
</style>