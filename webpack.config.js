//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

//export
module.exports = {

    resolve:{
        extensions: ['.js','.vue'], //경로에서 따로 확장자를 명시하지 않아도 문제없게 함
        // 경로 별칭: 해당하는 경로 별칭이 지칭하는 실제 경로로 바로 jump
        alias: {
            '~': path.resolve(__dirname,'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },
    //파일을 읽어들이기 시작하는 진입점 설정
    entry:'./src/main.js',

    //결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    module:{
        rules:[
            {
                test:/\.vue$/,
                use: 'vue-loader'
            },
            {
                test:/\.s?css$/,
                use: [
                    'vue-style-loader', //vue 파일 내부에 style 파일을 해석해서 동작시킬수있도록 만듦
                    'style-loader', //해석한 css 를 html에 삽입
                    'css-loader' ,   //자바스크립트에서 css를 해석
                    'postcss-loader', //해석한 scss 를 html에 삽입
                    'sass-loader'       //자바스크립트에서 scss를 해석
                ]
            },
            {
                test:/\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test:/\.(png|jpe?g|gif|webp)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리방식 등 다양한 플러그인들을 처리
    plugins:[
        new HtmlPlugin({
            template: './index.html'      //생성된 HTML 파일에 번들링된 자바스크립트와 CSS 파일을 자동으로 추가
        }),
        new CopyPlugin({
            patterns:[
                {from: 'static'}        //빌드 시점에 웹팩으로 빌드한 결과물 외에, 원하는 파일들을 추가로 복사
            ]
        }),
        new VueLoaderPlugin()
    ],

    devServer:{
        host: 'localhost'
    }
    
}