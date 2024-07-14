<template>
    <Header></Header> <!--헤더라는 부분은 페이지가 바뀌어도 바뀌지않음-->
        <router-view /> <!-- 페이지가 바뀔때마다 바뀌는 페이지가 이 부분에서 바뀌어서 출력-->
</template>

<script>
import Header from '~/components/Header.vue'
export default{
    components:{
        Header
    }
}
</script>

<style lang="scss">
@import "~/scss/main";


</style>