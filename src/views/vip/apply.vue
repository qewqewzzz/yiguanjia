<template>
    <div class="login-wrap">
        <div class="m-card m-pr">
            <img src="/static/img/vip.png" class="m-logo" alt="">
            <p class="m-logo-title">开通翼管家会员</p>
        </div>
        <group class="">
            <x-input class="m-input" title="真实姓名" placeholder="" keyboard="" is-type="china-name" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="">
            <x-input class="m-input" title="手机号" placeholder="" keyboard="number" is-type="china-mobile" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="">
            <datetime-range title="出生日期" start-date="2018-08-08" end-date="2019-09-09"></datetime-range>
        </group>
        <group class="">
            <x-input class="m-input" title="身份证" placeholder="" keyboard="number" is-type="" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="">
            <x-textarea :max="200" name="remark" placeholder="备注信息输入框" :show-counter="false"></x-textarea>
        </group>
        <group class="z-nofixed-fullbtn">
            <router-link
                :to="{
                    name: 'index',
                }">
                <x-button
                    :class="['m-btn', 'm-loginBtn']"
                    >
                    提交申请
                </x-button>
            </router-link>
        </group>
    </div>
</template>
<script>
require('./apply.less')
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