<template>
    <div class="login-wrap">
        <div class="m-card m-pr">
            <img src="/static/img/discount.png" class="m-logo" alt="">
            <div class="m-info-box">
                <p class="m-info-price">1000,000</p>
                <p class="m-info-tip">你的礼券余额</p>
            </div>
        </div>
        <group class="m-card" style="padding-bottom: 10px">
            <x-input class="m-input" title="" placeholder="请输入转赠的手机号" keyboard="number" is-type="china-mobile" placeholder-align="left" text-align="left"></x-input>
        </group>
        <div class="m-helpBox" align="right">
            <img src="/static/img/help.png" class="m-help" alt="">
        </div>
        <group class="m-card" style="padding-top: 0px">
            <x-input class="m-input" title="" placeholder="请输入转赠金额" keyboard="number" is-type="" placeholder-align="left" text-align="left"></x-input>
        </group>
        <group class="z-nofixed-fullbtn">
            <router-link
                :to="{
                    name: 'index',
                }">
                <x-button
                    :class="['m-btn', 'm-loginBtn']"
                    >
                    转赠
                </x-button>
            </router-link>
        </group>
    </div>
</template>
<script>
require('./couponGive.less')
import {userSettings} from '../../data/data.js'

import { Cell, Group, XButton, Tabbar, TabbarItem, XInput, Flexbox, FlexboxItem, Icon, XTextarea, DatetimeRange } from 'vux'

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
        DatetimeRange
    },
    data() {
        return {
            userInfo: userSettings
        }
    }
}
</script>