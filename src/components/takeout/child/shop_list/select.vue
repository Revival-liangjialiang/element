<template>
  <div class="parent" @touchstart.stop=''>
    <div class="select_box">
      <p class="select_box_title">
        <span>配送方式</span>
      </p>
      <div class="select_box_transport">
        <p>
          <img src="../../../../../static/images/takeout/transport.png">
          <span>蜂鸟专送</span>
        </p>
      </div>
      <p class="select_box_title">
        <span>优惠活动</span>
      </p>
      <ul class="select_box_discount">
        <li>
          <p>
            <span>新</span>
            <em>赠品优惠</em>
          </p>
        </li>
        <li>
          <p>
            <span style="background-color: #f49f71">特</span>
            <em>特价商品</em>
          </p>
        </li>
        <li>
          <p>
            <span style="background-color: #f07474">减</span>
            <em>下单立减</em>
          </p>
        </li>
        <li>
          <p>
            <span style="background-color: #21bf82">赠</span>
            <em>赠品优惠</em>
          </p>
        </li>
        <li>
          <p>
            <span style="background-color: #ff5c1b">返</span>
            <em>下单返卷</em>
          </p>
        </li>
        <li>
          <p>
            <span style="background-color: #ffa416">领</span>
            <em>进店领卷</em>
          </p>
        </li>
      </ul>
      <p class="select_box_title">
        <span>人均消费</span>
      </p>
      <ul class="select_box_price">
        <li>￥20元以下</li>
        <li>￥20元以下</li>
        <li>￥20元以下</li>
      </ul>
      <p class="select_box_title">
        <span>商家属性（可多选）</span>
      </p>
      <ul class="select_box_attribute">
        <li>
          <p>
            <span style="border: 0.05rem solid #91d9f0;color: #91d9f0;">品</span>
            <em>品牌商家</em>
          </p>
        </li>
        <li>
          <p>
            <span style="border: 0.05rem solid #2094ff;color: #2094ff;">保</span>
            <em>外卖保</em>
          </p>
        </li>
        <li>
          <p>
            <span style="border: 0.05rem solid #ea9041;color: #ea9041;">新</span>
            <em>新店</em>
          </p>
        </li>
        <li>
          <p>
            <span style="border: 0.05rem solid #adadad;color: #adadad;">票</span>
            <em>开发票</em>
          </p>
        </li>
        <li>
          <p>
            <span style="border: 0.05rem solid #ff5811;color: #ff5811;">付</span>
            <em>在线支付</em>
          </p>
        </li>
        <li>
          <p>
            <span style="border: 0.05rem solid #419dff;color: #419dff;">准</span>
            <em>准时达</em>
          </p>
        </li>
      </ul>
      <p class="select_box_title">
      </p>
      <p class="select_box_title">
      </p>
    </div>
    <div class="select_box_button">
      <button class="clear">清空</button>
      <button class="see">查看450个商家</button>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.parent {
  width: 16.0rem;
  height: 17.65rem;
  top: 1.95rem;
  left: 0.0rem;
  position: absolute !important;
  overflow: scroll;
  z-index: 10;
  box-shadow: 0.0rem 0.45rem 0.7rem #E6E6E6;
  background-color: white
}

.select_box {
  width: 16.0rem;
  height: 17.65rem;
  overflow: scroll;
}

.select_box_button {
  width: 100%;
  height: 2.3rem;
  bottom: -0.1rem;
  font-size: 0.7rem;
  text-align: left;
  position: absolute;
  background-color: white;
	button {
  width: 49%;
  height: 2.3rem;
  font-size: 0.65rem;
  font-size: 0.7rem;
  box-sizing: border-box;
  color: white;
}
}

.see {
  right: 0.0rem;
  position: absolute;
  background-color: #67cc71;
}

.clear {
  color: #999999 !important;
}

.select_box_title {
  width: 100%;
  height: 2.25rem;
  background-color: #e9e9e9;
	span {
  height: 0.6rem;
  line-height: 0.6rem;
  left: 0.9rem;
  top: 1.05rem;
  font-size: 0.6rem;
  display: inline-block;
  position: absolute;
}
}

.select_box_transport {
  width: 100%;
  height: 1.95rem;
  padding-left: 0.9rem;
  text-align: left;
  background-color: white;
	p {
  height: 0.75rem;
  padding-right: 0.5rem;
  margin-top: 0.65rem;
  display: inline-block;
}
span {
  height: 0.75rem;
  line-height: 0.75rem;
  vertical-align: top;
}
img {
  width: 0.75rem;
  height: 0.75rem;
  vertical-align: top;
  display: inline-block;
  line-height: 0.75rem;
}
}

.select_box_discount,
.select_box_attribute {
  width: 100%;
  height: 4.0rem;
  background-color: white;
  span {
  width: 0.9rem;
  height: 0.9rem;
  padding: 0.10rem;
  border-radius: 0.1rem;
  line-height: 0.7rem;
  font-size: 0.6rem;
  vertical-align: middle;
  color: white;
  background-color: #64b736;
}
em {
  font-size: 0.6rem;
  vertical-align: middle;
}
}

.select_box_discount>li,
.select_box_attribute>li {
  width: 5.31rem;
  height: 2.0rem;
  box-sizing: border-box;
  border-right: 0.05rem solid #e6e6e6;
  border-bottom: 0.05rem solid #e6e6e6;
}

.select_box_discount>li:nth-child(3),
.select_box_discount>li:nth-child(6),
.select_box_attribute>li:nth-child(3),
.select_box_attribute>li:nth-child(6) {
  border-right: 0.05rem solid white;
}

.select_box_attribute>li {
  padding-left: 0.85rem;
  text-align: left;
}

.select_box_price {
  width: 100%;
  height: 1.95rem;
  background-color: white;
}

.select_box_price>li {
  width: 5.31rem;
  height: 1.95rem;
  border-right: 0.05rem solid #e6e6e6;
  background-color: white;
}

.select_box_price>li:nth-child(3) {
  border-right: none;
}

.select_box_attribute span {
  background-color: white;
}

</style>
