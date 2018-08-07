import Mock from 'mockjs'

var Random = Mock.Random
Random.extend({
    price: function(date) {
        var price = [19999, 5799, 3799, 8999, 19999, 5888, 13999, 14999,9999, 29999, 4999, 5000,15999,39999, 4799, 6799, 1999, 5699, 7888, 3499, 14559,8899, 77999, 6699, 5001,1789]
        return this.pick(price)
    }
   
})
Random.extend({
    
     days: function(date) {
        var days = [3,4,5,6,7,8,9,10]
        return this.pick(days)
    }
})

Mock.mock('http://http://www.goutrip.com/trip',{
	'list|40':[
		{
			'id|+1':0,
			'title':'@ctitle(10,20)',
			'day':'@days',
			'price':'@price',
			'address':'@city',
			'img':'@image(440x242)'
		}
	]
})
