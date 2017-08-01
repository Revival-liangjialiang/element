<template>
  <div class="four_box">
    <ul>
      <li v-for='item in data' :to='page[item.index]' :key='item.id'>
        <div class="four_box_child">
          <p>
            <span>{{item.title}}</span>
            <span>{{item.childtitle}}</span>
          </p>
          <img src="../../img/b_04.png">
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
.four_box {
  width: 100%;
  height: 6.5rem;
  margin-top: 0.25rem;
ul {
  width: 100%;
  height: 100%;
}
li {
  width: 7.95rem;
  height: 3.2rem;
  background-color: white;
}
}
.four_box>ul>li:nth-child(1),
.four_box>ul>li:nth-child(2) {
  margin-bottom: 0.1rem;
}

.four_box>ul>li:nth-child(1),
.four_box>ul>li:nth-child(3) {
  margin-right: 0.1rem;
}

.four_box_child {
  width: 100%;
  height: 2.5rem;
  top: 0.36rem;
  img {
  width: 2.5rem;
  height: 2.5rem;
  right: 0.75rem;
  position: absolute;
}
}

.four_box_child p {
  font-size: 0.5rem;
  display: block;
  position: relative;
}

.four_box_child span {
  font-size: 0.7rem;
  display: block;
  position: relative;
}

.four_box_child>p>span:nth-child(2) {
  font-size: 0.6rem;
}

.four_box_child>p {
  height: 100%;
  padding-left: 0.7rem;
  padding-top: 0.38rem;
  position: absolute;
}
</style>
<script type="text/babel">
export default {
  data() {
    return {
      data: [{ title: '营养快餐', childtitle: '15元吃饱', url: 'test' }, { title: '营养快餐', childtitle: '15元吃饱', url: 'test' }, { title: '营养快餐', childtitle: '15元吃饱', url: 'test' }, { title: '营养快餐', childtitle: '15元吃饱', url: 'test' }],
      page: ['/test', '/test', '/test', '/test']
    }
  }
}

</script>
