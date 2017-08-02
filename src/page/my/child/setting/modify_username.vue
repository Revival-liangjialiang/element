<template>
  <div class="modify_username">
    <my-header :modify_username='true'></my-header>
    <yd-cell-group>
      <yd-cell-item class="name">
        <span slot="left">用户名：</span>
        <yd-input slot="right" required v-model="name" max="20" placeholder="请输入您的用户名" regex="^([\u4e00-\u9fa5]|[\w+]){1,16}$"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <p>用户名只能修改一次(5-25个字符)</p>
    <button class="hor" @click="change">确认修改</button>
    <my-loading v-show="loading"></my-loading>
  </div>
</template>
<style lang="scss" scoped>
.modify_username{
p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  padding-left: 0.5rem;
  text-align: left;
  color: #999999;
}
button {
  width: 15.35rem;
  height: 2.15rem;
  border-radius: 0.25rem;
  color: white;
  background-color: #cccccc;
}
}

.name .cell-left,
.password .cell-left {
  width: 3.5rem;
  line-height: 2.25rem;
  padding-left: 0.5rem;
  display: inline-block !important;
}

.name span {
  padding-top: 0.025rem;
}

</style>
<script type="text/babel">
import header from '@/components/common/header'
import { getData, getSessionStorage } from '@/config/common'
import loading from '@/components/common/loading'
export default {
  data() {
    return {
      name: '',
      data: getData(),
      loading: false
    }
  },
  components: {
    myHeader: header,
    myLoading: loading
  },
  methods: {
    change: function() {
      if (!(/^([\u4e00-\u9fa5]|[\w+]){1,16}$/.test(this.name))) {
        return
      }
      this.loading = true
      $.post('http://106.14.144.79/element/change_data.php', { user_id: this.data.user_id, action: 'user_name', name: this.name }, (res) => {
        if (JSON.parse(res).state === 1) {
          var json = getData()
          json.name_state = '1'
          json.name = this.name
          getSessionStorage().data = JSON.stringify(json)
          this.loading = false
          this.$router.go(-1)
        } else {
          this.loading = false
          this.openConfrim()
        }
      })
    },
    openConfrim: function() {
      this.$dialog.confirm({
        title: '提示',
        mes: '修改失败，请检查网络是否已打开！',
        opts: () => {
          // this.$dialog.toast({mes: '你点了确定', timeout: 1000});
        }
      });
    }
  }
}

</script>
