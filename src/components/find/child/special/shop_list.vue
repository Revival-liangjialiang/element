<template>
  <div>
    <ul class="shop_list">
      <li v-for="(item,index) in data" :class="{active:index%2===1}" @click="$router.push('/shop')">
        <img src="../../../../../static/images/find/special.png">
        <p class="ell" style="width: 7.0rem;padding-left: 0.25rem; text-align:left;margin-top: 0.25rem;margin-bottom: 0.25rem;">哈尔滨啤酒600ml装</p>
        <p class="shop_list_text">
          <em>￥5</em>
          <span>￥6</span>
          <button>抢</button>
        </p>
      </li>
    </ul>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.shop_list {
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  li {
    width: 7.4rem;
    height: 11.35rem;
    background-color: white;
    img {
      width: 100%;
    }
  }
}

.shop_list .active {
  margin-left: 0.18rem;
}

.shop_list_text {
  padding-left: 0.25rem;
  text-align: left;
  em {
    font-size: 0.8rem;
    font-weight: bold;
    color: red;
  }
  span {
    font-size: 0.6rem;
    text-decoration: line-through;
    color: #999999;
  }
  button {
    right: 0.25rem;
    font-size: 0.6rem;
    padding: 0.25rem;
    background-color: red;
    position: absolute;
    color: white;
  }
}

</style>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
export default {
  data() {
    return {
      data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      showLoading: true,
      transitionName: 'slide-left'
    }
  },
  components: {
    myMainloading: main_loading
  },
  mounted: function() {
    document.body.scrollTop = 0
    setTimeout(() => {
      this.showLoading = false
    }, 1000)
  }
}

</script>
