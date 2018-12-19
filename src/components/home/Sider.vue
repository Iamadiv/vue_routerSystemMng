<template>
  <div id="Side">
    <Menu
      :theme="theme3"
      active-name="网络组织"
      style="width:70px;height:100%;"
      @on-select="getName($event)"
    >
      <MenuItem v-for="(todos,index) in activeNames" :key="index" :name="todos.name" :to="todos.to">
        <Icon :type="todos.type"/>
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "Sider",
  data() {
    return {
      childName: "",
      theme3: "dark",
      activeNames: [
        { name: "资源管理", to: "/ResourceMng", type: "md-archive" },
        { name: "网络组织", to: "/BMapComponent", type: "md-chatbubbles" },
        {
          name: "性能数据",
          to: "/PerformanceData",
          type: "md-battery-charging"
        },
        { name: "历史告警", to: "/AlarmHistory", type: "md-leaf" },
        { name: "统计报表", to: "/ReportStatistics", type: "md-appstore" },
        { name: "HTML5", to: "/Demo", type: "logo-html5" },
        { name: "Video", to: "/Video", type: "md-videocam" }
      ]
    };
  },
  methods: {
    getName: function(e) {
      this.$store.commit("save_childName", e);
    }
  }
};
</script>

<style>
</style>