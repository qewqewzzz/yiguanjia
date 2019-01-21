<template>
    <div class="category">
        <div class="search-box">
            <router-link
                :to="{
                    name: 'searchResult'
                }">
                <search v-model="searchValue" align="left" style="text-align: left;" position="absolute" auto-scroll-to-top top="0px" @on-cancel="" @on-submit="" placeholder="请输入关键字"></search>
            </router-link>
        </div>
        <ul class="category-menu">
            <li v-for="(item,index) in categoryMenu"
                :key="index"
                class="menu-item"
                :class="[currentIndex == index?'active':'']"
                @click="switchCategory(index,item.categoryId)">
                {{item.name}}
            </li>
        </ul>
        <div class="category-main">
            <div class="category-detail-box">
                <div class="category-top"
                     v-if="categoryMenu">
                    <div class="category-title">
                        <h4>{{categoryTitle}}</h4>
                    </div>
                </div>
                <div class="category-list">
                    <div class="category-goods-items"
                         v-for="(item,index) in categoryList"
                         @click="linktoDetail(item.productId)"
                         :key="index">
                        <img :src="item['main_img_url']"
                             alt=""
                             class="goods-image">
                        <div class="goods-name">{{item.name}}</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { Search, Toast } from 'vux'
export default {
    name: 'category',
    components: {
        Search,
        Toast,
    },
    data() {
        return {
            menu: [],
            list: [],
            currentIndex: 0,
            searchValue: ''
        }
    },
    async created() {
        await this.getData()
    },
    computed: {
        menuBanner() {
            return this.categoryMenu[this.currentIndex].img.url
        },
        categoryTitle() {
            return this.categoryMenu[this.currentIndex] && this.categoryMenu[this.currentIndex].name
        },
        categoryMenu() {
            return this.$store.getters.categoryMenu
        },
        categoryList() {
            return this.$store.getters.categoryList
        },

    },
    methods: {
        switchCategory(index, id) {
            this.currentIndex = index
            this.getProduct(id)
        },
        linktoDetail(id) {
            this.$router.push({ name: 'searchResult', query: { id: id } })
        },
        async getData() {
            await this.getCategory()
            await this.getProduct(this.categoryMenu[0].id)
        },
        async getCategory() {
            await this.$store.dispatch('fetchProductList',{

            }).then(() => {
                this.menu = this.categoryMenu
            })
        },
        async getProduct(id) {
            await this.$store.dispatch('fetchCatagroyList',{
                categoryId: id
            }).then(() => {
                this.list = this.categoryList
            })
        }
    }
}
</script>
<style lang="less">
.category {
    .weui-search-bar {
        background-color: #ffffff;
    }
    .weui-search-bar__label {
        text-align: left;
        z-index: -1;
    }
    .weui-search-bar__form {
        background: #EFEFEF;
    }
    .weui-search-bar__box {
        background: #EFEFEF;
    }
}
</style>
<style scoped lang="less">
.category {
    height: 100%;
    display: flex;
    overflow: hidden;
    background: #FFFFFF;
    .search-box{
        width: 100%;
        position: absolute;
    }
    .category-menu {
        width: 75px;
        flex: 0 0 75px;
        height: 100%;
        margin-top: 44px;
        background: #FFFFFF;
        border-top: 10px solid #EFEFEF;
        .menu-item {
            height: 25px;
            padding: 10px 0;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 3px solid #F2F2F2;
            background: #F2F2F2;
            &.active {
                color: #EDA849;
                border-color: #EDA849;
                font-size: 15px;
                // transform: scale(1.125);
                transition: all linear 0.3s;
                background: #FFFFFF;
            }
        }
    }
    .category-main {
        flex: 1;
        height: 100%;
        transition: all 500ms ease-in-out;
        margin-top: 44px;
        border-top: 10px solid #EFEFEF;
        .category-detail-box {
            overflow-y: auto;
            padding: 0px;
            height: 100%;
            box-sizing: border-box;
            -webkit-overflow-scrolling: touch;
            .category-top {
                .category-header {
                    img {
                        width: 100%;
                        vertical-align: top;
                        border-radius: 2px;
                    }
                }
                .category-title {
                    margin: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    .text {
                        font-size: 12px;
                        color: #ab956d;
                        font-weight: normal;
                        &::before,
                        &::after {
                            content: '';
                            display: inline-block;
                            position: relative;
                            top: -3px;
                            width: 35px;
                            height: 1px;
                            margin: 0 10px;
                            background-color: #979797;
                            transform: scaleY(0.5);
                        }
                    }
                }
            }
            .category-list {
                display: flex;
                flex-wrap: wrap;
                .category-goods-items {
                    width: 30%;
                    margin-right: 5%;
                    margin-bottom: 30px;
                    text-align: center;
                    &:nth-child(3n) {
                        margin-right: 0;
                    }
                    .goods-image {
                        width: 80%;
                        border-radius: 50%;
                    }
                    .goods-name {
                        color: #444452;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>
