<template>
  <div>
    <div class="nav_box">
      <ul id="parent">
        <li @touchstart='switchStyle("id1")' id="id1">全部</li>
        <li @touchstart='switchStyle("id2")' id="id2">简餐便当</li>
        <li @touchstart='switchStyle("id3")' id="id3">面食粥点</li>
        <li @touchstart='switchStyle("id4")' id="id4">汉堡披萨</li>
        <li @touchstart='switchStyle("id5")' id="id5">香锅冒菜</li>
        <li @touchstart='switchStyle("id6")' id="id6">日韩料理</li>
        <li @touchstart='switchStyle("id7")' id="id7">轻食西餐</li>
        <li @touchstart='switchStyle("id8")' id="id8">小吃烤串</li>
      </ul>
      <span class="cover"></span>
      <i class="iconfont nav_box_icon">&#xe61d;</i>
    </div>
    <div>
      <ul class="nav_box_text">
        <li @touchstart.stop='com = !com' @click='two_nav("com")' :class="{blue:com}" id="com">{{comtext}}<i class="iconfont nav_box_text_arrow_icon">&#xe625;</i>
          <ul class="nav_box_text_popup" v-show='com'>
            <li v-for='(item,index) in comdata' @touchstart='comclick(item,item.content)' :class='{blue:item === comstatus||(index===0&&comstatus===null)}'>{{item.content}}<span><i class="iconfont" v-if='item === comstatus||(index===0&&comstatus===null)'>&#xe66f;</i></span>
            </li>
          </ul>
        </li>
        <li id="praise" @click='two_nav("praise")'>好评优先</li>
        <li id="distance" @click='two_nav("distance")'>距离最近</li>
        <li @touchstart.stop='selectbv = !selectbv'>帅选<i class="iconfont nav_box_text_select_icon">&#xe689;</i>
          <my-select v-show='selectbv'></my-select>
        </li>
      </ul>
    </div>
    <!-- 店铺快照 -->
    <ul class="rec_box_ul">
      <li v-for='item in data' :key='item.id'>
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
                <span>{{item.distance}}&nbsp|&nbsp</span>
                <strong>{{item.time}}</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="rec_box_ul_child_add" v-show='item.user !== null&&item.user !== ""&&item.user !== undefined||item.reduce !== null&&item.reduce !== ""&&item.reduce !== undefined||item.activity !== null&&item.activity !== ""&&item.activity !== undefined'>
          <div class="rec_add_text">
            <p class="rec_add_text_one" v-show='item.user !== null&&item.user !== ""&&item.user !== undefined'>
              <strong>新</strong>
              <span>{{item.user}}</span>
            </p>
            <p class="rec_add_text_two" v-show='item.reduce !== null&&item.reduce !== ""&&item.reduce !== undefined'>
              <strong>减</strong>
              <span>{{item.reduce}}</span>
            </p>
            <em class="rec_add_text_em" v-show='item.activity !== null&&item.activity !== ""&&item.activity !== undefined'>{{item.activity}}<i class="iconfont rec_add_text_icon">&#xe665;</i></em>
          </div>
        </div>
      </li>
    </ul>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang='scss' scoped>
.nav_box_text_popup {
  width: 16.0rem;
  height: 8.0rem;
  top: 2.12rem;
  position: absolute;
  z-index: 1;
  box-shadow: 0.0rem 0.15rem 0.55rem #E6E6E6;
  background-color: white;
	li {
  width: 100%;
  height: 2.0rem;
  padding-left: 0.85rem;
  text-align: left;
  color: #333333;
	i {
  height: 1.7rem;
  font-size: 0.7rem;
  color: #128dff;
	}
	span {
  right: 0.85rem;
  position: absolute;
	}
}
}

.nav_box {
  width: 100%;
  height: 1.85rem;
  top: 2.25rem;
  position: static;
  overflow: hidden;
  background-color: #2395ff;
}

.blue {
  color: #128dff !important;
}

#parent {
  width: 1000rem;
  height: 1.3rem;
  left: 0.0rem;
  margin-top: 0.28rem;
  transition: width 0.5s;
	li {
  height: 1.59rem;
  line-height: 1.3rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  font-size: 0.57rem;
  z-index: 10;
  color: #9dd0ff;
  border-bottom: 0.1rem solid #2395ff;
  background-color: #2395ff;
}
i{
  width: 1.85rem;
  height: 1.3rem;
  padding-top: 0.36rem;
  top: 0.28rem;
  right: 0px;
  z-index: 15;
  position: absolute;
  font-size: 0.58rem;
  background-color: #2395ff;
}
}

