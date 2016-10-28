//将视野移动到目标位置并打出标记
function move_markMapView(destination){
    var geocoder = new AMap.Geocoder({
       // city: "010", //城市，默认：“全国”
        radius: 1000 //范围，默认：500
    });
    //地理编码,返回地理编码结果
    geocoder.getLocation(destination, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            var geocode = result.geocodes;
            //destination的经纬度
            x = geocode[0].location.getLng()
            y = geocode[0].location.getLat()
            console.log(x)
            console.log(y)
            //添加一个maker
            loadMarker(x,y)
            //地图移动到destination的位置
            map.setZoomAndCenter(12, [x, y]);
        }
    });
}


function mark_onclick(e){
    console.log(e)
    //var display_type = $(".pub").css("display")
    var mar_rig = $(".pub").css("marginRight")
    console.log(mar_rig)
    if(mar_rig == "0px"){
        $(".pub").animate({marginRight:"-=300px"});
        $(".control-panel").animate({marginRight:"-300px"},"slow");
        
        
     //   $(".pub").css("display", "none")
    }else if(mar_rig == "-300px"){
        $(".pub").animate({marginRight:"+=300px"});
        $(".control-panel").animate({marginRight:"100px"},400);
        $(".control-panel").animate({marginRight:"-=100px"},600);
    }
    var mar_rig2 = $(".control-panel").css("marginRight")
    if(mar_rig2 == '100px'){
        
    }
    
}




//给一个坐标一个特殊的标记
function loadMarker(x, y, locationName) {
    workMarker = new AMap.Marker({
        map: map,
        title: locationName,
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png',
        position: [x, y]

    });
    
    AMap.event.addListener(workMarker, 'click', mark_onclick);
}

//关键字查询
function searchDestination(destination){
    AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 5,
            pageIndex: 1,
            city: currentCity, //城市
            map: map,
            panel: "panel"
         });
        //关键字查询
        placeSearch.search(destination);
    });
}

