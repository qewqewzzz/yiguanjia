import * as data from '../data/data.js'
import request from '../utils/request.js'

const baseUrl = process.env.NODE_ENV == 'development'? '/api' : ``;

// 资讯列表
export function getArticles(params = {}){
	// return new Promise(function(resolve, reject) {
	// 	setTimeout(function(){
	//         resolve(data.articles);
	//     }, 1000)
	// })
	return request.get(baseUrl + '/news/list',{
		params: {
	      ...params
	    }
	})
}

export function getBanners(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.shopBanner);
	    }, 1000)
	})
}

// 资讯详情
export function getArticle(params = {}){
	// return new Promise(function(resolve, reject) {
	// 	setTimeout(function(){
	//         resolve(data.article);
	//     }, 1000)
	// })
	return request.get(baseUrl + '/news/get',{
		params: {
	      ...params
	    }
	})
}

export function getRecommendGoods(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.articleGoods);
	    }, 1000)
	})
}

export function getRecommendArticles(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.articleRecommend);
	    }, 1000)
	})
}


export function getCatBanner(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.shopBanner);
	    }, 1000)
	})
}

export function getCatResult(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.catResult);
	    }, 1000)
	})
}

// 评价列表
export function getComments(params = {}){
	// return new Promise(function(resolve, reject) {
	// 	setTimeout(function(){
	//         resolve(data.comments);
	//     }, 1000)
	// })
	return request.get(baseUrl + '/assess/info',{
		params: {
	      ...params
	    }
	})
}

// 用户下单
export function postOrder(params = {}){
	return request.post(baseUrl + '/order/put',{
	    ...params
	})
}

// 加入购物车
export function postShopcar(params = {}){
	return request.post(baseUrl + '/shopcar/put',{
	    ...params
	})
}

// 删除购物车
export function postShopcard(params = {}){
	return request.post(baseUrl + '/shopcard/del',{
	    ...params
	})
}

// 清空购物车失效商品
export function postShopcardLose(params = {}){
	return request.post(baseUrl + '/shopcard/lose/del',{
	    ...params
	})
}

// 收藏商品
export function postCollect(params = {}){
	return request.post(baseUrl + '/collect/put',{
	    ...params
	})
}

// 收藏列表
export function getCollectListt(params = {}){
	return request.get(baseUrl + '/collect/list',{
		params: {
	      ...params
	    }
	})
}

// 删除收藏信息
export function postCollectDel(params = {}){
	return request.post(baseUrl + '/collect/del',{
	    ...params
	})
}

// 个人中心
export function getUser(params = {}){
	return request.get(baseUrl + '/user/get',{
		params: {
	      ...params
	    }
	})
}

// 手机号绑定
export function postUserTelphone(params = {}){
	return request.post(baseUrl + '/user/telphone/put',{
	    ...params
	})
}

// 首页
export function getShop(params = {}){
	// return new Promise(function(resolve,reject){
	// 	setTimeout(function(){
	//         resolve(data.shop);
	//     }, 1000)
	// })
	return request.get(baseUrl + '/index/get',{
		params: {
	      ...params
	    }
	})
}

// 会员申请
export function postUserMen(params = {}){
	return request.post(baseUrl + '/user/men/put',{
	    ...params
	})
}

// 会员激活
export function getUserMenActivity(params = {}){
	// return new Promise(function(resolve,reject){
	// 	setTimeout(function(){
	//         resolve(data.vipActivation);
	//     }, 1000)
	// })
	return request.get(baseUrl + '/user/men/activity/get',{
	    params: {
	      ...params
	    }
	})
}

// 获取会员信息
export function getUserMen(params = {}){
	// return new Promise(function(resolve,reject){
	// 	setTimeout(function(){
	//         resolve(data.userInfoGive);
	//     }, 1000)
	// })
	return request.get(baseUrl + '/user/mem/get',{
	    params: {
	      ...params
	    }
	})
}

// 礼券转让
export function postBalanceTrans(params = {}){
	return request.post(baseUrl + '/balance/trans/put',{
	    ...params
	})
}

// 产品列表
export function getProductList(params = {}){
	// return new Promise(function(resolve,reject){
	// 	setTimeout(function(){
	//         resolve(data.categoryMenu);
	//     }, 1000)
	// })
	return request.get(baseUrl + '/product/list',{
	    params: {
	      ...params
	    }
	})
}

// 类目列表
export function getCatagroyList(params = {}){
	// return new Promise(function(resolve,reject){
	// 	setTimeout(function(){
	//         resolve(data.categoryList);
	//     }, 1000)
	// })
	return request.get(baseUrl + '/catagroy/list',{
	    params: {
	      ...params
	    }
	})
}

export function getShopBanner(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.shopBanner);
	    }, 1000)
	})
}

export function getShopCat(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.shopCat);
	    }, 1000)
	})
}

export function getOrders(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.myOrders);
	    }, 1000)
	})
}

export function getOrder(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.myOrder);
	    }, 1000)
	})
}


export function getFloor1(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.floor1);
	    }, 1000)
	})
}

export function getRecommendGoods1(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.recommendGoods);
	    }, 1000)
	})
}

export function getTimeoutCoupons(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.timeoutCoupons);
	    }, 1000)
	})
}

export function getUnusefullCoupons(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.unusefullCoupons);
	    }, 1000)
	})
}

export function getUsefullCoupons(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.usefullCoupons);
	    }, 1000)
	})
}

export function getMyLikes(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.myLikes);
	    }, 1000)
	})
}

export function deleteMyLikes(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve('ok');
	    }, 1000)
	})
}

export function getAddress(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.userAddress);
	    }, 1000)
	})
}

export function deleteAddress(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve('ok');
	    }, 1000)
	})
}

export function editAddress() {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			resolve('ok')
		}, 1000)
	})
}

export function getCommentPost() {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			resolve(data.commentPost)
		}, 1000)
	})
}

export function postComment(comments) {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			resolve('ok')
		}, 1000)
	})
}

// 商品详情
export function getGoodDetail(params = {}) {
	// return new Promise(function(resolve, reject){
	// 	setTimeout(function() {
	// 		resolve(data.goodDetail)
	// 	}, 1000)
	// })
	return request.get(baseUrl + '/product/get',{
	    params: {
	      ...params
	    }
	})
}