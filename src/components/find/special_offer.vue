<template>
  <div class="recommend_box">
    <img src="../../../static/images/find/find_c1.png">
    <ul class="recommend_box_ul">
      <li v-for='item in data' @click="$router.push('/special')">
        <img :src="imgurls+item.imgurl">
        <span>{{item.title}}</span>
        <strong>{{item.price}}</strong>
        <em>{{item.uri}}</em>
      </li>
    </ul>
    <span>查看更多></span>
  </div>
</template>
<style lang='scss' scoped>
.recommend_box {
  width: 100%;
  height: 12.0rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  background-color: white;
	img {
  width: 100%;
  height: 2.85rem;
}
}

.recommend_box_ul {
  width: 100%;
  height: 6.75rem;
  text-align: left;
  display: inline-block;
  li {
  width: 4.35rem;
  height: 100%;
  margin-left: 0.74rem;
  img {
  width: 100%;
  height: 4.8rem;
}
span {
  font-size: 0.5rem;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  display: block;
  color: #333333;
}
strong {
  font-size: 0.5rem;
  color: red;
}
 em {
  font-size: 0.42rem;
  text-decoration: line-through;
  color: #999999;
}
}
}

.recommend_box>span {
  margin-top: 0.5rem;
  font-size: 0.5rem;
  color: #999999;
}

</style>
<script type="text/babel">
import { imgurls } from '../../config/address'
export default {
  data() {
    return {
      imgurls: imgurls,
      data: []
    }
  },
  created: function() {
    this.$http({
      method: 'post',
      url: 's.php'
    }).then((response) => {
      this.data = response.data
    }, (error) => {
      console.log('error at components/find/recommend.vue')
    })
  }
}

</script>
