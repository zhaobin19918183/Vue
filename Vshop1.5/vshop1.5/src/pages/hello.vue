<template>
    <div class="hello">
        <van-notice-bar :text="news" left-icon="volume-o" />
        <span>{{this.msg}}</span>

        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <van-swipe-cell>
            <template slot="left">
                <van-button square type="primary" text="选择" />
            </template>

            <van-cell :border="false" title="单元格" value="内容" />

            <template slot="right">
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏"/>
            </template>
        </van-swipe-cell>

        <!-- 地图 -->
        <!-- <amap></amap> -->

    </div>
</template>

<script>
// import amap from '../components/amap'


export default {
    name: 'hello',
    props: {
        msg: String
    },
    components: {
        // amap
    },

    data(){
        return{
            news: '真正的大师永远都怀着一颗学徒的心！ 陷阵之志，有死无生！ 如果你逃命的话，就看不到我是怎么背刺你的了！ 刀下生，刀下死 。。'
        }
    },

    mounted(){
        this.getData();
    },

    methods: {
        getData(){
            // console.log(this.axios)
            // this.axios.get('/customer/banner/catelist').then((res)=>{
            //     console.log(res);
            // }).catch((err)=>{
            //     console.log(err);
            // })
        }
    }

}
</script>


<style scoped lang="less">
.van-swipe{
    height: 25vh;
}
.van-swipe-item{
    width: 320px;
    height: 100%;
    transform: translateX(0px);
}
.van-swipe .van-swipe-item:nth-child(odd) {
    background-color: #66c6f2;
}
.van-swipe .van-swipe-item:nth-child(even) {
    background-color: #39a9ed;
}
</style>
