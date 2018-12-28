<template>
	<div class="z-page">
		<div class="mine-head-wrap">
			<img :src="userInfo.logo"/>
			<div class="mine-info">
				<span class="name">{{userInfo.name}}</span>
				</br>
				<span class="vip"><badge class="vipBadge" text="VIP 1"></badge></span>
				</br>
				<div>
					<span class="code">{{ '专属邀请码 1898789' }}</span>
					<span class="copy">复制</span>
				</div>
			</div>
			<!-- <router-link
				class="setting zui-icon zui-icon-setting"
				:to="{
					name: 'mySetting'
				}">
			</router-link> -->
		</div>
		<div class="mine-order-wrap">
			<!-- <cell
				class="mine-order-all"
				:title="orderTag.all.text"
				:value="'查看全部'"
				:link="{
					name: 'orderList',
					query: {tag:orderTag.all.tag}
				}">
			</cell> -->

			<flexbox :gutter="0">
				<flexbox-item>
					<router-link
						class="mine-order-item"
						:to="{
							name: 'orderList',
							query: {tag: orderTag.pay.tag}
						}">
						<badge class="badge" text="2"></badge>
						<span :class="orderTag.pay.icon"></span>
						<div>{{orderTag.pay.text}}</div>
					</router-link>
				</flexbox-item>
				<flexbox-item>
					<router-link
						class="mine-order-item"
						:to="{
							name: 'orderList',
							query: {tag: orderTag.send.tag}
						}">
						<badge class="badge" text="1"></badge>
						<span :class="orderTag.send.icon"></span>
						<div>{{orderTag.send.text}}</div>
					</router-link>
				</flexbox-item>
				<flexbox-item>
					<router-link
						class="mine-order-item"
						:to="{
							name: 'orderList',
							query: {tag: orderTag.get.tag}
						}">
						<badge class="badge" text="10"></badge>
						<span :class="orderTag.get.icon"></span>
						<div>{{orderTag.get.text}}</div>
					</router-link>
				</flexbox-item>
				<flexbox-item>
					<router-link
						class="mine-order-item"
						:to="{
							name: 'orderList',
							query: {tag: orderTag.comment.tag}
						}">
						<badge class="badge" text="9"></badge>
						<span :class="orderTag.comment.icon"></span>
						<div>{{orderTag.comment.text}}</div>
					</router-link>
				</flexbox-item>
				<flexbox-item>
					<router-link
						class="mine-order-item"
						:to="{
							name: 'orderList',
							query: {tag: orderTag.sole.tag}
						}">
						<badge class="badge" text="6"></badge>
						<span :class="orderTag.sole.icon"></span>
						<div>{{orderTag.sole.text}}</div>
					</router-link>
				</flexbox-item>
			</flexbox>
		</div>

		<group >
			<grid :cols="3" :show-lr-borders="false">
		      	<grid-item v-for="(item, index) in otherOperations" :label="item.text" :key="index" :link="{name: item.link}">
		        	<img slot="icon" :src="item.icon">
		      	</grid-item>
		    </grid>
		</group>
		<!-- <group >
			<cell
				class="z-cell-item"
				:title="'我的收藏'"
				:link="{
					name: 'myLike'
				}">
			</cell>
			<cell
				class="z-cell-item"
				:title="'我的优惠券'"
				:link="{
					name: 'myCoupon'
				}">
			</cell>
			<cell
				class="z-cell-item"
				:title="'收货地址'"
				:link="{
					name: 'myAddress'
				}">
			</cell>
			<cell
				class="z-cell-item"
				:title="'我要开馆'"
				is-link>
			</cell>
		</group> -->
	</div>
</template>
<script>
require('./mine.less')
import {userInfo} from '../../data/data.js'

import { Badge, Cell, Group, Flexbox, FlexboxItem, Grid, GridItem } from 'vux'
export default {
	components: {
		Badge,
		Group,
		Cell,
		FlexboxItem,
		Flexbox,
		Grid,
		GridItem
	},
	data() {
		return {
			userInfo: userInfo,
			orderTag: {
				all: {
					tag: 'all',
					text: '我的订单',
					icon: ''
				},
				pay: {
					tag: 'pay',
					text: '待付款',
					icon: 'zui-icon zui-icon-payment'
				},
				send: {
					tag: 'send',
					text: '待发货',
					icon: 'zui-icon zui-icon-shipped'
				},
				get: {
					tag: 'get',
					text: '待收货',
					icon: 'zui-icon zui-icon-the-receipt'
				},
				comment: {
					tag: 'comment',
					text: '待评价',
					icon: 'zui-icon zui-icon-comment'
				},
				sole: {
					tag: 'sole',
					text: '售后/退款',
					icon: 'zui-icon zui-icon-KEFU'
				}
			},
			otherOperations: [{
				text: '礼券',
				icon: '/static/img/gifts.png',
				link: 'myCoupon',
			}, {
				text: '申请开店',
				icon: '/static/img/reply.png',
			}, {
				text: '分享有礼',
				icon: '/static/img/share.png',
			}, {
				text: '个人信息',
				icon: '/static/img/userinfo.png',
				link: 'mySetting',
			}, {
				text: '我的收藏',
				icon: '/static/img/collection.png',
				link: 'myLike',
			}, {
				text: '收货地址',
				icon: '/static/img/address.png',
				link: 'myAddress',
			}, {
				text: '关于我们',
				icon: '/static/img/V.png',
			}, {
				text: '客服',
				icon: '/static/img/call.png',
				link: 'category',
			}]
		}
	}
}
</script>