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
    plugins: [
        '@vuepress/back-to-top'
    ]
}
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
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ]
  ]
}
```
'ga' 값이 밑에 따라오기 때문에, 대괄호[ ]로 묶어주셔야 해요.  
{ }안의 값 입력 예시는 아래와 같습니다:
```js
[
    '@vuepress/google-analytics',{
        'ga' : 'UA-00000000-0'
    }
]
```