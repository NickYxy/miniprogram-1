Page({
	data: {
		info: 'Hello Nick',
		//imgSrc: '/image/B-1.jpg',
		randomNum1: Math.random().toFixed(2) * 10,
		cnt : 1,
		msg: '你好'
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