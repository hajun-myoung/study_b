# 02. 기본적인 태그들
HTML을 다루기위해 '태그를 외우는 것'은 옳지 않다고 말했지만, *그럼에도 불구하고,* 정말 너무 기본적이어서 HTML을 다루는 사람들이라면 당연히 알아보는 태그들이 있어요. 이런 쉬운 태그들을 먼저 만나는 게 HTML을 시작하기에도 좋으니, 몇 개 소개할게요.

## `<hn>` 헤더 태그들
`<hn>`에서 n 자리에는 1~6까지의 숫자들이 들어가요. 숫자가 <u>커질수록</u> 헤더(제목)의 크기는 <u>작아</u>진답니다! 서로 반대라고 생각하기보다는, '1번째 제목', '2번째 제목'과 같이 생각하는 게 조금 더 도움될거에요. `<h1>`으로 감싸진 제목은 첫 번째 수준의 제목이니, 가장 크다는 느낌으로 알아두는 거죠.  
  
예시: [페이지로 보기](https://hajunmyoung.github.io/study_b/src/languages/html_css/examples/02_001.html)
```html
<!DOCTYPE html>
<html>

<head>
    <title>헤더 예시</title>
</head>

<body>
    <h1>h1 수준의 제목이에요.</h1>
    <h2>h2 수준의 제목이에요.</h2>
    <h3>h3 수준의 제목이에요.</h3>
    <h4>h4 수준의 제목이에요.</h4>
    <h5>h5 수준의 제목이에요.</h5>
    <h6>h6 수준의 제목이에요.</h6>
    <h7>h7 수준의 제목은 없어요.</h7><br>
    아무런 태그를 씌우지 않은 일반 텍스트에요.
</body>

</html>
```
바로 새 창에서 보는 것도 좋지만, 한번 쯤 직접 코딩해보세요!  
:::warning 아, 위 예시 코드에서 br 태그는 어떤 역할을 수행하냐고요?
그 태그는 '줄바꿈'을 시키는 태그에요. 줄바꿈을 바로 수행하는 태그이기 때문에, 일반적인 태그와는 달리 끝태그 `</br>`을 쓰지 않아요. `<br>`태그 하나로 이미 '줄바꿈'이 된 거에요.
:::
  
이 예시를 통해 알 수 있는 헤더 태그의 특징에는 몇 가지가 있죠.

- 헤더 태그는 1~6까지의 수준을 제공해요
- 6번까지 가면, 일반 텍스트보다도 글씨 크기가 작기도 해요.
- 모든 헤더들은 기본적으로 Bold(굵게) 처리가 되어있어요.
- 헤더는 별도로 줄바꿈(`<br>`)을 하지 않아도 알아서 줄을 바꿔요.

## `<u>`, `<i>`, `<b>` 글자 효과주기
각각의 태그 `<u>`, `<i>`, `<b>`는 <u>underline(밑줄)</u>, <i>italic(이탤릭체)</i>, <b>bold(볼드)</b>에서 따온 알파벳이에요. 이 문장에서 보이는 것과 같이 각각 해당하는 효과로 글자를 꾸며주죠.  

페이지로 보려면 [여기로 오세요](https://hajunmyoung.github.io/study_b/src/languages/html_css/examples/02_002.html)
```html
<!DOCTYPE html>
<html>

<head>
    <title>글자효과 예시</title>
</head>

<body>
    <u>UNDERLINE, 밑줄 효과</u><br>
    <i>ITALIC, 이탤릭체(기울임 효과)</i><br>
    <b>BOLD, 볼드체(굵은 글씨)</b><br>
</body>

</html>
```

## `<p>` 문단 나누기
`<p>` 태그는 [01.HTML의 기본 구조](./01_basicStructure.html)의 예시에서도 나온 태그죠. 말 그대로 '문단'을 설정하고 나누는 역할을 수행해요.

나눠진 문단은 자동으로 줄바꿈이 되기도 하죠: [새 창에서 보기](https://hajunmyoung.github.io/study_b/src/languages/html_css/examples/02_003.html)
```html
<!DOCTYPE html>
<html>

<head>
    <title>문단예제01</title>
</head>

<body>
    <p>이 문단은 첫 번째 문단이에요. 이번에는 br태그로 줄바꿈을 하지 않을 거에요.</p>
    <p>하지만 이렇게 새로운 '문단'으로 감싸면 자동으로 줄이 바뀐답니다.</p>
</body>

</html>
```

그런데, 단순히 줄바꿈을 위해서 이 태그를 사용하냐구요? 음...그것보다는 특정 영역을 쉽게 컨트롤하기 위해서 자주 쓰죠. 무슨 말이냐면,  

[새 창에서 예시 보기](https://hajunmyoung.github.io/study_b/src/languages/html_css/examples/02_004.html)
```html
<!DOCTYPE html>
<html>

<head>
    <title>문단예제01</title>
</head>

<body>
    <p style="text-align: left; font-size:30px;">이렇게</p>
    <p style="text-align: center; font-size:30px;">문단 정렬을</p>
    <p style="text-align: right; font-size:30px;">적용하거나</p>
    <p style="text-align: center; color: red; font-size:30px;">색깔,</p>
    <p style="text-align: center; font-family: '궁서체'; font-size:30px;">
        또는 글꼴을 적용하기도 해요.
    </p>
    <br>
    <p style="text-align: center; font-family: '궁서체'; color: red; font-size:30px;">
        물론 이것저것 다 때려넣는 것도 가능하죠.
    </p>
</body>

</html>
```

이와 비슷한(혹은 같은) 효과를 내는 다른 태그들도 존재해요. html의 태그들이 서로 완전히 독립적이지는 않거든요. 하지만 아직은, 이 정도까지만 알아두고... 차차 배워가면서 다른 태그들도 공부해봅시다!

### +alpha) style 속성
style 속성으로 부여할 수 있는 요소들은 몇 가지가 있어요. 위 예시 태그에서처럼 태그를 나타내는 꺽은괄호 `<>`안에서 `style=""`을 쓰고, 큰따옴표 안에 여러가지를 써 넣으면 된답니다. '부여할 효과 종류: 내용'과 같이 콜론으로 설명한다는 것, 부여할 효과와 효과 사이는 세미콜론으로 구분한다는 것만 기억하세요.
:::warning 아, 한 가지 더요.
이거 CSS에요.
:::
- `text-align` : 문단 정렬을 쓸 수 있어요.
    - 아주 직관적이게도 `left`로 왼쪽 정렬, `center`로 가운데 정렬, `right`로 오른쪽 정렬이 돼요.

- `font-size` : 글자 크기를 정할 수 있어요.
    - 숫자만 써도 되고, `pt`, `px`, `mm` 등 다양한 단위를 붙일 수도 있죠.

- `color` : 말 그대로 색깔을 부여할 수 있어요.
    - `#3F246A`처럼 RGB 코드를 쓸 수도 있고, 네임드 컬러의 경우 색상이름을 말해줘도 돼요.
    - 네임드 컬러의 종류는...[무지막지하게 많아요!](./namedColors.html)

- `font-family` : 글꼴을 부여할 수 있어요.
    - html에서 지원하는 기본 글꼴들에는 [몇 가지가 있어요.](./htmlFonts.html)

## `<a href=>` 하이퍼링크 걸기

## `<img>` 이미지 넣기