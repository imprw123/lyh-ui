<template>
  <div class="lyh-input" :class="{'lyh-input--suffix':showSuffix}">
    <input
      class="lyh-input__inner"
      :placeholder="placeholder"
      :type="passwordVisible ? (passwordVisible?'text':'password'):type"
      :name="name"
      :disabled="disabled"
      :class="{'is-disabled':disabled}"
      :value="value"
      @input="handleInput"
      :clearable="clearable"
      :showPassword="showPassword"
    />
    <span class="lyh-input__suffix" v-if="showSuffix">
      <i class="lyh-input__icon lyh-icon-circle-close" v-if="clearable && value" @click="clear"></i>
       <i class="lyh-input__icon lyh-icon-view" v-if="showPassword" @click="handlePassword" :class="{'lyh-icon-view-active':passwordVisible}"></i>
    </span>
  </div>
</template>


<script>
export default {
  name: "LyhInput",
  data(){
      return {
          passwordVisible:false
      }
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed:{
      showSuffix(){
          return this.clearable || this.showPassword
      }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear(){
        this.$emit('input','')
    },
    handlePassword(){
        this.passwordVisible=!this.passwordVisible;
    }
  }
};
</script>


<style lang="scss">
.lyh-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .lyh-input__inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.lyh-input--suffix {
  .lyh-input__inner {
    padding-right: 30px;
  }
  .lyh-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .lyh-icon-view-active{
        color:rgb(85, 167, 243);
    }
  }
}
</style>