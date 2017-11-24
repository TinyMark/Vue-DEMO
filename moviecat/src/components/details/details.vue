<template>
	<div class="detail">
		<h1>{{ dtls.title }}</h1>
		<div class="dt-info">
			<div class="dti-i"><img :src=" dtls.images.medium | changeImg " :alt="dtls.title"></div>
			<div class="dti-w">
				<p>
					<strong>导演：</strong>
					<span>{{ dtls.directors | formatArrName }}</span>
				</p>
				<p>
					<strong>主演：</strong>
					<span>{{ dtls.casts | formatArrName }}</span>

				</p>
				<p>
					<strong>类型：</strong>{{ dtls.genres | formatArrName }}</p>
				<p>
					<strong>国家：</strong>{{ dtls.countries | formatArrName }}</p>
				<p>
					<strong>评分：</strong>{{ dtls.rating.average }}</p>
				<p>
					<strong>时间：</strong>{{ dtls.year }}</p>
				<p>
					<strong>又名：</strong>{{ dtls.aka | formatArrName }}</p>
			</div>
		</div>
		<h3>剧情简介:</h3>
		<p style="color:#676767;text-indent: 2em;">{{ dtls.summary }}</p>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      dtls: ""
	    };
	  },
	  methods: {},
	  filters: {
	    changeImg(str) {
	      return str.replace(/\d/, 1);
	    },
	    formatArrName(arr) {
	      return arr
	        .map(v => (v.name ? v.name : v))
	        .toString()
	        .replace(/,/g, "、");
	    }
	  },
	  created() {
	    this.$jsonp(this.api.details + "/" + this.$route.params.id).then(res => {
	      this.dtls = res;
	    });
	  }
	};
</script>

<style>

</style>
