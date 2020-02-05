<template>
    <div class="myOrder">
        <navTitle title="我的订单"></navTitle>

        <div class="tablist">
            <van-tabs v-model="active" swipeable color="#FFCF01" :swipe-threshold="5" animated>
                <van-tab v-for="(item,index) in tabs" :key="index" :title="item.title">
                    <!-- 内容列表list -->
                    <div class="orderList">
                        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad">
                                <van-panel class="van-ellipsis" v-for="(item,index) in list" :key="index" :title="item.merchantName" desc="" :status="item.status">
                                    <router-link to="/orderDetail">
                                        <div class="content">
                                            <van-image class="shopImg" width="1.2rem" height="1.2rem" fit="cover" :src="item.logo" />
                                            <div class="orderPrice">
                                                <div>
                                                    <label>下单时间：</label><span>2019-08-12  12:20</span>
                                                </div>
                                                <div style="margin-top: 0.45rem">
                                                    <label>总价：</label><span>1254523.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>

                                    <div slot="footer">
                                        <van-button size="small">付款</van-button>
                                        <!-- <span class="price">
                                            <span class="rmb">￥</span>2400.59
                                        </span>
                                        <span class="originPrice">￥2999.00</span>
                                        <van-tag plain>{{item.priceTag}}</van-tag> -->
                                    </div>
                                </van-panel>
                        </van-list>
                    </div>
                    <!-- 列表list-- end -->
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import navTitle from '../components/navTitle'

export default {
    name: 'myOrder',
    data() {
        return {
            list: [],
            loading: false,
            error: false,
            finished: false,
            value1: 0,
            option: [
                { text: '大连', value: 0 },
                { text: '青岛', value: 1 },
                { text: '厦门', value: 2 }
            ],
            tabs: [
                {title: '全部'},
                {title: '待付款'},
                {title: '待使用'},
                {title: '待评价'},
                {title: '退款/售后'}
            ],
            active: 0,
            inputval: '',
            searchIcon: require('../assets/icon/search.png'),

            dataList: [
                {
                    coordinate: "121.495026,38.879854",
                    distance: "8.0km",
                    distanceNum: "8463",
                    id: 11001,
                    logo: require('../assets/image/comment01.png'),
                    merchantName: "德玛西亚凯特琳的小酒馆",
                    priceTag: "提前预约",
                    subtitle: "支付测试账户二",
                    title: "众和轮胎",
                    type: "0",
                    status: "待付款"
                },{
                    coordinate: "121.625488,38.892682",
                    distance: "10.0km",
                    distanceNum: "10886",
                    id: 11000,
                    logo: require('../assets/image/comment02.png'),
                    merchantName: "诺克萨斯泰隆的武器库",
                    priceTag: "提前预约",
                    subtitle: "支付测试账户一",
                    title: "优质眼镜",
                    type: "0",
                    status: "待使用"
                },{
                    coordinate: "121.625488,38.892682",
                    distance: "10.0km",
                    distanceNum: "10886",
                    id: 11000,
                    logo: require('../assets/image/comment03.png'),
                    merchantName: "约德尔人的一大步勋章馆",
                    priceTag: "提前预约",
                    subtitle: "支付测试账户一",
                    title: "优质眼镜",
                    type: "0",
                    status: "待评价"
                }
            ]
        }
    },
    components: {
        navTitle
    },
    computed: {},
    methods: {
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < this.dataList.length; i++) {
                    this.list.push(this.dataList[i]);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 8) {
                    this.finished = true;
                }
            }, 500);
        }
    },
}
</script>

<style scoped lang="less">
.myOrder{
    .searchBar{
        width: 100vw;
        height: 0.92rem;
        text-indent: 0.3rem;
        display: flex;
        position: relative;
        z-index: 100;
        background: #FFCF01;
        .searchimg{
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            top: 0.31rem;
            left: 2.04rem;
        }
        .van-dropdown-menu{
            width: 1.6rem;
            height: 0.92rem;
            background: rgba(255,255,255,0);
            border: none;
            color: #472D22;
            font-size: 0.38rem;
            margin-left: -0.2rem;
            margin-right: 0.4rem;
        }
        .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
            border-width: 0;
        }
        .searchInput{
            height: 0.62rem;
            width: 5.41rem;
            margin: 0.15rem 0;
            text-indent: 0.64rem;
            font-size: 0.26rem;
            color: #323232;
            background: #FFFFFF;
            border-radius: 6px;
            border: none;
        }
    }

    .tablist{
        .orderList{
            padding: 0.3rem;
            margin-bottom: 0.5rem;
            .content{
                display: flex;
                padding: 0.2rem 0;
                .shopImg{
                    margin-left: 0.3rem;
                    border-radius: 6px;
                    overflow: hidden;
                }
                .orderPrice{
                    color: #323232;
                    font-size: 0.28rem;
                    margin-left: 0.2rem;
                }
            }
            .van-panel__footer{
                text-align: right;
                // .van-hairline--top::after{
                //     border-top-width: 0;
                // }
                .van-button{
                    width: 1.5rem;
                    color: #7A7A7A;
                    border-radius: 0.1rem;
                }
                & > div{
                    margin-top: -0.5rem;
                }
            }
            .van-divider{
                font-size: 0.36rem;
                color: #323232;
                font-weight: 500;
            }
            .van-panel{
                margin-bottom: 0.2rem;
                border-radius: 10px;
                .van-cell__title{
                    font-size: 0.3rem;
                    color: #323232;
                    margin-bottom: -10px;
                    & > span{
                        display: inline-block;
                        width: 4.95rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                .van-cell__value{
                    color: #666666;
                    font-size: 0.28rem;
                }
                .van-panel__content{
                    overflow-x: scroll;
                    // -webkit-overflow-scrolling: touch;
                }
            }
        }
    }
}
</style>