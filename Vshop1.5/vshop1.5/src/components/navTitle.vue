<template>
    <div class="navTitle">
        <van-nav-bar :title="title" left-text="" right-text="" left-arrow :fixed="true" @click-left="onClickLeft">
            
        </van-nav-bar>
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

export default {
    name: 'navTitle',
    data() {
        return {
            
        }
    },
    props: ['title'],
    components: {},
    computed: {},
    methods: {
        onClickLeft() {
            // Toast('返回');
            this.$router.back();
        }
    },
}
</script>

<style scoped lang="less">
.navTitle{
    height: 0.92rem;
    .van-nav-bar{
        background: #FFCF01;
        color: #472D22;
        .van-icon{
            color: #472D22;
        }
    }
}
</style>