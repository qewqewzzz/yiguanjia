<template>
	<ul class="zlist-2-item">
		<li class="item" v-for="item in data">
			<router-link
				:to="{
					name: 'goodDetail',
					params: {id: item.id}
				}">
				<img :src="item.img"/>
				<div class="info">
					<div class="title z-ellipsis-2">
						{{item.title}}
					</div>
					<div class="delprice z-ellipsis-2">
						<del class="m-del-price">￥{{item.price}}</del>
					</div>
					<div class="subtitle z-ellipsis-2">
						￥{{item.price}}
					</div>
				</div>
			</router-link>
		</li>
	</ul>
</template>
<script>
export default {
	props: ['data'],
	data() {
		return {}
	}
}
</script>
<style>
.zlist-2-item{
	width: 100%;
	overflow: hidden;
}
.zlist-2-item .item{
	float: left;
	width: 50%;
	background: #efeff4;
}
.zlist-2-item .item a{
	padding-top: 14px;
	margin-top: 1px;
	margin-left: 1px;
	display: block;
	background: #fff;
}
.zlist-2-item .item:nth-child(even) a{
	padding-left: 14px;
	padding-right: 14px;
}
.zlist-2-item .item:nth-child(odd) a{
	padding-left: 14px;
	padding-right: 14px;
}
.zlist-2-item .item a > img{
	display: block;
	width: 100%;
}
.zlist-2-item .item a .info{
	padding-top: 14px;
	padding-bottom: 10px;
}
.zlist-2-item .item a .info .title{
	font-size: 14px;
	line-height: 1.4;
	color: #303030;
	text-align: left;
}
.zlist-2-item .item a .info .delprice{
	font-size: 14px;
	color: #999999;
	text-align: left;
	padding-top: 12px;
	font-family: 'heiti';
}
.zlist-2-item .item a .info .subtitle{
	font-size: 20px;
	font-weight: 500;
	color: #303030;
	text-align: left;
	font-family: 'heiti';
}
</style>