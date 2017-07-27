<template>
  <div id="app">
   <transition :name="transitionName">
    <router-view class="router"></router-view>
     </transition>
  </div>
</template>
<style scoped>
	
</style>
<script type="text/babel">
export default{
  data(){
    return{
      transitionName:'slide-left'
    }
  }
}
</script>
