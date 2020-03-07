import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '@/components/index/index'



const routes = [
    { path: '/', component: Index }
]

export default  new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
