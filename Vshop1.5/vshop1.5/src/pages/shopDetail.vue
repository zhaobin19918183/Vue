<template>
    <div class="shopDetail">
        <navBar :title="titleName" />

        <div class="card_title">
            <div class="content">
                <div class="merchantName">
                    <h3>爱斯米牛排自助餐爱斯米牛排自助自助餐爱斯米自助餐爱斯米牛排富家大室看风景时刻</h3>
                    <img src="../assets/icon/shopdetail_share2.png" alt="" style="width: 0.35rem;">
                    <span class="share">分享</span>
                </div>
                <div class="rateShow">
                    <van-rate v-model="rate1" size="0.3rem" color="#FF9900" void-icon="star" void-color="#eee" readonly />
                    <span>4.4分</span>
                    <span>23558条</span>
                    <span>￥72/人</span>
                </div>
                <div class="merchantInfo">
                    <p class="p1">口味:8.9 &nbsp; 环境:9.5 &nbsp; 服务:5.8</p>
                    <p class="p2">高新园区 &nbsp; 自助餐</p>
                </div>
                <div class="merchantImg">
                    <van-image v-for="(item,index) in detailImg" :key="index" width="2.75rem" height="2rem" fit="contain" :src="item" @click="previewImg(index)" />
                </div>
                <div class="merchantLocation">
                    <div class="time van-hairline--top-bottom">
                        <img src="../assets/icon/shopdetail_opentime.png" alt="" style="width: 0.3rem; vertical-align: super;">
                        <span>营业至  21:00    包厢    可停车    WiFi </span>
                        <van-icon name="arrow" size="0.26rem" />
                    </div>
                    <div class="address van-clearfix">
                        <img src="../assets/icon/shopdetail_address.png" alt="" style="width: 0.3rem; vertical-align: super;">
                        <div class="addressRight">
                            <p class="van-hairline--right">辽宁省 大连市 中山广场18号 距地铁2号线友好广场站D出口150米</p>
                            <img src="../assets/icon/shopdetail_tel.png" alt="" style="width: 0.44rem;" >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card_tabs" id="box1">
            <van-tabs v-model="active" animated  @click="changeTabs" ref="mytab" color="#FF9900">
                <van-tab v-for="(item,index) in indexList" :title="item" :key="index"></van-tab>
            </van-tabs>

            <div class="discountInfo">
                <div class="paythebill">
                    <div class="top">
                        <img src="../assets/icon/shopdetail_group.png" alt="" style="width: 0.34rem;">
                        <span>买单</span>
                        <van-button color="#FF9900" class="paybillBtn">抢购</van-button>
                    </div>
                    <div class="bottom">
                        <van-row>
                            <van-col span="6" offset="2" class="van-ellipsis" style="color: #FF9900">满100减20热热我不撤销给对方</van-col>
                            <van-col span="10" offset="1">(每天09:00~22:00)</van-col>
                            <van-col span="4" offset="1">已买150</van-col>
                        </van-row>
                    </div>
                </div>
                <div class="infoTitle van-hairline--top">
                    <img src="../assets/icon/shopdetail_group.png" alt="" style="width: 0.34rem;">
                    <span>优惠套餐</span>
                </div>
                <div class="infoCard">
                    <van-row class="van-hairline--bottom" v-for="(item,index) in 5" :key="index">
                        <van-col span="6">
                            <van-image width="1.6rem" height="1.6rem" fit="cover" :src="discountImg" />
                        </van-col>
                        <van-col span="12" offset="1" style="height: 100%; position: relative;">
                            <h3 class="infoname">125425待148565元券实惠实惠实惠实惠148565元券实</h3>
                            <div class="infoprice">
                                <span class="price">¥ 12387</span>
                                <span class="originPrice">¥ 25832</span>
                            </div>
                        </van-col>
                        <van-col span="5" style="height: 100%; position: relative;">
                            <van-button color="#FF9900" class="buyBtn">抢购</van-button>
                            <p class="hasSold">已售1112+</p>
                        </van-col>
                    </van-row>
                </div>
            </div>
        </div>

        <div class="card_recommend">
            <van-cell title="推荐菜" is-link :border="false" title-class="recoTitle" :clickable="false" />
            <van-divider>商家推荐</van-divider>
            <div class="recommentImgs">
                <div class="content" v-for="(item,index) in detailImg" :key="index">
                    <van-image width="2.75rem" height="2rem" fit="contain" :src="item" @click="previewImg(index)" />
                    <p class="des">红酒牛排</p>
                </div>
            </div>
            <p class="hotmenu">
                炸鸡翅   鱼排   火龙果   哈密瓜   意大利面   冰淇   淋   蛋挞   薯条   西瓜   蔬菜沙拉   榴莲披萨   火   焰牛排    辣炒蚬子    麻辣鸭头    小海鲜  
            </p>
        </div>

        <div class="card_comment" id="box2">
            <van-cell title="网友点评" label="（12548条）" value="查看全部" is-link :border="false" :clickable="false" title-class="commentTitle" label-class="num" />
            <commentCard></commentCard>
            <router-link to="/comment">
                <p class="showmoreComment">查看全部评论<van-icon name="arrow-down" /></p>
            </router-link>
        </div>

        <div class="card_otherLike" id="box3">
            <h3 class="otherstitle">小伙伴们还喜欢</h3>
            <div class="content">
                <van-row style="padding-left: 0.2rem;">
                    <van-col span="11" class="van-hairline--surround" v-for="value in 6" :key="value" style="margin: 0.2rem 0.2rem 0 0; padding-bottom: 0.3rem;">
                        <van-image :src="discountImg" width="100%" height="2.54rem" fit="cover" />
                        <h4 class="van-ellipsis">火车头小龙虾海线东北菜哈</h4>
                        <div class="line1">
                            <van-rate v-model="rate" size="0.22rem" readonly />
                            <span>¥234.5/人</span>
                        </div>
                        <div class="line2">
                            <span>烧烤烤串</span>
                            <span>4.7km</span>
                        </div>
                    </van-col>
                </van-row>

                <!-- <van-grid :column-num="2" :border="true" gutter="0.2rem">
                    <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="更多推荐">
                        <van-image :src="discountImg" width="100%" height="2.54rem" fit="cover" />
                        <h4>火车头小龙虾海线哈</h4>
                        <div class="line1">
                            <van-rate v-model="rate" size="0.22rem" readonly />
                            <span>¥234.5/人</span>
                        </div>
                        <div class="line2">
                            <span>烧烤烤串</span>
                            <span>4.7km</span>
                        </div>
                    </van-grid-item>
                </van-grid> -->
            </div>
        </div>
    </div>
