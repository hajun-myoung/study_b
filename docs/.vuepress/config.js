module.exports = {
  base: "/study_b/",
  locales: {
    "/": {
      lang: "ko-KR",
      title: "하준's 학습블로그",
      description: "Hajun's study-blog. WELCOME!",
    },
    "/eng/": {
      lang: "en-US",
      title: "Hajun's study-blog",
      description: "하준's 학습블로그",
    },
  },

  plugins: [
    "@vuepress/back-to-top",

    [
      "@vuepress/google-analytics",
      {
        ga: "UA-175653340-1",
      },
    ],

    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: "",
      },
    ],

    [
      "vuepress-plugin-container",
      {
        type: "theorem",
        before: (info) => `<div class="theorem"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],

    [
      "vuepress-plugin-container",
      {
        type: "quiz",
        defaultTitle: "",
      },
    ],

    [
      "vuepress-plugin-sitemap",/* trying for working or not. */
      {
        hostname: 'https://hajunmyoung.github.io/study_b/',
        outFile: 'sitemap.xml',
        exclude: [
          '/404.html',
        ],
      }
    ],
  ],

  themeConfig: {
    smoothScroll: true,
    locales: {
      "/": {
        selectText: "언어(Languages)",
        label: "한국어",

        nav: [
          { text: "홈", link: "/" },
          {
            text: "공부한 것들",
            items: [
              {
                text: "블로그 셋팅",
                items: [
                  { text: "뷰프레스(VuePress)", link: "/src/vuepress/" },
                  { text: "구글(Google)", link: "/src/google/" },
                ],
              },
              {
                text: "프로그래밍 언어",
                items: [
                  { text: "C", link: "/src/languages/c/" },
                  { text: "Python", link: "/src/languages/python/" },
                  { text: "JS", link: "/src/languages/java_script/" },
                  { text: "HTML&CSS", link: "/src/languages/html_css/" },
                ],
              },
              {
                text: "메이킹",
                items: [
                  { text: "아두이노", link: "/src/making/arduino/" },
                  { text: "프로세싱", link: "/src/making/processing/" },
                ],
              },
            ],
          },
          {
            text: "프로젝트",
            items: [
              {
                text: "메이킹",
                items: [
                  {
                    text: "짐벌만들기",
                    link: "/src/projects/making/gimbal/"
                  },
                  {
                    text: "체크카드 시스템 만들기",
                    link: "/src/projects/making/debit-card/"
                  },
                  {
                    text: "배터리>유선 전환하기",
                    link: "/src/projects/making/battery_to_wired/"
                  }
                ]
              },
              {
                text: "클론코딩",
                items: [
                  {
                    text: "아직 준비중입니다.", link: "/"
                  }
                ]
              }
            ],
          },
          {
            text: "엔지니어링",
            items: [
              {
                text: "음향",
                items: [
                  {
                    text: "학습기록: 음향기본",
                    link: "/src/engineering/sound/basic/",
                  },
                ],
              },
            ],
          },
        ],
      },

      "/eng/": {
        selectText: "Languages(언어)",
        label: "English",

        nav: [
          { text: "Home", link: "/" },
          {
            text: "Learnt",
            items: [
              {
                text: "Setting blog",
                items: [
                  { text: "VuePress", link: "/src/vuepress/" },
                  { text: "Google", link: "/src/google/" },
                ],
              },
              {
                text: "Programing Languages",
                items: [
                  { text: "HTML&CSS", link: "/src/languages/html_css/" },
                  { text: "Python", link: "/src/languages/python/" },
                  { text: "JS", link: "/src/languages/java_script/" },
                ],
              },
              {
                text: "Making",
                items: [
                  { text: "Arduino", link: "/src/making/arduino/" },
                  { text: "Processing", link: "/src/making/processing/" },
                ],
              },
            ],
          },
          {
            text: "Projects",
            items: [
              { text: "making Gimbal", link: "/src/projects/making/gimabl/" },
              {
                text: "making DebitCard System",
                link: "/src/projects/making/debit-card/",
              },
              { text: "Battery to Wired", link: "/src/projects/making/battery_to_wired/" }
            ],
          },
          {
            text: "Engineering",
            items: [
              {
                text: "Sound",
                items: [
                  {
                    text: "learning Log: Basic of Sound",
                    link: "/src/engineering/sound/basic/",
                  },
                ],
              },
            ],
          },
        ],
      },
    },

    displayAllHeaders: false,

    sidebar: {
      "/guide/": ["", "direction.md", "updateLog.md"],

      "/src/vuepress/": ["", "ready_for_blog.md", "guideTransl.md", "rfv_errors.md", "plugins.md"],

      "/src/google/": ["", "analytics.md", "search_console.md"],

      "/src/engineering/sound/basic/": ["", "lecture01.md"],

      "/src/languages/c/": ["", "01_dataType.md"],

      "/src/languages/python/": [""],

      "/src/languages/html_css/": ["", "01_basicStructure.md", "02_basicTags.md", "namedColors.md", 'htmlFonts.md'],

      "/src/languages/java_script/": [""],

      "/src/making/arduino/": [""],

      "/src/making/processing/": [""],

      "/src/projects/making/debit-card/": ["", "v2_0_0.md", "v1_1_0.md", "v1_0_0.md"],

      "/src/projects/making/gimbal/": ["", "v1_0_0.md"],

      "/src/projects/making/battery_to_wired/": ["", "v1_0_0.md"]
    },
  },
};
