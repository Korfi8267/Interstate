<template>
  <div class="bg-white dark:bg-slate-900">
  <nav-header/>
  <transition 
  mode="out-in" 
  enter-active-class="animate__animated animate__faster animate__fadeIn" 
  leave-active-class="animate__animated animate__slower animate__fadeOut">
    <router-view/>
  </transition>
</div>
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