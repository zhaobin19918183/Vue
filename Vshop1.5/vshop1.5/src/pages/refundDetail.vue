<template>
    <div class="refundDetail">
        <navTitle title="退款详细"></navTitle>

        <div class="refundTitle van-clearfix">
            <div class="left">
                <img src="../assets/icon/refund.png" alt="" style="width: 0.48rem; height: 0.43rem;">
            </div>
            <div class="right">
                <div class="rightTitle">已退款 ￥ <span>100</span></div>
                <p>券码：125485</p>
                <p>到账时间：预计最晚2日内到账</p>
            </div>
        </div>

        <div class="refundSteps">
            <van-panel title="退款进度">
                <div>
                    <van-steps direction="vertical" :active="active" :active-color="activeColor" :active-icon="activeIcon" class="steps">
                        <van-step v-for="(item,index) in stepsData.data" :key="index">
                            <h4 v-text="item.title"></h4>
                            <p v-text="item.des"></p>
                            <p v-text="item.date"></p>
                        </van-step>
                    </van-steps>
                </div>
            </van-panel>
        </div>

        <div class="footer">
            <van-button color="#FFF" @click="contactKF">联系客服</van-button>
        </div>

        <div class="popToast">
            <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" @select="onSelect" />

            <van-popup v-model="qrcodeShow" class="wechatPop">
                <van-icon name="close" size="0.44rem" @click="closeKF" />
                <div class="pop">
                    <p class="popTitle">添加小二微信</p>
                    <div class="popImg"><img src="../assets/image/refund_qr.png" alt="" style="width: 2.31rem"></div>
                    <div class="poptips">长按扫码，添加小二微信，小二将为您处理各种问题。微信：kefu001。</div>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import navTitle from '../components/navTitle'
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

export default {
    name: 'refundDetail',
    data() {
        return {
            active: null,
            activeColor: '#07C160', //#FF0000
            activeIcon: 'checked',

            stepsData: {
                refundStatus: 1,
                data: [
                    {date: '2019-08-30  10:39', status: '0', title: '退款申请已提交', des: '您的退款申请已经成功提交'},
                    {date: '2019-08-30  10:42', status: '0', title: '微商城审核通过', des: '100.00元的退款申请已提交至银商支付'},
                    {date: '2019-08-30  12:36', status: '1', title: '银商支付受理退款', des: '您的退款已被银商支付受理'},
                    {date: '2019-08-31  08:26', status: '0', title: '退款入账中', des: '银商支付正将95元入账至您的原支付账户，预计3个工作日内完成入账。如有任何问题请拨打微商城平台客服电话：400-000-0000，或添加微信客服"kefu001"进行咨询。'}
                ]
            },
            show: false,
            actions: [
                { name: '400-117-2310' },
                { name: '微信客服' }
            ],
            qrcodeShow: false
        }
    },
    components: {
        navTitle
    },
    computed: {},
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            for(let [index,value] of this.stepsData.data.entries()){
                // console.log(index)
                if(value.status == '1'){
                    this.active = index;
                    this.activeColor = '#FF0000';
                    this.activeIcon = 'clear';
                }
            }
        },
        contactKF(){
            this.show = true;
        },
        closeKF(){
            this.qrcodeShow = false;
        },
        onSelect(item,index) {
            // console.log(item,index)
            this.show = false;
            if(index == 0){
                window.location.href = 'tel:400-117-2310';
            }
            else if(index == 1){
                this.qrcodeShow = true;
            }
        }
    }
}
</script>

<style scoped lang="less">
.refundDetail{
    .refundTitle{
        width: 100vw;
        height: 1.96rem;
        background: #FFF;
        margin-bottom: 0.2rem;
        .left{
            width: 13%;
            float: left;
            img{
                vertical-align: text-top;
                margin: 0.3rem 0 0 0.3rem;
            }
        }
        .right{
            width: 87%;
            float: left;
            color: #323232;
            margin-top: 0.26rem;
            .rightTitle{
                font-size: 0.36rem;
                line-height: 0.54rem;
            }
            p{
                font-size: 0.28rem;
                line-height: 0.5rem;
            }
        }
    }

    .refundSteps{
        .van-cell__title{
            font-size: 0.32rem;
        }
        .van-panel__content{
            padding-left: 0.45rem;
            padding-right: 0.4rem;
        }
        .steps{
            h4{
                // color: #07C160;
                font-size: 0.28rem;
                margin-bottom: 0.1rem;
                font-weight: normal;
            }
            p{
                color: #888888;
                font-size: 0.24rem;
                line-height: 0.47rem;
            }
        }
    }

    .footer{
        width: 92%;
        margin-top: 0.4rem;
        margin-bottom: 0.5rem;
        padding: 0 4%;
        .van-button{
            width: 100%;
            color: #323232 !important;
            font-size: 0.32rem;
            border-radius: 0.1rem;
        }
    }

    .popToast{
        .wechatPop{
            border-radius: 0.15rem;
            .van-icon{
                position: absolute;
                top: 0.2rem;
                right: 0.2rem;
            }
        }
        .pop{
            width: 5.4rem;
            height: 5.26rem;
            background: #FFF;
            text-align: center;
            .popTitle{
                color: #383630;
                font-size: 0.36rem;
                margin-top: 0.57rem;
                margin-bottom: 0.4rem;
            }
            .popImg{
                img{
                    vertical-align: middle;
                }
            }
            .poptips{
                color: #888888;
                font-size: 0.24rem;
                padding: 0.43rem;
                line-height: 0.4rem;
            }
        }
    }
}
</style>