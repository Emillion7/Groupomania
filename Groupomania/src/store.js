import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        signup ({ commit }, credentials) {
          return axios
            .post('//localhost:3000/user/create', credentials)
            .then(({ data }) => {
              console.log('user data is', data)
              commit('SET_USER_DATA', data)
            })
         }
       }
})