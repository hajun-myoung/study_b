(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{383:function(t,v,a){"use strict";a.r(v);var e=a(95),_=Object(e.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"체크카드-시스템-구축"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#체크카드-시스템-구축"}},[t._v("#")]),t._v(" 체크카드 시스템 구축")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("진행상태")]),t._v(" "),a("p",[t._v("현재 "),a("strong",[t._v("진행중")]),t._v("인 프로젝트 입니다.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("프로젝트 구분")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("버젼")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("사용 하드웨어")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("사용 소프트웨어")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("시작일")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("종료일")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("자율 프로젝트")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("v2.0.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("아두이노")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("아두이노, 파이썬")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'20년 6월 10일")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("~진행중~")])])])]),t._v(" "),a("h2",{attrs:{id:"청사진"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#청사진"}},[t._v("#")]),t._v(" 청사진")]),t._v(" "),a("h3",{attrs:{id:"v1-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-0"}},[t._v("#")]),t._v(" v1.0.0")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("----- : 유선연결\n)) (( : 무선통신\n                               디스플레이\n                                   │\nRFID 카드 )) (( RFID 센서 ----- 아두이노 ----- 컨트롤러\n                                   │      │\n                                배터리  SD카드\n")])])]),a("p",[a("strong",[t._v("시나리오")])]),t._v(" "),a("ol",[a("li",[t._v("RFID 센서가 무선 통신을 바탕으로 RFID 카드의 ID를 읽습니다.")]),t._v(" "),a("li",[t._v("아두이노는 이 정보를 바탕으로 SD카드에서 ID가 일치하는 회원을 찾아 디스플레이에 표시해줍니다. (디스플레이는 LCD 모니터 등을 이용합니다)")]),t._v(" "),a("li",[t._v("전용 컨트롤러를 제작하여 포인트(화폐)를 추가할건지, 감소시킬건지, 리셋시킬것인지를 결정합니다.\n"),a("ul",[a("li",[t._v("금액 변경을 원할 시, 변경하고자 하는 금액의 값을 컨트롤러를 통해 입력받습니다.")])])]),t._v(" "),a("li",[t._v("변경사항을 저장할것인지, 취소할것인지 입력받습니다.")]),t._v(" "),a("li",[t._v("해당 사항을 반영합니다.(SD카드에 저장-덮어쓰기)")])]),t._v(" "),a("h3",{attrs:{id:"v1-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-0"}},[t._v("#")]),t._v(" v1.1.0")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("----- : 유선연결\n)) (( : 무선통신\n                              PC(프로세싱)\n                                   │\nRFID 카드 )) (( RFID 센서 ----- 아두이노 ----- 컨트롤러\n")])])]),a("p",[a("strong",[t._v("변경사항")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("이제 아두이노가 PC에 직접 연결됩니다.")]),t._v(" "),a("ul",[a("li",[t._v("아두이노는 전력 공급과 저장공간 문제를 모두 PC로 해결할 수 있습니다. 즉, 배터리와 SD카드가 불필요해집니다.")]),t._v(" "),a("li",[t._v("배터리와 SD카드를 위한 추가 회로 구성 및 예산 손실이 발생하지 않습니다.")]),t._v(" "),a("li",[t._v("특히 SD카드의 경우, 리더기도 필요하기 때문에 다양한 문제를 야기하기 좋습니다.")])])]),t._v(" "),a("li",[a("p",[t._v("PC에 연결된 아두이노가 프로세싱으로 데이터를 전송하여, 프로세싱이 디스플레이를 대신합니다.")]),t._v(" "),a("ul",[a("li",[t._v("훨씬 고화질의 디스플레이(컴퓨터 모니터)를 사용할 수 있습니다.")]),t._v(" "),a("li",[t._v("훨씬 다양한 표현을 할 수 있습니다.")]),t._v(" "),a("li",[t._v("디스플레이를 위한 추가 회로 구성 및 예산 손실이 발생하지 않습니다.")])])]),t._v(" "),a("li",[a("p",[t._v("단점: 컴퓨터와 연결되어야 합니다.")]),t._v(" "),a("ul",[a("li",[t._v("아두이노 자체만으로 구축되는 단일 시스템이 아닙니다. USB선을 통해 PC와 연결될 것이므로, 시스템 사용에 대해 거리적 제한이 생깁니다.")]),t._v(" "),a("li",[t._v("이 시스템이 가동 중일 때, 컴퓨터로 다른 작업을 하기 어려울 수 있습니다. (이 부분은 사용자의 컴퓨터 시스템 숙련도에 영향을 받습니다.)")])])])]),t._v(" "),a("h3",{attrs:{id:"v2-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0"}},[t._v("#")]),t._v(" v2.0.0")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("----- : 유선연결\n)) (( : 무선통신\n                               PC(파이썬)\n                                   │\nRFID 카드 )) (( RFID 센서 ----- 아두이노 ----- 키패드\n")])])]),a("p",[a("strong",[t._v("변경사항")])]),t._v(" "),a("ul",[a("li",[t._v("프로세싱 대신 파이썬을 사용합니다.\n"),a("ul",[a("li",[t._v("파이썬으로 그래픽 작업의 우위를 점합니다.")]),t._v(" "),a("li",[t._v("코드 가독성을 올립니다.")])])])]),t._v(" "),a("h2",{attrs:{id:"개발-계획"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개발-계획"}},[t._v("#")]),t._v(" 개발 계획")]),t._v(" "),a("ol",[a("li",[t._v("v2.0.0을 먼저 제작할 생각입니다. 가장 이상적인 형태라고 생각되기 때문입니다.")]),t._v(" "),a("li",[t._v("v1.1.0을 아두이노-프로세싱 구성을 쓰고자 하는 사람들을 위해 구현할 예정입니다.")]),t._v(" "),a("li",[t._v("v1.0.0을 아두이노 단일 시스템 구현을 위해 시도할 것입니다.")])])])}),[],!1,null,null,null);v.default=_.exports}}]);