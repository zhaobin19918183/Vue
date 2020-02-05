<template>
    <div class="aboutme">
        <div class="myInfo van-clearfix">
            <van-image round width="1.12rem" height="1.12rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div class="info">
                <div>无名之辈</div>
                <div>18866668888</div>
            </div>
        </div>

        <div class="myOrder">
            <van-cell title="我的订单" value="全部订单" is-link to="myOrder" />
            <van-grid :column-num="4" clickable :border="false">
                <van-grid-item v-for="(value,index) in myOrderStatusList" :key="index" :icon="value.icon" :text="value.title" />
            </van-grid>
        </div>

        <div class="myService">
            <section class="van-doc-demo-block">
                <p class="sectionTitle">我的服务</p>
                <van-cell-group>
                    <van-cell title="我的收藏" :icon="myServiceIcon.icon1" is-link value="" to="home" />    <!-- （路由跳转） -->
                    <van-cell title="用户协议与隐私" :icon="myServiceIcon.icon2" is-link value="" to="home" />
                    <van-cell title="商户入驻" :icon="myServiceIcon.icon3" is-link value="" to="home" />
                    <van-cell title="联系客服" :icon="myServiceIcon.icon4" is-link value="" to="home" />
                    <van-cell title="分享推荐" :icon="myServiceIcon.icon5" is-link value="" to="home" />
                    <van-cell title="进入管理端" :icon="myServiceIcon.icon6" is-link url="/vant/mobile.html" />   <!-- （URL 跳转） -->
                </van-cell-group>
            </section>
        </div>

        <div class="signOut">
            <van-button color="#FFCF01">退出登录</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "aboutme",
    data() {
        return {
            myOrderStatusList: [
                {icon: require('../assets/icon/orderStatus_01.png'), title: '待付款'},
                {icon: require('../assets/icon/orderStatus_02.png'), title: '待使用'},
                {icon: require('../assets/icon/orderStatus_03.png'), title: '待评价'},
                {icon: require('../assets/icon/orderStatus_04.png'), title: '退款/售后'},
            ],
            myServiceIcon: {
                icon1: require('../assets/icon/service01.png'),
                icon2: require('../assets/icon/service02.png'),
                icon3: require('../assets/icon/service03.png'),
                icon4: require('../assets/icon/service04.png'),
                icon5: require('../assets/icon/service05.png'),
                icon6: require('../assets/icon/service06.png'),
            }
        };
    },
    components: {},
    computed: {},
    mounted(){
        document.title = '我的'
    },
    methods: {}
};
</script>

<style scoped lang="less">
.aboutme{
    .myInfo{
        padding: 0.74rem 0 1.14rem 0;
        background: #FFCF01;
        .van-image{
            float: left;
            margin-left: 0.36rem;
        }
        .info{
            height: 1.12rem;
            float: left;
            font-size: 0.36rem;
            line-height: 0.56rem;
            color: #323232;
            margin-left: 0.3rem;
            font-weight: bold;
        }
    }

    .myOrder{
        margin-top: -0.4rem;
        margin-bottom: 0.2rem;
        .van-cell__title{
            font-size: 0.34rem;
            font-weight: bold;
        }
        .van-cell__value{
            color: #999999;
        }
        .van-cell{
            height: 1.03rem;
            line-height: 0.7rem;
            border-radius: 0.4rem 0.4rem 0px 0px;
            .van-cell__right-icon{
                line-height: 0.7rem;
            }
        }
    }

    .myService{
        .sectionTitle{
            height: 1.03rem;
            line-height: 1.03rem;
            font-size: 0.34rem;
            padding-left: 16px;
            font-weight: bold;
            background: #FFF;
        }
        .van-cell__title{
            text-indent: 0.2rem;
        }
    }

    .signOut{
        width: 100vw;
        margin: -0.1rem 0 1.2rem 0;
        .van-button{
            width: 94vw;
            margin: 3vw;
            color: #323232 !important;
            border-radius: 10px;
        }
    }
}
</style>