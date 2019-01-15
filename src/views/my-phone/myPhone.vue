<template>
	<div class="login-wrap">
		<group class="z-nofixed-fullbtn">
			<x-input class="m-input" title="" name="mobile" placeholder="请输入手机号" keyboard="number" is-type="china-mobile"></x-input>
		</group>

		<flexbox class="m-card">
		    <flexbox-item>
				<x-input class="m-input" title="" name="code" placeholder="输入短信验证码" keyboard="number"></x-input>
		    </flexbox-item>
		    <flexbox-item :span="4">
				<x-button plain class="m-codeBtn">发送验证码</x-button>
		    </flexbox-item>
	    </flexbox>
		<flexbox class="m-card">
		    <flexbox-item>
				<x-input class="m-input" title="" name="code" placeholder="输入图形验证码" keyboard="number"></x-input>
		    </flexbox-item>
		    <flexbox-item :span="4">
				<img class="logo" style="display:inline-block;width:32px;height:32px;" src="/static/img/coupon-timeout.png" width="24" height="24">
		    </flexbox-item>
	    </flexbox>
		<div class="m-tip">
			<icon type="warn" class="login-tip-icon"></icon>
			<span class="login-tip-text">&nbsp;遇到问题请联系客服</span>
		</div>
		<group class="z-nofixed-fullbtn">
			<router-link
				:to="{
					name: 'index',
				}">
				<x-button
					:class="['m-btn', 'm-loginBtn', {'m-disabledBtn': false}]"
					>
					登录
				</x-button>
			</router-link>
		</group>
	</div>
</template>
<script>
require('./myPhone.less')
import {userSettings} from '../../data/data.js'

import { Cell, Group, XButton, Tabbar, TabbarItem, XInput, Flexbox, FlexboxItem, Icon } from 'vux'

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
    	Icon
	},
	data() {
		return {
			userInfo: userSettings
		}
	}
}
</script>