<template>
  <div class="security">
    <my-header :security='true'></my-header>
    <div>
      <p class="header_portrait" @touchstart='start_change("10")' @touchend='end_change("10")' id='10'>
        <em>头像</em>
        <img :src="data.head_portrait">
        <input type="file" class="file" accept="image/*;capture=camera" name="img" @change="clipImg($event)">
      </p>
      <p class="user_name" @touchstart='start_change("1")' @touchend='end_change("1")' id="1" @click="data.name_state === '1' ? openConfrim() : $router.push('/modify_username')">
        <em>用户名</em>
        <span>{{data.name}}</span>
      </p>
    </div>
    <div class="bind">
      <p style="color: #999999;">账号绑定</p>
      <p @touchstart='start_change("2")' @touchend='end_change("2")' id="2">
        <img src="../../../../../static/images/my/phone.png">
        <em>手机</em>
        <span style="color: #999999;">{{data.number}}</span>
      </p>
      <p @touchstart='start_change("3")' @touchend='end_change("3")' id="3">
        <img src="../../../../../static/images/my/wechat.png">
        <em>微信</em>
        <span>未绑定</span>
      </p>
      <p @touchstart='start_change("4")' @touchend='end_change("4")' id="4">
        <img src="../../../../../static/images/my/qq.png">
        <em>QQ</em>
        <span>未绑定</span>
      </p>
      <p @touchstart='start_change("5")' @touchend='end_change("5")' id="5">
        <img src="../../../../../static/images/my/sina.png">
        <em>微博</em>
        <span>未绑定</span>
      </p>
      <p @touchstart='start_change("6")' @touchend='end_change("6")' id="6">
        <img src="../../../../../static/images/my/taobao.png">
        <em>淘宝</em>
        <span>未绑定</span>
      </p>
    </div>
    <div class="security_setting">
      <p style="color: #999999;">安全设置</p>
      <p @touchstart='start_change("7")' @touchend='end_change("7")' id="7" @click="$router.push('/setting_password')">
        <em>登录密码</em>
        <span>点击修改</span>
      </p>
      <p @touchstart='start_change("8")' @touchend='end_change("8")' id="8">
        <em>支付密码</em>
        <span>未设置</span>
      </p>
      <p @touchstart='start_change("9")' @touchend='end_change("9")' id="9">
        <em>小额免密支付</em>
        <span>未开启</span>
      </p>
    </div>
    <div class="clip-wp" id="clip-wp" v-show="isClip">
      <div id="container"></div>
      <button id="save-img" @click="saveImg">保存</button>
    </div>
    <my-loading v-show="loading"></my-loading>
  </div>
</template>
<style lang="scss" scoped>
.header_portrait {
  width: 100%;
  height: 3.05rem;
  line-height: 3.05rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-bottom: 0.05rem solid #e9e9e9;
  text-align: left;
  background-color: white;
img {
  width: 2.5rem;
  height: 2.5rem;
  display: inline-block;
  top: 0.3rem;
  right: 0.5rem;
  border-radius: 50%;
  position: absolute;
}
}

.user_name {
  width: 100%;
  height: 2.1rem;
  border-bottom: 0.05rem solid #e9e9e9;
  line-height: 2.1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: left;
  background-color: white;
span {
  float: right;
  color: #999999;
}
}

.bind,
.security_setting {
  width: 100%;
  margin-top: 0.5rem;
	p {
  width: 100%;
  height: 2.1rem;
  line-height: 2.1rem;
  text-align: left;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-bottom: 0.05rem solid #e9e9e9;
  background-color: white;
}
span {
  float: right;
  color: #2898ff;
}
}

.bind img {
  width: 1.1rem;
  margin-right: 0.25rem;
  vertical-align: middle;
  display: inline-block;
}

.header_portrait_popup {
  width: 100%;
  height: 7rem;
p {
  padding-left: 1.0rem;
  padding-right: 1.0rem;
  text-align: left;
}
}

.file {
  width: 100%;
  height: 100%;
  top: 0.0rem;
  left: 0.0rem;
  opacity: 0;
  position: absolute;
  background-color: red;
}

.upload-wp {
  text-align: center;
  width: 300px;
  margin: 20px auto 0;
button {
  padding: 5px 10px;
}
p {
  word-wrap: break-word;
  font-size: 12px;
}
}

.clip-wp {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 11;
  background-color: #000;
  text-align: center;
#container {
  background-color: #000;
  text-align: center;
  width: 100%;
  left: 0;
  right: 0;
  top: 20px;
  bottom: 80px;
  margin: 0 auto;
  position: absolute;
}
#save-img {
  position: absolute;
  bottom: 20px;
  width: 90%;
  left: 5%;
  height: 42px;
  line-height: 42px;
  color: #fff;
  background-color: #32c47c;
  border-radius: 20px;
}
#image-box {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  margin: auto;
}
#cover-box {
  position: absolute;
  z-index: 9999;
  display: none;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  margin: auto;
}
}

</style>
<script type="text/babel">
import header from '@/components/common/header'
import clip from '@/plugin/clip'
import loading from '@/components/common/loading'
import { getData, getSessionStorage } from '@/config/common'
export default {
  data() {
    return {
      popup_show: true,
      isClip: false,
      isUpload: false,
      clipUrl: '',
      data: getData(),
      head_portrait: getData().head_portrait ? getData().head_portrait : '../../../static/images/my/header.png',
      noScoll: function(evt) {
        this.isClip && evt.preventDefault();
      },
      clip: {},
      loading: false
    }
  },
  components: {
    myHeader: header,
    myLoading: loading
  },
  mounted: function() {

  },
  methods: {
    start_change: function(id) {
      document.getElementById(id).style.backgroundColor = 'rgba(0,0,0,0.1)'
    },
    end_change: function(id) {
      document.getElementById(id).style.backgroundColor = 'white'
    },
    clipImg(event) {
      if (getData().state) {
        this.clip = new clip('container', this);
        this.clip.init(event.target.files[0], document.body.clientWidth, document.body.clientWidth);
        this.isClip = true;
        document.body.addEventListener('touchmove', this.noScoll, false);
      } else {
        console.log('===' + getData().state)
        this.$router.push('/login')
      }
    },
    saveImg() {
      var _this = this
      this.isClip = false;
      this.clip.save();
      document.body.removeEventListener('touchmove', this.noScoll, false);
      //上传到服务器或进行相关操作
      this.isUpload = true
      this.loading = true
      setTimeout(() => {
        $.post('http://106.14.144.79/element/change_data.php', { "head_portrait": this.clipUrl, action: 'head_portrait', 'user_id': parseInt(getData().user_id) }, (data) => {
          this.loading = false
          var json_data = JSON.parse(data)
          if (json_data.state === 1) {
            var data = getData()
            data.head_portrait = _this.clipUrl
            _this.data = data
            getSessionStorage().data = JSON.stringify(data)
          }
        })
      }, 300)


    },
    openConfrim: function() {
      this.$dialog.confirm({
        title: '抱歉通知',
        mes: '亲！每个用户只能修改一次哦！',
        opts: () => {
          // this.$dialog.toast({mes: '你点了确定', timeout: 1000});
        }
      });
    }
  }
}
// this.$store.state.user_info.user_id

</script>
