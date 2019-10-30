<template>
    <div class="postComment">
        <navTitle title="发布评论"></navTitle>

        <div class="refundCard">
            <!-- 商议不要 -->
            <!-- <van-card desc="描述信息" title="商品标题" :thumb="img" >
                <div slot="tags">
                    <van-rate v-model="stars" />
                </div>
            </van-card> -->

            <div class="addStars">
                <van-radio-group v-model="radio" icon-size="1.49rem">
                    <van-radio v-for="(item,index) in radioGroup" :key="index" :name="index+1">
                        <div class="rateTitle">{{item.name}}</div>
                        <img slot="icon" slot-scope="props" :src="props.checked ? item.iconActive : item.icon">
                    </van-radio>
                </van-radio-group>
            </div>

            <van-cell-group>
                <van-field
                    v-model="consumeNum"
                    clearable
                    label="人均   ¥"
                    label-width="1.2rem"
                    placeholder="请输入消费金额"
                />

                <van-field
                    v-model="message"
                    label=""
                    type="textarea"
                    placeholder="请简单描述以下您对商品的满意程度。"
                    rows="1"
                    label-width="0"
                    :autosize="{ maxHeight: 250, minHeight: 150 }"
                />
            </van-cell-group>

            <div class="uploadImg van-hairline--bottom">
                <van-uploader
                    v-model="fileList"
                    :max-count="8"
                    :before-read="beforeRead"
                    multiple
                    preview-size="1.6rem"
                />
            </div>
        </div>

        <div class="footer">
            <van-button color="#FFCF01">发布评论</van-button>
        </div>
    </div>
</template>

<script>
import navTitle from '../components/navTitle'
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

export default {
    name: 'postComment',
    data() {
        return {
            img: require('../assets/image/melo.jpg'),
            rightArr: require('../assets/icon/right_arr.png'),
            sureIcon: require('../assets/icon/suregreen.png'),
            stars: 1,
            consumeNum: null,
            message: '',
            fileList: [],
            radio: '1',
            radioGroup: [
                {name: '差', icon: require('../assets/icon/rate1.png'), iconActive: require('../assets/icon/rate1_active.png')},
                {name: '一般', icon: require('../assets/icon/rate2.png'), iconActive: require('../assets/icon/rate2_active.png')},
                {name: '还不错', icon: require('../assets/icon/rate3.png'), iconActive: require('../assets/icon/rate3_active.png')},
                {name: '很满意', icon: require('../assets/icon/rate4.png'), iconActive: require('../assets/icon/rate4_active.png')},
                {name: '强烈推荐', icon: require('../assets/icon/rate5.png'), iconActive: require('../assets/icon/rate5_active.png')}
            ],
        }
    },
    components: {
        navTitle
    },
    computed: {},
    methods: {
        beforeRead(file) {
            // console.log(file)
            if (file.size/1024/1024 > 4) {
                Toast('上传图片不得大于4M!');
                return false;
            }
            // if (file.type !== 'image/jpeg') {
            //     Toast('请上传 jpg 格式图片');
            //     return false;
            // }
            return true;
        },
    },
}
</script>

<style scoped lang="less">
.postComment{
    .refundCard{
        position: relative;
        margin-bottom: 0.2rem;

        .addStars{
            font-size: 0.28rem;
            background: white;
            margin-bottom: 0.2rem;
            .van-radio-group{
                display: flex;
                .van-radio{
                    position: relative;
                    border-right: 1px solid #ebedf0;
                    .van-radio__icon{
                        // position: absolute;
                        img{
                            width: 100%;
                        }
                    }
                    .van-radio__label{
                        .rateTitle{
                            width: 100%;
                            text-align: center;
                            color: #383630;
                            line-height: 0.88rem;
                        }
                    }
                }
                .van-radio::after{
                    position: absolute;
                    box-sizing: border-box;
                    content: ' ';
                    pointer-events: none;
                    top: -50%;
                    right: -50%;
                    bottom: -50%;
                    left: -50%;
                    border: 0 solid #ebedf0;
                    -webkit-transform: scale(0.5);
                    transform: scale(0.5);
                }
                .van-radio:last-of-type{
                    border-right: none;
                }
            }
        }

        .van-card{
            height: 1.8rem;
            padding: 0.3rem;
            background-color: #FFF;
            .van-card__thumb {
                width: 1.25rem;
                height: 1.25rem;
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

        .uploadImg{
            padding: 0.3rem 0.3rem;
            .van-uploader{
                .van-uploader__wrapper{
                    .van-uploader__preview{
                        margin: 0 0.16rem 0.16rem 0;
                    }
                }
            }
        }
    }
    .footer{
        width: 92%;
        position: fixed;
        bottom: 0.4rem;
        padding: 0 4%;
        .van-button{
            width: 100%;
            color: #323232 !important;
            font-size: 0.32rem;
            border-radius: 0.1rem;
        }
    }
}
</style>