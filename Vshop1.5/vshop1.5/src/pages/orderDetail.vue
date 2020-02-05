<template>
    <div class="orderDetail">
        <navTitle title="订单详细"></navTitle>

        <!-- 顶部卡片 -->
        <div class="orderCard">
            <van-card price="2.00" desc="描述信息" title="商品标题" :thumb="img" ></van-card>
            <img :src="rightArr" alt="" class="rightarr">
            <div class="tags van-hairline--top">
                <!-- <div class="tagitem">
                    <van-image :src="sureIcon" width="0.28rem" />
                    <span class="tagname">免预约</span>
                </div>
                <div class="tagitem">
                    <van-image :src="sureIcon" width="0.28rem" />
                    <span class="tagname">随时退</span>
                </div>
                <div class="tagitem">
                    <van-image :src="sureIcon" width="0.28rem" />
                    <span class="tagname">过期自动退</span>
                </div> -->
                   
                <van-grid :column-num="3">
                    <van-grid-item>
                        <div>
                            <van-image :src="sureIcon" width="0.28rem" />
                            <span class="tagname">免预约</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <div>
                            <van-image :src="sureIcon" width="0.28rem" />
                            <span class="tagname">随时退</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <div>
                            <van-image :src="sureIcon" width="0.28rem" />
                            <span class="tagname">过期自动退</span>
                        </div>
                    </van-grid-item>
                </van-grid>
            </div>
        </div>

        <!-- 优惠券 -->
        <div class="coupon">
            <van-panel title="优惠券" desc="2张可用" status="">
                <div class="couponTop">
                    <span class="endtime">2019-12-05 到期</span>
                    <van-button color="#999999" plain round  size="small">申请退款</van-button>
                </div>
                <div class="couponbottom">
                    <van-image :src="qrcode" width="1.8rem" />
                    <p>券码：125485</p>
                </div>
                <!-- 已消费 -->
                <div class="couponbottom_concumed">
                    <label>券码：125485</label>
                    <span>已消费</span>
                </div>
            </van-panel>
        </div>


        <!-- 优惠券 -未消费 -->
        <div class="coupon2">
            <van-panel title="优惠券" desc="2 张未消费" status="">
                <div class="couponTop">
                    <span class="endtime">2019-12-05 到期</span>
                </div>
                <div class="couponbottom_unconcumed">
                    <label>券码：125485</label>
                    <span>未消费</span>
                </div>
                <div class="lookDetail">
                    <van-cell title="退款处理中" is-link value="查看详细" />
                </div>
            </van-panel>
        </div>


        <!-- 订单信息 -->
        <div class="orderInfo">
            <van-panel title="订单信息" desc="" status="">
                <div>
                    <div class="top">
                        <div class="info">
                            <label>订单号码：</label>
                            <span>B201906101651286947862390</span>
                        </div>
                        <div class="info">
                            <label>手机号码：</label>
                            <span>188*****547</span>
                        </div>
                        <div class="info">
                            <label>下单时间：</label>
                            <span>2019-06-10  16:51:28</span>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="info">
                            <label>数 量：</label>
                            <span>2</span>
                        </div>
                        <div class="info">
                            <label>总 价：</label>
                            <span>￥100.00</span>
                        </div>
                    </div>
                </div>
            </van-panel>
        </div>


        <!-- footer按钮 -->
        <div class="footer">
            <van-button color="#FFCF01">立即支付</van-button>
            <van-button color="#FFCF01" plain>取消订单</van-button>
            <van-button color="#FFCF01">评论</van-button>
            <van-button color="#DDDDDD" disabled>订单已取消</van-button>
        </div>

    </div>
</template>

<script>
import navTitle from '../components/navTitle'

export default {
    name: 'orderDetail',
    data() {
        return {
            img: require('../assets/image/melo.jpg'),
            rightArr: require('../assets/icon/right_arr.png'),
            sureIcon: require('../assets/icon/suregreen.png'),
            qrcode: require('../assets/image/qrcode.png')
        }
    },
    components: {
        navTitle
    },
    computed: {},
    methods: {
        
    },
}
</script>

