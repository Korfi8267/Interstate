<template>
<div class="w-screen h-screen bg-white dark:bg-slate-900 overflow-auto scroll-smooth">
<div class="my-16"></div>

<div class="text-center">
  <img class="mx-auto align-center rounded-full w-32 h-32 transition ease-in-out delay-50 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800" src="../assets/mii2.png" />
  <div class="my-5"></div>
  <span class="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello.</span>
  <div class="my-4"></div>
  <span class="text-xl font-medium text-black dark:text-white">I'm a designer and photographer at heart.</span>
</div><br/>


<div class="justify-center px-6 flex flex-row flex-wrap gap-6">
  <div class="box-border h-10 w-40 transition ease-in-out delay-50 hover:scale-105 bg-blue-600 dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-600 hover:shadow-lg rounded-md">
    <button class="transition ease-in-out delay-50 text-white mx-auto px-5 h-10 w-40"><router-link to="/Portfolio">View my work</router-link></button>
  </div>

  <div class="box-border h-10 w-40 transition ease-in-out delay-50 hover:scale-105 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 hover:shadow-lg rounded-md">
    <button class="transition ease-in-out delay-50 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300 mx-auto px-5 h-10 w-40">Contact Me</button>
  </div>
</div><br/>

<div class="my-12"></div>

<div class="justify-center px-6 flex flex-row flex-wrap gap-6">
  <div class="box-border h-50 w-96 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8 overflow-auto">
    <span class="inline-block font-semibold text-black dark:text-white text-xl align-middle">About Me</span><br/>
    <span class="inline-block font-regular text-gray-500 dark:text-gray-400 text-lg">I am a self-taught graphical designer and photographer. My favorite hobbies include stargazing and playing video games of all kinds.</span>
  </div>

  <div class="box-border h-50 w-96 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8 overflow-auto">
    <span class="inline-block font-semibold text-black dark:text-white text-xl align-middle">My Work</span><br/>
    <span class="inline-block font-regular text-gray-500 dark:text-gray-400 text-lg">My work ranges from software designs such as Ontario, to icon packs such as iOffice, to a variety of photos I take on my adventures.</span>
  </div>

  <div class="box-border h-50 w-96 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">
    <span class="inline-block font-semibold text-black dark:text-white text-xl align-middle">My Plans</span><br/>
    <span class="inline-block font-regular text-gray-500 dark:text-gray-400 text-lg">I plan to go to school for two years part-time in a Multimedia class, where I will learn more about graphical design, web design & photography.</span>
  </div>
</div>

<div class="my-12"></div>

<div class="text-center font-regular text-blue-600 dark:text-blue-300">
  <span class="text-lg">Designed by <a class="font-medium text-slate-500 dark:text-white">Korfi</a> in Oklahoma</span>
</div><br/>


<div class="my-12"></div>

</div>
</template>

<script>
  
export default {
  name: 'app',
  components: {
  }
}
</script>