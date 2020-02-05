<template>
    <div class="home">
        <!-- 第二版首页顶部黄色渐变 -->
        <!-- <div class="homebg"></div> -->

        <div class="content">
            <div class="searchBar">
                <van-dropdown-menu active-color="#472D22">
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
                <img class="searchimg" :src="searchIcon" alt="search">
                <input class="searchInput" type="text" placeholder="请输入商家名称">
            </div>

            <div class="prodSwipe">
                <van-swipe :autoplay="3000" indicator-color="white">         <!--   :loop="false" :width="345" -->
                    <van-swipe-item v-for="(v,i) in swipeList" :key="i">
                        <van-image :src="v.img" width="100%" height="100%" fit="fill" />
                    </van-swipe-item>
                </van-swipe>
            </div>

            <div class="prodDrid">
                <div class="mainGrid">
                    <div class="mainmenu van-hairline--bottom">
                        <van-grid :column-num="5" clickable :border="false">
                            <van-grid-item v-for="(value,index) in mainProdGridList" :key="index" :icon="value.icon" :text="value.title" />
                        </van-grid>
                    </div>
                    <div class="activityAD">
                        <!-- <img src="../assets/image/activity.png" alt="" style="width: 1.2rem; margin-left: 0.3rem;" > -->
                        <van-notice-bar color="#323232" background="#FFF" :left-icon="audioIcon" >
                            双十一嗨购，海鲜满199元立减100元，机会难得，速来抢购！跳楼价，放血价，机不可失，失不再来，错过今天，再等三年！！！
                        </van-notice-bar>
                    </div>
                </div>
                
                <div class="bigGrid">
                    <van-grid :column-num="2" clickable :border="false">
                        <van-grid-item v-for="(value,index) in prodGridBig" :key="index" icon="" text="">
                            <img :src="value.src" alt="" width="100%" height="100%">
                        </van-grid-item>
                    </van-grid>
                </div>
            </div>

            <div class="prodList">
                <van-divider>为你推荐</van-divider>


                <keep-alive>
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad">
                    <!-- <van-cell v-for="(item,index) in list" :key="index"> -->
                        <van-panel class="van-ellipsis" v-for="(item,index) in list" :key="index" :title="item.merchantName" :desc="item.subtitle" :status="item.distance" @click="pushtoDetail(item)">
                            <div>
                                <van-image class="shopImg" width="1.9rem" height="1.6rem" fit="cover" :src="item.logo" />
                                <van-image class="shopImg" width="1.9rem" height="1.6rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                                <van-image class="shopImg" width="1.9rem" height="1.6rem" fit="cover" :src="melo" />
                                <!-- <van-image class="shopImg" width="1.4rem" height="1.4rem" fit="cover" :src="melo" />
                                <van-image class="shopImg" width="1.4rem" height="1.4rem" fit="cover" :src="melo" />
                                <van-image class="shopImg" width="1.4rem" height="1.4rem" fit="cover" :src="melo" /> -->
                            </div>
                            <div slot="footer">
                                <span class="price">
                                    <span class="rmb">￥</span>2400.59
                                </span>
                                <span class="originPrice">￥2999.00</span>
                                <van-tag plain>{{item.priceTag}}</van-tag>
                            </div>
                        </van-panel>
                    <!-- </van-cell> -->
                </van-list>
                </keep-alive>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            list: [],
            loading: false,
            error: false,
            finished: false,
            value1: 0,
            option1: [
                { text: '大连', value: 0 },
                { text: '青岛', value: 1 },
                { text: '厦门', value: 2 }
            ],
            melo: require('../assets/image/melo.jpg'),
            searchIcon: require('../assets/icon/search.png'),
            audioIcon: require('../assets/image/audio.png'),
            swipeList: [
                {img: require('../assets/image/banner01.png')},
                {img: require('../assets/image/banner02.png')}
            ],
            mainProdGridList: [
                {title: '秒杀', icon: require('../assets/icon/prodmenu_01.png')},
                {title: '拼团', icon: require('../assets/icon/prodmenu_02.png')},
                {title: '餐饮美食', icon: require('../assets/icon/prodmenu_03.png')},
                {title: '娱乐休闲', icon: require('../assets/icon/prodmenu_04.png')},
                {title: '美容美发', icon: require('../assets/icon/prodmenu_05.png')},
                {title: '婚纱摄影', icon: require('../assets/icon/prodmenu_06.png')},
                {title: '培训教育', icon: require('../assets/icon/prodmenu_07.png')},
                {title: '酒店民宿', icon: require('../assets/icon/prodmenu_08.png')},
                {title: '家居建材', icon: require('../assets/icon/prodmenu_09.png')},
                {title: '其他', icon: require('../assets/icon/prodmenu_10.png')}
            ],
            prodGridBig: [
                {src: require('../assets/image/prodmenu_big1.png')},
                {src: require('../assets/image/prodmenu_big2.png')}
            ],
            dataList: [
                {
                    coordinate: "121.495026,38.879854",
                    distance: "8.0km",
                    distanceNum: "8463",
                    id: 11001,
                    logo: "http://zz.wsmtec.com/profile/upload/merchant/20190911/810b5366d3078a18395c13fb0fd7ea35.jpg",
                    merchantName: "加格达奇区众合汽车维修中心",
                    priceTag: "提前预约",
                    subtitle: "支付测试账户二",
                    title: "众和轮胎",
                    type: "0",
                    __proto__: Object
                },{
                    coordinate: "121.625488,38.892682",
                    distance: "10.0km",
                    distanceNum: "10886",
                    id: 11000,
                    logo: "http://zz.wsmtec.com/profile/upload/merchant/20190911/7721a6d527098afc7fb4a31493236018.jpg",
                    merchantName: "加格达眼镜店",
                    priceTag: "提前预约",
                    subtitle: "支付测试账户一",
                    title: "优质眼镜",
                    type: "0",
                    __proto__: Object
                }
            ]
        };
    },
    components: {},
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
        },

        pushtoDetail(i){
            // console.log(i)
            this.$router.push({ name: 'shopDetail', params: { id: i.id }})
        }
    }
};
</script>

