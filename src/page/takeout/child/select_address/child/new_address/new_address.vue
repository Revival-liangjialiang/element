<template>
  <div>
    <my-header :new_address="true"></my-header>
    <div class="new_address">
      <div class="user">
        <p style="width:12.25rem; text-align: left;display:inline-block;">
          <span>
			联系人
		</span>
          <input type="text" name="username" placeholder="姓名" ref='name'>
        </p>
        <div class="sex">
          <p ref='name_err' v-if='name' style="font-size: 0.6rem; color: red;" class="iconfont">&#xe66c;&nbsp输入格式不对</p>
          <button :class="{active:sex}" @click="sex = true">先生</button>
          <button :class="{active:!sex}" @click="sex = false">女士</button>
        </div>
      </div>
      <p class="phone cf">
        <span>
			电话
		</span>
        <input type="text" name="username" placeholder="收货人电话" ref="phone">
        <em>+通讯录</em>
      </p>
      <div class="address">
        <p style="margin-left: 3.2rem; font-size: 0.6rem; color: red;" class="iconfont" v-if='phone'>&#xe66c;&nbsp号码格式不对</p>
        <p class="sele">
          <span>地址</span>
          <textarea type="text" name="address" placeholder="小区/写字楼/学校" ref="address"></textarea>
          <i class="iconfont" @click="init_position">定位</i>
        </p>
        <p ref='name_err' v-if='address' style="width: 12.25rem;display: inline-block; text-align: left; font-size: 0.6rem; color: red;" class="iconfont">&#xe66c;&nbsp地址不能为空</p>
      </div>
      <p class="label">
        <span>标签</span>
        <button>家</button>
        <button>公司</button>
        <button>学校</button>
      </p>
      <button class="determine" @click="submit">确定</button>
    </div>
    <loading v-if='show'></loading>
  </div>
</template>
<style lang="scss" scoped>
.new_address {
  width: 100%;
  height: auto;
  padding-left: 0.5rem;
  margin-top: 0.6rem;
  background-color: white;
}

.user {
  width: 100%;
  height: auto;
  text-align: right;
  margin-bottom: 0.5rem;
  span {
    height: 1.95rem;
    line-height: 1.95rem;
    font-size: 0.7rem;
    text-align: left;
  }
}

.sex {
  width: 12.29rem;
  height: auto;
  text-align: left;
  display: inline-block;
  border-top: 0.05rem solid #e9e9e9;
  button {
    width: 3.1rem;
    height: 1.45rem;
    font-size: 0.7rem;
    border: 0.05rem solid #e9e9e9;
    border-radius: 0.25rem;
    margin-top: 0.4rem;
    margin-right: 0.4rem;
  }
  .active {
    border: 0.05rem solid #4499e8;
    color: #4499e8
  }
}

.phone {
  width: 100%;
  height: 1.95rem;
  text-align: left;
  span {
    width: 3.2rem;
    height: 1.95rem;
    line-height: 1.95rem;
    font-size: 0.7rem;
  }
  em {
    margin-left: 0.35rem;
    color: #6ab7ff
  }
}

.phone input,
.address input {
  width: 8.5rem;
}

.address {
  width: 100%;
  height: 3.5rem;
  text-align: right;
  border-top: 0.05rem solid #e9e9e9;
  border-bottom: 0.05rem solid #e9e9e9;
  span {
    width: 3.2rem;
    height: 1.95rem;
    vertical-align: top;
    line-height: 1.95rem;
  }
  .sele {
    height: 1.95rem;
    text-align: left;
    textarea {
      width: 10rem;
      height: 3rem;
      padding-top: 0.5rem;
      font-size: 0.6rem;
      border: none;
    }
  }
  i {
    font-size: 0.60rem;
    top: 0.55rem;
    right: 0.6rem;
    position: absolute;
    color: #2395ff;
  }
}

.detailed {
  width: 12.25rem !important;
  height: 1.95rem;
  display: inline-block;
  font-size: 0.7rem;
  border-top: 0.05rem solid #e9e9e9;
}

.label {
  width: 100%;
  height: 1.95rem;
  text-align: left;
  line-height: 1.95rem;
  span {
    width: 3.2rem;
    height: 1.95rem;
    vertical-align: middle;
  }
  button {
    width: 3.0rem;
    height: 1.4rem;
    vertical-align: middle;
    margin-right: 0.15rem;
    border: 0.05rem solid #e9e9e9;
    border-radius: 0.15rem;
  }
}

.determine {
  width: 15.3rem;
  height: 2.15rem;
  font-size: 0.75rem;
  margin-top: 1.0rem;
  margin-left: -0.5rem;
  color: white;
  border-radius: 0.15rem;
  background-color: #4dc060
}

</style>
<script type="text/babel">
import header from '@/components/common/header'
import loading from '@/components/common/loading'
import { getData } from '@/config/common'
export default {
  data() {
    return {
      sex: true,
      name: false,
      phone: false,
      address: false,
      show: false
    }
  },
  components: {
    myHeader: header,
    loading: loading
  },
  mounted: function() {
    this.$refs.name.oninput = () => {
      if (/[^\w\u4e00-\u9fa5]/g.test(this.$refs.name.value)) {
        this.name = true
        return
      }
      this.name = false
    }
    this.$refs.phone.oninput = () => {
      if (!(/^1[34578]\d{9}$/.test(this.$refs.phone.value))) {
        this.phone = true
        return
      }
      this.phone = false
    }
    this.$refs.address.oninput = () => {
      if (!(this.$refs.address.value.length > 1)) {
        this.address = true
        return
      }
      this.address = false
    }
  },
  methods: {
    submit: function() {
      this.show = true
      if (!this.name && !this.phone && this.$refs.address.value.length > 1) {
        this.$http({
          method: 'get',
          url: 'add_address.php',
          params: {
            address: this.$refs.address.value,
            name: this.$refs.name.value,
            sex: this.sex ? '先生' : '女士',
            phone: this.$refs.phone.value,
            user_id: getData().user_id
          }
        }).then((res) => {
          this.show = false
          this.$router.go(-1)
        }, (err) => {

        })
      }
    },
    init_position: function() {
      this.$refs.address.value = '加载中...'
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
              _this.$refs.address.value = result.regeocode.formattedAddress
            }
          })
        });
      }
      //解析定位错误信息
      function onError(data) {
        console.log('定位失败')
      }

    }
  }
}

</script>
