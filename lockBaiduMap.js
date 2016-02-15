/**
 * 百度地图
 *
 * @author lock
 */
(function($) {
	$.fn.lockBaiduMap = function(options) {	
		var defaults = {
				url : 'http://api.map.baidu.com/geocoder/v2/?ak=570E1e7563f6e47308e7928f68f9b6d3&output=json',
				city : '上海',//省直辖市
				address : '黄浦区人民大道120号'//详细地址
		};
		var opts = $.extend(defaults, options);
		var obj= $(this);
		
		//地址静态图片
		var renderPicture = function(response) {
			if (response.status ) {
				obj.html("无正确的返回结果:\n");
				return false;
			}
			var location = response.result.location;			
			var pictureUrl = "http://api.map.baidu.com/staticimage?center=" + location.lng+','+location.lat + "&markers=" + location.lng+','+location.lat;
			var html = '<img src="' + pictureUrl + '" title="点击查看放大地图" />' ;
			obj.html(html);
		};
		
		//查看地图
		var mapShow = function() {
		  	var map = new BMap.Map('mapdynamic');// 创建Map实例	
		  	map.centerAndZoom(opts.city, 11);
		  	var local = new BMap.LocalSearch(map, {
		  		renderOptions:{map: map}
		  	});
		  	var address = opts.city + opts.address;
		  	local.search(address);
		  	map.addControl(new BMap.NavigationControl());// 添加平移缩放控件
		  	map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
		  	map.addControl(new BMap.OverviewMapControl());//添加缩略地图控件
		  	map.enableScrollWheelZoom();//启用滚轮放大缩小
		  	map.addControl(new BMap.MapTypeControl());
		}
		
		//初始化
		var init = function() {
			//loadScript();
			var url = opts.url + "&address="+opts.city+opts.address + '&callback=?';
			$.getJSON(url, function(response){
				renderPicture(response);
			});			
			obj.bind('click', function() {
				mapShow();
			});	
		};
		
		init();
	};
})(jQuery);