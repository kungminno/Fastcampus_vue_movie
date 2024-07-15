# Vue3 Search Movie Web

## components: 각 페이지에서 사용하는 모듈
- Header.vue: 페이지 상단에 고정된 헤더(페이지가 편해도 변동 X)
- Logo.vue: 헤더 앞의 로고, 헤더에서 import  
  **router-view**
- Headline.vue: 메인 페이지의 헤드라인
- Search.vue: 영화 검색 내용 표시(MovieList 속 MovieItem 으로 표시)
- MovieList.vue: 영화 검색 내용 표시
- MovieItem.vue:
  
  
      
## routes: Router => 여러 싱글페이지 관리 역할
- index.js: createRouter, 접근할 페이지 및 컴포넌트 결정
- Home.vue: 메인 페이지
            헤드라인, 영화검색, 검색 영화 리스트 표시
- Movie.vue:
- About.vue:
   
      
    
## store: Vuex => 애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할
- index.js: createStore
            만드는 다른 모듈 불러옴
- movie.js: 영화 검색 관련 데이터 취급 모듈
- about.js: 사용자/관리자 데이터 취급 모듈
  
    
      
### Movie Search 과정
1. Search.vue의 methos에서 apply 실행  
    -> movie(store) 속 searchMovies 접근
2. movie(store) 속 actions에서 searchMovies 실행  
    -> 사용자의 입력에 맞는 요청을 axios를 통해 하고, 데이터를 받음  
    -> commit을 사용해 mutations 속 updateState 실행  
3. mutations에서는 actions을 통해 payload에 데이터를 입력 받아 해당 데이터들을 취급하는 각각의 데이터(state)에 할당
4. 해당 결과가 MovieList.vue 파일로 
```
    computed:{
    movies(){
        return this.$store.state.movie.movies
    }
    }
```
형식으로 전달됨  
5. movies가 
```
    <MovieItem v-for="m in movies" :key="m.imdbID" :movie="m"/>
```
형식으로 template에 사용  
6. MovieItem.vue에선 MovieList.vue의 결과를 props로 가져와 출력  
7. Home.vue template에 이런식
```
        <Headline />
        <Search /> <!-- 얘네는 형제 컴포넌트-->
        <MovieList />
```
            
    
