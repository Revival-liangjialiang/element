<template>
  <div class="parent" id="parent">
  <!-- <span style="z-index: 100;" class="button">yyyyyyyyyyyyyyyyyy</span> -->
  <div class="child1_box" id="child1_box">
  <ul class="child1" id="child1">
  <li v-for='(item,index) in data' :id='nav_address[index]' @click='move_box(index,item)' :class='{active:current_obj===item||(index===0&&current_obj===null)}' :key="item.id"><span>{{item.title}}</span></li>
  </ul>
  </div>
  <div class="child2_box" id="child2_box">
  <ul class="child22">
  <li v-for='(item,index) in data' :id='content_address[index]' :key='index'>
    <p class="title">{{item.title}}<span>大家喜欢吃</span></p>
    <div class="shop_snapshot_box" v-for='(child_item,child_index) in item.content'>
      <div class="shop_content">
        <div class="shop_content_top">
          <img :src="imgurls+child_item.img_url">
          <p class="shop_content_text">
            <em>{{child_item.title}}</em>
            <strong >月售{{child_item.count}}份&nbsp&nbsp&nbsp好评率{{child_item.praise}}%</strong>
          </p>
        </div>
        <div class="shop_content_price" >
          <em>￥76</em>
          <span class="add" @click='add_cart(index+""+child_index,child_item.img_url,child_item.title,"真功夫（永泰店）")'>+</span>
        </div>
      </div>
    </div>
    </li>
  </ul>
  </div>
  <div class="shop_cart">
    <p :class="{move:move}">
      <span class="count" v-show='cart_count'>{{cart_count}}</span>
      <img id="end" src="../../../../../static/images/takeout/cart.png" class="ver" :class="{active:cart_count}">
    </p>
    <span>￥0元起送</span>
  </div>
  <transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition> 
  </div>
