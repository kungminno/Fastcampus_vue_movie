module.exports ={
    env:{
        browser: true,
        node: true,
    },
    extends: [
        //vue에 대한 코드 구칙
        // 'plugin: vue/vue3-essential', //Lv1
        'plugin: vue/vue3-strongly-recommend', //Lv2
        // 'plugin: vue/vue3-recommended', //Lv3
        //js에 대한 코드 구칙
        'eslint : recommended'
    ],
    parserOptiona: {
        parser: 'babel-eslint' //바벨의 역할: es6 이상의 문법을 구버전의 브라우저에서도 동작할 수 있게 es5로 변경 시켜주는 역할을함, 실제로 구문 문석을 해서 eslint를 동작시키기위함
    },
    rules: {
        // extends에서 사용한 규칙을 그대로 사용하려고 하면 추가할필요 X
    }
}