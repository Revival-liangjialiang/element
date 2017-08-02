<template>
  <div class="red">
    <my-header :red="true"></my-header>
    <img src="../../../../../static/images/find/red1.png">
    <ul class="nav">
      <li class="line_right ver" @click="jump('/notice')">
        <img src="../../../../../static/images/find/red2.png" class="hor">
        <span>通知中心</span>
      </li>
      <li class="line_right ver" @click="jump('/package')">
        <img src="../../../../../static/images/find/red3.png" class="hor">
        <span>游戏礼包</span>
      </li>
      <li class="line_right ver" @click="jump('/classification')">
        <img src="../../../../../static/images/find/red4.png" class="hor">
        <span>分类</span>
      </li>
      <li class="ver" @click="jump('/redmy')">
        <img src="../../../../../static/images/find/red5.png" class="hor">
        <span>我的游戏</span>
      </li>
    </ul>
    <div class="game_box">
      <p class="title">吃货们都在玩</p>
      <ul class="game">
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
        <li>
          <img src="../../../../../static/images/find/red6.png">
          <div class="game_text">
            <p class="one">
              <em style="font-size: 0.75rem;font-weight: 600;">传奇世界</em>
              <span class="label" style="background-color: #f69826;">人气</span>
              <span class="label" style="background-color: #ff6000;">礼包</span>
            </p>
            <p class="two"><span class="ell" style="width: 6.5rem;vertical-align: bottom;color: #f58a07;">盛大正版授权，蝴蝶互动倾国倾城</span>
              <button>打开</button>
            </p>
            <p class="three">273万人在玩</p>
          </div>
        </li>
      </ul>
    </div>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.red {
  width: 16.0rem;
  img {
    width: 100%;
  }
}

.nav {
  width: 100%;
  height: 2.9rem;
  background-color: white;
  li {
    width: 25%;
    height: 2.2rem;
    box-sizing: border-box;
  }
  img {
    width: 1.15rem;
  }
}

.game_box {
  margin-top: 0.5rem;
  background-color: white;
}

.game {
  li {
    width: 100%;
    height: 3.85rem;
    padding-top: 0.25rem;
    float: none;
    text-align: left;
    padding-left: 0.5rem;
    border-bottom: 0.05rem solid #f5f5f5;
  }
  img {
    width: 2.8rem;
    display: inline-block;
    vertical-align: top;
  }
}

.game_text {
  padding-left: 0.5rem;
  display: inline-block;
  .one {
    text-align: left;
  }
  .two button {
    width: 3.6rem;
    height: 1.2rem;
    font-size: 0.6rem;
    border: 0.05rem solid #82bbf1;
    margin-left: 1.0rem;
    border-radius: 0.15rem;
    color: #6bafef;
  }
  .three {
  color: #999999;
}
}

.game_box .title {
  width: 100%;
  height: 2.0rem;
  line-height: 2.0rem;
  padding-left: 0.5rem;
  text-align: left;
}

</style>
<script type="text/babel">
import header from '@/components/common/header'
import main_loading from '@/components/common/main_loading'
export default {
  data() {
    return {
      showLoading: true,
      transitionName: 'slide-left'
    }
  },
  mounted: function() {
    document.body.scrollTop = 0
    setTimeout(() => {
      this.showLoading = false
    }, 1000)
  },
  components: {
    myHeader: header,
    myMainloading: main_loading
  },
  methods: {
    jump(path) {
      this.$router.push(path)
    }
  }
}

</script>