<style scoped lang="less">
.orderDetail{
    padding: 0.2rem 0.3rem 1.5rem 0.3rem;
    .orderCard{
        position: relative;
        margin-bottom: 0.2rem;
        .van-card{
            height: 1.6rem;
            padding: 0.2rem;
            background-color: #FFF;
            .van-card__thumb {
                width: 1.2rem;
                height: 1.2rem;
            }
            .van-card__content{
                .van-card__title{
                    width: 99%;
                    display: block;
                    font-size: 0.28rem;
                    color: #323232;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .van-card__desc{
                    width: 95%;
                    color: #aaaaaa;
                    font-size: 0.24rem;
                    line-height: 0.4rem;
                    margin-bottom: 0.16rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .van-card__price{
                    font-size: 0.28rem;
                    color: #aaaaaa;
                }
            }
        }
        .rightarr{
            width: 0.16rem;
            height: 0.26rem;
            position: absolute;
            top: 0.67rem;
            right: 0.3rem;
        }
        .tags{
            height: 0.67rem;
            .van-grid{
                height: 100%;
                .van-grid-item{
                    height: 100%;
                    .van-grid-item__content{
                        height: 100%;
                        & > div{
                            height: 100%;
                            margin-top: -1.55rem;
                        }
                    }
                }
            }
            .tagname{
                font-size: 0.24rem;
                color: #07C160;
                margin-left: -0.12rem;
            }
        }
    }

    .coupon{
        margin-bottom: 0.2rem;
        .couponTop{
            .endtime{
                color: #999999;
                font-size: 0.28rem;
                position: absolute;
                top: 0.73rem;
                left: 1.82rem;
            }
            .van-button{
                width: 1.6rem;
                height: 0.6rem;
                border-radius: 0.3rem;
                position: absolute;
                top: 0.36rem;
                left: 5.1rem;
            }
        }
        .couponbottom{
            text-align: center;
            .van-image {
                margin-top: 0.3rem;
            }
            & > p{
                color: #333333;
                font-size: 0.32rem;
                margin-top: -0.1rem;
                padding-bottom: 0.3rem;
            }
        }
        .couponbottom_concumed{
            color: #999999;
            font-size: 0.32rem;
            padding: 0.3rem 0;
            & > label{
                display: inline-block;
                margin-left: 0.3rem;
                width: 5.24rem;
                text-decoration: line-through;
            }
        }
        .van-cell__title{
            color: #323232;
            font-size: 0.32rem;
        }
        .van-cell__label{
            color: #999999;
            font-size: 0.28rem;
        }
    }

    .coupon2{
        margin-bottom: 0.2rem;
        .couponTop{
            .endtime{
                color: #999999;
                font-size: 0.28rem;
                position: absolute;
                top: 0.73rem;
                left: 2.3rem;
            }
        }
        .couponbottom_unconcumed{
            color: #999999;
            font-size: 0.32rem;
            padding: 0.3rem 0;
            border-bottom: 1px dashed #DFDFDF;
            & > label{
                display: inline-block;
                margin-left: 0.3rem;
                width: 5.24rem;
            }
        }
        .lookDetail{
            .van-cell__title{
                color: #999999;
                font-size: 0.28rem;
            }
        }
        .van-cell__title{
            color: #323232;
            font-size: 0.32rem;
        }
        .van-cell__value{
            color: #07C160;
            font-size: 0.28rem;
        }
        .van-cell__label{
            color: #999999;
            font-size: 0.28rem;
        }
    }

    .orderInfo{
        .van-cell__title{
            color: #323232;
            font-size: 0.32rem;
        }
        .top{
            padding-bottom: 0.2rem;
            border-bottom: 1px dashed #DFDFDF;
        }
        .bottom{
            padding-bottom: 0.2rem;
        }
        .top .info, .bottom .info{
            line-height: 0.4rem;
            & > label{
                display: inline-block;
                width: 1.5rem;
                color: #999999;
                font-size: 0.28rem;
                margin-left: 0.3rem;
            }
            & > span{
                color: #323232;
                font-size: 0.28rem;
            }
        }
    }

    .footer{
        .van-button{
            width: 100%;
            color: #323232 !important;
            font-size: 0.32rem;
            border-radius: 0.1rem;
        }
    }
}
</style>