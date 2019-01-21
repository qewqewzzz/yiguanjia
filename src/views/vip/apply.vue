<template>
    <div class="apply-wrap">
        <div class="m-card m-pr">
            <img src="/static/img/vip.png" class="m-logo" alt="">
            <p class="m-logo-title">开通翼管家会员</p>
        </div>
        <group class="">
            <x-input v-model="realName" class="m-input" title="真实姓名" placeholder="" keyboard="" is-type="china-name" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="m-weui-cells">
            <x-input v-model="mobile" class="m-input" title="手机号" placeholder="" keyboard="number" is-type="china-mobile" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="m-weui-cells">
            <datetime-range v-model="birthday" title="出生日期" start-date="2018-08-08" end-date="2019-09-09"></datetime-range>
        </group>
        <group class="m-weui-cells">
            <x-input v-model="certNo" class="m-input" title="身份证" placeholder="" keyboard="number" is-type="" placeholder-align="right" text-align="right"></x-input>
        </group>
        <group class="m-weui-cells">
            <x-textarea v-model="memo" :max="200" name="remark" placeholder="备注信息输入框" :show-counter="false"></x-textarea>
        </group>
        <group class="z-nofixed-fullbtn" style="margin-top: 40px;">
            <!-- <router-link
                :to="{
                    name: 'index',
                }"> -->
                <x-button
                    :class="['m-btn', 'm-applyBtn']"
                    @click.native="fetchApply()"
                    >
                    提交申请
                </x-button>
            <!-- </router-link> -->
        </group>
        <div align="center" class="agreement-box">
            <check-icon :value.sync="isAgreement" type="plain">提交申请即同意翼管家会员协议</check-icon>
        </div>
    </div>
</template>
<script>
require('./apply.less')
import {userSettings} from '../../data/data.js'

import { Cell, Group, XButton, Tabbar, TabbarItem, XInput, Flexbox, FlexboxItem, Icon, XTextarea, DatetimeRange, CheckIcon } from 'vux'

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
        CheckIcon
    },
    data() {
        return {
            userInfo: userSettings,
            isAgreement: false,
            realName: '',
            mobile: '',
            birthday: [],
            certNo: '',
            memo: '',
        }
    },
    methods: {
        fetchApply() {
            this.$store.dispatch('fetchApply', {
                isAgreement: this.isAgreement
            }).then(() => {
                this.$router.push({
                    name: 'index',
                })
            })
        }
    }
}
</script>