<template>
    <div>
        {{  movie.Title }}
    </div>
</template>

<script>
import movie from '../store/movie';

export default{
    props:{
        movie: {
            type: Object,
            default: ()=> ({})
        }
    }
}
</script>