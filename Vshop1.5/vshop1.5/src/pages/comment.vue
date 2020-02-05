<template>
    <div class="comment">
        <navBar title="用户评论"></navBar>
        <van-skeleton title avatar animate :row="3" :loading="loading">
            <div class="card van-hairline--bottom" v-for="(item,index) in 8" :key="index" >
                <div class="van-skeleton__avatar van-skeleton__avatar--round">
                    <img src="https://img.yzcdn.cn/vant/logo.png">
                </div>
                <div class="van-skeleton__content">
                    <h3 class="van-skeleton__title">关于 Vant</h3>
                    <van-rate v-model="rate" size="0.22rem" readonly />
                    <span class="date">2019-01-24</span>
                    <p>Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</p>

                    <van-grid :column-num="4" :border="false" square>
                        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="评论">
                            <van-image :src="img" width="100%" height="100%" fit="cover" />
                        </van-grid-item>
                    </van-grid>
                </div>
            </div>
        </van-skeleton>
    </div>
</template>

<script>
import navBar from '../components/navBar'

export default {
    name: "comment",
    data() {
        return {
            loading: false,
            rate: 4,
            img: require('../assets/image/shop1.png'),
        };
    },
    components: {
        navBar
    },
    computed: {},
    methods: {
        swichopen() {
            console.log(this.loading);
        }
    }
};
</script>

<style scoped lang="less">
.comment{
    padding-bottom: 1rem;
    background: #FFF;
    .card{
        display: flex;
        padding: 0.3rem;
        .van-skeleton__avatar{
            width: 0.74rem;
            height: 0.74rem;
            background: #FFF;
            img{
                width: 0.74rem;
                height: 0.74rem;
            }
        }
        .van-skeleton__content{
            .van-skeleton__title{
                width: 40%;
                height: 0.4rem;
                font-size: 0.28rem;
                color: #323232;
                line-height: 0.4rem;
                background: #FFF;
            }
            .van-rate{
                height: 0.4rem;
                line-height: 0rem;
            }
            .date{
                font-size: 0.24rem;
                color: #999999;
                position: absolute;
                top: 0.51rem;
                right: 0.4rem;
            }
            p{
                margin: 0.22rem 0 0.24rem 0;
                color: #323232;
                font-size: 0.28rem;
                line-height: 20px;
            }
        }
    }
}
</style>