<template>
  
<div class="w-screen h-screen bg-white dark:bg-slate-900 overflow-auto scroll-smooth">

<nav class="bg-gray-100 dark:bg-slate-800 shadow-md sticky top-0">
  <div class="max-w-7xl mx-auto px-2">
    <div class="justify-left items-center p-5 gap-8 flex flex-row">
      <button type="button" class="sm:hidden items-center justify-center rounded-md transition ease-in-out delay-50 hover:scale-105 text-slate-500 hover:text-gray-900 dark:hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg class="hidden h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img class="hidden sm:block rounded-full w-8 h-8" src="./assets/mii2.png" />
      <a class="font-semibold text-2xl text-slate-800 dark:text-white">Interstate</a>
      <a class="hidden sm:block transition ease-in-out delay-50 hover:scale-105 font-semibold text-blue-600 dark:text-blue-400">Home</a>
      <a class="hidden sm:block transition ease-in-out delay-50 hover:scale-105 font-medium text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/portfolio">Portfolio</router-link></a>
      <a class="hidden sm:block transition ease-in-out delay-50 hover:scale-105 font-medium text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/packages">Packages</router-link></a>
    </div>
  </div>
  <router-view/>
</nav>
<div class="my-16"></div>

<div class="text-center">
  <img class="mx-auto align-center rounded-full w-32 h-32 transition ease-in-out delay-50 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800" src="./assets/mii2.png" />
  <div class="my-5"></div>
  <span class="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello.</span>
  <div class="my-4"></div>
  <span class="text-xl font-medium text-black dark:text-white">I'm a designer and photographer at heart.</span>
</div><br/>


<div class="justify-center px-6 flex flex-row flex-wrap gap-6">
  <div class="box-border h-10 w-40 transition ease-in-out delay-50 hover:scale-105 bg-blue-600 dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-600 hover:shadow-lg rounded-md">
    <button class="transition ease-in-out delay-50 text-white mx-auto px-5 h-10 w-40">View my work</button>
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
<div class="flex flex-row justify-center">
  <iframe src="https://discord.com/widget?id=769801256025325569&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</div>

<div class="my-12"></div>

</div>
</template>
