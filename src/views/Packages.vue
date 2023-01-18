<template>
<div class="w-screen h-screen overflow-auto scroll-smooth touch-pan-y">
<div class="my-32"></div>

<!-- Latest Item -->
<div class="flex justify-center px-5">
  <div class="h-auto w-[370px] md:w-[680px] xl:max-w-full xl:w-[1158px] justify-left">
    <span class="font-semibold text-black dark:text-white text-3xl">Announcements</span>
  </div>
</div>
<div class="my-4"></div>

<div class="flex flex-col items-center justify-center px-6">
<div class="grow hidden"></div>
  <div class="flex-none box-border h-auto w-[370px] md:w-[680px] xl:max-w-full xl:w-[1158px] rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8 overflow-auto">
    <div class="flex flex-wrap flex-row justify-left gap-3">
      <span class="flex-none inline-block px-3 py-0.5 box-border h-auto w-auto rounded-full bg-blue-500 text-md text-white font-semibold">NEW</span> 
      <span class="grow inline-block font-semibold text-black dark:text-white text-xl">Website Beta</span>
      <span class="hidden md:block flex-none px-3 font-regular text-gray-500 dark:text-gray-400 text-xl">24 Oct. 2022</span>
    </div>
    <div class="my-2"></div>
      <span class="inline-block font-regular text-black dark:text-gray-400 text-lg">I'm happy to announce a public beta for my website, <span class="font-semibold dark:text-white">The Interstate</span>! As it's still in beta please feel free to send suggestions.</span>
    </div>
    <div class="grow hidden"></div>
</div>

<div class="my-16"></div>

<!-- Carousel -->
<div class="text-center font-regular text-blue-600 dark:text-blue-300">
  <span class="text-2xl">Carousel Here!</span><br/><span class="text-xl text-slate-500 dark:text-white">Showcases featured items.</span>
</div>

<div class="my-16"></div>

<div class="text-center text-slate-700 dark:text-slate-400 text-lg font-regular">...or view a list of older projects and photos.</div>
<div class="my-4"></div>

<!-- Item Grid -->
<div class="flex flex-row flex-wrap gap-y-7 px-3 gap-x-5 justify-center overflow-hidden">
  <div class="flex flex-col xl:flex-row flex-wrap gap-x-6 gap-y-7 justify-center items-center">
  <div class="bg-[url('../assets/greengrass.jpeg')] relative bg-cover bg-center box-border h-[240px] w-[370px] md:h-[200px] md:w-[330px] xl:h-[240px] xl:w-[370px] rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">
    <div class="absolute bottom-1 left-1 right-1 flex flex-row">
      <span class="flex-none rounded-md py-1.5 px-3 bg-gray-700/50 text-white font-semibold backdrop-blur-sm">Green Grass</span>
      <span class="grow"></span>
      <div class="rounded-md py-1.5 px-2 flex-none transition ease-in-out delay-50 hover:scale-105 bg-gray-700/50 text-white backdrop-blur-sm hover:text-black hover:bg-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 mt-0.5">
        <path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="bg-[url('../assets/greengrass2.jpeg')] relative bg-cover bg-center box-border h-[240px] w-[370px] md:h-[200px] md:w-[330px] xl:h-[240px] xl:w-[370px] rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">
    <div class="absolute bottom-1 left-1 right-1 flex flex-row">
      <span class="flex-none rounded-md py-1.5 px-3 bg-gray-700/50 text-white font-semibold backdrop-blur-sm">Green Grass</span>
      <span class="grow"></span>
      <div class="rounded-md py-1.5 px-2 flex-none transition ease-in-out delay-50 hover:scale-105 bg-gray-700/50 text-white backdrop-blur-sm hover:text-black hover:bg-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 mt-0.5">
        <path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="bg-[url('../assets/sunset.jpeg')] relative bg-cover bg-center box-border h-[240px] w-[370px] md:h-[200px] md:w-[330px] xl:h-[240px] xl:w-[370px] rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">
    <div class="absolute bottom-1 left-1 right-1 flex flex-row">
      <span class="flex-none rounded-md py-1.5 px-3 bg-gray-700/50 text-white font-semibold backdrop-blur-sm">Green Grass</span>
      <span class="grow"></span>
      <div class="rounded-md py-1.5 px-2 flex-none transition ease-in-out delay-50 hover:scale-105 bg-gray-700/50 text-white backdrop-blur-sm hover:text-black hover:bg-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 mt-0.5">
        <path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"/>
        </svg>
      </div>
    </div>
  </div>
  </div>

  <div class="flex flex-col xl:flex-row flex-wrap gap-x-6 gap-y-7 justify-center items-center">
  <div class="bg-[url('../assets/greengrass.jpeg')] relative bg-cover bg-center box-border h-[240px] w-[370px] md:h-[200px] md:w-[330px] xl:h-[240px] xl:w-[370px] rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">
    <div class="absolute bottom-1 left-1 right-1 flex flex-row">
      <span class="flex-none rounded-md py-1.5 px-3 bg-gray-700/50 text-white font-semibold backdrop-blur-sm">Green Grass</span>
      <span class="grow"></span>
      <div class="rounded-md py-1.5 px-2 flex-none transition ease-in-out delay-50 hover:scale-105 bg-gray-700/50 text-white backdrop-blur-sm hover:text-black hover:bg-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 mt-0.5">
        <path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="bg-[url('../assets/greengrass2.jpeg')] relative bg-cover bg-center box-border h-[240px] w-[370px] md:h-[200px] md:w-[330px] xl:h-[240px] xl:w-[370px] rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">
    <div class="absolute bottom-1 left-1 right-1 flex flex-row">
      <span class="flex-none rounded-md py-1.5 px-3 bg-gray-700/50 text-white font-semibold backdrop-blur-sm">Green Grass</span>
      <span class="grow"></span>
      <div class="rounded-md py-1.5 px-2 flex-none transition ease-in-out delay-50 hover:scale-105 bg-gray-700/50 text-white backdrop-blur-sm hover:text-black hover:bg-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 mt-0.5">
        <path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="bg-[url('../assets/sunset.jpeg')] relative bg-cover bg-center box-border h-[240px] w-[370px] md:h-[200px] md:w-[330px] xl:h-[240px] xl:w-[370px] rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 p-8">
    <div class="absolute bottom-1 left-1 right-1 flex flex-row">
      <span class="flex-none rounded-md py-1.5 px-3 bg-gray-700/50 text-white font-semibold backdrop-blur-sm">Green Grass</span>
      <span class="grow"></span>
      <div class="rounded-md py-1.5 px-2 flex-none transition ease-in-out delay-50 hover:scale-105 bg-gray-700/50 text-white backdrop-blur-sm hover:text-black hover:bg-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 mt-0.5">
        <path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"/>
        </svg>
      </div>
    </div>
  </div>
  </div>
</div><br/>
<div class="text-center text-slate-700 dark:text-slate-300 text-lg font-regular">This will often be updated with new content.</div>
<div class="text-center text-blue-300 text-lg font-medium">Check back every now and then.</div>

<div class="my-16"></div>

<div class="text-center font-regular text-blue-600 dark:text-blue-300">
  <span class="text-lg">Designed by <a class="font-medium text-slate-500 dark:text-white">Korfi</a> in Oklahoma</span>
</div>
<div class="my-12"></div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/0VxoWT0MyLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


</div>
</template>
<script>
  
export default {
  name: 'app',
  components: {
  }
}
</script>