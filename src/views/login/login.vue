<template>
	<div class="login-wrap">
		<div class="m-card">
			<img src="/static/img/baoxiang.png" width="76" alt="">
		</div>
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
		<group class="z-nofixed-fullbtn">
			<x-input class="m-input" title="" name="rec" placeholder="输入邀请码" keyboard="number" is-type="china-mobile"></x-input>
		</group>
		<div class="m-card">
			<icon type="warn" class="login-tip-icon"></icon>
			<span class="login-tip-text">&nbsp;请输入正确的手机号</span>
		</div>
		<group class="z-nofixed-fullbtn">
			<x-button
				class="m-btn m-disabledBtn"
				>
				登录
			</x-button>
		</group>
	</div>
</template>
<script>
require('./login.less')
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