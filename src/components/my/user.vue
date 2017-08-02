<template>
  <div class="header_box">
    <div class="header_box_child" @click="json_data.state ? $router.push('/security') : $router.push('/login')">
      <img src="../../../static/images/my/header.png" v-if='!header_bv'>
      <img :src="header_portrait" v-if='header_bv'>
      <p>
        <span>{{json_data.name}}</span>
        <span class="header_box_number"><i class="iconfont" v-if="json_data.state">&#xe649;</i>{{json_data.number}}</span>
        <i class="iconfont right_arrow">&#xe623;</i>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header_box {
  width: 100%;
  height: 5.0rem;
  overflow: hidden;
  background-color: #2395ff;
}

.header_box_child {
  width: 100%;
  height: 3.25rem;
  margin-top: 0.5rem;
  padding-left: 0.75rem;
  text-align: left;
  img {
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
    display: inline-block;
  }
  p {
    width: 11rem;
    height: 1.85rem;
    top: 0.85rem;
    left: 0.85rem;
    vertical-align: top;
    display: inline-block;
  }
  p span {
    font-size: 0.75rem;
    margin-bottom: 0.15rem;
    display: block;
    color: white;
  }
}

.right_arrow {
  font-size: 0.7rem;
  position: absolute;
  top: 0.8rem;
  right: 0.75rem;
  color: white;
}

.header_box_number,
.header_box_number i {
  font-size: 0.57rem !important;
}

</style>
<script type="text/babel">
import { getData, getSessionStorage } from '@/config/common'
export default {
  mounted: function() {
    if (getData()) {
      this.json_data = getData()
      if (this.json_data.number === null) {
        this.json_data.number = '未绑定手机'
      }
      if (this.json_data.head_portrait !== null) {
        this.header_portrait = this.json_data.head_portrait
        this.header_bv = true
      }
    }
  },
  data() {
    return {
      header_portrait: '',
      json_data: { name: '立即登录', number: '登录后可享受更多特权' },
      header_bv: false
    }
  },
  methods: {
    filterNumber: function(number) {
      return number.slice(0, 3) + '****' + number.slice(7, 11)
    },
    jump: function() {

    }
  }
}

</script>
