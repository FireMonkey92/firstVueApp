import { createStore } from 'vuex'
import { userModule } from './users'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: userModule
  }
})
