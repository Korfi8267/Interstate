<template>
<nav class="md:hidden bg-gray-100 dark:bg-slate-800 sticky top-0 z-50 overflow-visible">
  <div class="w-full mx-auto px-2">
    <div class="justify-left items-center p-5 gap-8 flex flex-row">
      <img class="block dark:hidden justify-left rounded-full w-8 h-8" src="../assets/CoffeeCupDark.png">
      <img class="hidden dark:block justify-left rounded-full w-8 h-8" src="../assets/CoffeeCup.png">
      <div class="flex-grow"></div>
        <!-- Mobile NavBar Buttons -->

        <!-- Home -->
        <button class="md:hidden transition ease-in-out delay-50 hover:scale-105">
          <!-- Inactive -->
          <a v-show="$route.name!=='Home'" class="text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-6 h-6">
              <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
            </svg>
          </router-link></a>
          <!-- Active -->
          <a v-show="$route.name=='Home'" class="text-blue-600 dark:text-blue-400"><router-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-6 h-6">
              <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
            </svg>
          </router-link></a>
        </button>

        <!-- Portfolio -->
        <button class="md:hidden transition ease-in-out delay-50 hover:scale-105">
          <!-- Inactive -->
          <a v-show="$route.name!=='Portfolio'" class="text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/Portfolio">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-6 h-6">
              <path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path>
            </svg>
          </router-link></a>
          <!-- Active -->
          <a v-show="$route.name=='Portfolio'" class="text-blue-600 dark:text-blue-400"><router-link to="/Portfolio">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-6 h-6">
              <path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path>
            </svg>
          </router-link></a>
        </button>

        <!-- Packages -->
        <button class="md:hidden transition ease-in-out delay-50 hover:scale-105">
          <!-- Inactive -->
          <a v-show="$route.name!=='Packages'" class="text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/Packages">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-6 h-6">
              <path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"></path>
            </svg>
          </router-link></a>
          <!-- Active -->
          <a v-show="$route.name=='Packages'" class="text-blue-600 dark:text-blue-400"><router-link to="/Packages">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-6 h-6">
              <path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"></path>
            </svg>
          </router-link></a>
        </button>
      </div>
    </div>
</nav>

<nav class="hidden md:block bg-gray-100 dark:bg-slate-800 sticky top-0 z-50 overflow-visible">
  <div class="w-full mx-auto px-2">
    <div class="justify-left items-center p-5 gap-8 flex flex-row">
      <img class="block dark:hidden justify-left rounded-full w-8 h-8" src="../assets/CoffeeCupDark.png">
      <img class="hidden dark:block justify-left rounded-full w-8 h-8" src="../assets/CoffeeCup.png">
      <a class="font-semibold text-2xl text-slate-800 dark:text-white">Interstate</a>


    <!-- Desktop NavBar Buttons -->

      <!-- Home -->
      <a v-show="$route.name!=='Home'" class="transition ease-in-out delay-50 hover:scale-105 font-semibold text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/">Home</router-link></a>
        <a v-show="$route.name=='Home'" class="transition ease-in-out delay-50 hover:scale-105 font-semibold text-blue-600 dark:text-blue-400"><router-link to="/">Home</router-link></a>
      
      <!-- Portfolio -->
      <a v-show="$route.name!=='Portfolio'" class="transition ease-in-out delay-50 hover:scale-105 font-medium text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/Portfolio">Portfolio</router-link></a>
        <a v-show="$route.name=='Portfolio'" class="transition ease-in-out delay-50 hover:scale-105 font-medium text-blue-600 dark:text-blue-400"><router-link to="/Portfolio">Portfolio</router-link></a>
      
      <!-- Packages -->
      <a v-show="$route.name!=='Packages'" class="transition ease-in-out delay-50 hover:scale-105 font-medium text-slate-500 hover:text-gray-900 dark:hover:text-blue-200"><router-link to="/Packages">Packages</router-link></a>
        <a v-show="$route.name=='Packages'" class="transition ease-in-out delay-50 hover:scale-105 font-medium text-blue-600 dark:text-blue-400"><router-link to="/Packages">Packages</router-link></a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavHeader',
  props: {
    msg: String
  }
}
</script>
