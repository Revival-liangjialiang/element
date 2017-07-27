<template>
	<div class="register">
		<my-header :register='true'></my-header>
			<yd-cell-group>
        <yd-cell-item class="name">
            <span slot="left">用户名：</span>
            <yd-input slot="right" required v-model="name_input" max="20" placeholder="6~16个字符长度，不包含非法字符" regex="^([\u4e00-\u9fa5]|[\w+]){1,16}$"></yd-input>
        </yd-cell-item>
        <yd-cell-item class="password">
            <span slot="left">密码：</span>
            <yd-input slot="right" type="password" v-model="password_input" required placeholder="6~16个字符长度，不包含非法字符" regex="^\w{6,16}$"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
			<button class="hor" @click='register'>注册</button>
		</div>
</template>
<style>
	.register button{width: 15.35rem;height: 2.15rem;margin-top: 0.5rem; border-radius: 0.25rem; color: white;background-color: #1ce33d;}
	.name,.password{width: 100%;height: 2.25rem;}
	.m-input>.input-warn:after,.m-input>.input-password:after{font-size: 0.7rem;}
	.name,.password{width: 100%;height: 2.25rem !important;}
	.name .cell-left,.password .cell-left{width: 3.5rem;line-height: 2.25rem; padding-left:0.5rem; display: inline-block !important;}
	.name .cell-right,.password .cell-right{width: 12rem;line-height: 2.25rem; display: inline-block !important;}
	.m-input>.input-warn:after{font-size: 0.6rem !important;}
	.m-input>.input-password:after{font-size: 0.6rem !important;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
	export default{
		data(){
			return{
				name_input: '',
                password_input: ''
			}
		},
		components:{
			myHeader:header
		},
		methods:{
			register:function(){
				if(!(/^([\u4e00-\u9fa5]|[\w+]){1,16}$/.test(this.name_input))||!(/^\w{6,16}$/.test(this.password_input))){
					return
				}
				this.$http({
					method:'post',
					url:'register.php',
					params:{
						name:this.name_input,
						password:this.password_input
					}
				}).then((res) => {
					console.log(res.data)
					if(res.data.state === 1){
						console.log('register success')
						this.$store.state.login = true
						this.$router.push('/login')
					}else if(res.data.state === -1){
						console.log('register fail')
					}
				},(err) => {
				console.log('error at register.vue')					
				})
				
			}
		}
	}
</script>