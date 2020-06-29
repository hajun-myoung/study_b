module.exports={
    base : '/study_b/',
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
                label: '한국어',
                
                nav :[
                    { text: '홈', link: '/'},
                    {
                        text: '공부한 것들',
                        items: [
                            { text: '뷰프레스(VuePress)', items:[
                                { text: '뷰프레스(VuePress)', link: '/vuepress/'}
                            ]},
                            { text: '프로그래밍 언어', items :
                                [
                                    { text: 'HTML', link: '/languages/html/'},
                                    { text: 'Python', link: '/languages/python/'},
                                    { text: 'JS', link: '/languages/javaScript/'}
                                ]
                            },
                            { text: '메이킹', items:[
                                { text: '아두이노', link: '/making/arduino/'},
                                { text: '프로세싱', link: '/making/processing/'}
                            ]}
                        ]
                    },
                    {
                        text: '프로젝트',
                        items: [
                            {text: '짐벌만들기', link: '/projects/gimabl/'},
                            {text: '체크카드 만들기', link: '/projects/debit-card/'}
                        ]
                    },
                    {
                        text: '엔지니어링',
                        items: [
                            {text: '기본', link: '/engineering/basic/'}
                        ]
                    }
                ],
            },

            '/eng/':{
                selectText: 'Languages(언어)',
                label: 'English',
                
                nav :[
                    { text: 'Home', link: '/'},
                    {
                        text: 'Learnt',
                        items: [
                            { text: 'VuePress', items:[
                                { text: 'VuePress', link: '/vuepress/'}
                            ]},
                            { text: 'Programing Languages', items :
                                [
                                    { text: 'HTML', link: '/languages/html/'},
                                    { text: 'Python', link: '/languages/python/'},
                                    { text: 'JS', link: '/languages/javaScript/'}
                                ]
                            },
                            { text: 'making', items:[
                                { text: 'arduino', link: '/making/arduino/'},
                                { text: 'processing', link: '/making/processing/'}
                            ]}
                        ]
                    },
                    {
                        text: 'Projects',
                        items: [
                            {text: 'making Gimbal', link: '/projects/gimabl/'},
                            {text: 'making DebitCard', link: '/projects/debit-card/'}
                        ]
                    },
                    {
                        text: 'Engineering',
                        items: [
                            {text: 'basic', link: '/engineering/basic/'}
                        ]
                    }
                ],
            }
        },
        plugins: ['@vuepress/back-to-top'],
    }
}