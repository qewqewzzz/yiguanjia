<template>
	<div class="z-page">

		<div class="z-head life-index-head" v-if="false">
			<!--<div class="logo">
				<img :src="shop.logo" alt="">
			</div>
			<span class="title">{{shop.title}}</span>-->
			<div class="icon-tool">
				<router-link
					class="zui-icon zui-icon-SEARCH_1"
					:to="{
						name: 'searchResult'
					}">
				</router-link>

				<!--<share-popup
					:shareCls="'zui-icon-SHARE2'"
					:share="shop.shareInfo">
				</share-popup>-->
			</div>
		</div>

		<view-box class="z-content">
			<div class="life-index-banner life-pr">
				<!-- <swiper
					:list="shopBanner">
				</swiper> -->
				<img src="/static/img/article-more.jpg" class="" alt="">
				<div style="padding-bottom:10px;">
					<div style="display:inline-block;margin-left:10px;font-size:14px;">
				    	<img slot="icon" class="m-bugle" style="display:inline-block;margin-right:5px;" src="/static/img/bugle.png">
				    	<span style="vertical-align: middle;">精彩资讯 西湖店盛大开,新老用户享七折</span>
					</div>
					<div style="display:inline-block;margin-right:10px;font-size:14px;float:right;margin-top: 4px;">
				    	<span style="vertical-align: middle;color:#B59744;">全部</span>
				       	<img slot="icon" class="m-more" style="display:inline-block;margin-right:5px;" src="/static/img/more.png">
					</div>
				</div>
				<div class="life-index-search">
					<router-link
						:to="{
							name: 'searchResult'
						}">
						<div class="life-index-search-box">
							<x-input class="life-index-search-input" placeholder="莎莎苏女鞋">
						      	<div slot="label">
						      		<img class="logo" style="padding-right:5px;display:inline-block;width:26px;height:16px;" src="/static/img/w.png" width="24" height="24">
				        			<span style="vertical-align:middle;font-size:14px;">|</span>
						        	<img class="logo" style="padding-left:5px;padding-right:10px;display:inline-block;width:16px;height:16px;" src="/static/img/search.png" width="24" height="24">
						      	</div>
						      </x-input>
						</div>
					</router-link>
			    </div>
			</div>

			<cat-box
				:cats="shopCat"
				:title="''">
			</cat-box>

			<!--<sale-floor
				:type="'floorA'"
				:hasAll="true"
				:floorTitle="'特价商品'"
				:floorData="floor1">
			</sale-floor>-->

            <recommend
                :type="'INDEXARTICLERECOMMEND'"
                :recommendTitle="'特价商品'"
                :recommendData="recommendGoods">
            </recommend>

			<recommend
				:type="'INDEXGOODRECOMMEND'"
				:recommendTitle="'——热品推荐——'"
				:recommendData="recommendGoods">
			</recommend>

			<ending-tip :showLoading="false" tipText="已到底部"></ending-tip>

		</view-box>

	</div>
</template>
<script>
require('./index.less')
import {shop,shopBanner,shopCat,floor1,recommendGoods} from '../../data/data.js'

import SharePopup from '../../components/sharePopup.vue'
import CatBox from '../../components/catBox.vue'
import SaleFloor from '../../components/SaleFloor.vue'
import EndingTip from '../../components/EndingTip.vue'
import Recommend from '../../components/Recommend.vue'
import ScrollerBox from '../../components/ScrollerBox.vue'
import GoodGrid from '../../components/GoodGrid.vue'
import {Swiper, SwiperItem, Popup, ViewBox, Cell, Group, XInput} from 'vux'

const {mapGetters} = require('../../../node_modules/vuex/dist/vuex.min.js')

export default {
	components: {
		Popup,
		CatBox,
		SaleFloor,
		EndingTip,
		Recommend,
		GoodGrid,
		Swiper,
		SwiperItem,
		ScrollerBox,
		SharePopup,
		ViewBox,
		Cell,
		Group,
		XInput
	},
	data() {
		return {
			// shop: shop,
			shopBanner: shopBanner,
			shopCat: shopCat,
			floor1: floor1,
			recommendGoods: recommendGoods
		}
	},
	created(){
		this.initShop()
	},
	computed: {
		// ...mapGetters({
		// 	shop
		// })
		shop(){
			return this.$store.getters.shop
		}
	},
	methods: {
		initShop() {
			this.$store.dispatch('initShop')
		}
	}
}
</script>
