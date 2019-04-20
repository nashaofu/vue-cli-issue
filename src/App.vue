<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'APP',
  mounted () {
  }
}
</script>

<style lang="scss">
@import "./element-variables.scss";
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css"; /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>