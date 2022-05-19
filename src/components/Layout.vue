<template>
    <div class="nav-wrapper">
    <div class="Content">
      <slot />
      </div>
    <Nav />
  </div>
</template>

<script lang="ts">
    export default {
        name:'Layout'
    }
</script>

<style lang="scss" scoped>
 .nav-wrapper {
      border:1px solid red;
      display:flex;
      flex-direction: column;
       height: 100vh;

    }
    .Content {
      border: 1px solid blue;
       flex-grow: 1;
       overflow: auto;
    }
</style>