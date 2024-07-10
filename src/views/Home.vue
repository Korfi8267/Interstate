<template>
<div class="bg-white dark:bg-neutral-900 scroll-smooth overflow-auto pb-24 md:pb-0">
<div class="my-24"></div>

<div class="flex flex-col items-center justify-center px-7 md:px-2">
  <div class="w-48 h-48 rounded-full bg-blue-500"></div>
  <span class=" pt-12 font-black text-6xl text-black dark:text-white">Welcome.</span>
  <span class="text-center pt-4 max-w-[480px] font-medium text-xl text-gray-600 dark:text-neutral-400">This is my personal website, proudly coded from scratch in Vue & Tailwind. Here, you can learn who I am, & check out my work, & contact me if need be.</span>
</div>

<div class="my-12 md:my-24"/>

<div class="flex flex-row items-center justify-center px-7 md:px-20">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-black dark:text-white">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
</svg>
  <div class="mx-1"/>
  <div class="flex-grow max-w-[1199px] text-2xl font-semibold text-black dark:text-white">
    About Me
  </div>
</div>
<div class="flex flex-row px-7 md:px-20 justify-center">
  <div class="flex-grow max-w-[1230px] text-lg font-medium text-slate-600 dark:text-neutral-400">
      I am Mac, otherwise known as Korfi online.
      <div class="my-3"/> 
      I am a graphic designer and amatuer photographer and media editor from Oklahoma. I am a graduate from a
      Multimedia class where I learned image, audio and video editing, coding, graphical design and more. 
      <div class="my-3"/>
      I have roughly <a class="text-gray-800 dark:text-gray-300 font-semibold">2 1/2 years</a> 
      of experience designing software concepts. I alays love to tinker with design & technology, as
      well as experiment with new ideas pushing the limits of the software & hardware we have today.
    </div>
</div>

<div class="my-10"/>

<div class="flex flex-row items-center justify-center px-7 md:px-20">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-black dark:text-white">
  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
  <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>
  <div class="mx-1"/>
  <div class="flex-grow max-w-[1199px] text-2xl font-semibold text-black dark:text-white">My Projects
  </div>
</div>
<div class="flex flex-row px-7 md:px-20 justify-center">
  <div class="flex-grow max-w-[1230px] text-lg font-medium text-slate-600 dark:text-neutral-400">
      My most notable project is <a class="font-semibold text-black dark:text-gray-300">iOffice</a>.
      <div class="my-3"/>
      However I have created a multitude of other projects, usually revolving around designs
      and concepts. Most revolve around Apple's iOS, iPadOS and macOS softwares respectively.
      <div class="my-3"/>
      I have also collaborated with a multitude of designers and developers, including 
      <a class="font-semibold text-gray-800 dark:text-gray-300">llsc12, Paras KCD, and more.</a>
      Special thanks to everyone who helped get me this far!
    </div>
</div>

<div class="flex flex-row items-center justify-left px-7 md:px-20">
<ul role="list" class="marker:text-lg marker:text-blue-500 marker:dark:text-blue-700 list-disc pl-5 space-y-3 text-gray-400">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
</div>
<div class="max-w-lg mx-auto p-8">
  <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
    <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
      Why do they call it Ovaltine?
    </summary>
    <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
      <p>The mug is round. The jar is round. They should call it Roundtine.</p>
    </div>
  </details>
</div>

<div class="my-32"/>

<div class="text-center font-regular text-blue-400 dark:text-slate-500">
  <span class="text-lg">Created by <a class="font-medium text-blue-600 dark:text-white">Korfi</a> in Oklahoma</span>
</div>

<div class="pt-2 text-center font-regular text-gray-400 dark:text-slate-500/70">
  <span class="text-sm">Copyright <a class="font-bold text-gray-600 dark:text-slate-200/50">Korfi, 2023-2024</a>. All rights reserved.</span>
</div>

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