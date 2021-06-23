import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      user: null,
      posts: []
  },
    mutations: {
      SET_USER_DATA(state, userData){
        state.user = userData.data
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('token', userData.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      },
      CLEAR_USER_DATA () {
        localStorage.removeItem('user')
        location.reload()
      },
      SET_POST_SUCCESS(state, data){
        state.posts = data;
        console.log(state, data)
      }
    },
    actions: {
        handleSubmit ({ commit }, credentials) {
          return axios
            .post('http://localhost:5000/api/v1/auth/register', credentials)
            .then(({ data }) => {
              console.log('user data is', data)
              commit('SET_USER_DATA', data)
          })
        },
        handleLogin ({ commit }, credentials) {
          return axios
            .post('http://localhost:5000/api/v1/auth/login', credentials)
            .then(({ data }) => {
              console.log('user data is', data)
              commit('SET_USER_DATA', data)
          })
        },
        logout ({ commit }) {
          commit('CLEAR_USER_DATA')
        },
        handleUploadPost({ commit }, data) {
         const token = localStorage.getItem('token');
         console.log("Bearer "+ token)
          const config = {
            headers: { Authorization: `Bearer `+ token}
        };       
        console.log(config)
          return axios
            .post('http://localhost:5000/api/v1/posts', data, config)
            .then(({ data }) => {
              console.log('post data is', data)
              commit('SET_POST_SUCCESS', data)
          })
        },
        handleGetPosts({ commit }) {
         const token = localStorage.getItem('token');
         console.log("Bearer "+ token)
          const config = {
            headers: { Authorization: `Bearer `+ token}
        };       
        console.log(config)
          return axios
            .get('http://localhost:5000/api/v1/posts', config)
            .then(({ data }) => {
              const posts = data.data
              commit('SET_POST_SUCCESS', posts)
          })
        },
      },
      getters: {
        loggedIn (state) {
          return !!state.user
        },
        posts (state) {
          return state.posts
        } 
      }
    }) 