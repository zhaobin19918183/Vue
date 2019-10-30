<template>
    <div class="footerBar">
        <van-number-keyboard safe-area-inset-bottom />
        <van-tabbar route active-color="#472D22" inactive-color="#472D22">
            <van-tabbar-item replace to="/home">
                <span>首页</span>
                <img slot="icon" slot-scope="props" :src="props.active ? icon_home.active : icon_home.normal" />
            </van-tabbar-item>
            <van-tabbar-item replace to="/discount">
                <span>优惠</span>
                <img slot="icon" slot-scope="props" :src="props.active ? icon_discount.active : icon_discount.normal" />
            </van-tabbar-item>
            <van-tabbar-item replace to="/aboutme">
                <span>我的</span>
                <img slot="icon" slot-scope="props" :src="props.active ? icon_mine.active : icon_mine.normal" />
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "footerBar",
    data() {
        return {
            icon_home: {
                normal: require("../assets/icon/foot_home.png"),
                active: require("../assets/icon/foot_home_active.png")
            },
            icon_discount: {
                normal: require("../assets/icon/foot_discount.png"),
                active: require("../assets/icon/foot_discount_active.png")
            },
            icon_mine: {
                normal: require("../assets/icon/foot_mine.png"),
                active: require("../assets/icon/foot_mine_active.png")
            }
        };
    },
    components: {},
    computed: {},
    methods: {}
};
</script>

<style scoped lang="less">
.footerBar{
    .van-tabbar-item__icon img{
        height: 22px;
    }
}
</style>