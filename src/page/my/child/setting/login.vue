<template>
	<div class="setting_password">
		<my-header :login='true'></my-header>
	<yd-cell-group>
        <yd-cell-item class="name">
            <span slot="left">用户名：</span>
            <yd-input slot="right" required v-model="name" max="20" placeholder="请输入您的用户名" regex="^([\u4e00-\u9fa5]|[\w+]){1,16}$"></yd-input>
        </yd-cell-item>
        <yd-cell-item class="password">
            <span slot="left">密码：</span>
            <yd-input slot="right" type="password" v-model="password" required placeholder="请输入您的密码" regex="^\w{6,16}$"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
			<p style="font-size: 0.6rem; color: red;" v-if="show">用户或密码不正确</p>
			<p style="padding-left:0.5rem;padding-right: 0.5rem;">
				<em>忘记密码？</em>
				<strong style="float: right;font-size: 0.6rem;color: #2395ff;" @click="$router.push('/register')">免费注册！</strong>
			</p>
			<button class="hor" @click='login'>登录</button>
		</div>
</template>
<style>
	.setting_password p{margin-top: 0.5rem;margin-bottom: 0.5rem;font-size: 0.6rem;padding-left: 0.5rem; text-align: left; color: #999999;}
	.setting_password button{width: 15.35rem;height: 2.15rem;font-size: 0.6rem; margin-top: 0.5rem; border-radius: 0.25rem; color: white;background-color: #1ce33d;}
	.name{text-align: left;}
	.name,.password{width: 100%;height: 2.25rem !important;}
	.name .cell-left,.password .cell-left{width: 3.5rem;line-height: 2.25rem; padding-left:0.5rem; display: inline-block !important;}
	.name .cell-right,.password .cell-right{width: 12rem;line-height: 2.25rem; display: inline-block !important;}
	.setting_password input{font-size: 0.6rem !important}
	.m-input>.input-warn:after{font-size: 0.6rem !important;}
	.m-input>.input-password:after{font-size: 0.6rem !important;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
	export default{
		data(){
			return{
				name:'',
				password:'',
				show:false
			}
		},
		components:{
			myHeader:header
		},
		methods:{
			login:function(){
				this.$http({
					method:'post',
					url:'login.php',
					params:{
						name:this.name,
						password:this.password
					}
				}).then((res) => {
					console.log(res)
					if(res.data.state === 1){
						this.show = false
						if(typeof(Storage) !== "undefined") {  
           				  sessionStorage.data = JSON.stringify(res.data)
    					} else {  
        				console.log("抱歉！您的浏览器不支持 Web Storage ...")
    					}  
    					this.$router.push('/takeout')
					}else{
						this.show = true
					}
				},(err) => {
				console.log('error at login.vue')					
				})
				
			}
		}
	}
</script>