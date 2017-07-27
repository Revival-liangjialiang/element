<template>
	<div class="setting_password">
		<my-header :setting_password='true'></my-header>
		</yd-cell-group class="password">
			<yd-cell-item class="password">
            <span slot="left">密码：</span>
            <yd-input slot="right" type="password"  v-model="password_input" required :placeholder="placeholder" regex="^\w{6,16}$"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
			<p>密码长度(6-20个字符)</p>
			<p style="font-size: 0.6rem; color: red;" v-if="show">密码不正确</p>
			<button class="hor" @click="check_password">{{button_text}}</button>
	</div>
</template>
<style>
	.password{background-color: white !important;}
	.name,.password{width: 100%;height: 2.25rem !important;}
	.name .cell-left,.password .cell-left{width: 3.5rem;line-height: 2.25rem; padding-left:0.5rem; display: inline-block !important;}
	.name .cell-right,.password .cell-right{width: 12rem;line-height: 2.25rem; display: inline-block !important;}
	.setting_password p{margin-top: 0.5rem;margin-bottom: 0.5rem;font-size: 0.6rem;padding-left: 0.5rem; text-align: left; color: #999999;}
	.setting_password button{width: 15.35rem;height: 2.15rem;border-radius: 0.25rem; color: white;background-color: #1ce33d;}
	.toast-content{color: white !important;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
import {getData,getSessionStorage} from '@/config/common'
	export default{
		data(){
			return{
				placeholder:'请输入旧密码',
				password_input:'',
				button_text:'确认',
				state:0,
				data:getData(),
				show:false,
				value:'nono'
			}
		},
		components:{
			myHeader:header
		},
		methods:{
			check_password:function(){
				if(!(/^\w{6,16}$/.test(this.password_input))){
					console.log('?')
					return
				}
				if(this.state===0){
				$.post('http://106.14.144.79/element/change_data.php',{password:this.password_input,user_id:this.data.user_id,action:'password'},(res)=>{
					console.log(res)
					if(JSON.parse(res).state===1){
						this.state = 1
						this.button_text = '确认修改'
						this.placeholder = '请输入新密码'
						this.password_input = ''
						if(this.show){
							this.show = false
						}
					}else{
						this.show = true
					}
				})
			}else{
				$.post('http://localhost/element/change_data.php',{new_password:this.password_input,user_id:this.data.user_id,action:'modify_password'},(res)=>{
					if(JSON.parse(res).state===1){
						this.toastSuccess()
						this.$router.go(-1)
					}else{
						this.openConfrim()
					}
				})
			}
			},
			openConfrim:function(){
                this.$dialog.confirm({
                    title: '提示',
                    mes: '修改失败，请检查网络是否已打开！',
                    opts: () => {
                        // this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                    }
                });
            },
            toastSuccess:function(){
                this.$dialog.toast({
                    mes: '修改成功！',
                    timeout: 1500,
                    icon: 'success'
                });
            }
		}
	}
</script>