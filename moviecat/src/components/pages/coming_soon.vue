<template>
    <div class="list">
        <ul>
            <li v-for="(v,i) in data.subjects" :key="i">
                <router-link :to="{path:'/details/'+v.id}">
                    <img :src="v.images.medium | changeImg" alt="">
                </router-link>
                <div class="meta">
                    <h4>
                        <span>{{v.title}}</span>
                        <em>{{v.rating.average}}分</em>
                    </h4>
                    <div class="otherinfo">类型:
                        <span v-for="(item,i) in v.genres" :key="i">{{item}}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="paging">
            <label>总共：{{ data.total }}条记录,第{{ currentPage + 1 }}/{{ totalPages }}页;</label>
            <!-- 加上disable类样式，表示按钮禁用状态 -->
            <button :class="{'prev':true,'disable':currentPage == 0 }" @click="getPrev">上一页</button>
            <button :class="{'next':true,'disable':currentPage == totalPages - 1 }" @click="getNext">下一页</button>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          data: "",
          totalPages: "",
          count: 5,
          currentPage: 0
        };
      },
      methods: {
        getPrev() {
          if (this.currentPage <= 0) {
            return false;
          } else {
            this.getList(--this.currentPage);
          }
        },
        getNext() {
          if (this.currentPage >= this.totalPages - 1) {
            return false;
          } else {
            this.getList(++this.currentPage);
          }
        },
        getList(currentPage) {
          console.log(currentPage);
          this.$jsonp(this.api.coming_soon, {
            start: currentPage * this.count,
            count: this.count
          }).then(rep => {
            this.data = rep;
            this.totalPages = Math.ceil(rep.total / this.count);
          });
        }
      },
      filters: {
        changeImg(str) {
          return str.replace(str[10], 1);
        }
      },
      created() {
        this.getList(this.currentPage);
      }
    };
</script>

<style>

</style>
