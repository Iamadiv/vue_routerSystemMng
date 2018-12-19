<template>
<div id="DatePicker">
       <span >开始时间：</span>
       <DatePicker type="datetime" v-model="startTime" @on-ok="byStartTime" :placeholder="placeholder_startTime" style="width: 160px"></DatePicker> 
       <span >结束时间：</span>
       <DatePicker type="datetime" v-model="endTime" @on-ok="byEndTime" :placeholder="placeholder_endTime" style="width: 160px"></DatePicker> 
       	<el-button type="warning" size="small" icon="el-icon-search" @click="modal12 = true">查询</el-button>
</div>
</template>

<script>
export default {
    name:"DatePickerComponent",
    data(){
        return {
            startTime:"",
            endTime:""
        }
    },
    computed:{
       placeholder_endTime:function(){
            var now=new Date();
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate();            //日       
            var hh = now.getHours();            //时
            var mm = now.getMinutes();          //分
            var ss = now.getSeconds();           //秒    
            var clock = year + "-";     
            if(month < 10)
            clock += "0";       
                clock += month + "-";       
            if(day < 10)
            clock += "0";          
            clock += day + " ";
            
            if(hh < 10)
                clock += "0";
                
            clock += hh + ":";
            if (mm < 10) clock += '0'; 
            clock += mm + ":"; 
            
            if (ss < 10) clock += '0'; 
            clock += ss; 
            return(clock); 
        },
        placeholder_startTime:function(){
            var now=new Date();
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate()-1;            //日       
            var hh = now.getHours();            //时
            var mm = now.getMinutes();          //分
            var ss = now.getSeconds();           //秒    
            var clock = year + "-";     
            if(month < 10)
            clock += "0";       
                clock += month + "-";       
            if(day < 10)
            clock += "0";          
            clock += day + " ";
            
            if(hh < 10)
                clock += "0";
                
            clock += hh + ":";
            if (mm < 10) clock += '0'; 
            clock += mm + ":"; 
            
            if (ss < 10) clock += '0'; 
            clock += ss; 
            return(clock); 
        }
       
    },
    methods:{
       byStartTime:function(){
          console.log(this.startTime);
       },
       byEndTime:function(){
            console.log(this.endTime);
       }
    }
}
</script>

<style>
   
</style>

