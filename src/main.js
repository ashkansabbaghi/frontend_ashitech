import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// css
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/index.scss'

// js
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/popper.min.js'

//charts
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

// axios
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'
axios.defaults.baseURL = 'https://ashkansa.pythonanywhere.com/api/v1/'

createApp(App).use(store).use(VueChartkick).use(router).mount('#app')