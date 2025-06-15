<script setup lang="ts">


import Header from "./components/Header.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <div class="container mx-auto">
        <RouterView />
      </div>
    </main>
    <footer class="bg-[rgba(15,23,42,0.85)] text-center px-[40px] py-[20px] text-white text-[0.95rem]">
      &copy; 2025 TechNews — Все права защищены.
    </footer>
  </div>
</template>

<style scoped>





</style>
