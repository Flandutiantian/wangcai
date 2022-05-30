<template>
    <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="Content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
      </div>
    <Nav />
  </div>
</template>

<script lang="ts">
    export default {
        name:'Layout',
        props: ['classPrefix']
    }
</script>

<style lang="scss" scoped>
 .layout-wrapper {
      display:flex;
      flex-direction: column;
       height: 100vh;

    }
    .Content {
       flex-grow: 1;
       overflow: auto;
    }
</style>