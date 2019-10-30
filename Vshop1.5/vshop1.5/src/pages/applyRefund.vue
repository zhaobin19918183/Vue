<template>
    <div class="applyRefund">
        <navTitle title="申请退款"></navTitle>

        <!-- 顶部卡片 -->
        <div class="orderCard">
            <van-card price="2.00" desc="描述信息" title="商品标题" :thumb="img" ></van-card>
            <img :src="rightArr" alt="" class="rightarr">
            <div class="tags van-hairline--top">
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

        <div class="refundInfo">
            <van-cell-group>
                <van-cell title="退款金额：" value="￥100.0" value-class="refundDetail" />
                <van-cell title="退还方式：" value=" 7个工作日内退款到原支付路径" value-class="refundDetail" />
            </van-cell-group>
        </div>

        <div class="refundReason">
            <van-panel title="退款原因：" desc="">
                <div>
                    <van-radio-group v-model="radio">
                        <van-radio name="1" checked-color="#FFCF01">联系商家，约不到时间</van-radio>
                        <van-radio name="2" checked-color="#FFCF01">计划有变，不想要了</van-radio>
                        <van-radio name="3" checked-color="#FFCF01">未预约，到点后无法使用</van-radio>
                        <van-radio name="4" checked-color="#FFCF01">到点后，刷卡/现金/第三方支付更优惠</van-radio>
                        <van-radio name="5" checked-color="#FFCF01">到点后，商家不让用</van-radio>
                        <van-radio name="6" checked-color="#FFCF01">其他原因（用户自定义填写）</van-radio>
                    </van-radio-group>
                </div>
            </van-panel>
        </div>

        <div class="refundReason2">
            <van-panel title="填写退款原因：" desc="（非必填项）">
                <div>
                    <van-field
                        v-model="message"
                        border
                        class="van-hairline--surround"
                        type="textarea"
                        placeholder="请填写退款原因"
                        rows="1"
                        label-width="0"
                        :autosize="{ maxHeight: 160, minHeight: 80 }"
                    />
                </div>
            </van-panel>

            <div class="footer">
                <van-button color="#FFCF01">申请退款</van-button>
            </div>
        </div>

    </div>
</template>

<script>
import navTitle from '../components/navTitle'

export default {
    name: 'applyRefund',
    data() {
        return {
            img: require('../assets/image/melo.jpg'),
            rightArr: require('../assets/icon/right_arr.png'),
            sureIcon: require('../assets/icon/suregreen.png'),
            radio: '1',
            message: ''
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
.applyRefund{
    .orderCard{
        position: relative;
        margin-bottom: 0.2rem;
        .van-card{
            height: 1.8rem;
            padding: 0.3rem;
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

    .refundInfo{
        margin-bottom: 0.2rem;
        .refundDetail{
            color: #FF9B01;
            font-size: 0.26rem;
            position: absolute;
            left: 1.75rem;
            line-height: 26px;
        }
    }

    .refundReason{
        margin-bottom: 0.2rem;
        .van-radio-group{
            color: #323232;
            font-size: 0.28rem;
            margin-left: 0.3rem;
            .van-radio{
                height: 0.75rem;
            }
        }
    }

    .refundReason2{
        .van-cell::after{
            border-bottom: none;
        }
        .van-cell__label{
            display: inline-block;
        }
        .van-panel__content{
            padding: 0 3% 3% 3%;
            width: 94%;
        }
        .van-button{
            width: 100%;
            color: #323232 !important;
            font-size: 0.32rem;
        }
        .footer{
            padding: 0 0.3rem 0.4rem 0.3rem;
            background: white;
        }
    }
}
</style>