<template>
  <div class="bnner_box">
    <yd-slider autoplay="">
      <yd-slider-item v-for='item in list'>
        <ul class="bnner_ul">
          <li v-for='child_item in item.child' :key='child_item.id' @click='jump("/shop_list")'>
            <img :src="imgurls+child_item.url" />
            <span>{{child_item.title}}</span>
          </li>
        </ul>
      </yd-slider-item>
    </yd-slider>
    <div class="bnner_child2">
      <img src="../../img/a_03.png" @click='jump("/new_user")'>
    </div>
  </div>
</template>
<style lang='scss'>
.bnner_box {
  padding-top: 0.5rem;
  background-color: white;
}

.slider-item {
  width: 100%;
  height: 7.85rem;
}

.bnner_ul {
  width: 16.0rem;
  height: 7.85rem;
  left: -0.5rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  li {
  width: 2.55rem;
  height: 3.9rem;
  margin-left: 1.35rem;
}
  span {
  font-size: 0.5rem;
}
}
.slider-pagination>.slider-pagination-item {
  width: 0.2rem;
  height: 0.2rem;
}

.bnner_child2 {
  width: 14.7rem;
  height: 3.25rem;
  margin: 0.8rem 0rem;
  display: inline-block;
img {
  width: 100%;
  height: 100%;
}
}
</style>
<script type="text/babel">
import { imgurls } from '@/config/address'
export default {
  data() {
    return {
      list: [{ child: [{ title: '美食', url: 'banner1.png' }, { title: '甜品饮品', url: 'banner2.png' }, { title: '商超便利', url: 'banner3.png' }, { title: '预定早餐', url: 'banner4.png' }, { title: '果蔬生鲜', url: 'banner5.png' }, { title: '新店特惠', url: 'banner6.png' }, { title: '准时达', url: 'banner7.png' }, { title: '早餐', url: 'banner8.png' }] }, { child: [{ title: '汉堡薯条', url: 'banner9.png' }, { title: '包子粥店', url: 'banner10.png' }, { title: '鲜花蛋糕', url: 'banner11.png' }, { title: '麻辣烫', url: 'banner12.png' }, { title: '地方菜系', url: 'banner13.png' }, { title: '披萨意面', url: 'banner14.png' }, { title: '异国料理', url: 'banner15.png' }] }],
      imgurls: imgurls
    }
  },
  methods: {
    jump(path) {
      this.$router.push(path)
    }
  }
}

</script>
