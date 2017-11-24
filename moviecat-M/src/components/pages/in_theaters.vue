<template>
    <div class="list">
        <ul>
            <li v-for="(v,i) in list" :key="i">
                <a href="/details">
                    <img :src="v.images.medium" alt="">
                </a>
                <div class="meta">
                    <h4>
                        <span>{{ v.title }}</span>
                        <em>{{ v.rating.average }}分</em>
                    </h4>
                    <div class="otherinfo">类型:
                        <span>{{ v.genres | formatArr }}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="paging">
            <label>总共：{{ total }}条记录,第{{ currentPage+1 }}/{{ totalPage }}页;</label>
            <button :class="{'prev':true, 'disable':currentPage == 0}" @click="getPage(--currentPage)">上一页</button>
            <button :class="{'next':true, 'disable':currentPage == totalPage-1 }" @click="getPage(++currentPage)">下一页</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            currentPage: 0,
            pageNum: 10,
            total: 0,
            totalPage: 0
        };
    },
    created() {
        this.getPage(this.currentPage, function(res, _this) {
            console.log(res, _this);
            _this.total = res.total;
            _this.totalPage = Math.ceil(res.total / _this.pageNum);
        });
    },
    methods: {
        getPage(currentPage, callback) {
            console.log(currentPage);
            this.currentPage = currentPage =
                currentPage <= 0
                    ? 0
                    : currentPage >= this.totalPage - 1
                      ? this.totalPage - 1
                      : currentPage;
            console.log(currentPage);
            this.$jsonp(this.api.in_theaters, {
                city: "广州",
                start: this.pageNum * currentPage,
                count: this.pageNum
            }).then(res => {
                this.list = res.subjects;
                var _this = this;
                callback && callback(res, _this);
            });
        }
    },
    filters: {
        formatArr(arr) {
            return arr.toString().replace(/,/g, "、");
        }
    }
};
</script>

<style>

</style>
