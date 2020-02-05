<template>
    <div id="app">
        <!-- <navBar :title="titleName" /> -->
        <!-- 跳转写法 -->
        <!-- <router-link to="/hello">About</router-link> -->

        <!-- <router-view /> -->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>

        <div v-if="footerShow">
            <footerBar />
        </div>
    </div>
</template>

<script>
// import navBar from './components/navBar'
import footerBar from './components/footerBar'
import '../src/assets/css/coverVant.less'   //覆盖vantui样式

export default {
    name: 'app',
    data() {
        return {
            // titleName: '微商城',
            icon: {
                normal: "//img.yzcdn.cn/icon-normal.png",
                active: "//img.yzcdn.cn/icon-active.png"
            }
        }
    },
    components: {
        // navBar,
        footerBar
    },
    computed: {
        footerShow: function(){
            // console.log(this.$route.path)  //当前路由hash
            return (this.$route.path == "/home") || (this.$route.path == "/discount") || (this.$route.path == "/aboutme");
        }
    },
    watch: {
        // vue监听路由变化
        // $route(to,from){
        //     console.log(to.path);
        // }
    }
}
</script>


<style lang="less">
*{
    margin: 0;
    padding: 0;
}
html{
    font-size: 13.33333333vw;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
    background-color: #F4F4F4;
}
@media (min-width: 560px) {
    html {
        font-size: 54px;
    }
}

// placeholder颜色
::-webkit-input-placeholder { /* WebKit browsers */
    color: #999;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #999;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #999;
}
</style>
