module.exports={
    base : '/studyB/',
    locales : {
        '/':{
            lang: 'ko-KR',
            title : "하준's 학습블로그",
            description : '공부한 내용들과 학습 과정을 정리해놓기 위한 블로그입니다.'
        },
        '/eng/':{
            lang: 'en-US',
            title : "Hajun's study-blog",
            description : 'Summary / Learning Processes of my studying'
        }
    },

    themeConfig:{
        locales:{
            '/':{
                selectText: '언어(Languages)',
                label: '한국어'
            },
            '/eng/':{
                selectText: 'Languages(언어)',
                label: 'English'
            }
        },

        nav :[
            { text: 'Home', link: '/'},
            {
                text: 'Learnt',
                items: [
                    { text: 'HTML', link: '/html/'},
                    { text: 'Python', link: '/python/'},
                    { text: 'JS', link: 'javaScript'}
                ]
            }
        ],

        plugins: ['@vuepress/back-to-top'],
    }
}