</template>

<script>
import navBar from '../components/navBar';
import commentCard from '../components/commentCard';
import Vue from 'vue';
import { Toast, ImagePreview } from 'vant';
Vue.use(Toast);
Vue.use(ImagePreview);

export default {
    name: 'shopDetail',
    data() {
        return {
            titleName: '爱斯米牛排自助',
            active: 0,
            class1: {
                transform: 'translate3d(0px, 100%, 0px) !important'
            },
            indexList: ['优惠信息', '网友点评', '更多推荐'],
            detailImg: [require('../assets/image/shop1.png'), require('../assets/image/shop2.png'), require('../assets/image/shop1.png'), require('../assets/image/shop2.png')],
            rate1: 4,
            discountImg: require('../assets/image/shop1.png'),
            rate: 4,
        }
    },
    components: {
        navBar,
        commentCard
    },
    computed: {},
    mounted(){
        console.log(this.$route.params.id)
    },
    beforeRouteLeave(to,from,next){
        //设置下一个路由的meta，让列表页缓存，即不刷新
        to.meta.keepAlive = true;
        next();
    },

    methods: {
        changeTabs(name, title) {
            // this.$toast(name,title);
            var element1 = document.getElementById("box1");
            var element2 = document.getElementById("box2");
            var element3 = document.getElementById("box3");

            if(name == 0){
                element1.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }else if(name == 1){
                element2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }else if(name == 2){
                element3.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }
        },

        previewImg(index){
            ImagePreview({
                images: this.detailImg,
                startPosition: index,
                onClose() {
                    // do something
                }
            });
        }

        // aaa(){
                // 锚点
        //     // element.scrollIntoView();
        //     // element.scrollIntoView(false);
        //     element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        // }
    },
}
</script>

