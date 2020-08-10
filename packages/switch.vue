<template>
  <div class="lyh-switch" @click="handleClick" :class="{'is-checked':value}">
    <span class="lyh-switch__core" ref="core">
      <span class="lyh-switch__button"></span>
    </span>
    <input type="checkbox" :name="name" class="lyh-switch__input" ref="input" :checked="value"/>
  </div>
</template>


<script>
export default {
  name: "LyhSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.setColor();
    this.$refs.input.checked = this.value;
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      await this.$nextTick();
      this.setColor();
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        console.log(this.$refs.core);
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  }
};
</script>

<style lang="scss">
.lyh-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .lyh-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .lyh-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .lyh-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.lyh-switch.is-checked {
  .lyh-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .lyh-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>