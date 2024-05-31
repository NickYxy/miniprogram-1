Page({
	data: {
		info: 'Hello Nick',
		//imgSrc: '/image/B-1.jpg',
		randomNum1: Math.random().toFixed(2) * 10,
		cnt : 1,
		msg: '你好',
		type: 3,
		flag:false,
		arr1:['Apple', 'Banana','Pear'],
		userList: [
			{id:1, name: '小红'},
			{id:2, name: '小蓝'},
			{id:3, name: '小黑'}
		]
	},

	btnTapHandler(e) {
		console.log(e)
	},

	changeNum(){
		this.setData({
			cnt:this.data.cnt + 1
		})
	},

	btnTap2(e) {
		this.setData({
			cnt:this.data.cnt + e.target.dataset.info
		})
	},

	inputHandler(e) {
		console.log(e.detail.value)
	},

	iptHandler(e){
		this.setData({
			msg: e.detail.value
		})
	},
	onLoad: function(options){}
})