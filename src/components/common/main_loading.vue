 <template>
    <div class="main_loading_box router">
	<div class="loading_container">
	    <div class="load_img" :style="{backgroundPositionY: -(positionY%7)*2.5 + 'rem'}">
	    </div>
    	<svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
			<ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
		</svg>
	</div>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
                positionY: 0,
                timer: null,
            }
        },
        mounted(){
        	this.timer = setInterval(() => {
        		this.positionY ++;
        	}, 600)
        },
        beforeDestroy(){
        	clearInterval(this.timer);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
	@keyframes load{
		0%   {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
		50%  {transform: translateY(-50px); -moz-transform: translateY(-50px);-webkit-transform: translateY(-50px);-o-transform: translateY(-50px);-ms-transform: translateY(-50px);}
		100% {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
	}
    @-moz-keyframes load{
        0%   {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
        50%  {transform: translateY(-50px); -moz-transform: translateY(-50px);-webkit-transform: translateY(-50px);-o-transform: translateY(-50px);-ms-transform: translateY(-50px);}
        100% {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
    }
    @-webkit-keyframes load{
       0%   {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
        50%  {transform: translateY(-50px); -moz-transform: translateY(-50px);-webkit-transform: translateY(-50px);-o-transform: translateY(-50px);-ms-transform: translateY(-50px);}
        100% {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
    }
    @-o-keyframes load{
        0%   {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
        50%  {transform: translateY(-50px); -moz-transform: translateY(-50px);-webkit-transform: translateY(-50px);-o-transform: translateY(-50px);-ms-transform: translateY(-50px);}
        100% {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
    }


	@keyframes ellipse{
		0%   {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
        50%  {transform: translateY(-50px); -moz-transform: translateY(-50px);-webkit-transform: translateY(-50px);-o-transform: translateY(-50px);-ms-transform: translateY(-50px);}
        100% {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
	}
    @-moz-keyframes ellipse{
       0%   {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
        50%  {transform: translateY(-50px); -moz-transform: translateY(-50px);-webkit-transform: translateY(-50px);-o-transform: translateY(-50px);-ms-transform: translateY(-50px);}
        100% {transform: translateY(0px); -moz-transform: translateY(0px);-webkit-transform: translateY(0px);-o-transform: translateY(0px);-ms-transform: translateY(0px);}
    }
    @-webkit-keyframes ellipse{
        0%   {transform: scale(1);-moz-transform: scale(1);-webkit-transform: scale(1);-o-transform: scale(1);-ms-transform: scale(1);}
        50%  {transform: scale(0.3);-moz-transform: scale(0.3);-webkit-transform: scale(0.3);-o-transform: scale(0.3);-ms-transform: scale(0.3);}
        100% {transform: scale(1);-moz-transform: scale(1);-webkit-transform: scale(1);-o-transform: scale(1);-ms-transform: scale(1);}
    }
    @-o-keyframes ellipse{
       0%   {transform: scale(1);-moz-transform: scale(1);-webkit-transform: scale(1);-o-transform: scale(1);-ms-transform: scale(1);}
        50%  {transform: scale(0.3);-moz-transform: scale(0.3);-webkit-transform: scale(0.3);-o-transform: scale(0.3);-ms-transform: scale(0.3);}
        100% {transform: scale(1);-moz-transform: scale(1);-webkit-transform: scale(1);-o-transform: scale(1);-ms-transform: scale(1);}
    }
    @-moz-keyframes ellipse{
        0%   {transform: scale(1);-moz-transform: scale(1);-webkit-transform: scale(1);-o-transform: scale(1);-ms-transform: scale(1);}
        50%  {transform: scale(0.3);-moz-transform: scale(0.3);-webkit-transform: scale(0.3);-o-transform: scale(0.3);-ms-transform: scale(0.3);}
        100% {transform: scale(1);-moz-transform: scale(1);-webkit-transform: scale(1);-o-transform: scale(1);-ms-transform: scale(1);}
    }
    .loading_container{
    	position: fixed;
    	top: 50%;
    	left: 50%;
        z-index: 100;
    	transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
    	@include wh(2.5rem, 2.5rem);
    }
    .main_loading_box{
        width: 100vw;
        height: 100vh;
        z-index:1000;
        top: 0.0rem;
        left: 0.0rem;
        position: fixed;
        background-color: rgba(2552,255,255,0.9);
    }
    .load_img{
    	@include wh(100%, 100%);
    	background: url(../../../static/images/common/icon_loading.png) no-repeat 0 0;
    	background-size: 2.5rem auto;
    	transform: translateY(0px);
        -moz-transform: translateY(0px);
        -o-transform: translateY(0px);
        -webkit-transform: translateY(0px);
        -ms-transform: translateY(0px);
    	animation: load .6s infinite ease-in-out;
        -moz-animation: load .6s infinite ease-in-out;
        -o-animation: load .6s infinite ease-in-out;
        -webkit-animation: load .6s infinite ease-in-out;
    	position: relative;
    	z-index: 11;
    }
	.load_ellipse{
		position: absolute;
		@include wh(2.6rem, 2rem);
		top: 2.2rem;
        left: 0.2rem;
		z-index: 10;
		animation: ellipse .6s infinite ease-in-out;
        -moz-animation: ellipse .6s infinite ease-in-out;
        -o-animation: ellipse .6s infinite ease-in-out;
        -webkit-animation: ellipse .6s infinite ease-in-out;
	}
</style>
