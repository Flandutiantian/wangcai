
<template>
  <div id="app">  
      <router-view/>    
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#333;//接近纯黑色，又比纯黑色浅
  line-height: 1.5;
  font-family:$font-hei;
  font-size: 16px;
  background:#f5f5f5;
}

#app{
  max-width: 600px;
  margin: 0 auto;
}

</style>
