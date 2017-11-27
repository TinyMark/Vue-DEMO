<template>
    <!--电影列表开始-->
    <div class="list">
        <ul>

            <li v-for="(v,i) in list" :key="i">
  				<router-link :to="{path:'/detail/'+v.id}">
					<img :src="v.images.medium" alt="">
				</router-link>
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
            <!-- 加上disable类样式，表示按钮禁用状态 -->
            <button :class="{'prev':true, 'disable': currentPage == 0 }" @click="getList(--currentPage)">上一页</button>
            <button :class="{'next':true, 'disable': currentPage == totalPage-1}" @click="getList(++currentPage)">下一页</button>
        </div>
    </div>
    <!--电影列表结束-->
</template>

<script>
export default {
    data() {
        return {
            list: [],
            currentPage: 0,
            count: 5,
            total: 0,
            totalPage: 12
        }
    },
    methods: {
        getList(currentPage, callback) {
            this.currentPage = currentPage <= 0 ? 0 : (currentPage >= this.totalPage - 1 ? this.totalPage - 1 : currentPage);

            this.$jsonp(this.api.coming_soon, {
                city: '广州',
                count: this.count,
                start: this.currentPage * this.count
            }).then(res => {

                this.list = res.subjects;
                callback && callback(res)
            });
        }
    },
    filters: {
        formatArr(arr) {
            return arr.toString().replace(/,/g, '、')
        }
    },
    created() {
        this.getList(this.currentPage, (res) => {
            console.log(res);
            this.total = res.total;
            this.totalPage = Math.ceil(res.total / this.count);
        })
    }
}
</script>

<style>

</style>

