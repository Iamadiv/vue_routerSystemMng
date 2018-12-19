<template>
    <div class="video-wrap">
        <div class="video-box">
            <video :controls='controls'  :loop="loop" :preload="preload">
                <source src="movie/movie.mp4" type="video/mp4">
                <source src="movie/movie.ogv" type="video/ogg">
                <p style="padding: 50px;color:#fff;text-align: center">您的浏览器不支持 HTML5 video 标签。</p>
            </video>
        </div>
</div>
</template>
<script>
export default {
    name:"Video",
    data(){
        return {
            controls:'controls',
            loop:'loop',
            preload:'auto'
        }
    }
}
</script>
<style scoped>
      .video-wrap{
            background-color: #ddd;
            width: 100%;
            text-align: center;
        }
        .video-box{
            width: 80%;
            margin: 0px auto;
        }
        
        .video-box video{
            width:100%;
            height:480px;
            object-fit: fill;
        }
</style>


