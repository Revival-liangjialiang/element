<template>
  <div class="id">
    <my-header :activity='true' @share="switch_popup"></my-header>
    <div class="activity">
      <ul class="activity_nav">
        <li v-for='(item,index) in nav_data' @click="nav_sele(item,item.path)" :class="{active:current_nav===item||(index===0&&current_nav===null)}">{{item.title}}</li>
      </ul>
      <router-view @join="join"></router-view>
      <yd-popup v-model="share_show" position="bottom" height="35%">
        <div class="popup_box">
          <em>
            	分享到 
            </em>
          <p @touchstart="start_style('friend')" @touchend="end_style('friend')" id="friend">
            <img src="../../../../../static/images/find/friend.png">
            <span>朋友圈</span>
          </p>
          <p @touchstart="start_style('wechat')" @touchend="end_style('wechat')" id="wechat">
            <img src="../../../../../static/images/find/wechat.png">
            <span>微信</span>
          </p>
          <p @touchstart="start_style('qq')" @touchend="end_style('qq')" id="qq">
            <img src="../../../../../static/images/find/qq.png">
            <span>QQ</span>
          </p>
        </div>
      </yd-popup>
    </div>
    <yd-popup v-model="join_show" position="center" width="87%">
      <div class="join_box hor">
        <p class="one">参与说明</p>
        <p class="two hor">每次参与都可获得<em style="color: red;">1元无门槛红包</em>返还，并有机会获得当前霸王餐红包</p>
        <button class="three" @click="join_show = false; $router.push('/payment');">立即参加</button>
        <p class="four" @click="join_show = false">抢红包也不要</p>
      </div>
    </yd-popup>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.activity {
  width: 100%;
  height: 2.35rem;
  text-align: left;
  background-color: #0097ff;
}

.activity_nav {
  width: auto;
  height: 2.35rem;
  display: block;
  li {
    height: 2.1rem;
    line-height: 2.1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 1.0rem;
    color: white;
  }
  .active {
    border-bottom: 0.1rem solid white;
  }
}

.popup_box {
  width: 100%;
  height: 8.0rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  left: 0.0rem;
  bottom: 0.5rem;
  position: absolute;
  img {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
    vertical-align: middle;
    display: inline-block;
  }
  p {
    width: 100%;
    height: 2.15rem;
    line-height: 2.15rem;
  }
  span {
    vertical-align: middle;
  }
  em {
    margin-bottom: 0.5rem;
    display: inline-block;
  }
}

.join_box {
  width: 13.75rem;
  height: 9.0rem;
  .one {
    font-size: 0.7rem;
    margin-top: 0.6rem;
    color: black;
    font-weight: bold;
  }
  .two {
    width: 8.85rem;
    font-size: 0.6rem;
    margin-top: 0.6rem;
  }
  .three {
    width: 12.0rem;
    height: 1.9rem;
    margin-top: 0.6rem;
    border-radius: 0.15rem;
    color: white;
    background-color: #2395ff;
  }
  .four {
    font-size: 0.6rem;
    margin-top: 0.9rem;
    display: inline-block;
    color: #2395ff;
  }
}

</style>
<script type="text/babel">
import header from '@/components/common/header'
import main_loading from '@/components/common/main_loading'
export default {
  data() {
    return {
      nav_data: [{ title: '霸王餐', path: '/activity' }, { title: '霸王餐Plus', path: '/activity/overlord_plus' }],
      current_nav: null,
      share_show: false,
      join_show: false,
      showLoading: true,
      transitionName: 'slide-left'
    }
  },
  components: {
    myHeader: header,
    myMainloading: main_loading
  },
  methods: {
    nav_sele: function(item, path) {
      this.current_nav = item
      this.$router.push(path)
    },
    switch_popup: function() {
      this.share_show = true
    },
    start_style: function(id) {
      document.getElementById(id).style.backgroundColor = "rgba(0,0,0,0.1)"
    },
    end_style: function(id) {
      document.getElementById(id).style.backgroundColor = "white"
    },
    join: function() {
      this.join_show = true
    },
    close_popup: function() {

    }
  },
  mounted: function() {
    document.body.scrollTop = 0
    setTimeout(() => {
      this.showLoading = false
    }, 1000)
  }

}

</script>`
