import {
  createStore
} from 'vuex'
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

// let URL_login = "api/v1/login/"
let URL_user = "user/"
let URL_logOut = "logout/"
let URL_Public_Blogs = "blogs/"

let URL_CHANGE_USER = "users/"
let URL_CHANGE_PROFILE = "profile/"

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: {},
    Public_Blogs: {},
    loading: false,
    loading_get_posts: false,
    token: "",
    isToken: false,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token');
        state.isToken = true;
      } else {
        state.token = "";
        state.isToken = false;
      }
    },
    setToken(state, token) {
      state.token = token;
      state.isToken = true;
    },
    removeToken(state) {
      state.token = "";
      state.isToken = false;
    },
    setUser(state, response) {
      state.user = response.data
    },
    setPublicBlogs(state, response) {
      state.Public_Blogs = response.data
    }
  },
  actions: {
    // eslint-disable-next-line no-empty-pattern
    async logOutUser({}, token) {
      axios.post(URL_logOut, {
        //...data
      }, {
        headers: {
          'Authorization': `token ${token}`
        }
      }).then(response => {
        console.log(response);
        localStorage.removeItem('token')
        localStorage.removeItem('vuex')
        window.setTimeout(function () {
          location.replace('/login')
        }, 300)
      }).catch(err => {
        console.log(err.status)
      })
    },

    // eslint-disable-next-line no-empty-pattern
    async updateProfile({}, user) {

      // loading
      this.state.loading = true

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
        mobile: user.profile.mobile,
      }, {
        headers: {
          'Authorization': `token ${localStorage.getItem('token')}`
        }
      })

      axios.all([requestChangeUser, requestChangeProfile]).then(axios.spread((...responses) => {
        const responseUser = responses[0]
        const responseProfile = responses[1]

        // loading
        this.state.loading = false

        // use/access the results
        console.log(responseUser);
        console.log(responseProfile);
        location.replace('/dashboard')

      })).catch(errors => {
        // loading
        this.state.loading = false
        // react on errors.
        console.error(errors);
      })

    },

    async getUser({
      commit
    }) {
      axios.get(URL_user).then(response => {
        commit("setUser", response)
      })
    },

    async getListPublicBlogs({
      commit
    }) {
      this.state.loading_get_posts = true;
      axios.get(URL_Public_Blogs).then(response => {
        this.state.loading_get_posts = false;
        commit("setPublicBlogs", response)
      })
    }
  },
  modules: {}
})