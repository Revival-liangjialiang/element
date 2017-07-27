<template>
	<div class="cover_box" id="cover_box">
	<ul class="left_move" id="left_move">
	<li v-for="(item,index) in move_data" @click="select(item,item.path)" :class="{active:item===select_obj||(index===0&&select_obj===null)}">
		{{item.title}}
	</li>
	</ul>
	</div>
</template>
<style scoped>
	.cover_box{width: 16.0rem;height: 2.0rem;overflow: scroll;background-color: white;}
	.cover_box::-webkit-scrollbar{width: 0;height: 0;}
	.left_move{width: auto; height: 2.0rem;padding-top: 0.45rem;left: 0.0rem; white-space: nowrap;position: absolute;}
	.left_move li{width: 3.35rem;height: 1.2rem;margin-left: 0.45rem;font-size: 0.6rem; line-height: 1.2rem;border-radius: 0.8rem; border:0.05rem solid #e9e9e9; display: inline-block; float: none;}
	.left_move .active{border-color: red;color: red;}
</style>
<script type="text/babel">
	export default{
		data(){
			return{
				left_move:null,
				select_obj:null,
				left_move_child_set:null,
				move_data:[{title:'专属推荐',path:'/food_recommend'},{title:'狂野食肉',path:'/food_recommend/food_package'},{title:'膳食平衡',path:'/food_recommend'},{title:'风味小吃',path:'/food_recommend/food_package'},{title:'实惠套餐',path:'/food_recommend'},{title:'特色面食',path:'/food_recommend/food_package'}]
			}
		},
		mounted:function(){
			this.left_move = $('.left_move')
			this.left_move_child_set = this.left_move.children('li')
			for(var a = 0;a<this.left_move_child_set.length;a++){
				this.left_move_child_set.eq(a).click(function(){
					if(this.offsetLeft>document.body.clientWidth/2){
						$('.cover_box').animate({scrollLeft:(this.offsetLeft-document.body.clientWidth/2)+this.offsetWidth/2+'px'}, 350); 
					}else{
						$('.cover_box').animate({scrollLeft:'0px'}, 500); 
					}
				})
			}
		},
		methods:{
			select:function(item,path){
				this.select_obj = item
				this.$router.push(path)
			}
		}
	}
</script>