<template>
  <div id="app">
    <!-- 组件 -->
    <lyh-dialog width="50%" top="100px" :visible.sync="visible">
      <template v-slot:title>
        <h1>提示</h1>
      </template>
      {{txt}}
      <template v-slot:footer>
        <lyh-button>取消</lyh-button>
        <lyh-button type="primary">确定</lyh-button>
      </template>
    </lyh-dialog>

    <!-- table组件 -->
    <lyh-tableList
      width="100%"
      v-bind:DataTheads="list"
      v-bind:BodyLists="dataList"
      v-bind:pageIndex="pi"
      v-bind:pageSize="ps"
      v-bind:allpage="all"
      v-on:pageIndexChange="changeIndex($event)">
      <template v-slot:action>
        <lyh-button type="primary" icon="lyh-icon-delete" size="small" @click="visible = true">删除</lyh-button>
      </template>
    </lyh-tableList>
    <!-- table组件 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      txt: "13231",
      pi: 1,
      ps: 5,
      all: 10,
      list: ["日期", "姓名", "地址", "电话", "操作"],
      dataList: [
        {
          date: "2016-05-02",
          name: "liyulin",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 123123414134
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: ""
        },
        {
          date: "2016-05-04",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: ""
        },
        {
          date: "2016-05-04",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: ""
        }
      ]
    };
  },
  methods: {
    changeIndex(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
</style>
