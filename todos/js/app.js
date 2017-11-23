(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	var vm = new Vue({
		el: '#app',
		data: {
			list: [
				{ text: '吃饭', status: true },
				{ text: '睡觉', status: false },
				{ text: '打豆豆', status: false }
			],
			newText: '',
			selectNum: '',
			updateText: '',
			keyWord: 'all',
			getLeft: ''
		},
		methods: {
			strLint(str) {
				return str.trim();
			},
			addList() {
				event.preventDefault();
				var nt = this.strLint(this.newText)
				if (nt) {
					this.list.push({
						text: nt,
						status: false
					});
					this.newText = '';
				}
			},
			delList(i) {
				this.list.splice(i, 1)
			},
			editList(i) {
				this.selectNum = i;
				this.updateText = this.list[i].text;
			},
			updateList(i) {
				event.preventDefault();
				var nt = this.strLint(this.updateText);
				if (nt) {
					this.list[i].text = nt;
				} else {
					this.delList(i)
				}
				this.updateText = '';
				this.selectNum = '';
			},
			delCompleted() {
				this.list = this.list.filter(v => !v.status)
			},
			// getLeft() {
			// 	return this.list.filter(v => !v.status).length
			// },
			isShow(v) {
				switch (this.keyWord) {
					case 'active':
						this.getLeft = this.list.filter(v => !v.status).length;
						return !v.status ? true : false
						break;
					case 'completed':
						this.getLeft = this.list.filter(v => v.status).length;
						return v.status ? true : false
						break;
					default:
						// this.getLeft = this.list.length;
						this.getLeft = this.list.filter(v => !v.status).length;
						return true
						break;
				}
			}
		},
		computed: {
			toggleAll: {
				get() {
					if (!this.list.length) return false
					return this.list.filter(v => !v.status).length ? false : true
				},
				set(value) {
					this.list.forEach(function (v) {
						v.status = value;
					}, this);
				}
			}
		},
		created() {
			var todoList = JSON.parse(localStorage.getItem('todoList'));
			this.list = todoList ? todoList : this.list
		},
		updated() {
			localStorage.setItem('todoList', JSON.stringify(this.list))
		}
	})

})(window);
