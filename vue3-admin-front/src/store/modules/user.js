import * as types from '../mutation-type'
const state = {
    userName: 'gfz',
    logined: false,
    user:{},
}

const getters = {
    logined:state=>state.logined,
    user:state=>state.user
}

const actions = {
    setUserAndState({ commit }, user) {
        // 如果登陆成功，设置logined标志位
        commit(types.SET_LOGINED, true)
        // 设置全局用户状态
        commit(types.SET_USER, user)
    },
}

const mutations = {
    [types.SET_LOGINED](state) {
        state.logined = true
    },
    [types.SET_USER](state,payload) {
        state.user = payload
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}