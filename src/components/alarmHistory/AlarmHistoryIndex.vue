<template>
  <div id="AlarmHistory" class="demo-split">
    <Split v-model="split1">
      <div slot="left" class="demo-split-pane demo-split-pane-left">
        <SelectedTree></SelectedTree>
      </div>
      <div slot="right" class="demo-split-pane demo-split-pane-right">
        <div class="right_top">
          <div class="right_top_left">
                <DatePickerComponent></DatePickerComponent>
          </div>
          <div class="right_top_right">
             <TopButton></TopButton> 
          </div>
               
        </div>
        <List></List>
      </div>
    </Split>
  </div>
</template>

<script>
import SelectedTree from "../alarmHistory/SelectedTree";
import DatePickerComponent from '../alarmHistory/DatePickerComponent';
import TopButton from "../alarmHistory/TopButton"
import List from '../alarmHistory/List'
export default {
  name: "AlarmHistory",
  data() {
    return {
        split1:0.19
    };
  },
  components: {
    SelectedTree,DatePickerComponent,TopButton,List
  },
  computed: {
    str() {
      return this.$store.state.str;
    }
  },
  methods: {
   
  }
};
</script>

<style scoped="scoped">
.demo-split {
  height: 480px;
  border: 1px solid #dcdee2;
}
.demo-split-pane-right {
  width: 100%;
}

.right_top {
  width: 100%;
  height: 50px;
  border:1px solid #ccc;
  
  clear: both;
  text-align: left;
  line-height: 50px;
  padding-left: 10px;
}
.right_top_left {
  float: left;
  width: 65%;
  height: 50px;
  
}
.right_top_right {
  float: left;
  width: 35%;
  height: 50px;
 
  text-align: right;
}
#app{
  text-align: left;
}
</style>


