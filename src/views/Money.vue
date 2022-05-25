<template>
  <Layout class-prefix="layout">
     <NumberPad/>     
      <Notes/> 
      <Tags/>
      <Types/>
  </Layout>
</template>
<script lang="ts">
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  export default {
    name: 'Money',
    components: {Tags, Notes, Types, NumberPad},
  };
</script>

<style lang="scss">
.layout-content{
  display:flex;
  flex-direction:column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

  .types{
    background: #c4c4c4;
    display:flex;
    text-align: center;//字体居中
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after{//当前如果li被selected
        content:'';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style> 
  <!-- // .layout {
  //   background: #c4c4c4;
  //  flex-direction: column-reverse;
  // }
  //   > li {
  //     width: 50%;
  //     height: 64px;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     position: relative;
  //     &.selected::after {
  //       content: '';
  //       position: absolute;
  //       bottom: 0;
  //       left: 0;
  //       width: 100%;
  //       height: 4px;
  //       background: #333;
  //     }
  //   }



 <-- <template>
  <Layout class-prefix="layout">
    <NumberPad>
    <div>
      <label class="notes">
    <div class="name">备注</div>
    <input type="text" placeholder="在这里输入备注">
      </label> 
    </div> 

    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>
    <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
      </div>
  </Layout> 

</template>

<script lang="ts">

import NumberPad from "../components/NumberPad.vue";
  export default {
    name: "Money",
    components: { NumberPad }
};
</script>

<style lang="scss">
.layout-content{
  display:flex;
  flex-direction:column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
import Layout from '@/components/Layout.vue';

  .types{
    background: #c4c4c4;
    display:flex;
    text-align: center;//字体居中
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after{//当前如果li被selected
        content:'';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow:1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    > li{
      background:#d9d9d9;
      $h: 24px;
      line-height: $h;//height和line-height一样高时里面的内容就上下居中
      height: $h;//只有一行内容 的时候能用
      border-radius: $h/2;
      padding: 0 16px;
      margin-right:12px;
    }
  }
  > .new{
    padding: 16px;
    button{
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
.notes{
  background: #f5f5f5;
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name{
    padding-right: 16px;
  }
  input{
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style> --> 
