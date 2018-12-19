<template>
  <div id="demo">
    <div class="grid"></div>
    <span class="animate" @click="startAnimate">开始动画</span>
    <div style="text-align:center;clear:both;"></div>
  </div>
</template>


<script>
   
   import $ from 'jquery'
   import './js/jquery.easing.min.js' 
   
   
    export default {
    name: "Demo",
    data() {
        return { }
    },
    mounted:function(){
        var images = "", count = 50;
         for(var i = 1; i <= count; i++)
	        images += '<img src="http://thecodeplayer.com/u/uifaces/'+i+'.jpg" style="width:60px; height:60px;"/>';
	
                //appending the images to .grid
        $(".grid").append(images);      
    },         
    methods:{
        storm(){
            
             $("img").each(function(){
                var d = 0; //delay
                var ry, tz, s; //transform params    
                d = Math.random()*1000;
                $(this).delay(d).animate({opacity: 1}, {
               step: function(n){
                    //rotating the images on the Y axis from 360deg to 0deg
                    ry = (1-n)*360;
                    //translating the images from 1000px to 0px
                    tz = (1-n)*1000;
                    //applying the transformation
                    $(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
                }, 
                duration: 3000,   //动画完成一个周期所需要的时间
                //some easing fun. Comes from the jquery easing plugin.
                easing: 'swing', 
             })
	        })
        },
        startAnimate(){
            var _this=this;
            var d = 0; //delay
            var ry, tz, s; //transform params
            $("img").each(function(){
              d = Math.random()*1000; //1ms to 1000ms delay
              $(this).delay(d).animate({opacity: 0}, {
                //while the thumbnails are fading out, we will use the step function to apply some transforms. variable n will give the current opacity in the animation.
                step: function(n){
                    s = 1-n; //scale - will animate from 0 to 1
                    $(this).css("transform", "scale("+s+")");
                }, 
                duration: 1000, 
            })
         }).promise().done(function(){
            //after *promising* and *doing* the fadeout animation we will bring the images back
            
            console.log(this);
             _this.storm();
	     })
        }
     },
    }
</script>

<style scoped>
    @import './css/style.css';
    #demo {
    width: 100%;
    height: 480px;
    }
  
</style>
