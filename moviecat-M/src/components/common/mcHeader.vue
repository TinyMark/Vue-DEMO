<template>
    <!-- 顶部导航栏开始 -->
    <div class="top">
        <div class="header">
            <router-link to="#/home_page">
                <img src="../../assets/img/logo.png" alt="">
            </router-link>
            <div class="search">
                <input class="my-input" type="text" placeholder="电影搜索">
                <button>搜索</button>
            </div>
        </div>
        <nav class="nav">
            <ul>
                <!--li中添加 active 类样式，显示焦点状态。-->
                <li>
                    <router-link to="/home_page">首页</router-link>
                </li>
                <li>
                    <router-link to="/in_theaters">正在热映</router-link>
                </li>
                <li>
                    <router-link to="/coming_soon">即将上映</router-link>
                </li>
                <li>
                    <router-link to="/top250">Top250</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <!-- 顶部导航栏结束 -->
</template>

<script>
    export default {};
</script>

<style>

</style>
