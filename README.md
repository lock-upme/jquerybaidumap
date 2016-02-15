# jquery baidumap


#功能介绍
百度地图插件；

可以显示静态图片，点击静态图片查看更加详细地图；

要引用百度地图js

参数说明：

			url : 'http://api.map.baidu.com/geocoder/v2/?ak=570E1e7563f6e47308e7928f68f9b6d3&output=json' 百度地图，不用更改
			
			city : 省直辖市
			
			address : 详细地址
			
#引用方法

	$('#map').lockBaiduMap();
	
    $('#map1').lockBaiduMap({
    	city : '合肥',
    	address : '芜湖路100号'
    });
    
    $('#map2').lockBaiduMap({
    	city : '北京',
    	address : '天安门广场'
    });