<template>
  <div class="table">
    <table
      cellspacing="0"
      cellpadding="0"
      border="0"
      class="lyh-table__header"
      :style="{'width':width}"
    >
      <thead class="lyh-gutter">
        <tr>
          <th colspan="1" rowspan="1" v-for="item in DataTheads" :key="item.id">
            <div class="cell">{{item}}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="el-table__row" v-for="item in BodyLists" :key="item.id">
          <td rowspan="1" colspan="1" class="el-table_2_column_4" v-for="it in item" :key="it.id">
            <div class="cell">{{it}}</div>
          </td>
          <div class="lyh-tablelist_action" v-if="$slots.action">
            <slot name="action"></slot>
          </div>
        </tr>
      </tbody>
    </table>
    <ul class="pagination">
      <li v-show="current != 1" v-on:click="current-- && goto(current)">
        <a href="#"><</a>
      </li>
      <li
        v-for="index in pages"
        v-on:click="goto(index)"
        v-bind:class="{'active':current == index}"
        :key="index"
      >
        <a href="#">{{index}}</a>
      </li>
      <li v-show="allpage != current && allpage != 0 " v-on:click="current++ && goto(current++)">
        <a href="#">></a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "lyhTableList",
  data() {
    return {
      current: this.pageIndex, // 当前页码
      showItem: this.pageSize, // 最少显示5个页码
      allpageLists: this.allpage // 总共的
    };
  },
  props: {
    width: {
      type: String,
      default: "100%"
    },
    DataTheads: {
      type: Array,
      default: [1, 2, 3]
    },
    BodyLists: {
      type: Array,
      default: [1, 2, 3]
    },
    pageIndex: {
      type: Number | String,
      default: 1
    },
    pageSize: {
      type: Number | String,
      default: 5
    },
    allpage: {
      type: Number | String,
      default: 10
    }
  },
  computed: {
    pages: function() {
      var pag = [];
      if (this.current < this.showItem) {
        //如果当前的激活的项 小于要显示的条数
        //总页数和要显示的条数那个大就显示多少条
        var i = Math.min(this.showItem, this.allpageLists);
        while (i) {
          pag.unshift(i--);
        }
      } else {
        //当前页数大于显示页数了
        var middle = this.current - Math.floor(this.showItem / 2), //从哪里开始
          i = this.showItem;
        if (middle > this.allpageLists - this.showItem) {
          middle = this.allpageLists - this.showItem + 1;
        }
        while (i--) {
          pag.push(middle++);
        }
      }
      return pag;
    }
  },
  methods: {
    goto: function(index) {
 
      //if (index == this.pageIndex) return;
      this.current = index;
      this.$emit("pageIndexChange", index);
    }
  }
};
</script>


<style lang="scss">
table {
  font-family: "微软雅黑";
}
.lyh-gutter {
  width: 100%;
  overflow: hidden;
  zoom: 1;
  color: #909399;
}
.lyh-gutter tr {
  display: flex;
  overflow: hidden;
  zoom: 1;
  border-bottom: 1px solid #ebeef5;
}
.lyh-gutter tr th {
  flex: 1;
  text-align: center;
  padding: 10px;
}
tbody tr {
  display: flex;
  overflow: hidden;
  zoom: 1;
  border-bottom: 1px solid #ebeef5;
}
tbody tr td {
  flex: 1;
  text-align: center;
  padding: 10px;
  font-size: 14px;
}
.lyh-tablelist_action {
  flex: 1;
  text-align: center;
  padding: 10px;
  font-size: 14px;
}
.pagination {
  position: relative;
  width: 100%;
  text-align: center;
}

.pagination li {
  padding: 0 4px;
  background: #fff;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
}

.pagination li a {
  padding: 0 4px;
  background: #f4f4f5;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  text-decoration: none;
  color: #606266;
  font-weight: bold;
  font-family: "微软雅黑";
}

.pagination li a:hover {
  background-color: #7aa4ce;
  color: #fff;
}

.pagination li.active a {
  background-color: #409eff;
  color: #fff;
}
</style>