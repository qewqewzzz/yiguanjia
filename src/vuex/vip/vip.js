import * as types from '../mutation-types'
import * as api from '../api.js'

// state
const state = {
    vipActivation: {}
}

// getter
const getters = {
    vipActivation: state => state.vipActivation,
}

// mutations
const mutations = {
    [types.POST_APPLY] (state, payload) {

    },
    [types.POST_ACTIVATION] (state, payload) {
      state.vipActivation = { ...payload.vipActivation }
    }
}

// actions
const actions = {
    async fetchApply({dispatch, commit, state}, payload) {
        dispatch('showLoading')
        let res = await api.postUserMen(payload)
        dispatch('hideLoading')
        commit({
            type: types.POST_APPLY,
        })
    },
    async fetchActivation({dispatch, commit, state}, payload) {
        dispatch('showLoading')
        let res = await api.getUserMenActivity(payload)
        dispatch('hideLoading')
        commit({
            type: types.POST_ACTIVATION,
            vipActivation: res,
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}