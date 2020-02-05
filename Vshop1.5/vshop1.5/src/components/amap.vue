<template>
    <div class="amap">
        <div class="amap-page-container">
            <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
                <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker" ></el-amap-marker>
            </el-amap>
        </div>
    </div>
</template>

<script>
import VueAMap from 'vue-amap';

let amapManager = new VueAMap.AMapManager();

export default {
    name: 'amap',
    data() {
        let self = this;
        return {
            amapManager,
            zoom: 12,
            positions: {
                lng: "",
                lat: "",
                address: "",
                loaded: false
            },
            center: [121.59996, 31.197646],
            markers: [
                [121.59996, 31.197646],
                [121.40018, 31.197622],
                [121.69991, 31.207649]
            ],
            address: '',
            events: {
                click(e) {
                    let { lng, lat } = e.lnglat;
                    self.lng = lng;
                    self.lat = lat;

                    // 这里通过高德 SDK 完成。
                    // AMap.plugin(["AMap.Geocoder",function(){
                    //     var geocoder = new AMap.Geocoder({
                    //         radius: 1000,
                    //         extensions: "all"
                    //     });
                    // }]);
                    // geocoder.getAddress([lng ,lat], function(status, result) {
                    //     if (status === 'complete' && result.info === 'OK') {
                    //         if (result && result.regeocode) {
                    //             self.address = result.regeocode.formattedAddress;
                    //             self.$nextTick();
                    //         }
                    //     }
                    // });
                }
            },
            plugin: [
                'ToolBar',
                {
                    pName: 'MapType',
                    defaultType: 0,
                    events: {
                        init(o) {
                            // console.log(o);
                        }
                    }
                },
                {
                    pName: "Geolocation",
                    events: {
                        // init(o) {
                        //     // o 是高德地图定位插件实例
                        //     o.getCurrentPosition((status, result) => {
                        //         if (result && result.position) {
                        //             self.lng = result.position.lng;
                        //             self.lat = result.position.lat;
                        //             self.center = [self.lng, self.lat];
                        //             self.loaded = true;
                        //             self.$nextTick();
                        //         }
                        //     });
                        // }

                        // init(o) {

                        //     // o 是高德地图定位插件实例
                        //     o.getCurrentPosition((status, result) => {
                        //         //  console.log(result.position.lng,result.position.lat);  //  能获取定位的所有信息
                        //         if (result && result.position) {
                        //             // self.str = result.formattedAddress;
                        //             // self.positions.address = self.str.substring(
                        //             //   self.str.indexOf("市") + 1
                        //             // );
                        //             self.positions.lng = result.position.lng;
                        //             self.positions.lat = result.position.lat;
                        //             self.center = [self.positions.lng, self.positions.lat];
                        //             self.positions.loaded = true;
                        //             self.$nextTick();
                        //             // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
                        //             // self.$store.commit("POSITION", self.positions);
                        //             // console.log(self.positions);
                        //             sessionStorage.setItem(
                        //                 "id",
                        //                 JSON.stringify(
                        //                 result.position.lng + "," + result.position.lat
                        //                 )
                        //             );
                        //         }
                        //     });
                        // }
                    }
                }
            ]

        }
    },

    components: {},
    computed: {},
    // created() {
    //     let self = this;
    //     let markers = [];
    //     let index = 0;

    //     let basePosition = [121.59996, 31.197646];
    //     let num = 10;

    //     for (let i = 0 ; i < num ; i++) {
    //       markers.push({
    //         position: [basePosition[0], basePosition[1] + i * 0.03],
    //         content: `content ${i}`
    //       });
    //     }
    //     this.markers = markers;
    // },
    mounted() {

        // this.getLocation();
        // console.log(window.sessionStorage.id)  //可以获取到经纬度
    },
    methods: {
        //重新获取地理位置
        getLocation() {
            let self = this;
            return new Promise((resolve, reject) => {
                // sessionStorage中没有缓存，则开始定位
                AMap.service(["AMap.Geolocation"], () => {
                    const geolocation = new AMap.Geolocation({
                        enableHighAccuracy: false, //是否使用高精度定位，默认:true
                        timeout: 5000 //超过5秒后停止定位，默认：无穷大
                    });
                    //  获取位置信息
                    geolocation.getCurrentPosition((status, result) => {
                        // console.log(result.position.lng,result.position.lat);  //  能获取定位的所有信息
                        if (result && result.position) {
                            self.positions.lng = result.position.lng;
                            self.positions.lat = result.position.lat;
                            self.positions.loaded = true;
                            self.$nextTick();
                            // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
                            sessionStorage.setItem(
                            "id",
                            result.position.lng + "," + result.position.lat
                            );
                        }
                    });
                    // 获取位置信息完成触发事件
                });
            });
        }
    },
}
</script>

<style scoped lang="less">
.amap{
    .amap-demo {
        height: 500px;
    }
}
</style>