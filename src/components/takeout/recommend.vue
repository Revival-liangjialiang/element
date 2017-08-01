<template>
  <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allUseLoad()" :bottomPullText='bottomText' @bottom-status-change="handleBottomChange" ref="loadmore" class='rescommend'>
    <div class="rec_box">
      <p>
        推荐商家
      </p>
      <ul class="rec_box_ul">
        <li v-for='item in data' :key='item.id' @click='$router.push("/shop")'>
          <div class="rec_box_ul_child">
            <img :src="imgurls+item.imgurl">
            <div class="rec_box_ul_child_d">
              <div class="rec_box_one">
                <span v-show='item.brand'>品牌</span>
                <strong>{{item.name}}</strong>
              </div>
              <div class="rec_box_two">
                <yd-cell-item>
                  <yd-rate slot="left" v-model="item.score" :readonly='true' size="18px"></yd-rate>
                  <span slot="left" class="rec_score">{{item.score}}</span>
                </yd-cell-item>
                <span class="rec_sal">{{item.salesvolume}}</span>
              </div>
              <div class="rec_box_three">
                <span>{{item.start}}&nbsp|&nbsp{{item.freight}}&nbsp|&nbsp{{item.price}}</span>
                <div class="rec_box_three_child">
                  <span>{{item.distance}}&nbsp|</span>
                  <strong>{{item.time}}</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="rec_box_ul_child_add" v-show='item.user !== null&&item.user !== ""&&item.user !== undefined||item.reduce !== null&&item.reduce !== ""&&item.reduce !== undefined||item.activity !== null&&item.activity !== ""&&item.activity !== undefined'>
            <div class="rec_add_text">
              <p class="rec_add_text_one" v-show='item.user !== null&&item.user !== ""&&item.user !== undefined'>
                <strong>新</strong>
                <span class="ell" style="width: 7.6rem;">{{item.user}}</span>
              </p>
              <p class="rec_add_text_two" v-show='item.reduce !== null&&item.reduce !== ""&&item.reduce !== undefined'>
                <strong>减</strong>
                <span class="ell" style="width: 7.6rem;">{{item.reduce}}</span>
              </p>
              <em class="rec_add_text_em" v-show='item.activity !== null&&item.activity !== ""&&item.activity !== undefined'>{{item.activity}}<i class="iconfont">&#xe665;</i></em>
            </div>
          </div>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </mt-loadmore>
</template>
<style lang="scss">
@import '../../style/common';
.rescommend {
  padding-bottom: 2.85rem;
  background-color: white;
}

.rec_box {
  width: 100%;
  height: auto;
  margin-top: 0.5rem;
  z-index: 1000;
  p {
  height: 1.55rem;
  font-size: 0.6rem;
  line-height: 1.55rem;
  padding-left: 0.45rem;
  margin-bottom: 0.1rem;
  text-align: left;
  background-color: white;
}
}
.rec_box_ul {
  width: 100%;
  height: auto;
li {
  width: 100%;
  height: auto;
  padding-left: 0.45rem;
  margin-bottom: 0.1rem;
  background-color: white;
}
}
.rec_box_ul_child {
  width: 100%;
  height: 2.8rem;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
img {
  width: 2.8rem;
  height: 2.8rem;
}
}

.rec_box_ul_child_d {
  width: 12.3rem;
  height: 2.8rem;
  top: 0.0rem;
  right: 0.0rem;
  text-align: left;
  position: absolute;
}

.rec_box_one {
  margin-top: 0.25rem;
span {
  border-radius: 0.10rem;
  padding-top: 0.08rem;
  padding-bottom: 0.1rem;
  line-height: 0.6rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 0.5rem;
  margin-right: 0.15rem;
  vertical-align: middle;
  position: relative;
  background-color: #ffdf3d;
}
strong {
  font-size: 0.65rem;
  padding-left: 0.15rem;
  vertical-align: middle;
  position: relative;
}
}
.cell-item {
  height: 0.7rem;
  vertical-align: middle;
  display: inline-block;
  padding-left: 0.0rem;
}

