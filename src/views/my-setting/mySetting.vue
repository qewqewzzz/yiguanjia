<template>
	<div class="mysetting-wrap">
		<!-- <cell
			class="z-cell-item"
			:title="'头像'"
			is-link>
			<div class="user-logo" slot="value">
				<img
				class=""
				:src="userInfo.logo">
			</div>
		</cell> -->
		<cell
			class="z-cell-item"
			:title="'真实姓名'"
			:value="'啦啦啦'"
			>
		</cell>
		<cell
			class="z-cell-item"
			:title="'手机号'"
			:value="userInfo.tell"
			>
		</cell>
		<cell
			class="z-cell-item"
			:title="'出生日期'"
			:value="'1888-88-88'"
			>
		</cell>
		<cell
			class="z-cell-item"
			:title="'身份证'"
			:value="'444444444444444444'"
			>
		</cell>
		<cell
			class="z-cell-item"
			:title="'手机号换绑'"
			:value="''"
			>
			<div>
				444444444444444444
				<span class="m-change"> 换绑</span>
			</div>
		</cell>

		<group class="z-nofixed-fullbtn">
			<x-button
				class="m-btn"
				type="warn">
				提交
			</x-button>
		</group>
	</div>
</template>
<script>
require('./mySetting.less')
import {userSettings} from '../../data/data.js'

import { Cell, Group, XButton, Tabbar, TabbarItem } from 'vux'

export default {
	components: {
		Cell,
		Group,
		XButton,
		Tabbar,
		TabbarItem
	},
	data() {
		return {
			userInfo: userSettings
		}
	}
}
</script>