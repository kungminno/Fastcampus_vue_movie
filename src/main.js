// import Vue from 'vue'
import {createApp} from 'vue'
import App from './App'
import router from './routes/index.js'

// Vue.createApp(App).mount('#app')
createApp(App).use(router).mount('#app') //use-> 페이지에 특정한 플러그인 연결