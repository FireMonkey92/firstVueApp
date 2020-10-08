export const userModule = {
    namespaced: true,
    state: {
        user: null
    },
    // Mutations  are the functions that effects the state
    mutations: {
        SET_USER(state, data) {
            state.user = data
        },
    },
    // actions are the function that we calls form component that calls mutations
    actions: {
        setUser({ commit }, data) {
            commit('SET_USER', data)
        }
    },
    modules: {
    }
}