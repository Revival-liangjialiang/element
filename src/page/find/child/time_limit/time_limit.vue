<template>
  <div class="time_limit">
    <my-header :time_limit="true"></my-header>
    <img src="../../../../../static/images/find/time_limit.png">
    <div class="time_limit_parameter">
      <div class="ver">
        <p>
          <span>iPhone 7 32G</span>
          <em>￥4799</em>
        </p>
        <span style="width: 4.0rem;height: 1.7rem;line-height: 1.7rem;font-size: 1.1rem; border-left: 0.05rem solid #f5f5f5;right: 0.0rem;color: #ff3600; position: absolute;">399&nbsp<em style="font-size: 0.6rem;">积分</em></span>
      </div>
    </div>
    <div class="fixed_button_box fb">
      <button class="hv">积分不足</button>
    </div>
    <div class="explain">
      <p style="height: 1.55rem;margin-bottom:0.3rem; line-height: 1.55rem;border-bottom: 0.05rem solid #f5f5f5; text-align:left; color: #999999;">
        <i class="iconfont">&#xe63c;</i> 详情说明:
      </p>
      <p>
        <p class="header">商品简介</p>
        <p>系统:苹果(iOS)</p>
        <p class="min_margin">像素:1200 万像素摄像头</p>
        <p class="min_margin">机身颜色:随机</p>
        <p class="min_margin">显示屏:Retina HD 显示屏</p>
        <p class="footer">防溅、抗水、防尘:在 IEC 60529 标准下达到 IP67 级别</p>
        <p class="footer" style="color: red;">活动时间:7月1日—7月7日</p>
        <p class="header">兑换流程</p>
        <p class="min_margin">1、用户确认符合活动条件后,点击[立即兑换],并填写配送信息。</p>
        <p class="footer">2、确认信息无误,提交兑换。</p>
        <p class="header">注意事项</p>
        <p class="min_margin">1、配送区域: 仅限中国大陆地区(港澳台、西藏、新疆地区除外)</p>
        <p class="min_margin">2、每位用户仅可兑换一次。</p>
        <p class="min_margin">3、饿了么将在兑换后15个工作日内邮寄奖品(由于自然灾害等不可抗力因素除外)</p>
        <p class="min_margin">4、请提供正确并可正常通信的手机号,提供错误信息导致损失将由用户承担。</p>
        <p class="min_margin">5、产品邮费由饿了么承担。</p>
        <p class="min_margin">6、饿了么保留法律允许范围内对活动的解释权, 如有问题联系积分商城邮箱:jifen@ele.me。</p>
      </p>
    </div>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.time_limit {
  margin-bottom: 2.8rem;
  img {
    width: 100%;
  }
}

.time_limit_parameter {
  width: 100%;
  height: 2.9rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: white;
  p {
    height: 1.7rem;
    display: inline-block;
    text-align: left;
    span {
      display: block;
    }
    em {
      font-size: 0.6rem;
      text-decoration: line-through;
      display: block;
      color: #999999;
    }
  }
}

.time_limit_parameter>div {
  width: 100%;
  height: 1.7rem;
  text-align: left;
}

.fixed_button_box {
  width: 100%;
  height: 2.8rem;
  background-color: white;
  button {
    width: 15.2rem;
    height: 2.0rem;
    border-radius: 0.15rem;
    color: white;
    background-color: #cccccc;
  }
}

.explain {
  width: 100%;
  height: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 0.5rem;
  background-color: white;
  i {
    font-size: 0.6rem;
    vertical-align: middle;
    color: #999999;
  }
  p {
    text-align: left;
  }
  .header {
    font-size: 0.7rem;
    margin-bottom: 0.75rem;
    font-weight: bold;
    color: black;
  }
  .footer {
    margin-bottom: 1.3rem;
  }
}

.min_margin {
  margin-bottom: 0.2rem;
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
  components: {
    myHeader: header,
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
