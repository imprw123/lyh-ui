import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import LyhYUi from '../packages/index.js'
Vue.use(LyhYUi);
new Vue({
    render: h => h(App),
}).$mount('#app')