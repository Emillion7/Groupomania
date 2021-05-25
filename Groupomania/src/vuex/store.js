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
      },
      CLEAR_USER_DATA () {
        localStorage.removeItem('user')
        location.reload()
      }
    },
    actions: {
        handleSubmit ({ commit }, credentials) {
          return axios
            .post('http://localhost:5000/auth/register', credentials)
            .then(({ data }) => {
              console.log('user data is', data)
              commit('SET_USER_DATA', data)
          })
        },
        handleLogin ({ commit }, credentials) {
          return axios
            .post('http://localhost:5000/auth/login', credentials)
            .then(({ data }) => {
              console.log('user data is', data)
              commit('SET_USER_DATA', data)
          })
        },
        logout ({ commit }) {
          commit('CLEAR_USER_DATA')
        }
      },
      getters: {
        loggedIn (state) {
          return !!state.user
        }
      }
    })
    