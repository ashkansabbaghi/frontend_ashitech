import {
  createStore
} from 'vuex'
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

let URL_login = "http://127.0.0.1:8000/api/v1/login/"
let URL_user = "http://127.0.0.1:8000/api/v1/user/"
let URL_logOut = "http://127.0.0.1:8000/api/v1/logout/"
let URL_Public_Blogs = "http://127.0.0.1:8000/api/v1/blogs/"

let URL_CHANGE_USER = "http://127.0.0.1:8000/api/v1/users/"
let URL_CHANGE_PROFILE = "http://127.0.0.1:8000/api/v1/profile/"

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: {},
    Public_Blogs: {},
    loading: false,
    status: '',
    statusLogOut: '',
  },
  mutations: {
    setUser(state, response) {
      // console.log(response.data)
      state.status = response.status //200
      state.user = response.data
    },
    setUserToken(state, response) {
      console.log(response.data)
      //save token
      localStorage.setItem('token', response.data.token)
      //save user
      state.user = response.data.user
      // change direction
      window.setTimeout(function () {
        location.replace('/dashboard')
      }, 500)
    },
    setPublicBlogs(state, response) {
      // console.log(response.data)
      state.Public_Blogs = response.data
    }
  },
  actions: {
    async loginUser({
      commit
    }, user) {
      axios
        .post(URL_login, {
          username: user.username,
          password: user.password,
        })
        .then(response => {
          if (response.data.token) {
            this.state.status = response.status

            // console.log(response.data.user)
            commit("setUserToken", response)

          }
        })
        .catch(error => {
          if (error.response.status === 400) {
            localStorage.removeItem('token')
            this.state.status = error.response.status
          }
        })
    },

    // eslint-disable-next-line no-empty-pattern
    async logOutUser({}, token) {
      axios.post(URL_logOut, {
        //...data
      }, {
        headers: {
          'Authorization': `token ${token}`
        }
      }).then(response => {
        this.statusLogOut = response.status
        localStorage.removeItem('token')
        localStorage.removeItem('vuex')
        window.setTimeout(function () {
          location.replace('/login')
        }, 500)
      }).catch(err => {
        console.log(err.status)
      })
    },

    // eslint-disable-next-line no-empty-pattern
    async updateProfile({}, user) {
      // console.log(user.profile)

      const requestChangeUser = axios.put(URL_CHANGE_USER + user.id, {
          id: user.id,
          username: user.username,
          email: user.email
      }, {
        headers: {
          'Authorization': `token ${localStorage.getItem('token')}`
        }
      })
      const requestChangeProfile = axios.put(URL_CHANGE_PROFILE + user.id, {
        user: user.profile.user,
        bio: user.profile.bio,
        mobile : user.profile.mobile,
      }, {
        headers: {
          'Authorization': `token ${localStorage.getItem('token')}`
        }
      })
      // const requestThree = axios.get(three)

      axios.all([requestChangeUser, requestChangeProfile]).then(axios.spread((...responses) => {
        const responseUser = responses[0]
        const responseProfile = responses[1]
        // const responseThree = responses[2]

        // use/access the results
        console.log(responseUser);
        console.log(responseProfile);
        location.replace('/dashboard')

      })).catch(errors => {
        // react on errors.
        console.error(errors);
      })

    },

    async getUser({
      commit
    }) {
      axios.get(URL_user).then(response => {
        // console.log(response.data)
        commit("setUser", response)
      })
    },

    async getListPublicBlogs({
      commit
    }) {
      axios.get(URL_Public_Blogs).then(response => {
        commit("setPublicBlogs", response)
      })
    }
  },
  modules: {}
})