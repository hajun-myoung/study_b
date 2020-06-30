module.exports={
    base : '/study_b/',
    locales : {
        '/':{
            lang: 'ko-KR',
            title : "하준's 학습블로그",
            description : "Hajun's study-blog. WELCOME!"
        },
        '/eng/':{
            lang: 'en-US',
            title : "Hajun's study-blog",
            description : "하준's 학습블로그"
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
                                { text: '뷰프레스(VuePress)', link: '/src/vuepress/'}
                            ]},
                            { text: '프로그래밍 언어', items :
                                [
                                    { text: 'HTML', link: '/src/languages/html/'},
                                    { text: 'Python', link: '/src/languages/python/'},
                                    { text: 'JS', link: '/src/languages/javaScript/'}
                                ]
                            },
                            { text: '메이킹', items:[
                                { text: '아두이노', link: '/src/making/arduino/'},
                                { text: '프로세싱', link: '/src/making/processing/'}
                            ]}
                        ]
                    },
                    {
                        text: '프로젝트',
                        items: [
                            {text: '짐벌만들기', link: '/src/projects/gimabl/'},
                            {text: '체크카드 시스템 만들기', link: '/src/projects/debit-card/'}
                        ]
                    },
                    {
                        text: '엔지니어링',
                        items: [
                            {text: '기본', link: '/src/engineering/basic/'}
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
                                { text: 'VuePress', link: '/src/vuepress/'}
                            ]},
                            { text: 'Programing Languages', items :
                                [
                                    { text: 'HTML', link: '/src/languages/html/'},
                                    { text: 'Python', link: '/src/languages/python/'},
                                    { text: 'JS', link: '/src/languages/javaScript/'}
                                ]
                            },
                            { text: 'making', items:[
                                { text: 'arduino', link: '/src/making/arduino/'},
                                { text: 'processing', link: '/src/making/processing/'}
                            ]}
                        ]
                    },
                    {
                        text: 'Projects',
                        items: [
                            {text: 'making Gimbal', link: '/src/projects/gimabl/'},
                            {text: 'making DebitCard System', link: '/src/projects/debit-card/'}
                        ]
                    },
                    {
                        text: 'Engineering',
                        items: [
                            {text: 'basic', link: '/src/engineering/basic/'}
                        ]
                    }
                ],
            }
        },
        plugins: ['@vuepress/back-to-top'],
    }
}