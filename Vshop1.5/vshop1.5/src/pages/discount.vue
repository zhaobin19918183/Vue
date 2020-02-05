<template>
    <div class="discount">
        <div class="searchBar">
            <van-dropdown-menu active-color="#472D22">
                <van-dropdown-item v-model="value1" :options="option" />
            </van-dropdown-menu>

            <!-- <van-field class="searchInput" v-model="inputval" :left-icon="searchIcon" placeholder="请输入商家名称" /> -->
            <img class="searchimg" :src="searchIcon" alt="search">
            <input class="searchInput" type="text" placeholder="请输入商家名称">
        </div>

        <div class="tablist">
            <van-tabs v-model="active" swipeable color="#FFCF01" animated>
                <van-tab v-for="(item,index) in tabs" :key="index" :title="item.title">
                    <!-- 内容列表list -->
                    <div class="prodList">
                        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad">
                                <van-panel class="van-ellipsis" v-for="(item,index) in list" :key="index" :title="item.merchantName" :desc="item.subtitle" :status="item.distance">
                                    <div>
                                        <van-image class="shopImg" width="1.9rem" height="1.6rem" fit="cover" :src="item.logo" />
                                        <van-image class="shopImg" width="1.9rem" height="1.6rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                                        <van-image class="shopImg" width="1.9rem" height="1.6rem" fit="cover" :src="item.logo" />
                                    </div>
                                    <div slot="footer">
                                        <span class="price">
                                            <span class="rmb">￥</span>2400.59
                                        </span>
                                        <span class="originPrice">￥2999.00</span>
                                        <van-tag plain>{{item.priceTag}}</van-tag>
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
export default {
    name: 'discount',
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
                {title: '距离'},
                {title: '热度'},
                {title: '好评'},
                {title: '足迹'}
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
                    logo: require('../assets/image/comment02.png'),
                    merchantName: "加格达眼镜店",
                    priceTag: "提前预约",
                    subtitle: "支付测试账户一",
                    title: "优质眼镜",
                    type: "0",
                    __proto__: Object
                }
            ]
        }
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
        }
    },
}
</script>

<style scoped lang="less">
.discount{
    .searchBar{
        width: 100vw;
        // height: 0.88rem;
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
            font-size: 0.26rem;
            color: #323232;
            // color: #aaaaaa;
            // background: rgba(255,255,255,0.4);
            background: #FFFFFF;
            border-radius: 6px;
            border: none;
        }
    }

    .tablist{
        .prodList{
            padding: 0.3rem;
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
</style>