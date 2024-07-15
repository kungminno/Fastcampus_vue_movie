<template>
    <Headline />
    <Search /> <!-- 얘네는 형제 컴포넌트-->
    <MovieList />
</template>

<script>
import Headline from '~/components/Headline.vue';
import Search from '~/components/Search.vue';
import MovieList from '~/components/MovieList.vue';
export default{
    components:{
        Headline,
        Search,
        MovieList
    }
}
</script>