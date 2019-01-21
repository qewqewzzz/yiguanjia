<template>
    <div class="activation-wrap">
        <div class="m-card m-pr m-topbg">
            <img src="/static/img/vipv.png" class="m-logo" alt="">
            <div class="m-tip-box">
                <p class="m-tip1">会员等级：VIP{{vipType}}</p>
                <p class="m-tip2">距离下一级还差：{{diﬀMoney}}元</p>
                <p class="m-tip3">购买会员：VIP{{checkerVIP}}</p>
                <p class="m-tip4">确定需购买的等级后，请联系客服</p>
            </div>
        </div>
        <div class="m-card">
            <checker
                v-model="checkerVIP"
                default-item-class="demo5-item"
                selected-item-class="demo5-item-selected"
                class="checker-box"
                @on-change="fetchActivation()"
                >
                <checker-item v-for="i in [1, 2]" :key="i" :value="i">VIP{{i}}</checker-item>
                <checker-item style="margin-top: 30px;" v-for="i in [3, 4]" :key="i" :value="i">VIP{{i}}</checker-item>
            </checker>
        </div>
        <div class="m-card">
            <p style="font-size: 12px; color: #C42632;">审核通过后获取{{passAmount}}的洗护券</p>
        </div>
        <group class="z-nofixed-fullbtn">
            <!-- <router-link
                :to="{
                    name: 'index',
                }"> -->
                <a :href="'tel:' + serverNo">
                    <x-button
                        :class="['m-btn', 'm-activationBtn']"
                        >
                        联系客服
                    </x-button>
                </a>
            <!-- </router-link> -->
        </group>
    </div>
</template>
<script>
require('./activation.less')
import {userSettings} from '../../data/data.js'

import { Cell, Group, XButton, Tabbar, TabbarItem, XInput, Flexbox, FlexboxItem, Icon, XTextarea, DatetimeRange, Checker, CheckerItem } from 'vux'

export default {
    components: {
        Cell,
        Group,
        XButton,
        Tabbar,
        TabbarItem,
        XInput,
        Flexbox,
        FlexboxItem,
        Icon,
        XTextarea,
        DatetimeRange,
        Checker,
        CheckerItem
    },
    data() {
        return {
            userInfo: userSettings,
            checkerVIP: 1,
            vipType: 1,
            diﬀMoney: 2,
            serverNo: 3,
            passAmount: 4,
        }
    },
    created(){
        this.fetchActivation()
    },
    computed: {
        vipActivation(){
            return this.$store.getters.vipActivation
        }
    },
    methods: {
        fetchActivation() {
            this.$store.dispatch('fetchActivation', {
                vipType: this.checkerVIP
            }).then(() => {
                this.vipType = this.vipActivation.vipType
                this.diﬀMoney = this.vipActivation.diﬀMoney
                this.serverNo = this.vipActivation.serverNo
                this.passAmount = this.vipActivation.passAmount
            })
        }
    }
}
</script>