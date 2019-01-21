import * as types from '../mutation-types'
import * as api from '../api.js'

// state
const state = {
    categoryMenu: [],
    categoryList: [],
}

// getter
const getters = {
    categoryMenu: state => state.categoryMenu,
    categoryList: state => state.categoryList,
}

// mutations
const mutations = {
    [types.GET_PRODUCT] (state, payload) {
      state.categoryMenu = { ...payload.categoryMenu }
    },
    [types.GET_CATAGROY] (state, payload) {
      state.categoryList = { ...payload.categoryList }
    }
}

// actions
const actions = {
    async fetchProductList({dispatch, commit, state}, payload) {
        dispatch('showLoading')
        let res = await api.getProductList(payload)
        dispatch('hideLoading')
        commit({
            type: types.GET_PRODUCT,
            categoryMenu: res
        })
    },
    async fetchCatagroyList({dispatch, commit, state}, payload) {
        dispatch('showLoading')
        let res = await api.getCatagroyList(payload)
        dispatch('hideLoading')
        commit({
            type: types.GET_CATAGROY,
            categoryList: res,
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}