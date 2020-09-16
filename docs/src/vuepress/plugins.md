# 설치한 플러그인들 +etc

제 블로그를 꾸미고 구성하기 위해 설치한 플러그인들은 아래와 같아요. 유용한 플러그인이 있다면 얼마든지 참고하세요!  
(etc를 붙인 이유는, 플러그인이 아닌 테마 수정에 관한 내용도 여기 적으려고 해서 그래요.)

## `[Official Plugin]` back-to-top

문자그대로, 페이지 꼭대기로 돌아가는 버튼을 우하단에 만들어주는 플러그인이에요.  
일정 이상 스크롤해야 나타나고, 뷰프레스 공식 플러그인 중 하나랍니다.

공식 가이드는 [여기서](https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html#vuepress-plugin-back-to-top) 확인하세요.

### 설치

설치는 쉘에서, `npm`이나 `yarn`을 사용해서 가능합니다. 제 경우 `yarn`을 통해서 작업했어요.  
다만 이 작업을 할 때, 적용하고자 하는 폴더에서 실행하셔야 한다는 건 잊지 마시기 바랍니다.

> 제 경우 플러그인을 설치할 때에는 항상 C:/.../study_b/ 에서 실행해요.

```sh
$ yarn add -D @vuepress/plugin-back-to-top
# npm을 사용하신다면: npm install -D @vuepress/plugin-back-to-top
```

### 적용

적용은 `config.js` 파일에서 활성화만 시켜주시면 돼요.

```js
module.exports = {
  plugins: ["@vuepress/back-to-top"],
};
```

## `[Official Plugin]` Google Analytics

역시 공식 플러그인이구요, 구글 애널리틱스와의 연동을 쉽게 해 주는 플러그인입니다. 구글 애널리틱스에서 제공하는 UA-0000000-0 형태의 추적 코드 삽입을 쉽게 하는 역할을 수행하죠. [여기서](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html#vuepress-plugin-google-analytics) 공식 가이드를 볼 수 있습니다!

### 설치

```sh
$ yarn add -D @vuepress/plugin-google-analytics
# npm을 사용하신다면: npm install -D @vuepress/plugin-google-analytics
```

### 적용

`config.js`파일을 수정해주세요.

```js{3-8}
module.exports = {
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "", // UA-00000000-0
      },
    ],
  ],
};
```

'ga' 값이 밑에 따라오기 때문에, 대괄호[ ]로 묶어주셔야 해요.  
{ }안의 값 입력 예시는 아래와 같습니다:

```js
[
  "@vuepress/google-analytics",
  {
    ga: "UA-00000000-0",
  },
];
```

## Container

컨테이너의 스타일을 블로그 사용자가 직접 지정하고, 생성하고, 변경할 수 있게해 주는 플러그인이에요.  
기존에는
:::tip tip 컨테이너
내용
:::
:::warning warning 컨테이너
내용
:::
:::danger danger 컨테이너
내용
:::

이렇게 세 종류만 있었지만, 이 플러그인을 통해 전혀 다른 컨테이너를 만들 수 있답니다.
:::theorem 신규 theorem 컨테이너에요.
내용
:::right
출처표기를 위한 오른쪽 정렬 컨테이너에요
:::

### 설치

[공식 가이드](https://vuepress.github.io/en/plugins/container/#vuepress-plugin-container)에는 `npm`을 쓰라고 되어있어요. 하지만, `yarn`으로 해도 문제가 없답니다. (제가 해 봤는데 되더라구요.)

```sh
$ yarn add -D vuepress-plugin-container
# npm을 사용하신다면: npm install -D vuepress-plugin-container
```

### 적용

다른 플러그인에 비해 적용이 조금 세부적이에요.  
먼저, `config.js`를 수정할게요.

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-container",
      {
        자료형: "right",
        기본값Title: "",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        자료형: "theorem",
        before: (info) => `<div class="theorem"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
  ],
};
```

위 코드를 보면 알겠지만, 컨테이너 플러그인은 "추가하고 싶은 컨테이너 종류"마다 하나씩 플러그인 요소로 선언을 해 줘야 합니다. 기존에 있었던 한번 적용하고 끝나는 플러그인들과는 조금 다르죠.  
**이 경우, 상술한 theorem 컨테이너와 right 컨테이너를 새로 만드는 과정이에요.**

두 번째 단계로, **.vuepress/** 에 새로운 폴더 `styles`를 만들고, 그 안에 파일 `index.styl`을 만들어주세요. 즉, 이 밑에 따라오는 코드는 `.vuepress/styles/index.styl`에서 이루어지는 겁니다.

```stylus
.theorem
  margin 1rem 0
  padding .1rem 1.5rem
  border-radius 0.4rem
  background-color #f0f4f8
  .title
    font-weight bold

.custom-block
  &.right
    color transparentify($textColor, 0.4)
    font-size 0.9rem
    text-align right
```

여기까지 하면, **theorem 및 right 컨테이너가 성공적으로 생성**되었습니다. 이제,

```md
:::theorem 신규 theorem 컨테이너에요.
내용
:::right
출처표기를 위한 오른쪽 정렬 컨테이너에요
:::
```

과 같이 사용하면 돼요.

> 공식 가이드와 달리, 저는 닫는 ':::'를 한 번만 해야 깔끔하게 닫히네요.  
> ':::'를 두 번 하면 컨테이너 밑에 :::가 텍스트로 노출돼요.

## `Theme Config` 부드러운 스크롤링

이번에 적용한 건, 플러그인은 아니에요.  
블로그 내부 페이지에서 페이지로의 이동 / 한 게시물 내에서 다른 헤더로 이동할 때, 그 과정에서 생기는 스크롤링을 부드럽게 처리해주는 테마(Theme)를 적용했어요. 적용 방법은 Theme Config인 것 만큼 아주 쉽답니다. :)

### 적용

```js
module.exports = {
  themeConfig: {
    smoothScroll: true,
    //...other theme settings
  },
};
```

네, 끝이에요!

## Sitemap 생성기
sitemap.xml을 생성하고, 블로그에 포함시키는 것을 자동화해주는 플러그인이에요.

### 설치

[가이드는 여기에요](https://www.npmjs.com/package/vuepress-plugin-sitemap).
```sh
$ yarn add -D vuepress-plugin-sitemap
# npm install -D vuepress-plugin-sitemap
```

### 적용
```js
module.exports = {
  plugins : [
    [
      "vuepress-plugin-sitemap",
      {
        hostname: 'https://hajunmyoung.github.io/study_b/',
        outFile: 'sitemap.xml',
        exclude: [
          '/404.html',
        ],
      }
    ]
  ]
}
```
:::details 선택할 수 있는 옵션들은 다음과 같아요.
- hostname:  
  - 자료형: string  
  - 필요여부: 필수로 선언해야 해요.  
  - 기본값: null  
  - 설명: 웹사이트의 루트 URL이 들어가요.  
  - 예시: https://pake.web.id  
 
- outFile:  
  - 자료형: string  
  - 필요여부: 필수가 아니에요.  
  - 기본값: sitemap.xml  
  - 설명: sitemap 파일의 이름을 넣으면 돼요.(확장자 포함)  
  - 예시: sitemap.txt  
 
- urls:  
  - 자료형: array  
  - 필요여부: 필수가 아니에요.  
  - 기본값: [],  
  - 설명: 특정 url에 추가하고 싶은 것들을 추가할 수 있어요.  
  - 예시: [{ url: '/place', changefreq: 'montly'}]  
 
- exclude:  
  - 자료형: array  
  - 필요여부: 필수가 아니에요.(권장)  
  - 기본값: [],  
  - 설명: sitemap에 포함하고 싶지 않은 url을 설정해요.  
  - 예시: ['/404.html']  
 
- dateFormatter:  
  - 자료형: function  
  - 필요여부: 필수가 아니에요.  
  - 설명: 데이터 형식을 바꿔요.  
  - 기본값: time => new Date(time).toISOString()  
:::