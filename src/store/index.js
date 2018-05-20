import Vue from 'vue'
import Vuex from 'vuex'
import * as action from './action'
import * as getter from './getter'
import state from './state'
import mutation from './mutation'

// 插件，可以在控制台打印相关信息
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 测试模式，线上不使用这个调试模式
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    action,
    getter, 
    state, 
    mutation,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})