<style scoped lang="less">
.shopDetail{
    padding: 0.3rem;
    .card_title{
        background: #ffffff;
        margin-bottom: 0.2rem;
        border-radius: 0.1rem;
        .content{
            padding: 0.3rem;
            .merchantName{
                position: relative;
                & > h3{
                    width: 85%;
                    color: #323232;
                    font-size: 0.34rem;
                    // display: inline-block;
                    // 两行省略号
                    overflow:hidden; 
                    text-overflow:ellipsis;
                    // display:-webkit-box;
                    display: -webkit-inline-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2; 
                }
                img{
                    position: absolute;
                    top: 0.1rem;
                    right: 0.2rem;
                }
                .share{
                    color: #323232;
                    font-size: 0.26rem;
                    position: absolute;
                    bottom: 0.25rem;
                    right: 0.1rem;
                }
            }
            .rateShow{
                margin-top: -0.6rem;
                .van-rate{
                    display: inline-block;
                    line-height: 0.42rem;
                    vertical-align: middle;
                }
                span{
                    color: #323232;
                    font-size: 0.3rem;
                    line-height: 0.42rem;
                }
            }
            .merchantInfo{
                display: flex;
                line-height: 0.6rem;
                p{
                    color: #666666;
                    font-size: 0.26rem;
                }
                .p1{
                    width: 60%;
                }
                .p2{
                    width: 40%;
                    text-align: right;
                }
            }
            .merchantImg{
                overflow-x: scroll;
                white-space: nowrap;
                margin-top: 0.2rem;
                margin-bottom: 0.1rem;
                .van-image{
                    margin-right: 0.1rem;
                    &:last-of-type{
                        margin-right: 0;
                    }
                }
            }
            .merchantLocation{
                .time{
                    height: 0.8rem;
                    line-height: 0.8rem;
                    span{
                        color: #323232;
                        font-size: 0.28rem;
                        display: inline-block;
                        vertical-align: text-top;
                    }
                    .van-icon{
                        position: absolute;
                        top: 0.25rem;
                        right: 0.2rem;
                    }
                }
                .address{
                    height: 0.9rem;
                    line-height: 1.3rem;
                    padding-top: 0.15rem;
                    & > img{

                    }
                    .addressRight{
                        width: 91%;
                        height: 0.9rem;
                        position: relative;
                        float: right;
                        p{
                            width: 80%;
                            line-height: 0.4rem;
                            color: #323232;
                            font-size: 0.28rem;
                            display: inline-block;
                            vertical-align: text-top;
                            padding-right: 0.2rem;
                        }
                        img{
                            vertical-align: super;
                            position: absolute;
                            top: 0.2rem;
                            right: 0.2rem;
                        }
                    }
                }
            }
        }
    }
    .card_tabs{
        background: #ffffff;
        margin-bottom: 0.2rem;
        border-radius: 0.1rem;
        .van-tabs{
            padding: 0 0.2rem;
        }
        .discountInfo{
            padding: 0 0.3rem;
            .paythebill{
                .top{
                    height: 0.94rem;
                    line-height: 0.94rem;
                    & > img{
                        vertical-align: middle;
                    }
                    & > span{
                        color: #383630;
                        font-size: 0.3rem;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .paybillBtn{
                        width: 1.2rem;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        font-size: 0.28rem;
                        border-radius: 0.1rem;
                        float: right;
                        margin-top: 0.2rem;
                    }
                }
                .bottom{
                    font-size: 0.28rem;
                    color: #666666;
                }
            }
            .infoTitle{
                height: 0.94rem;
                line-height: 0.94rem;
                & > img{
                    vertical-align: middle;
                }
                & > span{
                    color: #383630;
                    font-size: 0.3rem;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .infoCard{
                
                .van-row{
                    height: 1.6rem;
                    padding: 0.3rem 0;
                    border-bottom: 1px solid #ebedf0;
                }
                .infoname{
                    width: 98%;
                    color: #323232;
                    font-size: 0.3rem;
                    overflow:hidden; 
                    text-overflow:ellipsis;
                    display:-webkit-box;  
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2; 
                }
                .infoprice{
                    position: absolute;
                    bottom: -0.2rem;
                }
                .price{
                    color: #FB5C5B;
                    font-size: 0.36rem;
                }
                .originPrice{
                    color: #666666;
                    font-size: 0.26rem;
                    text-decoration: line-through;
                }
                .buyBtn{
                    width: 1.2rem;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    font-size: 0.28rem;
                    border-radius: 0.1rem;
                    margin-left: 4%;
                }
                .hasSold{
                    width: 100%;
                    color: #666666;
                    font-size: 0.26rem;
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                }
            }
        }
    }
    .card_recommend{
        background: #ffffff;
        margin-bottom: 0.2rem;
        border-radius: 0.1rem;
        padding: 0 0.3rem 0.3rem 0.3rem;
        .van-cell{
            padding: 17px 0 0 0;
        }
        .recoTitle{
            color: #383630;
            font-size: 0.34rem;
            font-weight: bold;
        }
        .recommentImgs{
            overflow-x: scroll;
            white-space: nowrap;
            margin-top: 0.2rem;
            margin-bottom: 0.1rem;
            .content{
                margin-right: 0.1rem;
                display: inline-block;
                &:last-of-type{
                    margin-right: 0;
                }
            }
            .des{
                color: #323232;
                font-size: 0.28rem;
                text-align: center;
            }
        }
        .hotmenu{
            color: #323232;
            font-size: 0.28rem;
        }
    }
    .card_comment{
        background: #ffffff;
        margin-bottom: 0.2rem;
        border-radius: 0.1rem;
        .commentTitle{
            color: #383630; 
            font-size: 0.34rem; 
            font-weight: bold;
        }
        .num{
            position: absolute;
            top: 10px;
            left: 27%;
        }
        .showmoreComment{
            text-align: center;
            color: #323232;
            font-size: 0.28rem;
            line-height: 0.88rem;
            .van-icon{
                vertical-align: text-top;
                margin-left: 0.1rem;
            }
        }
    }
    .card_otherLike{
        background: #ffffff;
        margin-bottom: 0.2rem;
        border-radius: 0.1rem;
        .otherstitle{
            padding: 0.3rem 0.3rem 0.2rem 0.3rem;
            color: #323232;
            font-size: 0.34rem;
        }
        .content{
            h4{
                color: #323232;
                font-size: 0.3rem;
                text-align: left;
                padding: 0 0.1rem;
            }
            .line1{
                width: 100%;
                height: 0.6rem;
                line-height: 0.6rem;
                margin-top: -0.25rem;
                .van-rate{
                    display: inline-block;
                    margin-left: 0.07rem;
                }
                & > span{
                    color: #666666;
                    font-size: 0.24rem;
                }
            }
            .line2{
                width: 100%;
                height: 0.6rem;
                line-height: 0.6rem;
                // margin: -0.2rem 0 0.3rem 0;
                margin-top: -0.2rem;
                & > span{
                    color: #666666;
                    font-size: 0.24rem;
                    margin-left: 0.1rem;
                }
            }
        }
    }
}
</style>