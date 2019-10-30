<template>
    <div class="navBar">
        <van-nav-bar :title="title" left-text="" right-text="" left-arrow :fixed="true" @click-left="onClickLeft" @click-right="onClickRight" >
            
            <!-- <van-icon name="star" /> -->
            
            <img :src="menuIcon" alt="menu" slot="right" style="width: 0.34rem; vertical-align: middle;" >
        </van-nav-bar>

        <!-- <div>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
        </div> -->

        <div class="collect" @click="getCollect">
            <van-icon name="star-o" slot="right" color="#472D22" size="0.4rem" v-show="!collection" />
            <van-icon name="star" slot="right" color="#472D22" size="0.4rem" v-show="collection" />
        </div>
        <div class="navMenu" v-show="show">
            <van-cell title="首页" is-link to="home" />
            <van-cell title="我的" is-link to="aboutme" />
            <van-cell title="我的收藏" is-link to="#" />
        </div>

        <!-- <van-popup v-model="show" :overlay="true" closeable position="top" :get-container="getContainer" :style="{ height: '20%',width: '3.1rem',marginTop: '0.92rem',left: 'unset',right: '0.2rem' }" >
            <van-cell title="首页" is-link to="home" />
            <van-cell title="我的" is-link to="aboutme" />
            <van-cell title="我的收藏" is-link to="#" />
        </van-popup> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);


export default {
    name: 'navBar',
    data() {
        return {
            menuIcon: require('../assets/icon/menu.png'),
            // value1: 0,
            // option1: [
            //     { text: '大连', value: 0 },
            //     { text: '青岛', value: 1 },
            //     { text: '厦门', value: 2 }
            // ],
            show: false,
            collection: false
        }
    },
    props: ['title'],
    components: {},
    computed: {},
    methods: {
        onClickLeft() {
            // Toast('返回');
            this.$router.back();
        },
        onClickRight() {
            // Toast('按钮');
            this.show = !this.show;
        },
        getCollect(){
            this.collection = !this.collection;
        }
        // getContainer() {
        //     return document.querySelector('.navBar');
        // }
    },
}
</script>

<style scoped lang="less">
.navBar{
    height: 0.92rem;
    .van-nav-bar{
        background: #FFCF01;
        color: #472D22;
        z-index: 999 !important;
        .van-icon{
            color: #472D22;
        }
    }

    .collect{
        z-index: 999;
        position: fixed;
        top: -0.25rem;
        right: 1.2rem;
    }
    @media only screen and (min-device-width: 410px) {
        .collect {
            top: -0.3rem;
        }
    }
    @media only screen and (max-device-width: 320px) {
        .collect {
            top: -0.16rem;
        }
    }
    .navMenu{
        width: 3.1rem;
        position: fixed;
        top: 0.92rem;
        right: 0.2rem;
        z-index: 2028;
        overflow-y: auto;
        background-color: #fff;
        -webkit-transition: .3s ease-out;
        transition: .3s ease-out;
    }
}
</style>