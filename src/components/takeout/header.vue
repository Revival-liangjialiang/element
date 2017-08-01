<template>
  <div class="header_box">
    <div class="header_child1">
      <div class="header_child1_left" @click='getData()?jump("/select_address"):$router.push("/login")'><i class="position icon iconfont">&#xe630;</i><span class="header_child1_left_text">{{getposition}}<span class="mask" :class='{maskactive:maskbv}'></span></span><i class="position icon iconfont">&#xe665;</i></div>
      <div class="header_child1_right">
        <div class='weather'>
          <span class='temperature'>{{temperature}}°</span>
          <p class='weather_text'>{{weather}}</p>
        </div>
        <i class="iconfont weather_icon" id="weather_icon"></i>
      </div>
    </div>
    <div class="header_child2">
      <span class="header_child2_text" @click='jump("/seach")'><i class="iconfont header_child2_icon">&#xe60a;</i>&nbsp搜索商家、商品名称</span>
    </div>
    <ul class="header_child3">
      <li v-for='item in list' :to='item.url' :key='item.id'>{{item.title}}</li>
    </ul>
  </div>
</template>
<style lang='scss'>
@import '../../style/common';
.header_box {
  width: 100%;
  height: 5.8rem;
  overflow: hidden;
  background-color: $theme;
}

.header_child1 {
  width: 14.2rem;
  height: 1.2rem;
  margin-left: auto;
  overflow: visible;
  margin-right: auto;
  text-align: left;
  margin-top: 1.05rem;
}

.header_child1_left {
  width: 8.9rem;
  height: 1.2rem;
  display: inline-block;
  text-align: left;
}

.header_child1_left_text {
  font-size: 0.75rem;
  margin-left: 0.25rem;
  position: relative;
  font-weight: bold;
  color: white;
}

.position {
  line-height: 1.2rem;
}

.mask {
  width: 100%;
  height: 100%;
  left: 0px;
  display: inline-block;
  position: absolute;
}

.maskactive {
  box-shadow: -0.45rem 0rem 0.6rem #0096FF inset;
}

.testbutton {
  width: 2.5rem;
  height: 1.5rem;
  font-size: 0.95rem;
  color: red;
  background-color: yellow;
}

.header_child1_right {
  width: auto;
  height: 1.70rem;
  top: -0.25rem;
  overflow: visible;
  display: inline-block;
  float: right;
  i {
    width: 1.70rem;
    height: 1.70rem;
    margin-left: 0.30rem;
    font-size: 1.30rem;
    position: static;
  }
}

.temperature {
  font-size: 0.62rem;
  color: white;
}

.weather {
  width: auto;
  height: 1.70rem;
  overflow: visible;
  vertical-align: top;
  display: inline-block;
  p {
    font-size: 0.50rem;
    position: absolute;
    right: 0rem;
    white-space: nowrap;
    color: white;
  }
}

.header_child2 {
  width: 14.75rem;
  height: 1.65rem;
  margin-top: 0.5rem;
  font-size: 0.0rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.0rem;
  background: white;
  span,
  i {
    color: #999999;
  }
  i {
    font-size: 0.65rem;
  }
}

.header_child2_text {
  height: 1.65rem;
  font-size: 0.65rem;
  line-height: 1.65rem;
  color: #333333;
}

.header_child3 {
  width: 14.2rem;
  height: 0.6rem;
  margin-top: 0.35rem;
  margin-left: auto;
  margin-right: auto;
  li {
    line-height: 0.6rem;
    height: 0.6rem;
    margin-right: 0.6rem;
    font-size: 0.6rem;
    text-align: left;
    color: white;
  }
}

</style>
<script type="text/babel">
import { weather_data } from '../../data/header'
import { getData } from '@/config/common'
export default {
  data() {
    return {
      position: '加载中...',
      maskbv: false,
      list: [{ title: '水果', url: 'test' }, { title: '水果甜点', url: 'test' }, { title: '水果', url: 'test' }, { title: '水果', url: 'test' }, { title: '水果', url: 'test' }, { title: '水果', url: 'test' }],
      weather: '',
      temperature: null,
      weather_icon: '',
      city: '',
      getData: getData
    }
  },
  computed: {
    getposition() {
      // get store data 
      if (this.position.length > 8) {
        this.position = this.position.slice(0, 8)
        this.maskbv = true
      } else {
        this.maskbv = false
      }
      return this.position
    }
  },
  methods: {
    init: function() {
      var map, geolocation, _this
      _this = this
      map = new AMap.Map('container', {
        resizeEnable: true
      });
      map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          buttonPosition: 'RB'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
        AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
      });
      //解析定位结果
      function onComplete(data) {
        AMap.plugin('AMap.Geocoder', () => {
          var geocoder = new AMap.Geocoder({
            city: "010" //城市，默认：“全国”
          });
          geocoder.getAddress(data.position.getLng() + "," + data.position.getLat(), (status, result) => {
            if (status == 'complete') {
              // 获得当前地理位置
              _this.position = result.regeocode.formattedAddress
              _this.city = result.regeocode.addressComponent.city
              _this.get_weather()
            }
          })
        });
      }
      //解析定位错误信息
      function onError(data) {
        this.position = '定位失败'
      }
    },
    jump(path) {
      this.$router.push(path)
    },
    get_weather: function() {
      this.$http({
        method: "GET",
        url: "http://restapi.amap.com/v3/weather/weatherInfo?key=9ec052e3334ecf831426e89f1c3338fe&city=" + this.city,
      }).then((response) => {
        this.weather = response.data.lives[0].weather
        this.temperature = response.data.lives[0].temperature
        weather_data.forEach((item, index) => {
          if (this.weather === item.weather) {
            this.weather_icon = item.icon
            document.getElementById('weather_icon').innerHTML = item.icon
          }
        })
      }, (error) => {
        console.log('error at components/takeout/header.vue')
      })
    }
  },
  mounted: function() {
    this.init()
  }
}

</script>
