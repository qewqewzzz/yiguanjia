<template>
    <div class="myshop-wrap">
        <div class="m-card m-pr">
            <img src="/static/img/vip.png" class="m-logo" alt="">
            <div class="m-logo-title" style="top:60%;">
                <p style="color:#5D4432;font-size:18px;">翼管家店铺申请</p>
                <p style="color:#CAAC8B;font-size:15px;text-align:center;">请填写以下资料</p>
            </div>
        </div>
        <group class="">
            <x-input class="m-input" title="真实姓名" placeholder="" keyboard="" is-type="china-name" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="">
            <x-input class="m-input" title="手机号" placeholder="" keyboard="number" is-type="china-mobile" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="">
            <x-input class="m-input" title="加盟地区" placeholder="" keyboard="" is-type="" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="z-nofixed-fullbtn">
            <router-link
                :to="{
                    name: 'index',
                }">
                <x-button
                    :class="['m-btn', 'm-loginBtn']"
                    >
                    提交
                </x-button>
            </router-link>
        </group>
    </div>
</template>
<script>
require('./myShop.less')
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