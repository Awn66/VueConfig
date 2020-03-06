import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        // 定义修改 state 选项的函数
        increment (state) {
            state.count++
        }
    },
    actions: {
        // 放置异步函数
        increment (context) {
            context.commit('increment')
        }
    },
    getters: {
        // 类似 组件的 computed
    }
})
