# HTML 기본 글꼴들
HTML에서 지원하는 기본 글꼴들은, 다 영어에요. 하지만, 일부 한글 글씨체의 경우 일부 디바이스에서 기본으로 지원하기도 하죠. 물론, 한글 글씨체는 될 때도 있고 안 될 때도 있어요.  

이제 한글/영문 기본 글씨체들을 보기 전에, 하나만 알고 갑시다. 'serif'와 'sans serif'에 대한 내용이에요.
:::theorem 세리프체는 돌출된 글자, 산세리프체는 돌출되지 않은 글자에요.
세리프(serif)는 타이포그래피에서 글자와 기호를 이루는 획의 일부 끝이 돌출된 형태를 가리킨다.

세리프가 있는 글꼴은 세리프체(serif typeface, serifed typeface)라 하며, 세리프가 없는 글꼴은 산세리프체(sans-serif, 여기서 sans는 "없음"을 뜻하는 프랑스어 낱말 sans에서 비롯)로 부른다.
:::right
From. [wiki 백과](https://ko.wikipedia.org/wiki/)의 [세리프 문서](https://ko.wikipedia.org/wiki/%EC%84%B8%EB%A6%AC%ED%94%84)
:::

> 더불어서, monospace는 각 글자의 여백이 똑같은 글자를 말해요. 상대적으로 글자들이 서로 떨어진 듯한 모습을 보여줘요.

## Serif 글꼴
```html
<p style="font-family: 'Times New Roman', Times, serif;"> 내용 </p>
```
와 같이 적용 가능해요.
|폰트 이름|예시|
|:---|---:|
|Georgia, serif|<span style="font-family: Georgia, serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|"Palatino Linotype", "Book Antiqua", Palatino, serif|<span style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|"Times New Roman", Times, serif|<span style="font-family: 'Times New Roman', Times, serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
> 예문들에는 일괄적으로 30px / Bold 체가 적용되어 있어요.

## Sans-serif 글꼴
```html
<p style="font-family: Arial, Helvetica, sans-serif;"> 내용 </p>
```
와 같이 적용 가능해요.
|폰트 이름|예시|
|:---|---:|
|Arial, Helvetica, sans-serif|<span style="font-family: Arial, Helvetica, sans-serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|"Arial Black", Gadget, sans-serif|<span style="font-family: 'Arial Black', Gadget, sans-serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|"Comic Sans MS", cursive, sans-serif|<span style="font-family: 'Comic Sans MS', cursive, sans-serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|Impact, Charcoal, sans-serif|<span style="font-family: Impact, Charcoal, sans-serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|"Lucida Sans Unicode", "Lucida Grande", sans-serif|<span style="font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|Tahoma, Geneva, sans-serif|<span style="font-family:Tahoma, Geneva, sans-serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|"Trebuchet MS", Helvetica, sans-serif|<span style="font-family:'Trebuchet MS', Helvetica, sans-serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|Verdana, Geneva, sans-serif|<span style="font-family:Verdana, Geneva, sans-serif; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
> 예문들에는 일괄적으로 30px / Bold 체가 적용되어 있어요.

## Monospace 글꼴
```html
<p style="font-family: 'Courier New', Courier, monospace;"> 내용 </p>
```
와 같이 적용 가능해요.
|폰트 이름|예시|
|:---|---:|
|"Courier New", Courier, monospace|<span style="font-family:'Courier New', Courier, monospace; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
|"Lucida Console", Monaco, monospace|<span style="font-family:'Lucida Console', Monaco, monospace; font-weigh: bold; font-size:30px;"> This is a Testing </span>|
> 예문들에는 일괄적으로 30px / Bold 체가 적용되어 있어요.

## 한글 글꼴
앞서 말한 것 처럼, 지금 이 페이지에 적용된 한글 글씨가 잘 보인다고 하더라도 다른 기기 / 다른 브라우저에서는 아닐 수 있으니 유의해주세요 :smiley:  
대표적으로, 일부 모바일 환경에서는 한글 글씨체들이 적용되지 않아 보일 수 있어요.
|폰트 이름|예시|
|:---|---:|
|궁서|<span style="font-family:'궁서'; font-weigh: bold; font-size:30px;"> 이 문장은 예문입니다. </span>|
|궁서체|<span style="font-family:'궁서체'; font-weigh: bold; font-size:30px;"> 이 문장은 예문입니다. </span>|
|굴림|<span style="font-family:'굴림'; font-weigh: bold; font-size:30px;"> 이 문장은 예문입니다. </span>|
|굴림체|<span style="font-family:'굴림체'; font-weigh: bold; font-size:30px;"> 이 문장은 예문입니다. </span>|
|바탕|<span style="font-family:'돋움'; font-weigh: bold; font-size:30px;"> 이 문장은 예문입니다. </span>|
|바탕체|<span style="font-family:'돋움체'; font-weigh: bold; font-size:30px;"> 이 문장은 예문입니다. </span>|
|돋움|<span style="font-family:'바탕'; font-weigh: bold; font-size:30px;"> 이 문장은 예문입니다. </span>|
|돋움체|<span style="font-family:'바탕체'; font-weigh: bold; font-size:30px;"> 이 문장은 예문입니다. </span>|

## 그 외 재미있는 글꼴들
몇 가지 글꼴은, 유용할 것 같기도 하고, 참 재미있는 경우도 있어요. 한 번 보실래요?

### Marlett
***
이 글꼴은 간단한 기호를 나타내는 데 특화되어 있어요. 기본 글꼴 기준 알파벳들이 특정 기호로 대응되어 있답니다.

```html
<p style="font-family: Marlett;"> a </p>
```
<table>
    <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>d</td>
        <td>e</td>
        <td>f</td>
        <td>g</td>
        <td>h</td>
        <td>i</td>
        <td>j</td>
        <td>k</td>
        <td>l</td>
    </tr>
    <tr>
        <td><span style="font-family: Marlett;">a</span></td>
        <td><span style="font-family: Marlett;">b</span></td>
        <td><span style="font-family: Marlett;">c</span></td>
        <td><span style="font-family: Marlett;">d</span></td>
        <td><span style="font-family: Marlett;">e</span></td>
        <td><span style="font-family: Marlett;">f</span></td>
        <td><span style="font-family: Marlett;">g</span></td>
        <td><span style="font-family: Marlett;">h</span></td>
        <td><span style="font-family: Marlett;">i</span></td>
        <td><span style="font-family: Marlett;">j</span></td>
        <td><span style="font-family: Marlett;">k</span></td>
        <td><span style="font-family: Marlett;">l</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>n</td>
        <td>o</td>
        <td>p</td>
        <td>q</td>
        <td>r</td>
        <td>s</td>
        <td>t</td>
        <td>u</td>
        <td>v</td>
        <td>w</td>
        <td>x</td>
    </tr>
    <tr>
        <td><span style="font-family: Marlett;">m</span></td>
        <td><span style="font-family: Marlett;">n</span></td>
        <td><span style="font-family: Marlett;">o</span></td>
        <td><span style="font-family: Marlett;">p</span></td>
        <td><span style="font-family: Marlett;">q</span></td>
        <td><span style="font-family: Marlett;">r</span></td>
        <td><span style="font-family: Marlett;">s</span></td>
        <td><span style="font-family: Marlett;">t</span></td>
        <td><span style="font-family: Marlett;">u</span></td>
        <td><span style="font-family: Marlett;">v</span></td>
        <td><span style="font-family: Marlett;">w</span></td>
        <td><span style="font-family: Marlett;">x</span></td>
    </tr>
    <tr>
        <td>y</td>
        <td>W</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>0</td>
    </tr>
    <tr>
        <td><span style="font-family: Marlett;">y</span></td>
        <td><span style="font-family: Marlett;">W</span></td>
        <td><span style="font-family: Marlett;">1</span></td>
        <td><span style="font-family: Marlett;">2</span></td>
        <td><span style="font-family: Marlett;">3</span></td>
        <td><span style="font-family: Marlett;">4</span></td>
        <td><span style="font-family: Marlett;">5</span></td>
        <td><span style="font-family: Marlett;">6</span></td>
        <td><span style="font-family: Marlett;">7</span></td>
        <td><span style="font-family: Marlett;">8</span></td>
        <td><span style="font-family: Marlett;">9</span></td>
        <td><span style="font-family: Marlett;">0</span></td>
    </tr>
</table>

### MS outlook
***
```html
<p style="font-family: MS outlook;">A</p>
```
<table>
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
        <td>E</td>
        <td>F</td>
        <td>G</td>
        <td>I</td>
        <td>J</td>
        <td>M</td>
        <td>N</td>
    </tr>
    <tr>
        <td><span style="font-family: MS outlook;">A</span></td>
        <td><span style="font-family: MS outlook;">B</span></td>
        <td><span style="font-family: MS outlook;">C</span></td>
        <td><span style="font-family: MS outlook;">D</span></td>
        <td><span style="font-family: MS outlook;">E</span></td>
        <td><span style="font-family: MS outlook;">F</span></td>
        <td><span style="font-family: MS outlook;">G</span></td>
        <td><span style="font-family: MS outlook;">I</span></td>
        <td><span style="font-family: MS outlook;">J</span></td>
        <td><span style="font-family: MS outlook;">M</span></td>
        <td><span style="font-family: MS outlook;">N</span></td>
    </tr>
</table>

### MT Extra
***
```html
<p style="font-family: MT Extra;">a</p>
```
<table>
    <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>f</td>
        <td>h</td>
        <td>l</td>
        <td>m</td>
        <td>o</td>
    </tr>
    <tr>
        <td><span style="font-family: MT Extra;">a</span></td>
        <td><span style="font-family: MT Extra;">b</span></td>
        <td><span style="font-family: MT Extra;">c</span></td>
        <td><span style="font-family: MT Extra;">f</span></td>
        <td><span style="font-family: MT Extra;">h</span></td>
        <td><span style="font-family: MT Extra;">l</span></td>
        <td><span style="font-family: MT Extra;">m</span></td>
        <td><span style="font-family: MT Extra;">o</span></td>
    </tr>
    <tr>
        <td>p</td>
        <td>r</td>
        <td>s</td>
        <td>t</td>
        <td>u</td>
        <td>v</td>
        <td>w</td>
        <td>C</td>
    </tr>
    <tr>
        <td><span style="font-family: MT Extra;">p</span></td>
        <td><span style="font-family: MT Extra;">r</span></td>
        <td><span style="font-family: MT Extra;">s</span></td>
        <td><span style="font-family: MT Extra;">t</span></td>
        <td><span style="font-family: MT Extra;">u</span></td>
        <td><span style="font-family: MT Extra;">v</span></td>
        <td><span style="font-family: MT Extra;">w</span></td>
        <td><span style="font-family: MT Extra;">C</span></td>
    </tr>
    <tr>
        <td>D</td>
        <td>I</td>
        <td>K</td>
        <td>L</td>
        <td>M</td>
        <td>N</td>
        <td>O</td>
        <td>Q</td>
    </tr>
    <tr>
        <td><span style="font-family: MT Extra;">D</span></td>
        <td><span style="font-family: MT Extra;">I</span></td>
        <td><span style="font-family: MT Extra;">K</span></td>
        <td><span style="font-family: MT Extra;">L</span></td>
        <td><span style="font-family: MT Extra;">M</span></td>
        <td><span style="font-family: MT Extra;">N</span></td>
        <td><span style="font-family: MT Extra;">O</span></td>
        <td><span style="font-family: MT Extra;">Q</span></td>
    </tr>
    <tr>
        <td>U</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
    <tr>
        <td><span style="font-family: MT Extra;">U</span></td>
        <td><span style="font-family: MT Extra;">1</span></td>
        <td><span style="font-family: MT Extra;">2</span></td>
        <td><span style="font-family: MT Extra;">3</span></td>
        <td><span style="font-family: MT Extra;">4</span></td>
        <td><span style="font-family: MT Extra;">6</span></td>
        <td><span style="font-family: MT Extra;">7</span></td>
        <td><span style="font-family: MT Extra;">8</span></td>
    </tr>
</table>

### Webdings
***
```html
<p style="font-family: Webdings;">a</p>
```
<table>
    <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>d</td>
        <td>e</td>
        <td>f</td>
        <td>g</td>
        <td>h</td>
        <td>i</td>
        <td>j</td>
        <td>k</td>
        <td>l</td>
        <td>m</td>
        <td>n</td>
        <td>o</td>
    </tr>
    <tr>
        <td><span style="font-family: Webdings;">a</span></td>
        <td><span style="font-family: Webdings;">b</span></td>
        <td><span style="font-family: Webdings;">c</span></td>
        <td><span style="font-family: Webdings;">d</span></td>
        <td><span style="font-family: Webdings;">e</span></td>
        <td><span style="font-family: Webdings;">f</span></td>
        <td><span style="font-family: Webdings;">g</span></td>
        <td><span style="font-family: Webdings;">h</span></td>
        <td><span style="font-family: Webdings;">i</span></td>
        <td><span style="font-family: Webdings;">j</span></td>
        <td><span style="font-family: Webdings;">k</span></td>
        <td><span style="font-family: Webdings;">l</span></td>
        <td><span style="font-family: Webdings;">m</span></td>
        <td><span style="font-family: Webdings;">n</span></td>
        <td><span style="font-family: Webdings;">o</span></td>
    </tr>
    <tr>
        <td>p</td>
        <td>q</td>
        <td>r</td>
        <td>s</td>
        <td>t</td>
        <td>u</td>
        <td>v</td>
        <td>w</td>
        <td>x</td>
        <td>y</td>
        <td>z</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
    </tr>
    <tr>
        <td><span style="font-family: Webdings;">p</span></td>
        <td><span style="font-family: Webdings;">q</span></td>
        <td><span style="font-family: Webdings;">r</span></td>
        <td><span style="font-family: Webdings;">s</span></td>
        <td><span style="font-family: Webdings;">t</span></td>
        <td><span style="font-family: Webdings;">u</span></td>
        <td><span style="font-family: Webdings;">v</span></td>
        <td><span style="font-family: Webdings;">w</span></td>
        <td><span style="font-family: Webdings;">x</span></td>
        <td><span style="font-family: Webdings;">y</span></td>
        <td><span style="font-family: Webdings;">z</span></td>
        <td><span style="font-family: Webdings;">A</span></td>
        <td><span style="font-family: Webdings;">B</span></td>
        <td><span style="font-family: Webdings;">C</span></td>
        <td><span style="font-family: Webdings;">D</span></td>
    </tr>
    <tr>
        <td>E</td>
        <td>F</td>
        <td>G</td>
        <td>H</td>
        <td>I</td>
        <td>J</td>
        <td>K</td>
        <td>L</td>
        <td>M</td>
        <td>N</td>
        <td>O</td>
        <td>P</td>
        <td>Q</td>
        <td>R</td>
        <td>S</td>
    </tr>
    <tr>
        <td><span style="font-family: Webdings;">E</span></td>
        <td><span style="font-family: Webdings;">F</span></td>
        <td><span style="font-family: Webdings;">G</span></td>
        <td><span style="font-family: Webdings;">H</span></td>
        <td><span style="font-family: Webdings;">I</span></td>
        <td><span style="font-family: Webdings;">J</span></td>
        <td><span style="font-family: Webdings;">K</span></td>
        <td><span style="font-family: Webdings;">L</span></td>
        <td><span style="font-family: Webdings;">M</span></td>
        <td><span style="font-family: Webdings;">N</span></td>
        <td><span style="font-family: Webdings;">O</span></td>
        <td><span style="font-family: Webdings;">P</span></td>
        <td><span style="font-family: Webdings;">Q</span></td>
        <td><span style="font-family: Webdings;">R</span></td>
        <td><span style="font-family: Webdings;">S</span></td>
    </tr>
    <tr>
        <td>T</td>
        <td>U</td>
        <td>V</td>
        <td>W</td>
        <td>X</td>
        <td>Y</td>
        <td>Z</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
    <tr>
        <td><span style="font-family: Webdings;">T</span></td>
        <td><span style="font-family: Webdings;">U</span></td>
        <td><span style="font-family: Webdings;">V</span></td>
        <td><span style="font-family: Webdings;">W</span></td>
        <td><span style="font-family: Webdings;">X</span></td>
        <td><span style="font-family: Webdings;">Y</span></td>
        <td><span style="font-family: Webdings;">Z</span></td>
        <td><span style="font-family: Webdings;">1</span></td>
        <td><span style="font-family: Webdings;">2</span></td>
        <td><span style="font-family: Webdings;">3</span></td>
        <td><span style="font-family: Webdings;">4</span></td>
        <td><span style="font-family: Webdings;">5</span></td>
        <td><span style="font-family: Webdings;">6</span></td>
        <td><span style="font-family: Webdings;">7</span></td>
        <td><span style="font-family: Webdings;">8</span></td>
    </tr>
    <tr>
        <td>9</td>
        <td>0</td>
        <td colspan="13"></td>
    </tr>
    <tr>
        <td><span style="font-family: Webdings;">9</span></td>
        <td><span style="font-family: Webdings;">0</span></td>
        <td colspan="13"></td>
    </tr>
</table>

### WingDings
***
```html
<p style="font-family: WingDings;">a</p>
```
<table>
    <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>d</td>
        <td>e</td>
        <td>f</td>
        <td>g</td>
        <td>h</td>
        <td>i</td>
        <td>j</td>
        <td>k</td>
        <td>l</td>
        <td>m</td>
        <td>n</td>
    </tr>
    <tr>
        <td><span style="font-family: WingDings;">a</span></td>
        <td><span style="font-family: WingDings;">b</span></td>
        <td><span style="font-family: WingDings;">c</span></td>
        <td><span style="font-family: WingDings;">d</span></td>
        <td><span style="font-family: WingDings;">e</span></td>
        <td><span style="font-family: WingDings;">f</span></td>
        <td><span style="font-family: WingDings;">g</span></td>
        <td><span style="font-family: WingDings;">h</span></td>
        <td><span style="font-family: WingDings;">i</span></td>
        <td><span style="font-family: WingDings;">j</span></td>
        <td><span style="font-family: WingDings;">k</span></td>
        <td><span style="font-family: WingDings;">l</span></td>
        <td><span style="font-family: WingDings;">m</span></td>
        <td><span style="font-family: WingDings;">n</span></td>
    </tr>
    <tr>
        <td>o</td>
        <td>p</td>
        <td>q</td>
        <td>r</td>
        <td>s</td>
        <td>t</td>
        <td>u</td>
        <td>v</td>
        <td>w</td>
        <td>x</td>
        <td>y</td>
        <td>z</td>
        <td>A</td>
        <td>B</td>
    </tr>
    <tr>
        <td><span style="font-family: WingDings;">o</span></td>
        <td><span style="font-family: WingDings;">p</span></td>
        <td><span style="font-family: WingDings;">q</span></td>
        <td><span style="font-family: WingDings;">r</span></td>
        <td><span style="font-family: WingDings;">s</span></td>
        <td><span style="font-family: WingDings;">t</span></td>
        <td><span style="font-family: WingDings;">u</span></td>
        <td><span style="font-family: WingDings;">v</span></td>
        <td><span style="font-family: WingDings;">w</span></td>
        <td><span style="font-family: WingDings;">x</span></td>
        <td><span style="font-family: WingDings;">y</span></td>
        <td><span style="font-family: WingDings;">z</span></td>
        <td><span style="font-family: WingDings;">A</span></td>
        <td><span style="font-family: WingDings;">B</span></td>
    </tr>
    <tr>
        <td>C</td>
        <td>D</td>
        <td>E</td>
        <td>F</td>
        <td>G</td>
        <td>H</td>
        <td>I</td>
        <td>J</td>
        <td>K</td>
        <td>L</td>
        <td>M</td>
        <td>N</td>
        <td>O</td>
        <td>P</td>
    </tr>
    <tr>
        <td><span style="font-family: WingDings;">C</span></td>
        <td><span style="font-family: WingDings;">D</span></td>
        <td><span style="font-family: WingDings;">E</span></td>
        <td><span style="font-family: WingDings;">F</span></td>
        <td><span style="font-family: WingDings;">G</span></td>
        <td><span style="font-family: WingDings;">H</span></td>
        <td><span style="font-family: WingDings;">I</span></td>
        <td><span style="font-family: WingDings;">J</span></td>
        <td><span style="font-family: WingDings;">K</span></td>
        <td><span style="font-family: WingDings;">L</span></td>
        <td><span style="font-family: WingDings;">M</span></td>
        <td><span style="font-family: WingDings;">N</span></td>
        <td><span style="font-family: WingDings;">O</span></td>
        <td><span style="font-family: WingDings;">P</span></td>
    </tr>
    <tr>
        <td>Q</td>
        <td>R</td>
        <td>S</td>
        <td>T</td>
        <td>U</td>
        <td>V</td>
        <td>W</td>
        <td>X</td>
        <td>Y</td>
        <td>Z</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
    <tr>
        <td><span style="font-family: WingDings;">Q</span></td>
        <td><span style="font-family: WingDings;">R</span></td>
        <td><span style="font-family: WingDings;">S</span></td>
        <td><span style="font-family: WingDings;">T</span></td>
        <td><span style="font-family: WingDings;">U</span></td>
        <td><span style="font-family: WingDings;">V</span></td>
        <td><span style="font-family: WingDings;">W</span></td>
        <td><span style="font-family: WingDings;">X</span></td>
        <td><span style="font-family: WingDings;">Y</span></td>
        <td><span style="font-family: WingDings;">Z</span></td>
        <td><span style="font-family: WingDings;">1</span></td>
        <td><span style="font-family: WingDings;">2</span></td>
        <td><span style="font-family: WingDings;">3</span></td>
        <td><span style="font-family: WingDings;">4</span></td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>0</td>
        <td colspan="9"></td>
    </tr>
    <tr>
        <td><span style="font-family: WingDings;">5</span></td>
        <td><span style="font-family: WingDings;">6</span></td>
        <td><span style="font-family: WingDings;">7</span></td>
        <td><span style="font-family: WingDings;">8</span></td>
        <td><span style="font-family: WingDings;">9</span></td>
        <td><span style="font-family: WingDings;">0</span></td>
        <td colspan="9"></td>
    </tr>
</table>