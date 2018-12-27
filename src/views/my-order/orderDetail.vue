<template>
	<view-box v-show="!loading">
		<address-card
			v-show="orderDetail.address"
			:tool="false"
			:data="orderDetail.address">
		</address-card>

		<shop-card
			:shop="orderDetail">
			<div
				slot="body"
				class="shop-card-body">
				<good-list
					v-for="item in orderDetail.good"
					:type="'SUBINFOS'"
					:data="item">
				</good-list>
			</div>
			<div
				class="shop-card-foot m-shop-card-foot"
				slot="foot">
				<!-- <div class="z-cell-item z-text-right">
					<span>共{{2}}件</span>
					合计￥<strong>{{orderDetail.sum}}</strong>
				</div>
				<div class="z-cell-item">
					优惠券
					<span class="right-tip">优惠{{orderDetail.coupon}}元</span>
				</div>
				<div class="z-cell-item">
					支付金额
					<span class="right-tip z-text-color-main">￥{{orderDetail.pay}}</span>
				</div>
				<div class="sc-foot-item">
					发票信息
					<div class="tip-box">
						{{orderDetail.bill}}
					</div>
				</div>
				<div class="sc-foot-item">
					买家留言
					<div class="tip-box">
						{{orderDetail.guestMsg}}
					</div>
				</div> -->
				<div class="sc-foot-item">
					<div class="subInfo m-subInfo m-colorBlack">
						团购券
					</div>
					<div class="subInfo m-subInfo m-colorBlack">
						<strong>已使用(2张)</strong>
					</div>
					<div class="subInfo m-subInfo m-colorBlack">
						兑换号: <del>{{'1111 1111 1111'}}</del>
					</div>
					<div class="subInfo m-subInfo m-colorBlack">
						兑换号: <del>{{'1111 1111 1111'}}</del>
					</div>
					<div class="subInfo m-subInfo m-colorBlack">
						使用时间: {{orderDetail.createdAt}}
					</div>
				</div>
				<div class="sc-foot-item m-mt20">
					<div class="subInfo m-subInfo">
						订单编号: {{orderDetail.id}}
					</div>
					<div class="subInfo m-subInfo">
						下单时间: {{orderDetail.createdAt}}
					</div>
					<div class="subInfo m-subInfo">
						订单总价: {{'￥145'}}
					</div>
					<div class="subInfo m-subInfo">
						实付金额: {{'￥145'}}
					</div>
				</div>
				<div class="z-cell-item z-text-right">
					<!-- <span class="service zui-icon zui-icon-KEFU">联系客服</span> -->
					<span
						v-if="orderDetail.state === 0"
						class="state-plain-btn">取消订单
					</span>
					<pay-way
						:title="'立即付款'"
						v-if="orderDetail.state === 0"
						class="state-plain-btn"
						@pay-click="payBtnHandler()">
					</pay-way>
					<span
						v-if="orderDetail.state === 1"
						class="state-plain-btn">
						退款
					</span>
					<span
						v-if="orderDetail.state === 2"
						class="state-plain-btn">
						确认收货
					</span>
					<span
						v-if="orderDetail.state === 3"
						class="state-plain-btn">
						评价
					</span>
					<span
						v-if="orderDetail.state === 4"
						class="state-plain-btn">
						退款中
					</span>
				</div>
			</div>
		</shop-card>
	</view-box>
</template>
<script>
require('./orderDetail.less')
require('./orderList.less')
import {myOrder} from '../../data/data.js'

import AddressCard from '../../components/addressCard.vue'
import GoodList from '../../components/GoodList.vue'
import ShopCard from '../../components/shopCard.vue'
import PayWay from '../../components/payWayPopup.vue'
import {ViewBox} from 'vux'

export default {
	components: {
		AddressCard,
		GoodList,
		ShopCard,
		ViewBox,
		PayWay
	},
	data() {
		return {
			// orderDetail: myOrder
		}
	},
	created() {
		this.initOrder()
	},
	computed: {
		loading(){
			return this.$store.getters.loading
		},
		orderDetail() {
			return this.$store.getters.order
		}
	},
	methods: {
		initOrder(){
			let id = 'a'
			this.$store.dispatch({
				type: 'getOrder',
				id
			})
		}
	}
}
</script>