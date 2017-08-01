<template>
  <div>
    <div class="evaluate_top">
      <div class="evaluate_top_child">
        <div class="evaluate_top_child_left">
          <em>4.5</em>
          <strong>综合评分</strong>
          <span>高于周边商家67%</span>
        </div>
        <div class="evaluate_top_child_right">
          <p class="evaluate_top_one">服务态度&nbsp
            <yd-rate slot="left" v-model="rate" :readonly="true"></yd-rate>
            <span slot="left" style="color: #ff6f18">&nbsp4.6分</span>
          </p>
          <p class="evaluate_top_two">商品评分&nbsp
            <yd-rate slot="left" v-model="rate" :readonly="true"></yd-rate>
            <span slot="left" style="color: #ff6f18">&nbsp4.6分</span></p>
          <p class="evaluate_top_three">送达时间<em>34分钟</em></p>
        </div>
      </div>
    </div>
    <div class="evaluate">
      <ul class="evaluate_count" v-if='data!==null'>
        <li>全部({{count}})</li>
        <li>满意({{data.title1}})</li>
        <li class="gray">不满意({{data.title2}})</li>
        <li>有图({{data.title3}})</li>
        <li>味道好({{data.title4}})</li>
        <li>包装精美({{data.title5}})</li>
        <li>送货快({{data.title6}})</li>
        <li>分量足({{data.title7}})</li>
        <li>服务不错({{data.title8}})</li>
        <li>物美价廉({{data.title9}})</li>
        <li>干净卫生({{data.title10}})</li>
        <li>食材新鲜({{data.title11}})</li>
      </ul>
      <p class="evaluate_sele"><i class="iconfont">&#xe66a;</i>只看有内容的评价</p>
      <ul class="evaluate_user">
        <li v-for="item in evaluate_user">
          <div class="evaluate_user_top">
            <img src="../../../../../static/images/takeout/header.png">
            <div class="evaluate_user_top_text">
              <p class="user_name">匿名用户<span>2016-06-29</span></p>
              <p>商家服务：<i class="iconfont">&#xe694;满意</i>&nbsp|&nbsp商品：<i class="iconfont">&#xe694;满意</i></p>
            </div>
          </div>
          <p class="evaluate_user_bottom"><em>黑椒牛柳便当：</em>分量足，包装精美分量足，包装精美分量足，包装精美</p>
          <see-box class="evaluate_img_box">
            <see-item v-for="(item,index) in imgList" :key="index" :img="item" class="evaluate_img"></see-item>
          </see-box>
        </li>
      </ul>
    </div>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang='scss'>
@import '../../../../style/common';
.evaluate_top {
  width: 100%;
  height: 5.3rem;
  background-color: white;
}

.evaluate_top_child {
  width: 100%;
  height: 4.05rem;
  top: 50%;
  text-align: left;
  transform: translate(0, -50%);
}

.evaluate_top_child_left {
  width: 5.65rem;
  height: 100%;
  border-right: 0.05rem solid #f5f5f5;
  padding-top: 0.4rem;
  text-align: center;
  box-sizing: border-box;
  float: left;
  em {
  font-size: 1.4rem;
  color: #ff5f00;
}
strong {
  font-size: 0.6rem;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  display: block;
  color: #333333;
}
span {
  font-size: 0.6rem;
  color: #999999;
}
}

.evaluate_top_child_right {
  width: 10.35rem;
  height: 100%;
  float: left;
  p {
  padding-left: 0.5rem;
}
}

.evaluate_top_two {
  top: 0.6rem;
}

.evaluate_top_three {
  bottom: 0.0rem;
  position: absolute;
  em {
  margin-left: 0.5rem;
  color: #999999;
}
}

.m-rate {
  display: inline-block;
}

.rate-active {
  color: #ffa602 !important;
}

.evaluate {
  width: 100%;
  height: auto;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  background-color: white;
  .gray {
  background-color: #f5f5f5;
  color: #999999;
}
  }

