<template>
    <div class="couponGive-wrap">
        <div class="m-card m-pr m-topbg">
            <img src="/static/img/discount.png" class="m-logo" alt="">
            <span class="m-yuan">￥</span>
            <div class="m-info-box">
                <p class="m-info-price">1000,000</p>
                <p class="m-info-tip">你的礼券余额</p>
            </div>
        </div>
        <group class="m-card" style="padding-bottom: 10px">
            <x-input v-model="mobile" class="m-input" title="" placeholder="请输入转赠的手机号" keyboard="number" is-type="china-mobile" placeholder-align="left" text-align="left"></x-input>
        </group>
        <div class="m-helpBox" align="right">
            <img src="/static/img/help.png" class="m-help" alt="">
        </div>
        <group class="m-card" style="padding-top: 0px">
            <x-input v-model="amount" class="m-input" title="" placeholder="请输入转赠金额" keyboard="number" is-type="" placeholder-align="left" text-align="left"></x-input>
        </group>
        <group class="z-nofixed-fullbtn">
            <!-- <router-link
                :to="{
                    name: 'index',
                }"> -->
                <x-button
                    :class="['m-btn', 'm-loginBtn']"
                    @click.native="fetchUserMen()"
                    >
                    转赠
                </x-button>
            <!-- </router-link> -->
        </group>
        <div v-transfer-dom>
            <confirm
              v-model="userInfoConfirm"
              :close-on-confirm="false"
              title="温馨提示"
              @on-confirm="fetchCouponGive">
                <p style="text-align:center;">请仔细核对，转赠手机号和转增金额</p>
                <div align="left" style="margin-top: 14px;">
                    <img :src="userGive.avatar" style="display: inline-block; width: 50px; height: 50px; border-radius: 50px;vertical-align: middle;" alt="">
                    <span>{{userGive.nickName}}</span>
                    <p style="text-align:left;margin-top: 14px;">转赠手机号： {{mobile}}</p>
                    <p style="text-align:left;margin-top: 7px;">转赠金额： {{amount}}</p>
                </div>
            </confirm>
        </div>
    </div>
</template>
<script>
require('./couponGive.less')
import {userSettings} from '../../data/data.js'

import { Cell, Group, XButton, Tabbar, TabbarItem, XInput, Flexbox, FlexboxItem, Icon, XTextarea, DatetimeRange, Confirm, TransferDom } from 'vux'

export default {
    directives: {
        TransferDom
    },
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
        Confirm
    },
    data() {
        return {
            userInfo: userSettings,
            mobile: '',
            amount: '',
            userInfoConfirm: false
        }
    },
    computed: {
        userGive(){
            return this.$store.getters.userGive
        }
    },
    methods: {
        fetchUserMen() {
            this.$store.dispatch('fetchUserMen', {
                mobile: this.mobile,
                amount: this.amount,
            }).then(() => {
                this.userInfoConfirm = true
            })
        },
        fetchCouponGive() {
            this.$store.dispatch('fetchBalanceTrans', {
                mobile: this.mobile,
                amount: this.amount,
            }).then(() => {
                this.userInfoConfirm = false
            })
        }
    }
}
</script>