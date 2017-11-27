<template>
    <!-- 电影详情开始 -->
    <div class="detail">
        <h1>{{ info.title }}</h1>
        <div class="dt-info">
            <div class="dti-i">
                <img :src="info.images.medium" alt="">
            </div>
            <div class="dti-w">
                <p>
                    <strong>导演：</strong>
                    <span>{{ info.directors | getName | formatArr }}</span>
                </p>
                <p>
                    <strong>主演：</strong>
                    <span>{{ info.casts | getName | formatArr }}</span>
                </p>
                <p>
                    <strong>类型：</strong>{{ info.genres | formatArr }}</p>
                <p>
                    <strong>国家：</strong>{{ info.countries | formatArr }}</p>
                <p>
                    <strong>评分：</strong>{{ info.rating.average }}</p>
                <p>
                    <strong>时间：</strong>{{ info.year }}</p>
                <p>
                    <strong>又名：</strong>{{ info.aka | formatArr}}</p>
            </div>
        </div>
        <h3>剧情简介:</h3>
        <p style="color:#676767">{{ info.summary }}</p>
    </div>
    <!-- 电影详情结束 -->
</template>

<script>
export default {
    data() {
        return {
            info: ''
        }
    },
    filters: {
        formatArr(arr) {
            return arr.toString().replace(/,/g, '、')
        },
        getName(obj) {
            return obj.map(function (v) {
                return v.name
            })
        }
    },
    methods: {
        getDetail() {
            this.$jsonp(this.api.detail + this.$route.params.id).then(res => {
                console.log(res);
                this.info = res
            })
        }
    },
    created() {
        this.getDetail()
    }
}
</script>

<style>

</style>
