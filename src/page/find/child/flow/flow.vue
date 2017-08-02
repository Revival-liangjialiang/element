<template>
  <div>
    <div class="header_cover" id="header"></div>
    <div class="header_box">
      <div class="header_box_child">
        <i class="iconfont shoplist_icon" @click='$router.go(-1)'>&#xe622;</i>
        <span>&nbsp&nbsp联通饿卡</span>
      </div>
    </div>
    <div class="img">
      <img src="../../../../../static/images/find/flow1.png">
      <img src="../../../../../static/images/find/flow2.png">
      <img src="../../../../../static/images/find/flow3.png">
    </div>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.header_box {
  width: 100%;
  height: 2.5rem;
  top: 0.0rem;
  left: 0.0rem;
  overflow: hidden;
  background-color: transparent !important;
  position: fixed;
  z-index: 1;
}

.header_cover {
  width: 100%;
  height: 2.5rem;
  top: 0.0rem;
  left: 0.0rem;
  position: fixed;
  opacity: 0;
  z-index: 1;
  background-color: #2395ff;
}

.header_box_child {
  width: 100%;
  height: 0.85rem;
  top: 0.8rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  text-align: left;
  i {
    height: 0.7rem;
  }
  span {
    color: white;
  }
}

.img img {
  width: 100%;
}

</style>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
export default {
  data() {
    return {
      showLoading: true,
      transitionName: 'slide-left'
    }
  },
  components: {
    myMainloading: main_loading
  },
  beforeDestroy: function() {
    window.onscroll = null
  },
  mounted: function() {
    this.header = document.getElementById('header')
    window.onscroll = function() {
      var top = document.documentElement.scrollTop || document.body.scrollTop
      if (top === 0) {
        this.header.style.opacity = 0
      } else if (20 > top && top > 0) {
        this.header.style.opacity = 0
      } else if (30 > top && top > 20) {
        this.header.style.opacity = 0.1
      } else if (40 > top && top > 30) {
        this.header.style.opacity = 0.2
      } else if (50 > top && top > 40) {
        this.header.style.opacity = 0.3
      } else if (60 > top && top > 50) {
        this.header.style.opacity = 0.4
      } else if (70 > top && top > 60) {
        this.header.style.opacity = 0.5
      } else if (80 > top && top > 70) {
        this.header.style.opacity = 0.6
      } else if (90 > top && top > 80) {
        this.header.style.opacity = 0.7
      } else if (100 > top && top > 90) {
        this.header.style.opacity = 0.8
      } else if (110 > top && top > 100) {
        this.header.style.opacity = 0.9
      } else if (120 > top && top > 110) {
        this.header.style.opacity = 1
      } else if (top > 120) {
        this.header.style.opacity = 1
      }
    }
    setTimeout(() => {
      this.showLoading = false
    }, 1000)
  }
}

</script>
