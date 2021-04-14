import { createStore } from "vuex";
import state from './state'         //单独出来的state
import mutations from './mutations' //单独出来的mutations
import actions from './actions'     //单独出来的actions
import user from './modules/user'    //自定义模块，每个模块拥有自己的 state、mutation、action、getter
import * as getters from './getters'
export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  }
});
