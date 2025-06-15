<script setup lang="ts">
  import {useNewsStore} from "../store/newsStore.ts";
  import {onMounted} from "vue";

  const newsStore = useNewsStore();

  onMounted(async () => {
     await newsStore.getMainNews();
     await newsStore.getRandomNews();
     await newsStore.getPopularNews();
  })



</script>

<template>
  <div class="max-w-[1300px] mx-auto my-10 px-5 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
    <div class="flex flex-col gap-10">
      <article class="bg-white p-6 rounded-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.06)] mb-10">
        <img
            :src="newsStore.newsMain?.image"
            alt="Galaxy S24 Ultra"
            class="w-full h-auto rounded-[12px] mb-5 object-cover"
        />
        <h2 class="text-[2rem] mb-2.5 text-[var(--primary)] font-semibold">
          <RouterLink :to="'/news/' + newsStore.newsMain?.id" >{{newsStore.newsMain?.name}}</RouterLink>
        </h2>
        <div class="text-[0.9rem] text-[var(--gray)] mb-5">Опубликовано: {{newsStore.newsMain?.datePublish}} | Автор: {{ newsStore.newsMain?.author}}</div>
        <p class="text-[1.1rem] mb-4 clamp">
          {{newsStore.newsMain?.description}}
        </p>
      </article>

      <section class="bg-white p-6 rounded-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.06)] mb-10">
        <h3 class="text-xl mb-5 text-[var(--primary)] font-semibold">Последние новости</h3>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
          <div
              class="bg-[var(--light)] p-4 rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]" v-for="(item,index) in newsStore.randomNews" :key="index"
          >
            <img
                :src="item.image"
                :alt="item.alt"
                class="w-full h-40 object-cover rounded mb-5"
            />
            <h4 class="text-lg mb-2.5 font-semibold">
              <RouterLink :to="'/news/' + item.id">{{item.name}}</RouterLink>
            </h4>
            <p class="text-sm text-[var(--gray)]">
              {{newsStore.truncateText(item.description,30)}}
            </p>
          </div>
        </div>
      </section>
    </div>

    <aside class="sticky top-24 hidden lg:block">
      <h3 class="text-xl mb-5 text-[var(--primary)] font-semibold">Популярное</h3>
      <ul class="list-none p-0 m-0">
        <li class="mb-4" v-for="(item,index) in newsStore.popularNews" :key="index">
          <RouterLink :to="'/news/' + item.id" class="text-[var(--dark)] no-underline transition-colors duration-300 hover:text-[var(--accent)]" >{{item.name}}</RouterLink>
        </li>
      </ul>
    </aside>
  </div>


</template>

<style scoped>
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 6; /* ≈2 абзаца */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>