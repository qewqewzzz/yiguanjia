<template>
    <div class="login-wrap">
        <div class="m-card m-pr m-topbg">
            <img src="/static/img/vipv.png" class="m-logo" alt="">
            <div class="m-tip-box">
                <p class="m-tip1">会员等级：暂无会员</p>
                <p class="m-tip2">距离下一级还差：XXX元</p>
                <p class="m-tip3">购买会员：</p>
                <p class="m-tip4">确定需购买的等级后，请联系客服</p>
            </div>
        </div>
        <div class="m-card">
            <checker
                v-model="checkerVIP"
                default-item-class="demo5-item"
                selected-item-class="demo5-item-selected"
                class="checker-box"
                >

                <checker-item v-for="i in [1, 2]" :key="i" :value="i">￥{{i*300}}</checker-item>
                <checker-item style="margin-top: 30px;" v-for="i in [3, 4]" :key="i" :value="i">￥{{i*300}}</checker-item>
            </checker>
        </div>
        <div class="m-card">
            <p style="font-size: 12px; color: #C42632;">审核通过后获取50W的洗护券</p>
        </div>
        <group class="z-nofixed-fullbtn">
            <router-link
                :to="{
                    name: 'index',
                }">
                <x-button
                    :class="['m-btn', 'm-loginBtn']"
                    >
                    联系客服
                </x-button>
            </router-link>
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
            checkerVIP: 1
        }
    }
}
</script>