import Mock from "mockjs"

//var a = 9;

Mock.mock("http://www.goutrip.com/vr/play",{
	"vr|9":[
		{
			"id|+1":0,
			"img1":"@image(375x211)",
			"img2":"@image(72x72)",
			"num1":"@natural(100,500)",
			"num2":"@natural(1,10)",
			"tit":"@ctitle(3,10)",
			"txt":"@cparagraph()",
			"time":"@time('m:s')"
		}
	]
})

