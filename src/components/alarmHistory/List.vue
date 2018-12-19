<template>
  <div id="tablelist">
    <Table
      :data="tableData1"
      :columns="tableColumns1"
      :border="true"
      size="small"
      @on-row-click="isEdit"
      highlight-row="true"
    ></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      tableData1: this.mockTableData1(),
      tableColumns1: [
        {
          title: "告警对象",
          key: "alarmModel",
          id:"1",
        },
        {
          title: "告警级别",
          key: "alarmLevel",
          className: 'demo-table-info-column',
          id:"2",
        },
        {
          title: "告警类型",
          key: "alarmType",
          id:"3",
        },
        {
          title: "告警原因",
          key: "alarmCause",
          id:"4",
        },
        {
          title: "告警时间",
          key: "alarmTime",
          id:"5",
        },
        {
          title: "确认时间",
          key: "confirmTime",
          id:"6",
        },
        {
          title: "确认人",
          key: "confirmPerson",
          id:"7",
        }
      ]
    };
  },
  methods: {
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 8; i++) {
        data.push({
          alarmModel: "Business" + Math.floor(Math.random() * 100 + 1),
          alarmLevel: Math.floor(Math.random() * 3 + 1),
          alarmType: "双链路告警",
          alarmCause: "张三" + Math.floor(Math.random() * 100 + 1),
          alarmTime: Math.floor(Math.random() * 7 + 1),
          confirmTime: Math.floor(Math.random() * 7 + 1),
          confirmPerson: "张三" + Math.floor(Math.random() * 100 + 1)
        });
      }
      return data;
    },
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    changePage() {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      this.tableData1 = this.mockTableData1();
    },
    isEdit() {
      let isEdit = false;
      this.$store.commit("isEdit", isEdit);
    },
  }
   

};
</script>

<style>
#tablelist {
  width: 860px;
}
.ivu-table td.demo-table-info-column{
    background-color: red;
    color: #fff;
    text-align: center;
}
</style>