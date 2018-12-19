<template>
<div id="BMapComponent">
  <div id="WarningTree">
    <Tree></Tree>
  </div>
   <div id="allmap"></div>
 </div>
</template>

<script>
import BMap from "BMap";
import Tree from '../resourceMng/Tree';
import routerIcon from "../../assets/router.png";
export default {
  name: "BMapComponent",
  components:{
    Tree
  },

  methods: {
    ready: function() {
      // 百度地图API功能
      var map = new BMap.Map("allmap", { minZoom: 5, maxZoom: 10 });
      map.centerAndZoom(new BMap.Point(116.4035, 39.915), 5);
      map.enableScrollWheelZoom(true);
      // 编写自定义函数,创建标注
      function addMarker(point) {
        var marker = new BMap.Marker(point);
        var icon = new BMap.Icon(routerIcon, new BMap.Size(18, 18));
        icon.imageSize = new BMap.Size(18, 18);
        icon.anchor = new BMap.Size(15, 25);
        marker.setIcon(icon);
        map.addOverlay(marker);
      }
      // 随机向地图添加25个标注
      var bounds = map.getBounds();
      var sw = bounds.getSouthWest();
      var ne = bounds.getNorthEast();
      var lngSpan = Math.abs(sw.lng - ne.lng);
      var latSpan = Math.abs(ne.lat - sw.lat);
      for (var i = 0; i < 25; i++) {
        var point = new BMap.Point(
          sw.lng + lngSpan * (Math.random() * 0.7),
          ne.lat - latSpan * (Math.random() * 0.7)
        );
        addMarker(point);
      }
    }
  },
  mounted() {
    this.ready();
  }
};
</script>

<style scoped="scoped">
#BMapComponent{
  width:100%;
  clear:both;
}
#WarningTree{
  border:1px solid red;
  width:18%;
  height:480px;
   float:left;
}
#allmap {
  width: 82%;
  height: 480px;
  float:left;
}
#allmap img {
  max-width: inherit;
}
</style>