<style scoped lang="less">
.home{
    width: 100vw;
    position: relative;
    .homebg{
        width: 100vw;
        height: 50vh;
        background: linear-gradient(#FFCC00, #F3F3F3); 
        background: -webkit-linear-gradient(#FFCC00, #F3F3F3); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#FFCC00, #F3F3F3); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#FFCC00, #F3F3F3); /* Firefox 3.6 - 15 */
        position: absolute;
        z-index: -100;
    }

    .content{
        // padding: 0 0.3rem;
        .searchBar{
            width: 100vw;
            // height: 0.88rem;
            height: 0.92rem;
            text-indent: 0.3rem;
            display: flex;
            position: relative;
            z-index: 100;
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
                // line-height: 0.66rem;
                // margin-top: 0.14rem;
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
                font-size: 0.3rem;
                color: #323232;
                // color: #aaaaaa;
                background: rgba(255,255,255,0.4);
                border-radius: 6px;
                border: none;
            }
        }

        .prodSwipe{
            z-index: 10;
            position: relative;
            top: -0.88rem;
            .van-swipe {
                height: 4.17rem;
            }
            .van-swipe-item {
                transform: translateX(0px);
            }
        }

        .prodDrid{
            padding: 0 0.3rem;
            margin-top: -0.57rem;
            .mainGrid{
                // height: 4.2rem;
                // height: 3.8rem;
                background: white;
                border-radius: 10px;
                overflow: hidden;
                .activityAD{
                    // height: 0.67rem;
                    height: 0.8rem;
                    background: url('../assets/image/activity.png') 0.3rem 0.25rem no-repeat;
                    background-size: 1.2rem auto;
                    .van-notice-bar{
                        width: 4.8rem;
                        position: relative;
                        // top: -0.8rem;
                        left: 1.5rem;
                        padding: 0 10px;
                    }
                }
            }
            .bigGrid{
                margin-top: 0.31rem;
                .van-grid-item{
                    padding: 0 2px;
                    border-radius: 10px;
                    overflow: hidden;
                }
            }
        }

        .prodList{
            padding: 0 0.3rem;
            margin-bottom: 0.5rem;
            .shopImg{
                margin-top: 0.2rem;
                border-radius: 6px;
                overflow: hidden;
                &:first-child{
                    margin-left: 0.3rem;
                }
                &:last-child{
                    margin-right: 0.3rem;
                }
            }
            .van-panel__footer{
                & > div{
                    margin-top: -0.5rem;
                }
            }
            .price{
                font-size: 0.36rem;
                color: #FB5C5B;
                .rmb{
                    font-size: 0.24rem;
                }
            }
            .originPrice{
                font-size: 0.24rem;
                color: #999999;
                text-decoration: line-through;
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
                    font-size: 0.32rem;
                    color: #323232;
                }
                .van-cell__value{
                    color: #999999;
                }
                .van-panel__content{
                    overflow-x: scroll;
                    // -webkit-overflow-scrolling: touch;
                }
            }
        }
    }
}

// 奇偶数
// .van-swipe .van-swipe-item:nth-child(odd) {
//     background-color: #66c6f2;
// }
// .van-swipe .van-swipe-item:nth-child(even) {
//     background-color: #39a9ed;
// }
</style>