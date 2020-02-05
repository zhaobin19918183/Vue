<template>
    <div class="login">
        <navTitle title="登录"></navTitle>

        <div class="loginContent">
            <h2>欢迎登录微商城</h2>
            <div class="phoneInput">
                <van-cell-group>
                    <van-field v-model="loginInfo.phone" type="tel" center clearable label="" :left-icon="icon1" placeholder="请输入手机号" :error-message="errmsg" label-width="0">
                        <van-button slot="button" size="small" type="default" :text="btnText" @click="getVerifycode"></van-button>
                    </van-field>
                    <van-field v-model="loginInfo.verifycode" center clearable label="" :left-icon="icon2" placeholder="请输入验证码" label-width="0" />
                </van-cell-group>
            </div>
            <div class="userAgreement">
                <p>
                    登陆代表您已同意
                    <router-link to="/userProtocol?protocolId=1">惠商城用户协议</router-link> 与 
                    <router-link to="/userProtocol?protocolId=2">隐私政策</router-link>
                </p>
            </div>
            <van-button color="#FFCF01" class="loginbtn">登录</van-button>
        </div>

        <div class="loginfooter">
            <p>工作时间8:00—17:30</p>
            <p>* 如有疑问，请致电客服：13614653455</p>
        </div>
    </div>
</template>

<script>
import navTitle from '../components/navTitle'

export default {
    name: 'login',
    data() {
        return {
            errmsg: '',  //手机号格式错误--(为空时不显示)
            icon1: require('../assets/icon/login1.png'),
            icon2: require('../assets/icon/login2.png'),
            btnText: '获取验证码',
            loginInfo: {
                phone: null,
                verifycode: null
            }
        }
    },
    components: {
        navTitle
    },
    computed: {},
    methods: {
        getVerifycode(){
            console.log(12)
        }
    },
}
</script>

<style scoped lang="less">
.login{
    height: 100vh;
    background: #FFF;
    .loginContent{
        padding: 0 0.55rem;
        h2{
            color: #323232;
            font-size: 0.5rem;
            line-height: 2.04rem;
            // margin-left: 0.53rem;
        }
        .phoneInput{
            // padding: 0.2rem;
            margin-left: -0.35rem;
            .van-cell-group{
                .van-button{
                    color: #FFCF01;
                    font-size: 0.3rem;
                    border: none;
                }
            }
        }
        .userAgreement{
            & > p{
                color: #323232;
                font-size: 0.24rem;
                // margin-left: 0.55rem;
                line-height: 0.9rem;
                a{
                    color: #004CFF;
                }
            }
        }
        .loginbtn{
            width: 100%;
            margin-top: 3.2rem;
            color: #323232 !important;
            border-radius: 0.1rem;
        }
    }
    .loginfooter{
        width: 100%;
        text-align: center;
        position: fixed;
        bottom: 0.4rem;
        p{
            color: #999999;
            font-size: 0.24rem;
            line-height: 0.33rem;
        }
    }
}
</style>