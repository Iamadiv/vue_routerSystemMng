<template>
      <div id="TopButton">
           	<el-button type="success" size="small" icon="el-icon-download" @click="modal12 = true">导出excel</el-button>
            <el-button type="success" size="small" icon="el-icon-circle-check" @click="modal12 = true">确认</el-button>
            <el-button type="success" size="small" icon="el-icon-check" @click="modal12 = true">确认所有</el-button>   
      </div>
</template>

<script>
export default {
    name:"TopButton",
    data(){
        return {
            modal12: false,
        }
    }
}
</script>
 