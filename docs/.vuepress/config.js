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
                                    { text: 'C', link: '/src/languages/c/'},
                                    { text: 'Python', link: '/src/languages/python/'},
                                    { text: 'JS', link: '/src/languages/java_script/'},
                                    { text: 'HTML +α', link: '/src/languages/html/'},
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
                            {text: '짐벌만들기', link: '/src/projects/gimbal/'},
                            {text: '체크카드 시스템 만들기', link: '/src/projects/debit-card/'}
                        ]
                    },
                    {
                        text: '엔지니어링',
                        items: [
                            {text: '음향', items:[
                                {text: '학습기록: 음향기본', link: '/src/engineering/sound/basic/'},
                            ]}
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
                                    { text: 'HTML +α', link: '/src/languages/html/'},
                                    { text: 'Python', link: '/src/languages/python/'},
                                    { text: 'JS', link: '/src/languages/java_script/'}
                                ]
                            },
                            { text: 'Making', items:[
                                { text: 'Arduino', link: '/src/making/arduino/'},
                                { text: 'Processing', link: '/src/making/processing/'}
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
                            {text: 'Sound', items:[
                                {text: 'learning Log: Basic of Sound', link: '/src/engineering/sound/basic/'},
                            ]}
                        ]
                    }
                ],
            }
        },

        plugins: [
            [
                '@vuepress/back-to-top'
            ],
            [
                '@vuepress/google-analytics',
                {
                    'ga': 'UA-175653340-1'
                }
            ]
        ],

        displayAllHeaders: false,

        sidebar:{
            '/guide/':[
                '',
                'direction.md',
                'updateLog.md'
            ],
            
            '/src/vuepress/':[
                '',
                'ready_for_blog.md',
                'guideTransl.md',
                'rfv_errors.md',
            ],

            '/src/engineering/sound/basic/':[
                '',
                'lecture01.md'
            ],

            '/src/languages/c/':[
                '',
            ],

            '/src/languages/python/':[
                '',
            ],

            '/src/languages/html/':[
                '',
            ],

            '/src/languages/java_script/':[
                '',
            ],
            
            '/src/making/arduino/':[
                '',
            ],
            
            '/src/making/processing/':[
                '',
            ],

            '/src/projects/debit-card/':[
                '',
                'v2_0_0.md',
                'v1_1_0.md',
                'v1_0_0.md'
            ],

            '/src/projects/gimbal/':[
                '',
                'v1_0_0.md'
            ],
        }
    },
}