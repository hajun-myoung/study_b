---
sidebarDepth: 2
---

# 구글 서치 콘솔 (Search Console)

구글 서치 콘솔은, 구글 애널리틱스와 비슷하지만 분명히 다른 서비스에요. 구글 애널리틱스가 사이트의 분석을 도와주는 도구였다면, 이녀석은 검색 결과에 내 사이트를 노출시키고, 구글 검색에 대해서 발생하는 오류에 대처할 수 있게끔 해주는 도구에요.

## 왜 사용하게 됐나요?

제 블로그를 구글 검색에 노출시키고 싶어서 사용하게 되었어요. 순탄치 않은 과정이었지만, 다 해놓고 보니 그렇게 어려운 일도 아니었죠. 거두절미하고, 본격적인 내용으로 들어가봅시다! 

## 본격적인 사용
구글 서치 콘솔에 본인의 사이트를 등록하기 위한 절차는 다음과 같아요.

1. 구글 서치 콘솔에 본인의 사이트를 등록하고, 소유권을 증명
1. (선택, 권장)사이트맵의 생성 및 등록

구글 애널리틱스에 이어, 다시 돌아온 소유권 증명의 시간이에요. *많은 시행착오*를 겪었지만, 핵심만 정리해서 알려드릴게요...:pensive:

### 1.구글 서치 콘솔에 사이트 등록

