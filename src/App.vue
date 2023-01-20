<template>
  <div class="bg-white dark:bg-slate-900 flex flex-col h-screen">
    <nav-header class=""/>
    <router-view class=""/>
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