<template>
  <div class="bottom_box">
    <p>
      <span>当前地址</span>
    </p>
    <p style="height: 2.2rem;background-color: white;">
      <span class="bold ell" style="line-height: 2.2rem; vertical-align: middle;">{{position}}</span>
      <i class="iconfont" style="color: #333333;">&#xe68a;</i>
      <span class="bold" style="width: auto !important; line-height: 2.2rem !important; color: #2395ff" @click="init()">重新定位</span>
    </p>
    <p>
      <span>收货地址</span>
    </p>
    <p style="height: 3.2rem;margin-bottom: 0.5rem; background-color: white;" v-for='item in data'>
      <span class="bold ell" style="margin-top: 0.40rem; line-height:1.5rem;">{{item.address}}</span>
      <em style="display: block;line-height: 0.6rem; font-size: 0.6rem;color: #999999;">{{item.name}}&nbsp&nbsp{{item.sex}}&nbsp&nbsp&nbsp&nbsp{{item.phone}}</em>
    </p>
    <p>
      <span>附近地址</span>
    </p>
    <ul class="nearby_address">
      <li>新市黄边村</li>
      <li>振东楼</li>
      <li>佳韵大厦</li>
      <li>更多地址&nbsp&nbsp></li>
    </ul>
    <transition :name="transitionName">
      <my-mainloading v-show='showLoading'></my-mainloading>
    </transition>
  </div>
</template>
<style lang='scss' scoped>
.bottom_box
{
p {
  width: 100%;
  height: 1.75rem;
  padding-left: 0.5rem;
  text-align: left;
}
span {
  width: 11rem;
  line-height: 1.75rem;
  font-size: 0.6rem;
}
}
.bold {
  line-height: 2.2rem;
  font-weight: bold;
  font-size: 0.71rem !important;
}

.nearby_address li {
  width: 100%;
  height: 2.15rem;
  border-bottom: 0.05rem solid #E6E6E6;
  font-size: 0.6rem;
  text-align: left;
  padding-left: 0.5rem;
  line-height: 2.15rem;
  background-color: white;
}

</style>
<script type="text/babel">
import { getData } from '@/config/common'
import main_loading from '@/components/common/main_loading'
export default {
  data() {
    return {
      data: [],
      showLoading: true,
      transitionName: 'slide-left',
      position: '加载中...'
    }
  },
  created: function() {
    this.$http({
      method: 'get',
      url: 'get_address.php',
      params: {
        user_id: getData().user_id
      }
    }).then((res) => {
      this.showLoading = false
      this.data = res.data.content
    }, (err) => {

    })
  },
  components: {
    myMainloading: main_loading
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

            }
          })
        });
      }
      //解析定位错误信息
      function onError(data) {
        this.position = '定位失败'
      }
    }
  }
}

</script>
