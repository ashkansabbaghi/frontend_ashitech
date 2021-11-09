import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/index.scss'

// js
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/popper.min.js'

//charts
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

createApp(App).use(store).use(VueChartkick).use(router).mount('#app')