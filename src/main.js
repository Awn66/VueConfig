import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'

import Vue from 'vue'
import router from './router/router.js'
import state from './router/router.js'

import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
axios.interceptors.response.use(function (response) {
    // 设置返回的数据
    return response.data;
});

Vue.prototype.$axios = axios

new Vue({
    router,
    state,
    render: h => h(App),
}).$mount('#app')
