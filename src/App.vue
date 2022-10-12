<template>
  <nav-header/>
  <router-view></router-view>
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