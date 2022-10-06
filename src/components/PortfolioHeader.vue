<template>
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
      <img class="hidden sm:block rounded-full w-8 h-8" src="../assets/mii2.png" />
      <a class="font-semibold text-2xl text-slate-800 dark:text-white">Interstate</a>
      <a class="hidden sm:block transition ease-in-out delay-50 hover:scale-105 font-semibold text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/">Home</router-link></a>
      <a class="hidden sm:block transition ease-in-out delay-50 hover:scale-105 font-medium text-blue-600 dark:text-blue-400"><router-link to="/portfolio">Portfolio</router-link></a>
      <a class="hidden sm:block transition ease-in-out delay-50 hover:scale-105 font-medium text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/packages">Packages</router-link></a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'PortfolioHeader',
  props: {
    msg: String
  }
}
</script>