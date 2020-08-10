
<template>
  <label class="lyh-radio">
    <!-- 小圆 -->
    <span class="lyh-radio__input">
      <span class="lyh-radio__inner" :class="{'is-checked':label === value}"></span>
      <input type="radio" :value="label" :name="name" v-model="model" class="lyh-radio__original" />
    </span>
    <span class="lyh-radio__label" :class="{'is-checked':label === value}">
      <slot></slot>
      <!-- 如果没有插槽，就显示label -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "LyhRadio",
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
.lyh-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .lyh-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lyh-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &.is-checked {
        border-color: #409eff;
        background: #409eff;
        position: relative;
      }
      &.is-checked::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -2px;
        margin-top: -2px;
      }
    }
    .lyh-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .lyh-radio__label {
    font-size: 14px;
    padding-left: 10px;
    &.is-checked{
        color: #409eff;
    }
  }
}
</style>