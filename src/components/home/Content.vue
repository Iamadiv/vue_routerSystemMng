<template>
  <div id="Content">
    <PathText></PathText>
    <router-view class="LinkArea"></router-view>
  </div>
</template>

<script>
import PathText from "../content/PathText";

export default {
  name: "Content",
  components: {
    PathText
  }
};
</script>

<style>
#Content {
  width: 100%;
}
.LinkArea {
  height: 480px;
}
</style>