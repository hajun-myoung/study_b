---
sidebarDepth: 3
---

# 비공식적으로 번역된 공식가이드

:::warning 이 문서 및 내용의 저작권은 제게 있지 않습니다 :)
이 카테고리에 해당하는 문서들, 내용들은 모두 [뷰프레스 공식 가이드](https://vuepress.vuejs.org/guide/)로부터 왔습니다.  
당연히 모든 내용의 저작권은 제게 있지 않고 VuePress의 프레젠터, Evan You에게 있습니다.  
:::tip 예외
제가 따로 드는 예시 코드 및 추가 설명에 대한 저작권은 제게 있습니다.  
이것들은 해당 코드나 설명(박스)에 제가 작성한 것임을 표시해 놓을 것입니다.  
from.Hajun과 같은 방식으로요ㅎㅎ
:::

:::danger 오류를 발견하셨나요?
audgkwns44@gmail.com 으로 연락주세요.  
'[오류발견][뷰프레스]'를 메일 제목 앞에 넣어주시면 감사하겠습니다.
:::

> 아래 내용을 읽다보면 이 문단처럼 주석처리된 것들을 찾을 수 있을겁니다. 이것들은 '뷰프레스 공식 가이드'에서 유래된 것은 맞지만, 난이도가 비교적 높은 설명들을 구분하기 위한 겁니다.  
> 본질적인 이해를 위해서는 필요한 내용이지만, 당장 몰라도 뷰프레스를 이해하고 쓰는 데에는 문제가 없는 것들입니다.

## 소개
뷰프레스는 *아주 심플한 정적인 사이트 생성 도구* 와 *뷰-중심의 테마적용 시스템* , 그리고 *플러그인 API* 로 구성되어 있습니다. 뷰프레스의 기본 테마는 기술 문서를 만드는 데 최적화되어 있죠. 사실, 뷰프레스는 '뷰'의 서브 프로젝트에 필요한 문서 작성을 돕기 위해 만들어진 도구입니다 :smiley:  
  
뷰프레스에 의해 생성된 각 페이지들은 그것들만을 위해 미리 렌더링된 HTML 파일을 가지고 있기 때문에 굉장한 로딩 퍼포먼스를 보여줍니다. 또한, 이 페이지들은 검색 엔진에 최적화되어 있죠.
> 아직까지는, 한번 페이지가 로딩되면, 뷰는 정적인 콘텐츠(내용)들을 모두 가져와서 하나의 싱글-페이지 어플리케이션(SPA)로 바꿔버립니다. 나머지 페이지들은 사용자가 사이트를 탐색하고자 할 때 불러오죠.

### 어떻게 동작하나요?
***
> 뷰프레스 사이트는 사실 *[뷰(Vue),](https://vuejs.org/) [뷰 루터(Vue Router)](https://github.com/vuejs/vue-router) 그리고 [웹팩(webpack)](https://webpack.js.org/)* 으로 작동되는 SPA입니다.  

만약 당신이 이전에 '뷰'를 써 본 경험이 있다면, 당신만의 커스텀 테마를 개발할 때 익숙함을 느끼실 수 있을겁니다. (심지어, 뷰의 개발 도구들은 당신의 커스텀 테마를 디버깅하기 위해 쓸 수도 있습니다!)  
  
페이지를 빌드하는 동안, 우리는 서버 단위로 렌더링 된 앱을 만들고, 같은 HTML을 가상으로 방문함을써 렌더링합니다. 이러한 접근은 [Nuxt](https://nuxtjs.org/)의 nuxt 생성 명령어와 [Gatsby](https://www.gatsbyjs.org/)와 같은 다른 프로젝트들로부터 영감을 받았습니다.  
  
각각의 마크다운 파일은 'markdown-it'을 통해서 HTML로 컴파일되고, 뷰-컴포넌트의 템플릿을 거쳐 처리됩니다. 이것이 당신으로 하여금 마크다운 파일들 안에 *뷰* 를 직접적으로 사용할 수 있도록 해 주고, 동적인 컨텐츠들을 만들고자 할 때 그 가치를 보여줍니다.(이 방식이 동적 컨텐츠를 만들고자 함에 대해 굉장히 효율적입니다.)  

### 특징들
***
아직 번역되지 않았다고 기록된 특징 링크들은 공식 사이트(영문)로 연결됩니다.  

**내장 마크다운 확장** 
- [여러 내용을 담는 표 *(미번역)*](https://vuepress.vuejs.org/guide/markdown.html#table-of-contents)
- [커스텀 컨테이너 *(미번역)*](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)
- [라인(코드) 하이라이트 *(미번역)*](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)
- [라인(코드) 넘버링 *(미번역)*](https://vuepress.vuejs.org/guide/markdown.html#line-numbers)
- [코드 조각(Smippets) 임포팅 *(미번역)*](https://vuepress.vuejs.org/guide/markdown.html#import-code-snippets)

**마크다운에서 뷰의 사용**
- [템플레이팅 *(미번역)*](https://vuepress.vuejs.org/guide/using-vue.html#templating)
- [컴포넌트들의 사용 *(미번역)*](https://vuepress.vuejs.org/guide/using-vue.html#using-components)

**뷰로 구현되는 커스텀 테마들**
- [메타데이터 *(미번역)*](https://vuepress.vuejs.org/theme/writing-a-theme.html#site-and-page-metadata)
- [내용 발췌 *(미번역)*](https://vuepress.vuejs.org/theme/writing-a-theme.html#content-excerpt)

**기본 테마**
- 반응하는 레이아웃
- [옵션 홈페이지 *(미번역)*](https://vuepress.vuejs.org/theme/default-theme-config.html#homepage)
- [간단한 out-of-the-box 헤더기반 검색기 *(미번역)*](https://vuepress.vuejs.org/theme/default-theme-config.html#built-in-search)
:::tip out-of-the-box? 상자 밖이요?
out-of-the-box는, 별도의 설치 없이 사용할 수 있는 걸 의미하는 컴퓨터 용어에요.
:::
- [Algolia 검색 *(미번역)*](https://vuepress.vuejs.org/theme/default-theme-config.html#algolia-search)
- 커스터마이징 가능한 [네비게이션 바](https://vuepress.vuejs.org/theme/default-theme-config.html#navbar)와 [사이드바](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar) *(미번역)*
- [자동생성되는 깃허브 링크와 페이지, 페이지 링크의 수정 *(미번역)*](https://vuepress.vuejs.org/theme/default-theme-config.html#git-repo-and-edit-links)
- [PWA: 컨텐츠를 새로고침하기 위한 팝업 UI *(미번역)*](https://vuepress.vuejs.org/theme/default-theme-config.html#popup-ui-to-refresh-contents)
- [마지막 업데이트 *(미번역)*](https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated)
- [다중언어 지원하기 *(미번역)*](https://vuepress.vuejs.org/guide/i18n.html)

**블로그 테마**
- [문서 *(미번역)*](https://vuepress-theme-blog.ulivz.com/)
- [라이브 예시 *(미번역)*](https://ulivz.com/)

**플러그인**
- [강력한 플러그인 API *(미번역)*](https://vuepress.vuejs.org/plugin/)
- [블로그 플러그인 *(미번역)*](https://vuepress-plugin-blog.ulivz.com/)
- [검색 플러그인 *(미번역)*](https://vuepress.vuejs.org/plugin/official/plugin-search.html)
- [PWA 플러그인 *(미번역)*](https://vuepress.vuejs.org/plugin/official/plugin-pwa.html)
- [구글 분석 플러그인 *(미번역)*](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)
- ...

### 왜 ...보다 뷰프레스가 더 좋나요?
***
**Nuxt**  
Nuxt는 뷰프레스가 하는 것을 동일하게 수행할 수 있지만, 애플리케이션 빌딩(구현)을 위해 설계되었어요. 뷰프레스는 컨텐츠-중심의 정적인 사이트에 집중하였고, out-of-the-box하고 기술 문서에 딱 알맞은 특징들을 제공해요.  
  
**Docsify / Docute**  
이 두가지는 모두 굉장히 좋고, '뷰로 돌아가는' 프로젝트들이에요. 하지만, 두 가지 프로젝트 모두 완전히 runtime-driven하기 때문에, 검색에 친화적이지 않아요. 만약 당신이 검색 기능을 구현하는 데 관심이 없고, 의존성 설치(installing dependencies)가 엉망으로 되는 것에 게의치 않는다면, Docsify나 Docute도 괜찮은 선택지가 될 거에요.  
  
**Hexo**  
Hexo는 뷰 문서들을 잘 제공하고 있어요 - 사실, 우리의 메인 사이트를 이 Hexo로 부터 동떨어지게 하기 위해서는 많은 시간이 필요할거에요. 가장 큰 문제는, Hexo의 테마 시스템이 정적이고, 문자열-기반이라는 거죠. - 우리는 뷰를 사용함으로써 레이아웃에 대한 것과 상호작용에 대한 이점을 둘 다 챙기고 싶어요. 더불어서, Hexo의 마크다운 렌더링은 구성하는 데 있어서 유연하지 못해요.  
  
**GitBook**  
우리는 대부분의 서브 프로젝트 문서에서 GitBook를 사용해왔어요. 첫 번째 문제는, GitBook은 엄청난 양의 파일들 때문에 개발(`yarn dev`와 같은 가설 테스팅을 의미)과정에서 참을 수 없을 만큼 느린 속도를 보여줘요. 게다가 기본 테마가 제공하는 네비게이션 구조는 상당히 제한적이구요, 테마 시스템 역시 그래요(제한적이에요), 하나만 더 꼽자면, 뷰-기반이 아니에요. GitBook을 운영하는 팀은 오픈-소스 도구로서의 개발보다 상업화에 더 초점을 두고 있어요.