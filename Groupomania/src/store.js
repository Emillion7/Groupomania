import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      user: null
    },
    mutations: {
      SET_USER_DATA(state, userData){
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common['Authorization'] = `Bearer ${
          userData.token
        }`
      }
    },
    actions: {
        handleSubmit ({ commit }, credentials) {
          return axios
            .post('//localhost:3000/user/create', credentials)
            .then(({ data }) => {
              console.log('user data is', data)
              commit('SET_USER_DATA', data)
          })
        },
        handleLogin ({ commit }, credentials) {
          return axios
            .post('//localhost:3000/user/login', credentials)
            .then(({ data }) => {
              console.log('user data is', data)
              commit('SET_USER_DATA', data)
          })
        }
      }
    })