<template>
    <div class="container">
        <div class="inner">
            <MovieItem v-for="m in movies" :key="m.imdbID" :movie="m"/>
        </div>
    </div>
</template>

<script>
import MovieItem from '~/components/MovieItem.vue';

export default{
    components: {
        MovieItem
    },
    computed:{
        movies(){
            return this.$store.state.movie.movies
        }
    }
}
</script>