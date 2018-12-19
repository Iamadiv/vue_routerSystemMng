<template>
  <div class="layout">
    <Layout>
      <RouterHeader></RouterHeader>
      <Layout>
        <Sider hide-trigger></Sider>
        <Content></Content>
      </Layout>

      <Footer></Footer>
    </Layout>
  </div>
</template>
<script>
import RouterHeader from "../components/home/RouterHeader";
import Sider from "../components/home/Sider";
import Footer from "../components/home/Footer";
import Content from "../components/home/Content";
import ResourceMng from "../components/resourceMng/ResourceMngIndex";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Sider,
    Footer,
    Content,
    RouterHeader,
    ResourceMng
  }
};
</script>

<style scoped="scoped">
.layout {
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
</style>