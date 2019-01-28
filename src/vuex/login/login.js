import * as types from '../mutation-types'
import * as api from '../api.js'

// state
const state = {
    loginState: false,
}

// getter
const getters = {
    loginState: state => state.loginState,
}

// mutations
const mutations = {
    [types.POST_LOGINTEL] (state, payload) {
      state.loginState = payload.loginState
    }
}

// actions
const actions = {
    async fetchLogin({dispatch, commit, state}, payload) {
        dispatch('showLoading')
        let res = await api.postUserTelphone(payload)
        dispatch('hideLoading')
        commit({
            type: types.POST_LOGINTEL,
            loginState: true
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}