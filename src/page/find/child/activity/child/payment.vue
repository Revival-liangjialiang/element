<template>
  <div>
    <my-header :payment="true"></my-header>
    <div class="payment_box">
      <p class="one">
        <em>支付剩余时间</em>
        <yd-countdown time="1800" format="{%h}:{%m}:{%s}" timetype="second" class="down_count"></yd-countdown>
      </p>
      <div class="two">
        <p class="ver">
          <span class="ell" style="width: 8.0rem;">一元霸王餐订单:10000000000000</span>
          <span style="vertical-align: top;margin-left: 0.25rem;color: #999999;">详情</span>
          <em style="vertical-align: top;float: right;color: red;">￥1.00</em>
        </p>
      </div>
      <p class="three">选择支付方式</p>
      <ul class="four">
        <li v-for="(item,index) in payment_data" @click="switch_type(item,item.type)">
          <img :src="item.imgurl"> {{item.title}}
          <i class="iconfont" :class="{active:item===paymeny_cur||(index===0&&paymeny_cur===null)}">&#xe66a;</i>
        </li>
      </ul>
    </div>
    <button class="payment_button hor" @click="start_payment">确认支付￥1.0</button>
  </div>
</template>
<style lang="scss" scoped>
.payment_box {
  width: 100%;
  height: auto;
.one {
  width: 100%;
  height: 4.5rem;
  overflow: hidden;
  background-color: white;
  em {
  font-size: 0.6rem;
  margin-top: 1.0rem;
  margin-bottom: 0.25rem;
  display: block;
  color: #999999;
}
}
}

.down_count span {
  font-size: 1rem !important;
}
.payment_box{
.two {
  width: 100%;
  height: 1.9rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: white;
  p {
  width: 100%;
  height: 1.9rem;
  line-height: 1.9rem;
  border-top: 0.05rem solid #f5f5f5;
  text-align: left;
}
span {
  font-size: 0.6rem;
}
}
.three {
  height: 1.5rem;
  padding-left: 0.5rem;
  font-size: 0.6rem;
  line-height: 1.5rem;
  text-align: left;
  color: #999999;
}
.four {
  padding-left: 0.5rem;
  background-color: white;
li {
  width: 100%;
  height: 2.6rem;
  line-height: 2.6rem;
  border-bottom: 0.05rem solid #f5f5f5;
  text-align: left;
  float: none;
}
img {
  width: 1.85rem;
  height: 1.85rem;
  margin-right: 0.5rem;
  vertical-align: middle;
  display: inline-block;
}
i {
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.7rem;
  top: 1.0rem;
  right: 0.5rem;
  position: absolute;
  display: inline-block;
  color: #999999;
}
.active {
  color: #4dd966;
}
}
}

.payment_button {
  width: 14.9rem;
  height: 1.9rem;
  border-radius: 0.15rem;
  line-height: 1.9rem;
  font-size: 0.6rem;
  margin-top: 0.75rem;
  color: white;
  background-color: #4cd964;
}

</style>
<script type="text/babel">
import header from '@/components/common/header'
export default {
  data() {
    return {
      payment_type: 'alipay',
      paymeny_cur: null,
      payment_data: [{ title: '支付宝', imgurl: require('../../../../../../static/images/find/alipay_payment.png'), type: 'alipay' }, { title: '微信支付', imgurl: require('../../../../../../static/images/find/wechat_payment.png'), type: 'wechat' }, { title: 'QQ钱包', imgurl: require('../../../../../../static/images/find/qq_payment.png'), type: 'qq' }]
    }
  },
  components: {
    myHeader: header
  },
  methods: {
    switch_type: function(item, type) {
      this.payment_type = type
      this.paymeny_cur = item
    },
    start_payment: function() {
      console.log("支付类型为 " + this.payment_type)
    }
  }
}

</script>
