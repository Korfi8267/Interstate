<template>
  <div class="bg-white dark:bg-neutral-900 min-h-screen">
    <nav-header/>
    <transition 
      mode="out-in" 
      enter-active-class="animate__animated animate__faster animate__fadeIn" 
      leave-active-class="animate__animated animate__slower animate__fadeOut">
      <router-view/>
    </transition>
  </div>
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F3F4F6" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1e293b" />
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
  
export default {
  name: 'app',
  components: {
    NavHeader,
  }
}

</script>