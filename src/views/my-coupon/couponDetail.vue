<template>
    <div class="couponDetail-wrap">
        <div class="m-card m-pr">
            <img src="/static/img/discount.png" class="m-logo" alt="">
            <span class="m-yuan">￥</span>
            <div class="m-info-box">
                <p class="m-info-price">1000,000</p>
                <p class="m-info-tip">你的礼券余额</p>
            </div>
        </div>
        <group class="z-nofixed-fullbtn m-give">
            <router-link
                :to="{
                    name: 'index',
                }">
                <x-button
                    plain
                    :class="['m-btn', 'm-giveBtn']"
                    >
                    转赠
                </x-button>
            </router-link>
        </group>
        <p style="margin-left:14px;font-size:16px;m-bottom:5px;">礼券明细</p>
        <div class="m-cell-box">
            <m-cell :title="'真实姓名'" :value="'啦啦啦'"></m-cell>
            <m-cell class="border-top-grey" :title="'真实姓名'" :value="'啦啦啦'"></m-cell>
        </div>
    </div>
</template>
<script>
require('./couponDetail.less')
import {userSettings} from '../../data/data.js'

import MCell from '../../components/mCell.vue'
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
        DatetimeRange,
        MCell
    },
    data() {
        return {
            userInfo: userSettings
        }
    }
}
</script>