자 먼저, [구글 서치 콘솔](https://search.google.com/search-console/welcome)에 접속합니다. 여기서, 여러분이 검색엔진(구글 검색엔진)에 노출시키고 싶은 블로그의 주소를 등록할텐데요, 오른쪽 'URL 접두어'를 선택해주세요. (깃허브를 통해 블로그를 디플로잉하고 있다면 여기가 맞아요.)
![search_console_guide_001](./gsc_001.png)

> 도메인을 선택하고 여러분의 블로그 주소를 넣게 되면, '계속' 버튼이 비활성화 될 거에요.
> :::details 블로그는 '도메인'방식으로 서치 콘솔을 이용할 수 없나요?
> '도메인'방식은, 말 그대로 여러분이 소유한 도메인( _.com, _.co.kr 등)을 인증하고 사용하기 위한 서비스에요. 깃허브 등을 통해 디플로잉하고 있는 주소는, URL이지 도메인이 아니거든요. 만약 도메인 인증을 하고싶다면 도메인을 구매하셔서, 등록하셔야 해요.
> :::

자 이제, URL 접두어의 URL 란에 여러분의 블로그 주소를 적어주세요.  
제 경우에는 **https://hajunmyoung.github.io/study_b/** 였어요.

### 2.소유권 증명

URL을 치고, 계속하고자 하면 '소유권 증명'이 필요하다고 할거에요. 내 사이트에 대한 소유권을 증명하기 위한 방법은 크게 5가지가 있어요.

1. 특정 HTML 파일을 웹사이트 루트 위치에 업로드
1. 메타태그(HTML 태그)를 각 페이지 헤드 섹션에 삽입
1. 구글 애널리틱스 계정 사용
1. 구글 태그 관리자 사용
1. DNS 레코드와 구글 연결

하나씩 살펴볼게요.

---

### 2.1 (비추천)특정 HTML 파일의 업로드

저는 개인적으로, _이 방식을 선호하지 않아요._ 우리는 뷰프레스로 블로그에 필요한 요소들을 개발하거나 코딩하죠. `yarn build` 등을 통해 페이지를 build하고 deploying 하게 되구요. 그리고 deploying된 페이지는 어디에 있나요? 맞아요, 여러분이 뷰프레스 공식 가이드를 잘 따라서 했다면 대부분 블로그를 위한 레포지토리의 'gh-pages'라는 브랜치를 호스팅하고 있을거에요.

그 위치에 특정 HTML 파일을 포함시키기는 건 두 가지 방법으로 가능해요.

1. 매번 페이지를 deploying할 때 마다 직접 gh-pages 브랜치에 해당 파일을 업로드하는 방법
1. 빌드할 때 자동으로 해당 파일을 포함하여 빌드하도록 지시하는 방법

> 이 중, 1번은 누가봐도 상당히 비효율적이니까 넘어갈게요.

2번은 꽤 괜찮아보이죠? 저도 그렇게 생각해요. 그래서 이것저것 찾고 공부해보았지만...  
결국 실패했답니다.

---

### 2.2 (추천)메타 태그의 삽입 또는 구글 애널리틱스와의 연동

어, 두 개는 서로 다른 방법인데 왜 한번에 소개하냐구요? 왜겠어요...애널리틱스와의 연동이 훨씬 개꿀일 것 같아서 해봤는데...똑같아서죠...ㅎ...:rofl:

자, 이 방법을 사용하려면 반드시 `dev.html`과 `ssr.html` 파일을 조금이라도 다룰 줄 알아야 해요. 진짜 <u>조금만</u> 다룰 줄 알면 돼요! 몰라도 밑에 다 설명되어 있으니까, 따라오기만 하세요.

먼저, 두 개의 파일은 [뷰프레스 공식 가이드: 디렉토리 구조](https://vuepress.vuejs.org/guide/directory-structure.html#directory-structure)에 따르면, `/docs/.vuepress/templates/`에 있는 파일이에요. 해당 가이드를 참고해보면, 선택 사항인 파일(optional)이지만, 주의가 필요한 파일(danger)이기도 하죠. 그도 그럴게, 저거 따라서 해당 파일을 생성만 해 놓잖아요? 페이지가 아무것도 dev되지 않고, build되지 않아요ㅋㅋㅋㅋ

> 네..경험담이에요

정확히 말하면, `dev.html`파일은 `yarn dev`와 같이 페이지를 dev할 때 아무것도 안 나오게 만들고, `ssr.html`파일은 페이지 빌드를 아무것도 안 나오게끔 만들어요. 왜냐하면, 이들은 디렉토리 구조에서 유추할 수 있듯이 '템플릿'을 제공하는 파일이거든요. 그런데 해당 이름에 아무것도 들어있지 않은 파일을 만들었다는 건 '아무것도 없는 템플릿'을 제공한 것과 마찬가지여서, '아무것도 하지 말라'는 소리로 해석되기 때문이에요.

#### dev.html과 ssr.html파일을 '제대로' 만드는 방법

이 두 파일을 컨트롤하는 건 생각보다 간단하고, 친절하게 설명되어 있어요. 공식 가이드에는 포함되어있지 않지만, 연결되는 'Theme' 추가 내용 중 ['Theme Configuration'항목](https://vuepress.vuejs.org/theme/option-api.html#devtemplate)에서 확인할 수 있죠.  
해당 가이드에서 안내해주는 `dev.html`과 `ssr.html`의 예시 코드는 다음과 같아요:

[dev.html 예시 코드](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html)
```html
<!-- an example of dev.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title></title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

[ssr.html 예시 코드](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.ssr.html)
```html
<!-- an example of ssr.html -->
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>{{ title }}</title>
    <meta name="generator" content="VuePress {{ version }}" />
    {{{ userHeadTags }}} 
    {{{ pageMeta }}}
    {{{ renderResourceHints() }}}
    {{{ renderStyles() }}}
  </head>
  <body>
    <!--vue-ssr-outlet-->
    {{{ renderScripts() }}}
  </body>
</html>
```

이제, 이 예시 코드들을 기본으로 템플릿으로 제공하고자 하는 코드를 추가하면 돼요.

### 3. (적용)dev.html과 ssr.html을 이용한 비동기 추적 코드 삽입
저는 구글 애널리틱스와의 동기를 선택했기 때문에, \<gtag.js>가 들어가야 했어요. 해당 코드는:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-000000000-0"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-000000000-0'); /* 추적 코드는 가렸어요. */
    </script>
```
에요. 만일 여러분이 저와 같이 구글 애널리틱스와 연결하여 비동기 추적 코드를 삽입하려 하신다면 거의 똑같이 생긴(UA-000000000-0 부분은 개인별로 제공되는 코드니까 거기만 다르겠죠?) 추적 코드를 할당받으실 수 있을거에요.  

**이제 이 추적코드를 dev.html에 다음과 같이 삽입하면**  
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title></title>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-000000000-0"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-000000000-0');
        </script>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```
페이지를 `dev`할 때마다, 모든 페이지 헤드 섹션에 해당 추적 코드가 삽입되어 있는 걸 볼 수 있어요.  
 
마찬가지로 **ssr.html에 다음과 같이 삽입하면:**
```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ title }}</title>
    <meta name="generator" content="VuePress {{ version }}">
    {{{ userHeadTags }}}
    {{{ pageMeta }}}
    {{{ renderResourceHints() }}}
    {{{ renderStyles() }}}
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-000000000-0"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-000000000-0');
    </script>
  </head>
  <body>
    <!--vue-ssr-outlet-->
    {{{ renderScripts() }}}
  </body>
</html>
```
이번에는 빌드하는 페이지의 각 헤드 섹션에 넣을 수 있구요.  
빌드하는 페이지에 들어갔다는 건, deploying할 때 적용된다는 의미이기 때문에, 앞으로 여러분의 블로그가 서치 콘솔로부터 소유권 증명이 문제없이(지속적으로) 작동한다는 의미이기도 해요.
> 생각해보니까, 추적 코드를 예시 코드들에서 왜 가렸죠? 어차피 F12누르면 바로 보일텐데 말이에요.
>> 흠, 여러분의 코드 가독성을 위해 그랬다고 생각해주세요! :smiley:

### 4. (필수)색인 생성하기
마지막으로, 색인을 생성하고 사이트맵을 제출할 시간이에요. 이건 필수니까 따라오셔야 해요.  
색인의 생성은 다음과 같은 방법으로 가능해요.

1. 먼저, URL 검사를 실행해주세요.
![url검사](./gsc_002.png)
1. 블로그 주소를 그대로 입력하세요.(루트 주소요!)
![블로그주소](./gsc_003.png)
1. 아마, 색인이 생성되어있지 않을거에요. 요청하세요.
![요청](./gsc_004.png)

여기까지 하시면, 기본적으로 여러분의 블로그가 구글 검색에 노출되기 시작해요. 저는 사이트맵 제출을 권장하긴 하지만, ***우선은 구글 검색에 사이트 노출시키기에 성공하셨습니다!***

### 4.1 (권장)사이트맵 제출하기
이미 검색을 통해 블로그가 노출되겠지만(구글에서는), 사이트맵을 제출하는 것이 조금이나마 검색 및 유입에 도움을 준다고 해요. 제 블로그는 색인을 생성한 후, 서치 콘솔의 URL 검사 도구를 활용해보니 **색인이 생성되었으나 사이트맵에 제출되지 않음** 라고 뜨더라구요. 이에 대해 구글 가이드는, **Google에서 URL을 찾아 색인을 생성했습니다. 사이트맵을 사용하여 중요한 모든 URL을 제출하는 것이 좋습니다.** 라고 하더라구요. 

#### 사이트맵과 xml에 대해서
사이트맵은, 간단하게 내 블로그를 이루는 페이지들의 링크(주소), 비디오, 이미지들과 다른 형식의 파일들에 대한 정보를 제공해주는 '파일'이에요. 이러한 사이트맵을 작성하는 방법은 여러 가지가 있죠. 구글 가이드([한글](https://support.google.com/webmasters/answer/183668?hl=ko&ref_topic=4581190), [영어](https://support.google.com/webmasters/answer/183668?hl=en&ref_topic=4581190))에서는 크게 4가지 방법을 말하고 있어요.

1. xml 형식 파일
1. RSS, mRSS, Atom 1.0의 사용
1. 단순한 txt 파일
1. 구글 사이트 도구의 사용

이들 중, 이번에 알아볼 것은 **xml**을 이용한 사이트맵의 작성이에요.

**xml**은, '(X)확장 가능한 (M)마크업 (L)랭귀지'로, 이름 그대로 얼마든지 확장할 수 있는 마크업 언어에요. html과 똑같은 마크업 언어라는 점에서 어떤 형태로 생겼는지 유추가 가지 않나요? 맞아요, 태그와 태그에 들어가는 내용들로 이루어진 파일을 보게 될 거에요. 그럼, '확장 가능하다'는 말은 무슨 말일까요? 바로, '사용자 지정 태그'를 얼마든지 만들고, 쓸 수 있다는 거에요.

:::warning 매력적이긴 한데... 어떻게 사용자 지정 태그를 얼마든지 쓸 수 있나요?
아마 여러분이 궁금한 본질적인 의문은 '내가 방금 만든 태그가 뭘 의미하는지 컴퓨터가 아직 모를텐데, 어떻게 내가 원하는데로 동작하지?' 일 거에요.  
맞아요, 여러분이 바로 만든 태그는 여러분을 제외하고는 아무도 모르겠죠. 조금만 기다려 보세요, xml이 언제 쓰이는지를 알면 자연스럽게 풀릴 의문이에요.
:::

xml은 html과 달리 '사용하기 위한 특정 도구'가 지정되어있지 않아요. html의 경우 문서를 기술하고, 웹사이트를 만들기 위한 언어인 만큼 '도구'의 역할을 '브라우저'가 수행하죠. 하지만, xml은 xml파일을 이해하고 수행해주기 위한 도구가 없어요. 즉, 여러분의 xml파일은 그 어떤 상용 도구들도 '가시화'해 줄 수도, '이해'해 줄 수도 없는 거죠. 이게, **여러분이 만든 사용자 지정 태그에 제약이 없는 이유**에요. 그 '사용자 지정 태그'를 이해할 무언가조차 사용자가 만들도록 하는거죠.

즉, **사이트맵을 xml파일로 제출한다**라는 건, 구글이 이미 '사이트맵을 위한 xml표준을 만들어 놓았다.'는 말이에요. '우리가 사이트맵을 어떻게 이해할 지 표준을 제공해줄게, .xml 파일로 그 표준에 맞게 사이트맵을 그려줘. 그럼 우리의 검색 알고리즘이 네 사이트를 크롤하고(긁고), 파악하고, 연결하는 데 도움을 줄거야.' 라는거죠. 이제 좀 xml, 그리고 사이트맵과 친근해 지셨나요? 그러길 바라요 :smiley:

### 4.2 (적용)Sitemap 생성 및 제출
개념을 다 이해하셨다면, 김빠지게도 Sitemap을 생성하는 것, 블로그에 포함시키는 것, 제출하는 것은 말도 안 되게 쉬워요.

#### 생성
생성은, 플러그인을 통해 해결할 거에요. 이번에 쓸 플러그인은 `@vuepress-plugin-sitemap` 이랍니다. 해당 플러그인의 사용 및 적용방법은 [플러그인 문서](../vuepress/plugins.html#sitemap-%EC%83%9D%EC%84%B1%EA%B8%B0)를 참고해주세요.

#### 제출
제출은 구글 서치 콘솔에서, 사이트맵 주소를 입력하면 돼요. 플러그인을 이용하셨다면 베이스루트 주소에 'sitemap.xml'로 사이트맵이 저장되고 deploying될 거에요. 따라서,
![Sitemap 제출페이지](./gsc_005.png)
의 빈칸에, sitemap.xml만 입력하고 제출하면 돼요!