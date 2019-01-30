<template>
	<div>
        <div
            v-if="isFooter"
            class="article-list-card">
            <router-link
                v-for="item in articleList"
                :to="{
                    name: 'goodDetail',
                    params: {id: item.newsId,newsId: item.newsId}
                }">
                <img :src="item.imgUrl" alt="">
            </router-link>
        </div>
		<div
            v-else
			class="article-list-card"
			v-for="item in articleList">
			<router-link
				:to="{
					name: 'articleDetail',
					params: {id: item.newsId,newsId: item.newsId}
				}">
                <img :src="item.imgUrl" alt="">
				<div class="footer">
					<div class="title z-ellipsisi">
						{{item.title}}
					</div>
					<div class="subtitle z-ellipsisi">
						{{item.shortContent}}
					</div>
					<div class="m-other z-ellipsisi">
						<img src="/static/img/eye.png" class="check-img" width="50" height="50" alt="">
						{{item.viewNum}}
						<span class="more">查看更多>></span>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
	props: ['articleList', 'isFooter']
}
</script>
<style>
.article-list-card{
	/* margin-left: 8px; */
	/* margin-right: 8px; */
	margin-bottom: 8px;
	padding: 8px 0px 0 0px;
	background-color: #fff;
}
.article-list-card .footer{
	padding: 0px 0 10px;
	/* text-align: center; */
	overflow: hidden;
}
.article-list-card .footer .title{
	margin: 0 16px;
	font-size: 16px;
	font-weight: 500;
	color: #404040;
}
.article-list-card .footer .subtitle{
	margin: 0 16px;
	padding-top: 6px;
	font-size: 14px;
	color: #868686;
}
.article-list-card .footer .m-other{
	margin: 0 16px;
	padding-top: 6px;
	font-size: 14px;
	color: #868686;
}
.article-list-card .footer .m-other .check-img{
	width: 20px;
	vertical-align: middle;
}
.article-list-card .footer .m-other .more{
	float: right;
	color: #EDA849;
}
</style>