const express=require('express');
const app=express();
app.all('/home',(request,response)=>{
	//响应一个页面
	response.sendFile(__dirname + '/代码/10.kuayu.html');
})
app.get('/data',(request,response)=>{
	response.send('用户数据')
})
//jsonp服务
app.all('/jsonp-server',(request,response)=>{
	// response.send('console.log("hello jsonp-server")')
	const data={
		name:'尚硅谷atguigu'
	};
	//将数据转化为字符串
	let str=JSON.stringify(data);
	//返回结果 end不会加特殊响应头
	
	response.end(`handle(${str})`);
	
})
app.all('/check-server',(request,response)=>{

	// response.send('console.log("hello jsonp-server")')
	const data={
		exist:1,
		msg:'用户名已经存在'
	};
	//将数据转化为字符串
	let str=JSON.stringify(data);
	//返回结果 end不会加特殊响应头
	
	response.end(`handle(${str})`);
	
})
app.all('/jquery-jsonp-server',(request,response)=>{
	
	const data={
		name:'尚硅谷',
		city:['北京','上海','深圳']
	};
	//接收callback参数
	let cb=request.query.callback;
	//将数据转化为字符串
	let str=JSON.stringify(data);
	//返回结果 end不会加特殊响应头
	
	response.end(`${cb}(${str})`);
	
})
app.all('/cors-server',(request,response)=>{
	//设置响应头，*表示通配，要是只想某个页面适用，可以设置页面链接
	//加上响应头即可实现跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Header','*');
   response.send('hello cors');
	
	
})
app.all('/maoyandianying',(request,response)=>{
	//设置响应头，*表示通配，要是只想某个页面适用，可以设置页面链接
	//加上响应头即可实现跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Header','*');
  const mv={
	  "chiefBonus":{},"coming":[],"movieIds":[1218188,1375543,1298542,346427,1337700,1298349,1301409,1251207,1325149,1336183,345006,1342846,345639,1358021,1301976,1355802,1370805,718,248818,1301791,1303100,345011,1297927,1302134,1336813,1213079,424008,248551,1319,1371295,335440,1301874,343270,1429482,1338401,1433366,1218557,206,820,1219819,1288094,226991,344264,79166,1378194,12347,1425171,1300146,338391,600,1375624,1378928,346658,1182552,1250950,1378057,1207687,248908,1330823,278053,277782,246339,1429582,1429581,1429579,1430577,1339371,78631,1278598,1432721,224561],"stid":"576591972453269000","stids":[{"movieId":1218188,"stid":"576591972453269000_a1218188_c0"},{"movieId":1375543,"stid":"576591972453269000_a1375543_c1"},{"movieId":1298542,"stid":"576591972453269000_a1298542_c2"},{"movieId":346427,"stid":"576591972453269000_a346427_c3"},{"movieId":1337700,"stid":"576591972453269000_a1337700_c4"},{"movieId":1298349,"stid":"576591972453269000_a1298349_c5"},{"movieId":1301409,"stid":"576591972453269000_a1301409_c6"},{"movieId":1251207,"stid":"576591972453269000_a1251207_c7"},{"movieId":1325149,"stid":"576591972453269000_a1325149_c8"},{"movieId":1336183,"stid":"576591972453269000_a1336183_c9"},{"movieId":345006,"stid":"576591972453269000_a345006_c10"},{"movieId":1342846,"stid":"576591972453269000_a1342846_c11"}],"total":71,
	  "movieList":[
		  {
			  "id":1218188,
			  "haspromotionTag":false,
			  "img":"http://p1.meituan.net/w.h/moviemachine/51b193283628a62b85ba31ddc818ffde1560410.jpg",
			  "version":"v2d imax",
			  "nm":"怒火·重案",
			  "preShow":false,
			  "sc":9.5,
			  "globalReleased":true,
			  "wish":405780,
			  "star":"甄子丹,谢霆锋,秦岚",
			  "rt":"2021-07-30",
			  "showInfo":"今天167家影院放映2026场",
			  "showst":3,
			  "wishst":0,
			  },
			  {
				  "id":1375543,
				  "haspromotionTag":false,
				  "img":"http://p0.meituan.net/w.h/movie/056cce783466d9531ad736068c2e134e4100879.jpg","version":"","nm":"盛夏未来","preShow":false,"sc":9.1,"globalReleased":true,"wish":933555,"star":"张子枫,吴磊,郝蕾","rt":"2021-07-30","showInfo":"今天164家影院放映941场","showst":3,"wishst":0},{"id":1298542,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/76bf7b6fe71f19d7d37c51387955002d3008498.jpg","version":"v3d imax","nm":"白蛇2：青蛇劫起","preShow":false,"sc":9.1,"globalReleased":true,"wish":339059,"star":"唐小喜,张福正,魏超","rt":"2021-07-23","showInfo":"今天155家影院放映838场","showst":3,"wishst":0},{"id":346427,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/b530e601a4c5bb2a8771c1bbf00e6a091790682.jpg","version":"","nm":"兔子暴力","preShow":false,"sc":7.1,"globalReleased":true,"wish":132552,"star":"万茜,李庚希,黄觉","rt":"2021-08-14","showInfo":"今天158家影院放映620场","showst":3,"wishst":0},{"id":1337700,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/6876f0a4db61cab652fdc3d3ed14e94c4924473.jpg","version":"v2d imax","nm":"中国医生","preShow":false,"sc":9.4,"globalReleased":true,"wish":475631,"star":"张涵予,袁泉,朱亚文","rt":"2021-07-09","showInfo":"今天113家影院放映329场","showst":3,"wishst":0},{"id":1298349,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/70ed5d23afc45de7749dfafa2a8a1bd23977288.jpg","version":"v3d","nm":"贝肯熊2：金牌特工","preShow":false,"sc":8.9,"globalReleased":true,"wish":67641,"star":"汤水雨,孟子焱,徐佳琦","rt":"2021-07-23","showInfo":"今天84家影院放映169场","showst":3,"wishst":0},{"id":1301409,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/mmdb/defb0d5f7845b6a2b3e7444e03afa5d7278009.jpg","version":"","nm":"流浪猫鲍勃2：鲍勃的礼物","preShow":false,"sc":8.6,"globalReleased":true,"wish":119915,"star":"卢克·崔德威,猫鲍勃,克里斯蒂娜·托内瑞·杨","rt":"2021-08-06","showInfo":"今天43家影院放映80场","showst":3,"wishst":0},{"id":1251207,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/6047245114bf4e6adb257d3cec6e27f7998684.jpg","version":"","nm":"测谎人","preShow":false,"sc":6,"globalReleased":true,"wish":27997,"star":"马丽,文章,梁超","rt":"2021-08-13","showInfo":"今天144家影院放映502场","showst":3,"wishst":0},{"id":1325149,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/a34b94f0494c6b47e018e105d21e33882361707.jpg","version":"v3d","nm":"我的爸爸是森林之王2","preShow":false,"sc":0,"globalReleased":true,"wish":12607,"star":"罗杰·克莱格·史密斯,朱尔斯·沃伊切霍夫斯基,戴维·洛奇","rt":"2021-08-06","showInfo":"今天37家影院放映68场","showst":3,"wishst":0},{"id":1336183,"haspromotionTag":false,"img":"http://p1.meituan.net/w.h/movie/63cb3dbbaff624b236b2e22b2ee59cff1553093.jpg","version":"v2d imax","nm":"1921","preShow":false,"sc":9.4,"globalReleased":true,"wish":426793,"star":"黄轩,倪妮,王仁君","rt":"2021-07-01","showInfo":"今天9家影院放映12场","showst":3,"wishst":0},{"id":345006,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/9944b1f1590d02596ef8f42cbed558132031774.jpg","version":"","nm":"西游记之再世妖王","preShow":false,"sc":8.4,"globalReleased":true,"wish":242707,"star":"边江,张磊,蔡海婷","rt":"2021-04-03","showInfo":"今天12家影院放映22场","showst":3,"wishst":0},{"id":1342846,"haspromotionTag":false,"img":"http://p0.meituan.net/w.h/movie/771a7f78d4daec6d77972078b5552704425062.jpg","version":"v3d","nm":"夏日友晴天","preShow":false,"sc":0,"globalReleased":false,"wish":25314,"star":"雅各布·特瑞布雷,杰克·迪伦·格雷泽,艾玛·伯曼","rt":"2021-08-20","showInfo":"2021-08-20 本周五上映","showst":4,"wishst":0}]
  }
	response.send(JSON.stringify(mv));
	
})
app.all('/houtai',(request,response)=>{
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Header','*');
	const data={
		admin:'唐永伟',
		password:'111111',
		code:'20000',
		avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
	};
	//接收callback参数
	let cb=request.query.callback;
	//将数据转化为字符串
	let str=JSON.stringify(data);
	//返回结果 end不会加特殊响应头
	
	response.end(JSON.stringify(data));
	
})
app.all('/response',(request,response)=>{
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Header','*');
	const data={
		status:'success',
		word:'提交成功'
	};
	//接收callback参数
	let cb=request.query.callback;
	//将数据转化为字符串
	let str=JSON.stringify(data);
	//返回结果 end不会加特殊响应头
	
	response.end(JSON.stringify(data));
	
})
app.all('/yonghuguanli',(request,response)=>{
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Header','*');
	const data=[
		{
			name:'李晴晴',
			gender:'女',
			adress:'新乡',
			age:'24'
		},{
			name:'李晴晴',
			gender:'女',
			adress:'新乡',
			age:'24'
		},{
			name:'李登辉',
			gender:'男',
			adress:'新乡',
			age:'24'
		},{
			name:'张震义',
			gender:'男',
			adress:'洛阳',
			age:'25'
		},{
			name:'刘广富',
			gender:'男',
			adress:'新乡',
			age:'23'
		},{
			name:'程孟飞',
			gender:'男',
			adress:'濮阳',
			age:'23'
		},{
			name:'邢龙昌',
			gender:'男',
			adress:'洛阳',
			age:'23'
		},{
			name:'韩腾飞',
			gender:'男',
			adress:'郑州',
			age:'23'
		},{
			name:'陈阳',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'王梦想',
			gender:'女',
			adress:'南阳',
			age:'23'
		},{
			name:'唐永伟',
			gender:'男',
			adress:'信阳',
			age:'25'
		},{
			name:'刘萌',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'孙毓笛',
			gender:'女',
			adress:'郑州',
			age:'23'
		},{
			name:'李小文',
			gender:'女',
			adress:'信阳',
			age:'25'
		},{
			name:'秦伟',
			gender:'男',
			adress:'信阳',
			age:'25'
		},{
			name:'樊悦',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'何雨多',
			gender:'男',
			adress:'郑州',
			age:'25'
		},{
			name:'韩倩如',
			gender:'女',
			adress:'郑州',
			age:'25'
		},
		{
			name:'李晴晴',
			gender:'女',
			adress:'新乡',
			age:'24'
		},{
			name:'李晴晴',
			gender:'女',
			adress:'新乡',
			age:'24'
		},{
			name:'李登辉',
			gender:'男',
			adress:'新乡',
			age:'24'
		},{
			name:'张震义',
			gender:'男',
			adress:'洛阳',
			age:'25'
		},{
			name:'刘广富',
			gender:'男',
			adress:'新乡',
			age:'23'
		},{
			name:'程孟飞',
			gender:'男',
			adress:'濮阳',
			age:'23'
		},{
			name:'邢龙昌',
			gender:'男',
			adress:'洛阳',
			age:'23'
		},{
			name:'韩腾飞',
			gender:'男',
			adress:'郑州',
			age:'23'
		},{
			name:'陈阳',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'王梦想',
			gender:'女',
			adress:'南阳',
			age:'23'
		},{
			name:'唐永伟',
			gender:'男',
			adress:'信阳',
			age:'25'
		},{
			name:'刘萌',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'孙毓笛',
			gender:'女',
			adress:'郑州',
			age:'23'
		},{
			name:'李小文',
			gender:'女',
			adress:'信阳',
			age:'25'
		},{
			name:'秦伟',
			gender:'男',
			adress:'信阳',
			age:'25'
		},{
			name:'樊悦',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'何雨多',
			gender:'男',
			adress:'郑州',
			age:'25'
		},{
			name:'韩倩如',
			gender:'女',
			adress:'郑州',
			age:'25'
		},{
			name:'李晴晴',
			gender:'女',
			adress:'新乡',
			age:'24'
		},{
			name:'李晴晴',
			gender:'女',
			adress:'新乡',
			age:'24'
		},{
			name:'李登辉',
			gender:'男',
			adress:'新乡',
			age:'24'
		},{
			name:'张震义',
			gender:'男',
			adress:'洛阳',
			age:'25'
		},{
			name:'刘广富',
			gender:'男',
			adress:'新乡',
			age:'23'
		},{
			name:'程孟飞',
			gender:'男',
			adress:'濮阳',
			age:'23'
		},{
			name:'邢龙昌',
			gender:'男',
			adress:'洛阳',
			age:'23'
		},{
			name:'韩腾飞',
			gender:'男',
			adress:'郑州',
			age:'23'
		},{
			name:'陈阳',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'王梦想',
			gender:'女',
			adress:'南阳',
			age:'23'
		},{
			name:'唐永伟',
			gender:'男',
			adress:'信阳',
			age:'25'
		},{
			name:'刘萌',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'孙毓笛',
			gender:'女',
			adress:'郑州',
			age:'23'
		},{
			name:'李小文',
			gender:'女',
			adress:'信阳',
			age:'25'
		},{
			name:'秦伟',
			gender:'男',
			adress:'信阳',
			age:'25'
		},{
			name:'樊悦',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'何雨多',
			gender:'男',
			adress:'郑州',
			age:'25'
		},{
			name:'韩倩如',
			gender:'女',
			adress:'郑州',
			age:'25'
		},{
			name:'李晴晴',
			gender:'女',
			adress:'新乡',
			age:'24'
		},{
			name:'李晴晴',
			gender:'女',
			adress:'新乡',
			age:'24'
		},{
			name:'李登辉',
			gender:'男',
			adress:'新乡',
			age:'24'
		},{
			name:'张震义',
			gender:'男',
			adress:'洛阳',
			age:'25'
		},{
			name:'刘广富',
			gender:'男',
			adress:'新乡',
			age:'23'
		},{
			name:'程孟飞',
			gender:'男',
			adress:'濮阳',
			age:'23'
		},{
			name:'邢龙昌',
			gender:'男',
			adress:'洛阳',
			age:'23'
		},{
			name:'韩腾飞',
			gender:'男',
			adress:'郑州',
			age:'23'
		},{
			name:'陈阳',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'王梦想',
			gender:'女',
			adress:'南阳',
			age:'23'
		},{
			name:'唐永伟',
			gender:'男',
			adress:'信阳',
			age:'25'
		},{
			name:'刘萌',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'孙毓笛',
			gender:'女',
			adress:'郑州',
			age:'23'
		},{
			name:'李小文',
			gender:'女',
			adress:'信阳',
			age:'25'
		},{
			name:'秦伟',
			gender:'男',
			adress:'信阳',
			age:'25'
		},{
			name:'樊悦',
			gender:'女',
			adress:'信阳',
			age:'24'
		},{
			name:'何雨多',
			gender:'男',
			adress:'郑州',
			age:'25'
		},{
			name:'韩倩如',
			gender:'女',
			adress:'郑州',
			age:'25'
		}
	];
	//接收callback参数
	let cb=request.query.callback;
	//将数据转化为字符串
	let str=JSON.stringify(data);
	//返回结果 end不会加特殊响应头
	
	response.end(JSON.stringify(data));
	
})
app.all('/position',(request,response)=>{
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Header','*');
	const data=[
		{
			
			name:'张三',
			company:'子节跳动',
			position:'运营',
			money:'5000',
			image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.comrc.com.cn%2Frepository%2Fimage%2FzsE29YY4Sbi8A76NDpTCRA.png_%7Bi%7Dxaf.png&refer=http%3A%2F%2Fwww.comrc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637811237&t=35e93e577cf4d3451deaf0f94c97fc8d'
		},{
			
			name:'李晴晴',
			company:'淘宝',
			position:'主管',
			money:'6900',
			image:'https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=b12aec5f0ce93901565785384bdc78df/6c224f4a20a44623c404f11d9522720e0df3d787.jpg'
		},{
			name:'李登辉',
			company:'腾讯',
			position:'主管',
			money:'6900',
			image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-48c01dbbe4284bb898e621839b424348_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637811308&t=fdb61a1ff0b9878625b0dd532b5df1ee'
			
		},{
			name:'张震义',
			company:'腾讯',
				position:'主管',
				money:'6900',
				image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-48c01dbbe4284bb898e621839b424348_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637811308&t=fdb61a1ff0b9878625b0dd532b5df1ee'
			
		},{
			name:'刘广富',
			company:'美团',
				position:'主管',
				money:'6900',
				image:'https://img1.jiemian.com/101/original/20200703/159375933871978100.jpg'
			
		},{
			name:'程孟飞',
			company:'腾讯',
				position:'主管',
				money:'6900',
				image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-48c01dbbe4284bb898e621839b424348_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637811308&t=fdb61a1ff0b9878625b0dd532b5df1ee'
			
		},{
			name:'邢龙昌',
			company:'淘宝',
				position:'主管',
				money:'6900',
				image:'https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=b12aec5f0ce93901565785384bdc78df/6c224f4a20a44623c404f11d9522720e0df3d787.jpg'
			
		},{
			name:'韩腾飞',
			company:'美团',
				position:'运营',
				money:'5000',
				image:'https://img1.jiemian.com/101/original/20200703/159375933871978100.jpg'
			
		},{
			name:'陈阳',
			company:'子节跳动',
				position:'运营',
				money:'5000',
				image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.comrc.com.cn%2Frepository%2Fimage%2FzsE29YY4Sbi8A76NDpTCRA.png_%7Bi%7Dxaf.png&refer=http%3A%2F%2Fwww.comrc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637811237&t=35e93e577cf4d3451deaf0f94c97fc8d'
			
		},{
			name:'王梦想',
			company:'子节跳动',
				position:'运营',
				money:'5000',
				image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.comrc.com.cn%2Frepository%2Fimage%2FzsE29YY4Sbi8A76NDpTCRA.png_%7Bi%7Dxaf.png&refer=http%3A%2F%2Fwww.comrc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637811237&t=35e93e577cf4d3451deaf0f94c97fc8d'
			
		},{
			name:'唐永伟',
			company:'滴滴',
				position:'运营',
				money:'5000',
				image:'https://img.sj33.cn/uploads/202010/7-2010060951421O.jpg'
			
		},{
			name:'刘萌',
		company:'子节跳动',
			position:'运营',
			money:'5000',
			image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.comrc.com.cn%2Frepository%2Fimage%2FzsE29YY4Sbi8A76NDpTCRA.png_%7Bi%7Dxaf.png&refer=http%3A%2F%2Fwww.comrc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637811237&t=35e93e577cf4d3451deaf0f94c97fc8d'
		
		},{
			name:'孙毓笛',
		company:'子节跳动',
			position:'运营',
			money:'5000',
			image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.comrc.com.cn%2Frepository%2Fimage%2FzsE29YY4Sbi8A76NDpTCRA.png_%7Bi%7Dxaf.png&refer=http%3A%2F%2Fwww.comrc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637811237&t=35e93e577cf4d3451deaf0f94c97fc8d'
		
		},{
			name:'李小文',
			company:'滴滴',
				position:'运营',
				money:'5000',
				image:'https://img.sj33.cn/uploads/202010/7-2010060951421O.jpg'
			
		}
	];
	//接收callback参数
	let cb=request.query.callback;
	//将数据转化为字符串
	let str=JSON.stringify(data);
	//返回结果 end不会加特殊响应头
	
	response.end(JSON.stringify(data));
	
})
app.listen(9000,()=>{
	console.log('端口号9000：已经启动。。。')
})