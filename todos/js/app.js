(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	new Vue({
		el: '#App',
		data: {
			list: [
				{ text: '吃饭', status: true },
				{ text: '睡觉', status: true },
				{ text: '打豆豆', status: false }
			],
			newText: '',
			editId: '',
			keyWord: 'all',
			leftNum: 0
		},
		methods: {
			addList() {
				event.preventDefault();
				if (!this.newText.trim()) return false;
				this.list.push({
					text: this.newText,
					status: false
				});
				this.newText = '';
			},
			delList(i) {
				this.list.splice(i, 1);
				if (!this.list.length) this.leftNum = 0
			},
			updateList(i) {
				event.preventDefault();
				if (!this.list[i].text.trim()) this.delList(i);
				this.editId = '';
			},
			query(i) {
				switch (this.keyWord) {
					case 'active':
						this.leftNum = this.list.filter(v => !v.status).length;
						return this.list[i].status ? false : true
						break;
					case 'completed':
						this.leftNum = this.list.filter(v => v.status).length;
						return this.list[i].status ? true : false
						break;
					default:
						this.leftNum = this.list.length;
						return true;
						break;
				}
			},
			clearCompleted() {
				this.list = this.list.filter(v => !v.status)
			}
		},
		computed: {
			toggleAll: {
				get() {
					if (this.list.length == 0) return false;
					return this.list.filter(v => !v.status).length ? false : true
				},
				set(value) {
					this.list.forEach(function (v) {
						v.status = value
					});
				}
			}
		},
		created() {
			var cache = JSON.parse(localStorage.getItem('todoMVC'));
			this.list = cache ? cache : this.list
		},
		updated() {
			localStorage.setItem('todoMVC', JSON.stringify(this.list))
		}
	})

})(window);
