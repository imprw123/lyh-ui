import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import Switch from './switch.vue'
import Radio from './radio.vue'
import TableList from './tableList.vue'
import './fonts/font.scss'
const components = [
    Button,
    Dialog,
    Input,
    Switch,
    Radio,
    TableList
]
const install = function(Vue) {
    //注册所有组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof winodw !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default install