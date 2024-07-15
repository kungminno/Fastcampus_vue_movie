// import Vue from 'vue'
import {createApp} from 'vue'
import App from './App'
import router from './routes/index.js' //index.js 안적어도 index.js를 제일 우선적으로 찾기에 ㅇㅋ
import store from './store/index.js'

// Vue.createApp(App).mount('#app')
createApp(App).use(router).use(store).mount('#app') //use-> 페이지에 특정한 플러그인 연결