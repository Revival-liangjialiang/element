<template>
  <div class="header_box">
    <div class="header_box_child">
      <p>广州<i class="iconfont">&#xe665;</i></p>
      <div class="header_seach">
        <span class="header_child2_text"><i class="iconfont header_child2_icon">&#xe60a;</i>&nbsp输入地址</span>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.header_box {
  width: 100%;
  height: 2.5rem;
  background-color: #2395ff;
  overflow: hidden;
}

.header_box_child {
  width: 100%;
  height: 1.5rem;
  margin-top: 0.425rem;
  padding-left: 0.75rem;
  text-align: left;
	p {
  width: 2.59rem;
  display: inline-block;
  vertical-align: middle;
  color: white;
  i {
  height: 0.8rem;
  padding-left: 0.15rem;
  vertical-align: middle;
}
}
}

.header_seach {
  width: 11.8rem;
  height: 1.50rem;
  padding-top: 0.1rem;
  border-radius: 1.0rem;
  padding-left: 0.7rem;
  vertical-align: middle;
  display: inline-block;
  background-color: white;
	span,i{
  height: 1.50rem;
  line-height: 1.5rem;
  font-size: 0.58rem;
  color: #999999;
}
}
</style>
