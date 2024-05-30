Page({
	data: {
		info: 'Hello Nick',
		//imgSrc: '/image/B-1.jpg',
		randomNum1: Math.random().toFixed(2) * 10
	},

	btnTapHandler(e) {
		console.log(e)
	},

	onLoad: function(options){}
})