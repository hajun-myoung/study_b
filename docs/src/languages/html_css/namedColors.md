# HTML 네임드 컬러들
진짜...엄청 많아요.
> 많은 만큼 이게 서로 다른 색이 맞나 색들도 있어요:rofl:

:::theorem 이 색깔 목록은 w3shool의 html 튜토리얼에서 가져왔습니다.
html의 오피셜 가이드를 제공하는 곳이니, 한 번 들러보셔요!
:::right
From. [w3school's html color names](https://www.w3schools.com/colors/colors_names.asp)
:::

:::tip 색 이름의 대소문자 구분
밑에 예시에서는, 색 이름의 가독성을 구분하기 위해 대소문자를 구분해서 명시했어요.  
하지만 여러분이 직접 사용할 때에는, 대소문자 상관없이 쓸 수 있답니다! 물론, 코드 가독성을 높이기 위해서는 구분하는 편이 낫겠지만요.
:::

## 근본적인 네임드 컬러들
> 흰색(White, #FFFFFF)와 검정(Black, #000000)은 너무 당연해서 제외했답니다.

|한글명칭|색 이름|RGB 코드|색 예시|비고|
|---:|:---:|:---:|:---:|:---|
|빨강(적색)|Red|#FF0000|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Red"></table>|순수한 빨강|
|초록(녹색)|Green|#00FF00|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Green"></table>|순수한 초록|
|파랑(청색)|Blue|#0000FF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Blue"></table>|순수한 파랑|
|노랑(황색)|Yellow|#FFFF00|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Yellow"></table>|적색 빛+녹색 빛|
|청록색|Cyan 또는 Aqua|#00FFFF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Cyan"></table>|녹색 빛+청색 빛|
|자홍색<br>(마젠타)|Magenta 또는 Fuchsia|#FF00FF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Magenta"></table>|적색 빛+청색 빛,<br>분홍과 비슷할 뿐 다른 색임|
|갈색|Brown|#A52A2A|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Brown"></table>||
|보라색|BlueViolet|#8A2BE2|<table style="border: black 1px solid; width:50px; height: 20px;background-color: BlueViolet"></table>|우리가 생각하는 그 보라색|
|남색|Indigo|#4B0082|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Indigo"></table>|자주색하고 헷갈리기 쉬움|
|진홍색|Crimson|#DC143C|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Crimson"></table>|Crimson Elusives...|
|핑크색|Pink|#FFC0CB|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Pink"></table>|살짝 옅어보이지만,<br>HTML에서의 핑크|
|하늘색|SkyBlue|#87CEEB|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SkyBlue"></table>||
|회색|Gray 또는 Grey|#808080|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Gray"></table>|회색은 명도조절이 쉬움|
|아이보리|Ivory|#FFFFF0|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Ivory"></table>|상아색이라는 명칭도 있음<br>'아이보리'='상아'|
|카키|Khaki|#F0E68C|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Khaki"></table>|카키색은 카키합니다.<br>음!|

:::details 회색(Gray, Grey)의 명도 조절은 어떻게 하나요?
RGB코드의 각 자리 값이 같으면, 어느 한 쪽으로 치우쳐지지 않은 무채색, 회색이 나와요. 이 회색은 짙게 하거나 옅게 하기가 상당히 쉬운 편에 속하는 색상이랍니다.(모든 색이 균일하게 들어가니까요.)  
기본적으로 Gray 색상은 #808080인데, 더 밝게(=더 옅게)하고싶다면 빛을 더 많이 넣어야하므로 #FFFFFF에 가까워지게 각 hex코드를 증가시키면 되고,  
더 어둡게(=더 짙게)하고싶다면 #000000에 가까워지게 각 hex코드를 감소시키면 돼요.  
  
각 코드별 예시는 5개 정도만 들어볼게요.
<table>
    <tr>
        <td style="width: 150px; height: 25px; border: 0px; background-color: #FFFFFF; text-align:center;">
            <span style="color: #000000">White,<br>#FFFFFF</span>
        </td>
        <td style="width: 200px; height: 25px; border: 0px; background-color: #C0C0C0; text-align:center;">
            <span style="color: #000000">Silver,<br>#C0C0C0</span>
        </td>
        <td style="width: 200px; height: 25px; border: 0px; background-color: #808080; text-align:center;">
            <span style="color: #FFFFFF">Gray,<br>#808080</span>
        </td>
        <td style="width: 200px; height: 25px; border: 0px; background-color: #404040; text-align:center;">
            <span style="color: #FFFFFF">#404040</span>
        </td>
        <td style="width: 200px; height: 25px; border: 0px; background-color: #000000; text-align:center;">
            <span style="color: #FFFFFF">Black,<br>#000000</span>
        </td>
    </tr>
</table>
:::

## A-C 시리즈 네임드 컬러들
|색 이름|RGB 코드|색 예시|색 이름|RGB 코드|색 예시|
|---:|:---:|:---:|---:|:---:|:---:|
|**AliceBlue**|#F0F8FF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: AliceBlue"></table>|AntiqueWhite|#FAEBD7|<table style="border: black 1px solid; width:50px; height: 20px;background-color: AntiqueWhite"></table>|
|Aqua|#00FFFF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Aqua"></table>|Aquamarine|#7FFFD4|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Aquamarine"></table>|
|Azure|#F0FFFF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Azure"></table>|**Beige**|#F5F5DC|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Beige"></table>|
|Bisque|#FFE4C4|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Bisque"></table>|Black|#000000|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Black"></table>|
|BlanchedAlmond|#FFEBCD|<table style="border: black 1px solid; width:50px; height: 20px;background-color: BlanchedAlmond"></table>|Blue|#0000FF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Blue"></table>|
|BlueViolet|#8A2BE2|<table style="border: black 1px solid; width:50px; height: 20px;background-color: BlueViolet"></table>|Brown|#A52A2A|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Brown"></table>|
|BurlyWood|#DEB887|<table style="border: black 1px solid; width:50px; height: 20px;background-color: BurlyWood"></table>|**CadetBlue**|#5F9EA0|<table style="border: black 1px solid; width:50px; height: 20px;background-color: CadetBlue"></table>|
|Chartreuse|#7FFF00|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Chartreuse"></table>|Chocolate|#D2691E|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Chocolate"></table>|
|Coral|#FF7F50|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Coral"></table>|CornflowerBlue|#6495ED|<table style="border: black 1px solid; width:50px; height: 20px;background-color: CornflowerBlue"></table>|
|Cornsilk|#FFF8DC|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Cornsilk"></table>|Crimson|#DC143C|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Crimson"></table>|
|Cyan|#00FFFF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Cyan"></table>||||

## D 시리즈 네임드 컬러들
|색 이름|RGB 코드|색 예시|색 이름|RGB 코드|색 예시|
|---:|:---:|:---:|---:|:---:|:---:|
|**DarkBlue**|#00008B|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkBlue"></table>|DarkCyan|#008B8B|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkCyan"></table>|
|DarkGoldenRod|#B8860B|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkGoldenRod"></table>|DodgerBlue|#1E90FF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DodgerBlue"></table>|
|DarkGray|#A9A9A9|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkGray"></table>|DarkGrey|#A9A9A9|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkGrey"></table>|
|DarkGreen|#006400|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkGreen"></table>|DarkKhaki|#BDB76B|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkKhaki"></table>|
|DarkMagenta|#8B008B|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkMagenta"></table>|DarkOldLaceGreen|#556B2F|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkOldLaceGreen"></table>|
|DarkOrange|#FF8C00|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkOrange"></table>|DarkOrchid|#9932CC|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkOrchid"></table>|
|DarkRed|#8B0000|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkRed"></table>|DarkSalmon|#E9967A|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkSalmon"></table>|
|DarkSeaGreen|#8FBC8F|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkSeaGreen"></table>|DarkSlateBlue|#483D8B|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkSlateBlue"></table>|
|DarkSlateGray|#2F4F4F|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkSlateGray"></table>|DarkSlateGrey|#2F4F4F|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkSlateGrey"></table>|
|DarkTurquoise|#00CED1|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkTurquoise"></table>|DarkViolet|#9400D3|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DarkViolet"></table>|
|DeepPink|#FF1493|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DeepPink"></table>|DeepSkyBlue|#00BFFF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DeepSkyBlue"></table>|
|DimGray|#696969|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DimGray"></table>|DimGrey|#696969|<table style="border: black 1px solid; width:50px; height: 20px;background-color: DimGrey"></table>|

## F-K 시리즈 네임드 컬러들
|색 이름|RGB 코드|색 예시|색 이름|RGB 코드|색 예시|
|---:|:---:|:---:|---:|:---:|:---:|
|**FireBrick**|#B22222|<table style="border: black 1px solid; width:50px; height: 20px;background-color: FireBrick"></table>|FloralWhite|#FFFAF0|<table style="border: black 1px solid; width:50px; height: 20px;background-color: FloralWhite"></table>|
|ForestGreen|#228B22|<table style="border: black 1px solid; width:50px; height: 20px;background-color: ForestGreen"></table>|Fuchsia|#FF00FF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Fuchsia"></table>|
|**Gainsboro**|#DCDCDC|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Gainsboro"></table>|GhostWhite|#F8F8FF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: GhostWhite"></table>|
|Gold|#FFD700|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Gold"></table>|GoldenRod|#DAA520|<table style="border: black 1px solid; width:50px; height: 20px;background-color: GoldenRod"></table>|
|Gray|#808080|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Gray"></table>|Grey|#808080|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Grey"></table>|
|Green|#008000|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Green"></table>|GreenYellow|#ADFF2F|<table style="border: black 1px solid; width:50px; height: 20px;background-color: GreenYellow"></table>|
|**HoneyDew**|#F0FFF0|<table style="border: black 1px solid; width:50px; height: 20px;background-color: HoneyDew"></table>|HotPink|#FF69B4|<table style="border: black 1px solid; width:50px; height: 20px;background-color: HotPink"></table>|
|**IndianRed**|#CD5C5C|<table style="border: black 1px solid; width:50px; height: 20px;background-color: IndianRed"></table>|Indigo|#4B0082|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Indigo"></table>|
|Ivory|#FFFFF0|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Ivory"></table>|**Khaki**|#F0E68C|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Khaki"></table>|

## L 시리즈 네임드 컬러들
|색 이름|RGB 코드|색 예시|색 이름|RGB 코드|색 예시|
|---:|:---:|:---:|---:|:---:|:---:|
|**Lavender**|#E6E6FA|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Lavender"></table>|LavenderBlush|#FFF0F5|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LavenderBlush"></table>|
|LawnGreen|#7CFC00|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LawnGreen"></table>|LemonChiffon|#FFFACD|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LemonChiffon"></table>|
|LightBlue|#ADD8E6|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightBlue"></table>|LightCoral|#F08080|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightCoral"></table>|
|LightCyan|#E0FFFF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightCyan"></table>|LightGoldenRodYellow|#FAFAD2|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightGoldenRodYellow"></table>|
|LightGray|#D3D3D3|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightGray"></table>|LightGrey|#D3D3D3|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightGrey"></table>|
|LightGreen|#90EE90|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightGreen"></table>|LightPink|#FFB6C1|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightPink"></table>|
|LightSalmon|#FFA07A|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightSalmon"></table>|LightSeaGreen|#20B2AA|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightSeaGreen"></table>|
|LightSkyBlue|#87CEFA|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightSkyBlue"></table>|LightSteelBlue|#B0C4DE|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightSteelBlue"></table>|
|LightSlateGray|#778899|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightSlateGray"></table>|LightSlateGrey|#778899|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightSlateGrey"></table>|
|LightYellow|#FFFFE0|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LightYellow"></table>|Lime|#00FF00|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Lime"></table>|
|LimeGreen|#32CD32|<table style="border: black 1px solid; width:50px; height: 20px;background-color: LimeGreen"></table>|Linen|#FAF0E6|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Linen"></table>|

## M 시리즈 네임드 컬러들
|색 이름|RGB 코드|색 예시|색 이름|RGB 코드|색 예시|
|---:|:---:|:---:|---:|:---:|:---:|
|**Magenta**|#FF00FF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Magenta"></table>|Maroon|#800000|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Maroon"></table>|
|MediumAquaMarine|#66CDAA|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumAquaMarine"></table>|MediumBlue|#0000CD|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumBlue"></table>|
|MediumOrchid|#BA55D3|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumOrchid"></table>|MediumPurple|#0000CD|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumPurple"></table>|
|MediumSeaGreen|#3CB371|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumSeaGreen"></table>|MediumSlateBlue|#7B68EE|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumSlateBlue"></table>|
|MediumSpringGreen|#00FA9A|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumSpringGreen"></table>|MediumTurquoise|#48D1CC|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumTurquoise"></table>|
|MediumVioletRed|#C71585|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MediumVioletRed"></table>|MidnightBlue|#191970|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MidnightBlue"></table>|
|MintCream|#F5FFFA|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MintCream"></table>|MistyRose|#FFE4E1|<table style="border: black 1px solid; width:50px; height: 20px;background-color: MistyRose"></table>|
|Moccasin|#FFE4B5|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Moccasin"></table>||||

## N-P 시리즈 네임드 컬러들
|색 이름|RGB 코드|색 예시|색 이름|RGB 코드|색 예시|
|---:|:---:|:---:|---:|:---:|:---:|
|**NavajoWhite**|#FFDEAD|<table style="border: black 1px solid; width:50px; height: 20px;background-color: NavajoWhite"></table>|Navy|#000080|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Navy"></table>|
|**OldLace**|#FDF5E6|<table style="border: black 1px solid; width:50px; height: 20px;background-color: OldLace"></table>|Olive|#808000|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Olive"></table>|
|OliveDrab|#6B8E23|<table style="border: black 1px solid; width:50px; height: 20px;background-color: OliveDrab"></table>|Orange|#FFA500|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Orange"></table>|
|OrangeRed|#FF4500|<table style="border: black 1px solid; width:50px; height: 20px;background-color: OrangeRed"></table>|Orchid|#DA70D6|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Orchid"></table>|
|**PaleGoldenRod**|#EEE8AA|<table style="border: black 1px solid; width:50px; height: 20px;background-color: PaleGoldenRod"></table>|PaleGreen|#98FB98|<table style="border: black 1px solid; width:50px; height: 20px;background-color: PaleGreen"></table>|
|PaleTurquoise|#AFEEEE|<table style="border: black 1px solid; width:50px; height: 20px;background-color: PaleTurquoise"></table>|PaleVioletRed|#DB7093|<table style="border: black 1px solid; width:50px; height: 20px;background-color: PaleVioletRed"></table>|
|PapayaWhip|#FFEFD5|<table style="border: black 1px solid; width:50px; height: 20px;background-color: PapayaWhip"></table>|PeachPuff|#FFDAB9|<table style="border: black 1px solid; width:50px; height: 20px;background-color: PeachPuff"></table>|
|Peru|#CD853F|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Peru"></table>|Pink|#FFC0CB|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Pink"></table>|
|Plum|#DDA0DD|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Plum"></table>|PowderBlue|#B0E0E6|<table style="border: black 1px solid; width:50px; height: 20px;background-color: PowderBlue"></table>|
|Purple|#800080|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Purple"></table>||||

## R-S 시리즈 네임드 컬러들
|색 이름|RGB 코드|색 예시|색 이름|RGB 코드|색 예시|
|---:|:---:|:---:|---:|:---:|:---:|
|**RebeccaPurple**|#663399|<table style="border: black 1px solid; width:50px; height: 20px;background-color: RebeccaPurple"></table>|Red|#FF0000|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Red"></table>|
|RosyBrown|#BC8F8F|<table style="border: black 1px solid; width:50px; height: 20px;background-color: RosyBrown"></table>|RoyalBlue|#4169E1|<table style="border: black 1px solid; width:50px; height: 20px;background-color: RoyalBlue"></table>|
|**SaddleBrown**|#8B4513|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SaddleBrown"></table>|Salmon|#FA8072|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Salmon"></table>|
|SandyBrown|#F4A460|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SandyBrown"></table>|SeaGreen|#2E8B57|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SeaGreen"></table>|
|SeaShell|#FFF5EE|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SeaShell"></table>|Sienna|#A0522D|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Sienna"></table>|
|Silver|#C0C0C0|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Silver"></table>|SkyBlue|#87CEEB|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SkyBlue"></table>|
|SlateBlue|#6A5ACD|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SlateBlue"></table>|Snow|#FFFAFA|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Snow"></table>|
|SlateGray|#708090|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SlateGray"></table>|SlateGrey|#708090|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SlateGrey"></table>|
|SpringGreen|#00FF7F|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SpringGreen"></table>|SteelBlue|#4682B4|<table style="border: black 1px solid; width:50px; height: 20px;background-color: SteelBlue"></table>|

## T-Y 시리즈 네임드 컬러들
|색 이름|RGB 코드|색 예시|색 이름|RGB 코드|색 예시|
|---:|:---:|:---:|---:|:---:|:---:|
|**Tan**|#D2B48C|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Tan"></table>|Teal|#008080|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Teal"></table>|
|Thistle|#D8BFD8|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Thistle"></table>|Tomato|#FF6347|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Tomato"></table>|
|Turquoise|#40E0D0|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Turquoise"></table>|**Violet**|#EE82EE|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Violet"></table>|
|**Wheat**|#F5DEB3|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Wheat"></table>|White|#FFFFFF|<table style="border: black 1px solid; width:50px; height: 20px;background-color: White"></table>|
|WhiteSmoke|#F5F5F5|<table style="border: black 1px solid; width:50px; height: 20px;background-color: WhiteSmoke"></table>|**Yellow**|#FFFF00|<table style="border: black 1px solid; width:50px; height: 20px;background-color: Yellow"></table>|
|YellowGreen|#9ACD32|<table style="border: black 1px solid; width:50px; height: 20px;background-color: YellowGreen"></table>|||