//영화 검색 관련 데이터 취급 모듈로 관리
import axios from 'axios';

export default{
    //이 js 가 하나의 스토어에서 모듈화 될수잇다는 것을 명시적으로 나타내는 옵션
    namespaced: true, 

    // 취급해야하는 각각의 데이터들 의미
    state: () => ({ 
        movies:[],
        message:'',
        loading: false
    }), // function() { return{}} 과 동일
    
    
    // computed(계산된 데이터들)된 상태를 만드는 것, 상태 활용
    getters:{
        // movieIds(state) {
        //     return state.movies.map(m=> m.imdbID)

        // }
    },     
    
    // methods와 유사, 각각의 함수를 만들어서 사용할 수 있음
    // mutations==변이, 이걸 통해서 관리하는 데이터 변경 가능
    mutations:{
        updateState(state, payload){
            //context.commit('updateState',{ 에서 넘키는 키 값  반환
            Object.keys(payload).forEach( key => {
                state[key] = payload[key]
            }) 
        },
        resetMovies(state){
            state.movies = []
        }
    }, 
    // 비동기 동작 (async await 없어도 됨)      
    actions: {
        async searchMovies({commit}, payload) {  //context는 state,getter,commit 같은 내용 활용하는 내용 payload가 받을수있는 데이터는 searchMovies가 실핼될때 인수로 들어온 어떤 특정한 데이터
            //Search movies
            const {title, type, number, year} = payload  //Search.vue에서 보내는 데이터를 받음
            const OMDB_API_KEY = '7035c60c'
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            const {Search, totalResults} = res.data
            commit('updateState',{
                movies: Search,
            })
        }
    }
}