<template>
  <div class="new_user">
    <p class="header">
      <i class="iconfont" @click='jump'>&#xe622;</i>
      <span>新用户专享福利</span>
    </p>
    <img src="../../../../../static/images/takeout/background.png">
    <ul class="shop_list">
      <li v-for="item in data" @click="$router.push('/shop')">
        <div style="margin-bottom: 0.65rem;">
          <div class="shop">
            <img :src="imgurls+item.url">
          </div>
          <div class="shop_content">
            <p class="one">
              <span>{{item.title}}</span>
              <em>蜂鸟专送</em>
            </p>
            <p class="two">
              <span>￥{{item.price1}}元起&nbsp/&nbsp送费￥{{item.price2}}元&nbsp/&nbsp评价<em>{{item.score}}</em>分</span>
              <span></span>
            </p>
            <p class="three">
              <em>新</em> 新用户下单立减17元
            </p>
          </div>
        </div>
        <div class="commodity_container">
          <ul class="commodity_list">
            <li v-for='child_item in item.child'>
              <img :src="imgurls+child_item.url">
              <strong>{{child_item.title}}</strong>
              <span>￥{{child_item.price}}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    </li>
    </ul>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow: hidden;
  text-align: left;
  background-color: #102662;
  i {
    width: 1.45rem;
    height: 1.45rem;
    padding-top: 0.25rem;
    z-index: 10;
    position: relative;
  }
  span {
    width: 100%;
    height: 100%;
    left: 0rem;
    text-align: center;
    color: white;
    position: absolute;
  }
}

.new_user img {
  width: 100%;
  height: 15.3rem;
}

.shop_list {
  text-align: left;
}

.shop_list>li {
  width: 100%;
  height: 11.35rem;
  padding-left: 0.5rem;
  padding-top: 0.65rem;
  margin-top: 0.5rem;
  background-color: white;
}

.shop {
  width: 100%;
  height: 2.85rem;
  img {
    width: 2.85rem;
    height: 2.85rem;
  }
}

.shop_content {
  width: 12.25rem;
  height: 2.85rem;
  right: 0.0rem;
  top: 0rem;
  position: absolute;
  p {
    text-align: left;
    padding-left: 0.5rem;
  }
}

.shop_content>p:nth-child(3) {
  bottom: 0.0rem;
  position: absolute;
}

.one span {
  width: 6.0rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
  font-weight: bold;
  text-align: left;
  font-size: 0.75rem;
  color: black;
}

.one em {
  font-size: 0.5rem;
  color: white;
  margin-left: 2.5rem;
  vertical-align: middle;
  padding: 0.1rem;
  border-radius: 0.1rem;
  background-color: #2697ff
}

.two {
  margin-top: .12rem;
  em {
    color: red;
  }
  span {
    font-size: 0.5rem;
    color: #999999;
  }
}

.three {
  font-size: 0.5rem;
}

.three>em {
  padding: 0.15rem;
  border-radius: 0.15rem;
  color: white;
  background-color: #68b83b;
}

.commodity_list {
  height: 6.95rem;
  white-space: nowrap;
  li {
    width: 4.55rem;
    height: 6.95rem;
    margin-right: 0.35rem;
    text-align: left;
    overflow: hidden;
    position: static;
    float: none;
    display: inline-block;
  }
}

.commodity_container {
  width: 15.5rem;
  height: 6.95rem;
  overflow: scroll;
}

.commodity_list {
  white-space: nowrap;
  font-size: 0.0rem;
  img {
    width: 4.55rem;
    height: 4.55rem;
  }
  strong,
  span {
    font-size: 0.5rem;
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
    font-weight: bold;
  }
  span {
    display: block;
    color: red;
  }
}

.commodity_container::-webkit-scrollbar {
  width: 0;
  height: 0
}

.router {
  position: absolute;
  width: 100%;
  transition: all 1.8s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
}

</style>
<script type="text/babel">
import { imgurls } from '@/config/address'
import main_loading from '@/components/common/main_loading'
export default {
  data() {
    return {
      imgurls: imgurls,
      data: [],
      showLoading: true,
      transitionName: 'slide-left'
    }
  },
  methods: {
    jump() {
      this.$router.go(-1)
    }
  },
  created: function() {
    this.$http({
      methods: 'GET',
      url: 'new_user.php'
    }).then((res) => {
      this.showLoading = false
      this.data = res.data
    }, (err) => {
      console.log(err)
    })
  },
  mounted: function() {
    document.body.scrollTop = 0
  },
  components: {
    myMainloading: main_loading
  }
}

</script>
