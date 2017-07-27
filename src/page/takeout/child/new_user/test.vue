<template>
    <!-- 使用iscroll指令，这里的iscroll实例使用Vue.use初始化指令时的参数-->
    <divv-iscroll>
        <!-- content -->
    </div>

    <!-- 也可以在使用的时候设置iscroll的参数 -->
    <divv-iscroll="iscrollConf">
        <!-- content -->
    </div>
</template>

<script>

import VIscroll from 'viscroll';

// 可以在use的时候设置iscroll的参数
Vue.use(VIscroll, {
    mouseWheel: true,
    click: false,
    preventDefault: true,
    tap: false,
    bounce: false,
    disableTouch: true
});

export {
    data() {
        return {
            iscrollConf: {
                mouseWheel: true,
                vScrollbar: true,
                click: true,
                preventDefault: true,
                tap: true,
                bounce: false,
                disableTouch: true
            }
        }
    }
}

</script>