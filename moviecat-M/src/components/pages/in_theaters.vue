<template>
    <!--电影列表开始-->
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
            <label>总共：{{ total }}条记录,第{{ currentPage+1 }}/{{ togglePage }}页;</label>
            <!-- 加上disable类样式，表示按钮禁用状态 -->
            <button :class="{'prev':true, 'disable':currentPage == 0}" @click="getPage(--currentPage)">上一页</button>
            <button :class="{'next':true, 'disable':currentPage == togglePage-1 }" @click="getPage(++currentPage)">下一页</button>
        </div>
    </div>
    <!--电影列表结束-->
</template>

<script>
    export default {
      data() {
        return {
          total: 0,
          list: "",
          pageNum: 10,
          currentPage: 0,
          togglePage: 0
        };
      },
      created() {
        this.getPage(this.currentPage, function(data, _this) {
          _this.total = data.total;
          _this.togglePage = Math.ceil(data.total / _this.pageNum);
        });
      },
      methods: {
        getPage(currentPage, callback) {
          console.log(currentPage);
          currentPage = currentPage <= 0 ? 0 : currentPage;
        //   currentPage = currentPage >= this.togglePage - 1 ? this.togglePage - 1 : currentPage;
          console.log(currentPage);

          this.$jsonp(this.api.in_theaters, {
            city: "广州",
            count: this.pageNum,
            start: currentPage * this.pageNum
          }).then(res => {
            this.list = res.subjects;
            if (callback) {
              console.log(res);
              var _this = this;
              callback(res, _this);
            }
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
