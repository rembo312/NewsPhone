<script setup lang="ts">
import {onMounted} from "vue";
import {useNavigationStore} from "../store/navigationStore.ts";

const navigationsStore = useNavigationStore();

onMounted(async () => {
  await navigationsStore.loadNavigation();
})
</script>

<template>
  <header
      class="bg-[rgba(15,23,42,0.85)] backdrop-blur-md text-white px-10 py-6 shadow-lg shadow-black/20">
    <div class="flex justify-between items-center flex-wrap gap-[20px] ">
      <h1 class="text-[2.2rem] font-[700] text-white whitespace-nowrap">
        <router-link to="/">TechNews</router-link>
      </h1>
      <nav>
        <ul class="flex gap-[20px] flex-wrap ">
          <li v-for="item in navigationsStore.navigation">
            <a :href="item.slug">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav ul::-webkit-scrollbar {
  display: none;
}

nav a {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: 0.3s;
  padding-bottom: 2px;
}

nav a:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>