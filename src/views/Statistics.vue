<template>
  <Layout>
  <Types class-prefix="zzz" :value.sync="yyy"/>
  <Types :data-source="array" :value.sync="hhh"/>
  </Layout> 
</template>

<style  scoped lang="scss">
  ::v-deep .zzz-item {
    background: white;
    &.selected{ 
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
</style>
<script lang="ts">
import Types from '../components/Money/Types.vue'; 
import Component from "vue-class-component";
import Vue from "vue";

  @Component({
    components: { Types },
  })
  export default class statistics extends Vue{
    yyy= '-';
    array = [
      {text:'按天', value: 'day'},
      {text:'按月', value: 'week'},
      {text:'按年', value: 'mouth'},
      ];
    hhh = 'day';
}
</script>

