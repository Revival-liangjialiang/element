<template>
  <ul class="nearby_box">
    <li v-for='(item,index) in data' :class="{active:item === select||(select===null&&index===0)}" @click='savestatus(item)'>
      {{item.title}}
      <div class="nearby_box_conent" v-show='(item === select)||(select===null&&index===0)'>
        <img :src="item.imgurl">
        <p>
          <strong>{{item.text1}}</strong>
          <span>{{item.text2}}</span>
        </p>
      </div>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.nearby_box {
  width: 100%;
  height: 9.8rem;
  margin-top: 0.5rem;
  padding-top: 0.9rem;
  background-color: white;
  li {
    width: 2.8rem;
    height: 1.3rem;
    font-size: 0.7rem;
    position: static;
    margin-left: 0.7rem;
    color: #999999;
  }
  .active {
    border-bottom: 0.1rem solid blue;
    color: #333333;
  }
}

.nearby_box_conent {
  width: 16.0rem;
  height: 7.6rem;
  left: 0.0rem;
  bottom: 0.0rem;
  padding-top: 1.15rem;
  position: absolute;
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1.0rem;
    margin-left: auto;
    margin-right: auto;
  }
  strong {
    font-size: 0.7rem;
    display: block;
    color: #333333;
  }
  span {
    font-size: 0.5rem;
    color: #999999;
  }
}

</style>
<script type="text/babel">
export default {
  data() {
    return {
      data: [{ title: '附近买过', text1: '附近暂无买过的商家', text2: '派送范围内的商家会出现在这里', imgurl: require('../../../static/images/order/order2.png') }, { title: '附近收藏', text1: '附近暂收藏过的商家', text2: '派送范围内收藏的商家会出现在这里', imgurl: require('../../../static/images/order/order3.png') }],
      select: null
    }
  },
  methods: {
    savestatus: function(status) {
      this.select = status
    }
  }
}

</script>
