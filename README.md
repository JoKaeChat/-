# likelion_Wiki

# 사용법
  1) 터미널 창 띄우고 npm start (로컬 서버 실행)
  2) 터미널 창 새로 띄우고 cd client  입력
  3) client로 이동 후 npm start 
  


# 위키만들기
## 프론트 - 백
- 프론트 권경민/정동구
- 백 권경민/김우영
## 역할 분담
## 구현 해야할 기능들
### 프론트
-페이지
  1) / : 메인페이지
  2) /w/[문서이름] : 문서의 최근 버전
  3) /w/[문서이름]?version = [버전] : 문서의 특정 버전 보기
  4) /edit/[문서이름] : 새로운 문서 생성
  5) /history/[문서이름] : 문서의 모든 버전 보기
  6) /member/login : 로그인 창
  7) /member/signUp : 회원가입 창
  8) /member/recover : 아이디 비밀번호 찾기 창


### 백
- https://github.com/ajou20658/lionwiki_server.git 해당 리포지토리에서 따로 구현중
- API만들기
  - create (date, title, RAW Content, authority) 
  - read 
  - edit  (바뀐 버전의 내용으로 새로 생성, 이전 데이터는 보존)
  - delete (실제로 삭제되려면 토론을 통해 합의가 이루어진다음 권한이있는 로그인 사용자(혹은 관리자)에게 요청 후 삭제)
- 데이터베이스에 필요한 features 결정
  - 문서 저장 (id, date=최근수정시각, 문서 버전 = r___, title, RAW Content, authority)
  - 사용자 회원가입 정보 저장
- SQL문으로 데이터베이스에 접근해서 json으로 만들어서 보내주기
- 회원가입기능 만들기
- 
- 로그인
  - 미 로그인 사용자는 ip주소기반으로 관리
  - 자동 로그인 구현
  - 로그인 시점기록  --> 권한 관련
  - 기여도 기록      --> 권한 관련
