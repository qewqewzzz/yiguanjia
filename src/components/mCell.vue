<template>
    <div class="m-cell-box">
        <span v-if="title" class="m-cell-box-left">{{title}}</span>
        <span v-if="value" class="m-cell-box-right">{{value}}</span>
    </div>
</template>

<script>
export default {
    props: ['title', 'value'],
    components: {
    }
}
</script>
<style scoped>
.m-cell-box{
    padding-left: 14px;
    padding-right: 14px;
    height: 44px;
    line-height: 44px;
}
.m-cell-box-left{
    display: inline-block;
    font-size: 15px;
    color: #838383;
}
.m-cell-box-right{
    display: inline-block;
    font-size: 15px;
    color: #000000;
    float: right;
}
</style>