.evaluate_count {
  padding-left: 0.7rem;
  li {
  padding: 0.35rem;
  margin-right: 0.5rem;
  margin-bottom: 0.35rem;
  font-size: 0.55rem;
  border-radius: 0.25rem;
  display: inline-block;
  float: none;
  background-color: #ebf5ff;
}
}

.evaluate_count li:nth-child(1) {
  background-color: $theme !important;
  color: white !important;
}
.evaluate_sele {
  width: 15.3rem;
  height: 1.5rem;
  margin-left: 0.3rem;
  overflow: hidden;
  line-height: 1.5rem;
  font-size: 0.6rem;
  border-top: 0.05rem solid #f5f5f5;
  border-top-style: dashed;
  i {
  width: 0.6rem;
  height: 0.6rem;
  margin-left: 0.5rem;
  margin-right: 0.25rem;
  font-size: 0.7rem;
  color: #00ba61
}
}

.evaluate_user {
  width: 100%;
  height: auto;
  border-top: 0.05rem solid #f5f5f5;
  background-color: white;
  li {
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  margin-left: 0.7rem;
  border-bottom: 0.05rem solid #f5f5f5;
  float: none;
}
}

.evaluate_user_top {
  width: 100%;
  img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
}

.evaluate_user_top_text {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  p {
  font-size: 0.5rem;
  line-height: .7rem;
  height: 100%;
  overflow: hidden;
  color: #999999;
}
i {
  font-size: 0.6rem;
  color: #ffc65d;
}
span {
  margin-left: 0.5rem;
  color: #999999;
}
}

.evaluate_user_bottom {
  width: 12.65rem;
  height: auto;
  font-size: 0.6rem;
  margin-left: 2.11rem;
  margin-top: 0.55rem;
  color: #999999;
  em {
  color: #1d95d2;
}

}
.user_name {
  font-size: 0.65rem !important;
  font-weight: 600;
  padding-left: 0.0rem !important;
  border-bottom: none;
  color: #333333 !important;
}


/*预览图片的总盒子*/

.evaluate_img_box {
  padding-left: 2.1rem;
  margin-top: 0.5rem;
}


/*孩子图片盒子*/

.evaluate_img {
  width: 4.15rem;
  height: 4.15rem;
  margin-right: 0.25rem;
  display: inline-block;
  img {
  width: 4.15rem;
  height: 4.15rem;
}
}

/*调整打开后图片的位置和大小*/

.pswp__button--fs,
.pswp__button--share {
  display: none !important;
}

</style>
<script type='text/babel'>
import main_loading from '@/components/common/main_loading'
export default {
  data() {
    return {
      rate: 5,
      transitionName: 'slide-left',
      showLoading: true,
      data: null,
      count: 0,
      evaluate_user: [{ title: 'test' }, { title: 'test' }, { title: 'test' }],
      imgList: [{
        u: 'http://106.14.144.79/element/img/findtwo_03.png',
        w: 320,
        h: 320
      }, {
        u: 'http://106.14.144.79/element/img/dd.png',
        w: 320,
        h: 320
      }]
    }
  },
  created: function() {
    this.$http({
      method: 'get',
      url: 'evaluate.php'
    }).then((res) => {
      this.showLoading = false
      this.data = res.data
      this.calculation()
    }, (err) => {

    })
  },
  components: {
    myMainloading: main_loading
  },
  methods: {
    calculation: function() {
      this.count += parseInt(this.data.title1)
      this.count += parseInt(this.data.title2)
      this.count += parseInt(this.data.title3)
      this.count += parseInt(this.data.title4)
      this.count += parseInt(this.data.title5)
      this.count += parseInt(this.data.title6)
      this.count += parseInt(this.data.title7)
      this.count += parseInt(this.data.title8)
      this.count += parseInt(this.data.title9)
      this.count += parseInt(this.data.title10)
      this.count += parseInt(this.data.title11)
    }
  },
  mounted: () => {

  }
}

</script>
