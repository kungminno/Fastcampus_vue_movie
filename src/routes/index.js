import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'

export default createRouter({
    // Hash(이것사용), History
    //  https://googlr.com/#/search 이런식 이걸 사용해 특정 페이지에서 새로고침했을 때 페이지를 찾을 수 없다는 화면이 안나옴
    history: createWebHashHistory(),
    // pages
    // /의 의미 -> 메인 페이지로 접근
    // 이걸 통해 접근할 페이지 결정 및 컴포넌트 보여줌
    routes: [
        { //메인페이지
            path:'/',
            component:Home
        },
        { //메인페이지
            path:'/movie',
            component:Movie
        },
        { //about 페이지
            path:'/about',
            component: About
        }
    ]
})