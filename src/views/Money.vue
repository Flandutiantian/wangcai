<template>
  <Layout class-prefix="layout">
  <NumberPad :value.sync="record.amount" @submit="saveRecord"/>     
  <div class="notes">
  <Notes filed-name="备注" 
  placeholder="在这里输入备注"
  @update:value="onUpdateNotes"/>
  </div>
   
  <Tags  :data-source.sync="tags" @update:value="onUpdateTags"/>
  <!-- <Types :vFalue.sync="record.type"/> -->
  </Layout>
</template>
<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import recordListModel from '@/models/recordListModel';

  const recordList = recordListModel.fetch();

  type Record = {
    tags: string[],
    notes:string,
    type: string,
    amount: number,
    createdAt?: Date //类、构造函数
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })

  export default class Money extends Vue{
     tags = window.tagList;
    recordList: Record[] =  recordList;
    record:Record = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
}

    onUpdateTags(value: string[]){
      this.record.tags = value;
    }
     onUpdateNotes(value: string){
      this.record.notes = value;
  }
  saveRecord() {
      recordListModel.create(this.record);
    }
    @Watch('recordList')
    onRecordListChange() {
      window.localStorage.save();
    }
  }
</script>

<style lang="scss">
.layout-content{
  display:flex;
  flex-direction:column-reverse;
}
.notes{ 
  padding:12px 0;
}
</style>

<!-- <style lang="scss" scoped>
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
</style>  -->
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



