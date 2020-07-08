# 몇 가지 오류와 대처방법
여기서는 뷰프레스 준비를 따라 열심히 설치하고, 명령하고...하다가 뭔가 뜻대로 되지 않는 경우들을 모아놓을 거에요. 대처방안도 함께 있을거니, 생각한 대로 움직여지지 않는다면 이 내용들을 한 번 살펴보세요.  
  
:::tip 여러분의 제보를 기다립니다.
제가 겪지 못한 오류들과 해결한 방법을 제보해주세요.  
아주 사소한 오류도 좋고, 심각한 오류도 좋아요.  
해결방법을 찾으셨다면 베스트, 해결방법이 아직 찾아지지 않았어도 일단 제보해주세요.
  
메일제목은... [뷰프레스][오류제보] 정도로 시작하면 되지 않을까요?
:::

## 파워쉘 보안 문제
저는 CMD 대신 파워쉘로 npm, yarn 등을 설치하고 작업했어요.  
yarn을 설치하는 데 까지는 성공했는데, `yarn -version`을 통해서 잘 되었나 확인하려고 하니 뜬금없이
```
yarn : 이 시스템에서 스크립트를 실행할 수 없으므로 
C:\Users\Administrator\AppData\Roaming\npm\yarn.ps1 파일을 로드할 수 없습니다.
자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)
를 참조하십시오.

위치 줄:1 문자:1 + yarn -v + ~~~~ + CategoryInfo 
: 보안 오류: (:) [], PSSecurityException + FullyQualifiedErrorId : UnauthorizedAccess
```
이런 오류가 뜨는거에요. 어떻게 해야 하나...하다가 [확장형 뇌 저장소님의 글]( https://extbrain.tistory.com/118)을 따라해 해결했답니다.  
  
핵심은, **파워쉘에서 보안 문제로 yarn이 무언가를 실행할 수 없게 막은 것** 이었어요.

### 해결
***
1. 먼저, 파워쉘을 **관리자 권한** 으로 실행해 줍니다.
1. 다음의 명령어를 입력해, 파워쉘 정책이 yarn을 제한시키는지 아닌지 알아봅니다.
```shell
$ ExecutionPolicy
```
(대소문자는 중요하지 않아요)  
   - 아래 그림처럼 'Restricted'라고 뜨면, 보안 정책 문제가 맞습니다.  
![restricted](./ps_001.png)

3. 이제 보안 정책을 풀어줍니다.
```shell
$ Set-ExecutionPolicy unRestricted
```
중간에 정말 변경할 건지 묻는 질문에 'y'로 동의해주시는 거 잊지 말구요.  
![settingPs](./ps_002.png)

4. 이제, 정말 변경되었는지 확인해봅니다.
```shell
$ ExecutionPolicy
```
![compleps](./ps_003.png)  
  
이제 다시, `yarn -version`을 실행해 잘 되는지 확인해보세요!