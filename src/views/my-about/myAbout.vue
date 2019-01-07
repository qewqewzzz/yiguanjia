<template>
    <div class="myAbout-wrap">
        <view-box v-show="!loading">
            <h4 class="myAbout-title">关于我们</h4>
            <p class="myAbout-content">关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们</p>
        </view-box>
    </div>
</template>
<script>
require('./myAbout.less')

import {ViewBox} from 'vux'

export default {
    components: {
        ViewBox
    },
    data() {
        return {
            loading: false
        }
    }
}
</script>