</template>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
import {getData} from '@/config/common'
import {imgurls} from '@/config/address'
export default {
  name: 'parent',
  data () {
    return {
    data:[],
    content_address:['box1','box2','box3','box4','box5','box6','box7','box8'],
    nav_address:['nav1','nav2','nav3','nav4','nav5','nav6','nav7','nav8'],
    position_array:[{position:0},{position:0},{position:0},{position:0},{position:0},{position:0},{position:0},{position:0}],
    navElement:null,
    parentElement:null,
    current_obj:null,
    navCurrentObj:null,
    navChildElementHeight:null,
    offsetTop:0,
    currentObjStatus:null,
    box:null,
    showLoading:true,
    transitionName:'slide-left',
    showMoveDot:[],
    windowHeight: null,
    cirWidth:0,
    cart_switch:true,
    imgurls:imgurls,
    cart_count:0,
    move:false
    }
  },
  components:{
     myMainloading:main_loading
   },
  methods:{
            // 设置滚动球，加入购物车动画
            // 添加购物车
            add_cart:function(commondity_id,img_url,title,shop_name){
              console.log('add')
              if(!getData()){
                this.$router.push('/login')
                return
              }
             if(this.cart_switch){
              this.cart_switch = false

        var offset=$('#end').offset();
        $(window).resize(site);
        function site() {
            offset=$('#end').offset();
        }
              var addcar=$(this);
                var flyer=$('<p class="cir"></p>');
                flyer.fly({
                    start:{
                        left:event.pageX,
                        top:event.pageY
                    },
                    end:{
                        left:offset.left+this.cirWidth,
                        top:offset.top,
                        width:0,
                        height:0
                    }
                })
              this.$http({
                method:'get',
                url:'add_cart.php',
                params:{
                  user_id:getData().user_id,
                  commodity_id:commondity_id,
                  img_url:img_url,
                  shop_name:shop_name,
                  title:title
                }
              }).then((res)=>{
                console.log('yes = '+JSON.stringify(res.data))
                if(res.data.state === 1){
                this.cart_switch = true
                this.cart_count++
                this.move = true
                setTimeout(()=>{
                  this.move = false
                },500)
                }
              },(err)=>{
                console.log('err = '+err)
              })
             }else{
              this.openNotify()
             }
            },
             openNotify() {
                this.$dialog.notify({
                    mes: '你的操作过于频繁，请稍后再试！',
                    timeout: 5000,
                    callback: () => {
                        // 回调
                    }
                });
            },
  getHeight:function(){
    for(var a = 0;a<this.position_array.length;a++){
        this.position_array[a].position = document.getElementById("box"+(a+1)).offsetTop
    }
    this.position_array[0].position = 0
  },
  move_box(index,item){
    this.navCurrentObj = document.getElementById(this.nav_address[index])
    this.offsetTop = this.position_array[index].position
    this.myScroll()
  },
  changeNavStyle(index){
    if(this.currentObjStatus != this.data[index]){
      this.currentObjStatus = this.data[index]
    }else{
      return
    }
    this.navCurrentObj = document.getElementById(this.nav_address[index])
    if(this.navCurrentObj.offsetTop>this.parentElement.clientHeight/2){
      $('#child1_box').stop()
      $('#child1_box').animate({scrollTop:(this.navCurrentObj.offsetTop-this.parentElement.clientHeight/2+this.navChildElementHeight/2)+'px'}, 500);
    }else{
      $('#child1_box').stop()
       $('#child1_box').animate({scrollTop:'0px'}, 500);
    }
    this.current_obj = this.data[index]
  },
  myScroll(){
   $('#child2_box').animate({scrollTop:this.offsetTop+'px'}, 500);
  },
   init:function(){
              (function ($) {
  $.fly = function (element, options) {
    // 默认值
    var defaults = {
      version: '1.0.0',
      autoPlay: true,
      vertex_Rtop: 10, // 默认顶点高度top值
      speed: 1.2,
      start: {}, // top, left, width, height
      end: {},
      onEnd: $.noop
    };

    var self = this,
      $element = $(element);

    /**
     * 初始化组件，new的时候即调用
     */
    self.init = function (options) {
      this.setOptions(options);
      !!this.settings.autoPlay && this.play();
    };

    /**
     * 设置组件参数
     */
    self.setOptions = function (options) {
      this.settings = $.extend(true, {}, defaults, options);
      var settings = this.settings,
        start = settings.start,
        end = settings.end;

      $element.css({marginTop: '0px', marginLeft: '0px', position: 'fixed'}).appendTo('body');
      // 运动过程中有改变大小
      if (end.width != null && end.height != null) {
        $.extend(true, start, {
          width: $element.width(),
          height: $element.height()
        });
      }
      // 运动轨迹最高点top值
      var vertex_top = Math.min(start.top, end.top) - Math.abs(start.left - end.left) / 3;
      if (vertex_top < settings.vertex_Rtop) {
        // 可能出现起点或者终点就是运动曲线顶点的情况
        vertex_top = Math.min(settings.vertex_Rtop, Math.min(start.top, end.top));
      }

      /**
       * ======================================================
       * 运动轨迹在页面中的top值可以抽象成函数 y = a * x*x + b;
       * a = curvature
       * b = vertex_top
       * ======================================================
       */

      var distance = Math.sqrt(Math.pow(start.top - end.top, 2) + Math.pow(start.left - end.left, 2)),
        // 元素移动次数
        steps = Math.ceil(Math.min(Math.max(Math.log(distance) / 0.05 - 75, 30), 100) / settings.speed),
        ratio = start.top == vertex_top ? 0 : -Math.sqrt((end.top - vertex_top) / (start.top - vertex_top)),
        vertex_left = (ratio * start.left - end.left) / (ratio - 1),
        // 特殊情况，出现顶点left==终点left，将曲率设置为0，做直线运动。
        curvature = end.left == vertex_left ? 0 : (end.top - vertex_top) / Math.pow(end.left - vertex_left, 2);

      $.extend(true, settings, {
        count: -1, // 每次重置为-1
        steps: steps,
        vertex_left: vertex_left,
        vertex_top: vertex_top,
        curvature: curvature
      });
    };

    /**
     * 开始运动，可自己调用
     */
    self.play = function () {
      this.move();
    };

    /**
     * 按step运动
     */
    self.move = function () {
      var settings = this.settings,
        start = settings.start,
        count = settings.count,
        steps = settings.steps,
        end = settings.end;
      // 计算left top值
      var left = start.left + (end.left - start.left) * count / steps,
        top = settings.curvature == 0 ? start.top + (end.top - start.top) * count / steps : settings.curvature * Math.pow(left - settings.vertex_left, 2) + settings.vertex_top;
      // 运动过程中有改变大小
      if (end.width != null && end.height != null) {
        var i = steps / 2,
          width = end.width - (end.width - start.width) * Math.cos(count < i ? 0 : (count - i) / (steps - i) * Math.PI / 2),
          height = end.height - (end.height - start.height) * Math.cos(count < i ? 0 : (count - i) / (steps - i) * Math.PI / 2);
        $element.css({width: width + "px", height: height + "px", "font-size": Math.min(width, height) + "px"});
      }
      $element.css({
        left: left + "px",
        top: top + "px"
      });
      settings.count++;
      // 定时任务
      var time = window.requestAnimationFrame($.proxy(this.move, this));
      if (count == steps) {
        window.cancelAnimationFrame(time);
        // fire callback
        settings.onEnd.apply(this);
      }
    };

    /**
     * 销毁
     */
    self.destroy = function(){
      $element.remove();
    };

    self.init(options);
  };

  // add the plugin to the jQuery.fn object
  $.fn.fly = function (options) {
    return this.each(function () {
      if (undefined == $(this).data('fly')) {
        $(this).data('fly', new $.fly(this, options));
      }
    });
  };
})(jQuery);



// 兼容ie
(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame){
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame){
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}());
            }, 
  },
  mounted:function(){
    var parentTop;
   this.parentElement = document.getElementById('child2_box');
   this.navElement = document.getElementById('child1_box');
   this.box = document.getElementById('parent')
   this.cirWidth = document.getElementById('end').clientWidth/2
   this.windowHeight = window.innerHeight
   this.init()
   document.getElementById('end').onclick = ()=>{
    if(!getData()){
      this.$router.push('/login')
      return
    }
    this.$router.push('/cart')
   }
    this.$http({
      methods:'get',
      url:'commodity.php',
      params:{
        state:getData()?1:0,
        user_id:getData() ? getData().user_id : 0
      }
    }).then((res)=>{
      this.data = res.data.content
      this.cart_count = res.data.cart_count
      this.showLoading = false
      this.$nextTick(function(){
        this.navChildElementHeight = document.getElementById('nav1').clientHeight/2;
        this.getHeight();
    this.box.style.height = (window.screen.height - parseInt(document.documentElement.style.fontSize)*11.5) + 'px'
      })
    },(err)=>{

    })
   this.parentElement.onscroll=() => {   
    parentTop = this.parentElement.scrollTop
    if(this.position_array[7].position<=parentTop){
      this.changeNavStyle(7)
    }else if(this.position_array[6].position<=parentTop){
      this.changeNavStyle(6)
    }else if(this.position_array[5].position<=parentTop){
      this.changeNavStyle(5)
    }else if(this.position_array[4].position<=parentTop){
      this.changeNavStyle(4)
    }else if(this.position_array[3].position<=parentTop){
      this.changeNavStyle(3)
    }else if(this.position_array[2].position<=parentTop){
      this.changeNavStyle(2)
    }else if(this.position_array[1].position<=parentTop){
      this.changeNavStyle(1)
    }else if(this.position_array[0].position<=parentTop){
      this.changeNavStyle(0)
    }
  }  
  }
}
</script>
<style>
@keyframes mymove{
       0%   { transform: scale(1) }
       25%  { transform: scale(.8) }
       50%  { transform: scale(1.1) }
       75%  { transform: scale(.9) }
       100% { transform: scale(1) }
    }
    @-moz-keyframes mymove{
       0%   { transform: scale(1) }
       25%  { transform: scale(.8) }
       50%  { transform: scale(1.1) }
       75%  { transform: scale(.9) }
       100% { transform: scale(1) }
    }
    @-webkit-keyframes mymove{
       0%   { transform: scale(1) }
       25%  { transform: scale(.8) }
       50%  { transform: scale(1.1) }
       75%  { transform: scale(.9) }
       100% { transform: scale(1) }
    }
    @-o-keyframes mymove{
       0%   { transform: scale(1) }
       25%  { transform: scale(.8) }
       50%  { transform: scale(1.1) }
       75%  { transform: scale(.9) }
       100% { transform: scale(1) }
    }

  .cir{width: 1.1rem;height: 1.1rem;position: fixed;z-index: 9999;border-radius:50%; ; display: inline-block; background-color: #3190e8;}
.parent{width: 16.0rem;height: 19.15rem; margin-top: 0.5rem;overflow: scroll;}
.child1_box{width: 3.2rem;height: 100%;position: absolute;left: 0.0rem;top: 0.0rem;overflow: scroll;}
.child1{width: 3.2rem;height: 1.0rem;font-size: 0.5rem;top: 0.0rem;left: 0.0rem;z-index: 1; position: static;}
.child1 li{width: 100%;height: 2.5rem;font-size: 0.5rem !important;border-bottom: 0.05rem solid #e9e9e9; display: inline-block;box-sizing: border-box;border-left: 0.1rem solid #f5f5f5; float: none;position: static; background-color: #f5f5f5;}
.child1 li span{line-height: 0.65rem;position: relative;top: 50%;transform: translate(0,-50%);}
.child1 .active{border-left: 0.1rem solid #007fff; background-color: white;}
.child2_box{width: 14.0rem;height: 100%;position: absolute;text-align: right; right: 0.0rem;top: 0.0rem;overflow: scroll;}
.child2_box::-webkit-scrollbar{width: 0;height: 0;} 
.child22{width:12.8rem;height: 15rem; right: 0.0rem;display: inline-block; position: static;}
.child22 li{width: 12.8rem;height: auto; position: static; float: none;}
.child1_box::-webkit-scrollbar{width: 0;height: 0;} 
.title{width: 100%;height: 1.2rem;line-height: 1.2rem;border-left: 0.1rem solid #ececec;box-sizing: border-box;padding-left: 0.25rem; text-align: left;font-size: 0.60rem; background-color: #f5f5f5;}
.title>span{font-size: 0.45rem !important;margin-left: 0.5rem; color: #999999;}
.shop_snapshot_box{width: 100%;height: 5.15rem; background-color: white;position: static;}
.shop_content{width: 12.3rem;height: 100%;border-bottom: 0.05rem solid #f5f5f5;float: right; box-sizing: border-box;position: static;}
.shop_content_top{width: 100%;height: 2.65rem;margin-top: 0.65rem; text-align: left;position: static;}
.shop_content_top img{width: 2.65rem;height: 2.65rem;vertical-align: top; display: inline-block;}
.shop_content_top p{width: 8.35rem;height: 100%; display: inline-block;position: static;}
.shop_content_text{padding-left: 0.5rem;position: static;}
.shop_content_text em{font-size: 0.7rem;margin-bottom: 0.15rem; display: block; font-weight: bold; color: black;position: static;}
.shop_content_text span{width: 8.35rem; font-size: 0.6rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis; color: #999999;position: static;}
.shop_content_text strong{font-size: 0.6rem;color: #999999;position: static;}
.shop_content_price{width: 9.35rem;height: 100%;text-align: left; float: right;}
.shop_content_price em{font-size: 0.65rem;top: 0.3rem;font-weight: bold; position: relative; color: #ff3d00;}
.shop_content_price span{width: 1.1rem;height: 1.1rem;line-height: 1.1rem; font-size: 1rem;top: 0.4rem;right: 0.65rem;border-radius: 50%; float: right; text-align: center;position: relative; background-color: #3190e8;color: white;}
.shop_cart{width: 100%;height: 2.25rem;left: 0.0rem; bottom: 0.0rem; position: fixed; background-color: rgba(0,0,0,0.9);}
.shop_cart>span{width: 3.45rem;height: 2.25rem;line-height: 2.5rem; top: 0.0rem;right: 0.0rem;font-size: 0.6rem; display: inline-block;position: absolute; color: #b0b0b1; background-color: rgba(83,83,86,0.8)}
.shop_cart p{width: 2.15rem;height: 2.15rem;border-radius: 50%;left: 0.5rem;top: -0.6rem;position: absolute; background-color: #333333;}
.shop_cart img{width: 1.7rem !important;height: 1.7rem !important;display: inline-block;line-height: 2.15rem; font-size: 1rem; position: relative; border-radius: 50%;color: #5f5f63;padding: 0.25rem;}
.count{border-radius: 0.5rem;font-size: 0.6rem;top: 0rem;right: -0.2rem; padding-left:0.2rem;padding-right: 0.2rem; position: absolute; z-index:1;color: white; background-color: red;}
.move{animation: mymove .5s ease-in-out;}
.shop_cart .active{background-color: #3190e8;}
</style>
