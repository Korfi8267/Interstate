<template>
<nav-header/>
<div class="w-screen h-screen bg-white dark:bg-slate-900 overflow-auto scroll-smooth touch-pan-y">

  <div class="my-16"></div>

<div class="text-center">
  <img class="mx-auto align-center rounded-full w-32 h-32 transition ease-in-out bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800" src="../assets/mii2.png" />
  <div class="my-5"></div>
  <span class="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">You're... Early.</span>
  <div class="my-4"></div>
  <span class="text-xl font-medium text-black dark:text-white">This page isn't done yet. Check back later.</span>
</div><br/>

<div class="text-center font-regular text-blue-600 dark:text-blue-300">
  <span class="text-lg">Designed by <a class="font-medium text-slate-500 dark:text-white">Korfi</a> in Oklahoma</span>
</div>

</div>
</template>
<script>
import NavHeader from '@/components/NavHeader.vue'
  
  export default {
    name: 'app',
    components: {
        NavHeader
    }
  }
  </script>