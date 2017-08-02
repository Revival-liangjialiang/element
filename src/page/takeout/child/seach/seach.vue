<template>
  <div style="height: 100vh; overflow: hidden; background-color:white;">
    <div class="seach_header">
      <i class="iconfont" @click='back'>&#xe622;</i>
      <input type="text" name="shop" placeholder="搜索商家/商品名称">
      <button @click="$router.push('/shop_list')">搜索</button>
    </div>
    <div class="history">
      <span>历史记录</span>
      <i class="iconfont delete_icon">&#xe645;</i>
      <ul>
        <li>标题标题</li>
        <li>标题标题</li>
        <li>标题标题</li>
        <li>标题标题</li>
        <li>标题标题</li>
        <li>标题标题</li>
      </ul>
      <div class="clearfix" style="height: 1.25rem;"></div>
    </div>
    <div class="hot">
      <span>热门搜索</span>
      <ul>
        <li>标题标题</li>
        <li>标题标题</li>
        <li>标题标题</li>
        <li>标题标题</li>
        <li>标题标题</li>
        <li>标题标题</li>
      </ul>
      <div class="clearfix" style="height: 1.25rem;"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.seach_header {
  width: 100%;
  height: 1.7rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
  background-color: white;
  input {
    width: 11.0rem;
    height: 1.7rem;
    font-size: 0.6rem;
    padding-left: 0.8rem;
    border-radius: 1rem;
    background-color: #f4f4f4;
  }
  i {
    height: 1.7rem;
    padding-top: 0.50rem;
    display: inline-block;
    float: left;
    color: #333333
  }
  button {
    font-size: 0.7rem;
    line-height: 1.7rem;
    float: right;
  }
}

.history,
.hot {
  width: 15.35rem;
  margin-top: 1.9rem;
  text-align: left;
  float: right;
  height: auto;
  li {
    font-size: 0.6rem;
    padding: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    color: #999999;
    background-color: #f4f4f4;
  }
  span {
    font-size: 0.65rem;
    margin-bottom: 0.9rem;
    font-weight: bold;
    color: black;
  }
}

.hot {
  margin-top: 0.0rem;
}

.history>i {
  float: right;
  margin-right: 0.5rem;
  height: 0.7rem;
  color: #999999
}

</style>
<script type="text/babel">
export default {
  data() {
    return {

    }
  },
  methods: {
    back: function() {
      this.$router.go(-1)
    }
  }
}

</script>