.cover {
  width: 1.85rem;
  height: 0.9rem;
  display: inline-block;
  top: 0.51rem;
  right: 0rem;
  box-shadow: -0.08rem 0rem 0.15rem #999999;
  position: absolute;
  z-index: 14;
}

.nav_box_content {
  width: 100%;
  height: 2.5rem;
  background-color: red;
	li {
  width: 16.0rem;
  height: 2.5rem;
  font-size: 0.7rem;
  color: #333333;
}
}

.nav_box_text {
  width: 100%;
  height: 2.0rem;
  margin-bottom: 0.1rem;
  background-color: white;
  i{
  width: 0.65rem;
  height: 0.65rem;
  padding-left: 0.15rem;
  font-size: 0.45rem;
  color: #333333;
}
}
.nav_box_text>li {
  width: 25%;
  height: 2.0rem;
  line-height: 2.0rem;
  position: static;
  text-align: center;
  overflow: hidden;
  font-size: 0.58rem;
  color: #999999;
}


/*下面为店铺快照*/

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
  position: absolute;
  text-align: left;
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
  em {
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
}

.rec_add_text {
  width: 12.3rem;
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
  strong {
  font-size: 0.50rem;
  padding: 0.15rem;
  border-radius: 0.20rem;
  vertical-align: middle;
  color: white;
  background-color: #5db32d;
}
span {
  font-size: 0.50rem;
}
}

.rec_add_text_two {
  margin-top: 0.15rem;
	strong {
  background-color: #ee6262;
}
}
</style>
<script type="text/babel">
import { imgurls } from '../../../../config/address'
import main_loading from '@/components/common/main_loading'
import select from './select'
export default {
  data() {
    return {
      currentElement: null,
      frontElement: null,
      parent: null,
      parentLeft: 0,
      screen_width: null,
      child_offset: null,
      childWidth: null,
      currentElement: null,
      com: false,
      comdata: [{ content: '综合排序' }, { content: '销量最高' }, { content: '起送价最低' }, { content: '配送最快' }],
      comstatus: null,
      comtext: '综合排序',
      two_nav_top_element: null,
      two_nav_current_element: null,
      imgurls: imgurls,
      data: [],
      selectbv: false,
      showLoading: true,
      transitionName: 'slide-left'
    }
  },
  created: function() {
    this.$http({
      method: 'POST',
      url: 'rec.php'
    }).then((res) => {
      this.data = res.data
      this.showLoading = false
    }, (error) => {
      console.log('recommend.vue 组件请求数据时发生错误 在component/takeout/目录下')
    })
  },
  components: {
    mySelect: select,
    myMainloading: main_loading
  },
  mounted: function() {
    this.parent = document.getElementById('parent');
    this.screen_width = document.body.clientWidth;
    this.frontElement = document.getElementById('id1');
    this.childWidth = this.frontElement.clientWidth;
    this.frontElement.style.color = "white";
    this.frontElement.style.borderBottom = "0.1rem solid white";
    this.two_nav_top_element = document.getElementById('com')
    this.two_nav_top_element.style.color = '#333333'
    document.body.addEventListener('touchstart', () => {
      if (this.com || this.selectbv) {
        this.com = false
        this.selectbv = false
      }
    })
    document.body.scrollTop = 0
    setTimeout(() => {
      this.showLoading = false
    }, 1000)
  },
  methods: {
    switchStyle: function(index) {
      this.requestData()
      this.frontElement.style.color = '#19ddff';
      this.frontElement.style.borderBottom = "0.1rem solid #2395ff";
      this.currentElement = document.getElementById(index);
      this.frontElement = this.currentElement;
      this.child_offset = this.currentElement.offsetLeft;
      this.currentElement.style.color = "white"
      this.currentElement.style.borderBottom = "0.1rem solid white";
      if (this.screen_width / 2 < parseInt(this.child_offset)) {
        this.parent.style.left = -((this.child_offset - this.screen_width / 2) + this.childWidth / 2) + "px";
      } else {
        this.parent.style.left = '0px'
      }

    },
    requestData() {
      this.$http({
        method: 'POST',
        url: 'rec.php'
      }).then((res) => {
        console.log('获取数据')
        this.data = res.data
      }, (error) => {
        console.log('recommend.vue 组件请求数据时发生错误 在component/takeout/目录下')
      })
    },
    comclick(item, text) {
      this.comstatus = item
      this.comtext = text
    },
    two_nav: function(id) {
      this.two_nav_top_element.style.color = '#999999'
      this.two_nav_current_element = document.getElementById(id)
      this.two_nav_current_element.style.color = '#333333'
      this.two_nav_top_element = this.two_nav_current_element
    }
  }
}

</script>
