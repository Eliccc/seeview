var map = new AMap.Map("container", {
    resizeEnable: true
});

var currentCity = "武汉市"

//设置默认地址    
map.setCity(currentCity)


//地址自动补全
var auto = new AMap.Autocomplete({
    input: "destination"
});
//添加时间监听，在选择补完的地址后调用destinationSelected
AMap.event.addListener(auto, "select", destinationSelected);

function destinationSelected(e){
    var destination = e.poi.name
    move_markMapView(destination)
   // searchDestination(destination)
}
