<template>
<div class="w-screen h-screen bg-white dark:bg-slate-900 overflow-auto scroll-smooth touch-pan-y">
<div class="my-16"></div>

<div class="text-center">
  <img class="mx-auto align-center rounded-full w-32 h-32 transition ease-in-out delay-50 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800" src="../assets/mii2.png" />
  <div class="my-5"></div>
  <span class="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">You're... Early.</span>
  <div class="my-4"></div>
  <span class="text-xl font-medium text-black dark:text-white">This page isn't done yet. Check back later.</span>
</div><br/>

<div class="my-16"></div>

<!-- Carousel -->
<div class="text-center font-regular text-blue-600 dark:text-blue-300">
  <span class="text-2xl">Carousel Here!</span><br/><span class="text-xl text-slate-500 dark:text-white">Showcases featured items.</span>
</div>

<div class="my-16"></div>

<!-- Latest Item -->
<div class="flex flex-wrap flex-row justify-center gap-6 px-6">
  <div class="box-border h-auto w-auto max-w-6xl rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8 overflow-auto">
    <div class="flex flex-wrap flex-row justify-left gap-3">
      <span class="flex-none inline-block px-3 py-0.5 box-border h-auto w-auto rounded-full bg-red-500 text-md text-white font-semibold">Tag</span> 
      <span class="grow sm:block inline-block font-semibold text-black dark:text-white text-xl">Title Header</span><br class="hidden sm:block">
      <span class="hidden sm:block flex-none px-3 font-regular text-gray-500 dark:text-gray-400 text-xl">Date added</span>
    </div>
  <div class="my-2"></div>
    <span class="inline-block font-regular text-black dark:text-gray-400 text-lg">This box will host a new announcement regarding a project, such as a new theme or a concept. It'll showcase a custom tag, a title, the publication date, and a quick description.</span>
  </div>
</div><br/>

<div class="my-16"></div>

<!-- Item Grid -->
<div class="grid grid-cols-3 grid-rows-4 gap-y-8 gap-x-10 px-6">
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">01</div>
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">02</div>
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">03</div>
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">04</div>
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">05</div>
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">06</div> 
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">07</div> 
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">08</div> 
  <div class="box-border h-auto w-24 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">09</div> 

</div>

<div class="my-16"></div>

<div class="text-center font-regular text-blue-600 dark:text-blue-300">
  <span class="text-lg">Designed by <a class="font-medium text-slate-500 dark:text-white">Korfi</a> in Oklahoma</span>
</div>

</div>
</template>
<script>
  
export default {
  name: 'app',
  components: {
  }
}
</script>
  