.rec_score {
  margin-left: 0.15rem;
  color: #ff5f0c;
}

.rec_sal {
  font-size: 0.6rem;
  margin-left: 0.25rem;
  vertical-align: middle;
  color: #999999;
}

.rec_box_three {
  width: 100%;
  padding-right: 0.25rem;
  bottom: 0.0rem;
  position: absolute;
span {
  font-size: 0.5rem;
  color: #999999;
}
strong {
  font-size: 0.5rem;
  color: #999999;
}
}

.rec_box_three_child {
  float: right;
  display: inline-block;
strong {
  color: #48a7ff;
}
}

.rec_box_ul_child_add {
  width: 100%;
  height: auto;
  margin-top: -0.5rem;
  padding-bottom: 0.25rem;
  text-align: right;
}

.rec_add_text {
  width: 12.3rem;
  padding-top: 0.25rem !important;
  height: auto;
  border-top: 0.06rem solid #999999;
  border-top-style: dashed;
  padding-top: 0.15rem;
  padding-bottom: 0.7rem;
  display: inline-block;
}

.rec_add_text_one,
.rec_add_text_two {
  text-align: left;
}

.rec_add_text_one {
  margin-bottom: 0.25rem;
}

.rec_add_text_one strong,
.rec_add_text_two strong {
  font-size: 0.50rem;
  padding: 0.15rem;
  border-radius: 0.20rem;
  vertical-align: middle;
  color: white;
  background-color: #5db32d;
}

.rec_add_text_two strong {
  background-color: #ee6262;
}

.rec_add_text_one span,
.rec_add_text_two span {
  font-size: 0.50rem;
  vertical-align: middle;
}

.rec_add_text_em {
  right: 0.15rem;
  top: 0.15rem;
  overflow: hidden;
  font-size: 0.50rem;
  position: absolute;
i{
  height: 0.5rem;
  top: 0.18rem;
  position: relative;
  color: #333333;
}
}

.cell-left {
  height: 0.7rem;
}

.cell-item:not(:last-child):after {
  border-bottom: none
}

.mint-loadmore-text {
  font-size: 0.6rem;
  color: #999999;
}

</style>
<script type="text/babel">
import { imgurls } from '../../config/address'
export default {
  data() {
    return {
      data: [],
      imgurls: imgurls,
      page: 1,
      allLoaded: false,
      bottomText: '上拉加载更多',
      totalCount: '',
      sw:0
    }
  },
  created: function() {
    this.request()
  },
  methods: {
    loadBottom() {
      console.log('开始加载')
      this.request()
    },
    allUseLoad: function() {
      console.log('没有更多数据')
      return this.allLoaded
    },
    request: function() {
      this.$http({
        method: 'POST',
        url: 'rec.php',
        params: {
          page: this.page
        }
      }).then((res) => {
      	var arr = []
        this.page++
          // 每次加载5条数据，若小于5条则表示已没有更多数据
          if (res.data.length < 5) {
            // 停止加载
            this.allLoaded = true
            this.bottomText = '到底啦亲'
          }
        for (var a = 0; a < res.data.length; a++) {
          arr.push(res.data[a])
        }
        console.log(arr.length)
        this.data = this.data.concat(arr)
        if(this.sw<=0){
        	this.sw++
        this.$nextTick(function(){
		setTimeout(function(){
			document.body.scrollTop = 0	
		},50)
        })
    	}
        // 加载完成调用此方法，恢复到原来的状态
        this.$refs.loadmore.onBottomLoaded()
      }, (error) => {
        console.log('recommend.vue 组件请求数据时发生错误 在component/takeout/目录下')
      })
    },
    handleBottomChange: function(status) {

    }
  }
}

</script>
