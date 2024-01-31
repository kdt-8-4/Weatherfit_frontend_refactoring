## 옷늘날씨 리팩토링

- 목차
    1. 옷늘날씨 리팩토링의 목적
    2. 팀원 소개
    3. 개발 일정
    4. 리팩토링을 하며 바뀐 협업 방식과 기술 스택
    5. 변경된 페이지 디자인

## 1. 👔 옷늘날씨 리팩토링의 목적

- 한눈에 정보가 들어오지 않는 기존 디자인의 문제점 보완
- 기능 구현 위주로 프로젝트를 진행하며 발생한 문제점 보완
    - 코드의 재사용성과 생산성이 떨어짐 >> 아토믹 디자인 패턴을 도입하며 앞의 문제를 해결
    - 성능에 초점을 맞추지 못해 사용자 경험이 떨어짐 >> LIGHTHOUSE 등을 이용해 성능을 검사하며 프로젝트 진행
- 모든 피드 게시물을 불러와 보여주는 기존 페드 페이지의 데이터 로딩 방식이 SNS에 맞지 않을 뿐더러 사용자 경험을 떨어뜨림 >> React Query와 useInfiniteQuery로 무한 스크롤을 구현하여 해결
- Next.js에서 axios를 사용하면 데이터 캐싱 기능을 지원해주지 않기 때문에 성능이 떨어짐 >> Next.js에서 자체적으로 데이터 캐싱 기능을 지원해주는 fetch를 사용하셔 성능 개선
- Scss를 사용하면 클래스명이 겹처 스타일이 깨지는 경우가 발생
    - Tailwind CSS를 사용하여 사전에 문제 발생 가능성 삭제

## 2. 👥 팀원 소개 및 담당 역할

<table align="center">
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/nebulaBdj"><img src="https://github.com/nebulaBdj.png" width="100px;" alt=""/><br /><b>황동준</b></a><br /></td>
      <td align="center"><a href="https://github.com/kr-nius"><img src="https://github.com/kr-nius.png" width="100px;" alt=""/><br /><b>전주현</b></a><br /></td>
      <td align="center"><a href="https://github.com/hyeiis"><img src="https://github.com/hyeiis.png" width="100px;" alt=""/><br /><b>박혜원</b></a><br /></td>
    </tr>
    <tr>
      <td align="center">Frontend<br/>팀장<br/></td>
      <td align="center">Frontend</td>
      <td align="center">Frontend</td>
    </tr>
  </tbody>
</table>

> ### 황동준

🎨 **디자인**

- 아토믹 디자인 패턴 총괄
    - 전체 아톰 설계 및 디자인 패턴 프로세스 담당

📜 **페이지**

- 피드 페이지
- 일반 회원가입 페이지
- 구글 회원가입 페이지

🦾 **기능**

- 위치에 맞는 날씨 정보 가져와 화면에 띄우기
- 로그인 토큰 전역 관리
- 해시태그로 게시물 검색하기
- 카테고리 선택 시 선택에 맞는 게시물 보여주기
- 온도 설정 시 온도에 맞는 게시물 보여주기
- 검색 자동 완성
- 피드 게시물 무한 스크롤 구현
- 일반 회원가입 구현
- 구글 소셜 회원가입 구현

> ### 박혜원

📜 **페이지**

- 업로드 페이지
- 상세 페이지 & 게시글 수정 페이지
- 메인 페이지 베스트 코디 확인 파트

🦾 **기능**

- 날씨 정보를 포함하여 게시물 정보 전달하는 업로드 기능 구현
- 게시물 상세 정보 불러오기
- 로그인 토큰에서 사용자 닉네임을 가져와 사용자가 업로드한 게시물 구분하여 수정 기능 구현
- 가장 좋아요가 많이 눌린 게시물 3개 메인 페이지에 불러오기

> ### 전주현

🎨 **디자인**

- 디자인 총괄

📜 **페이지**

- 마이 페이지
- 로그인 페이지
- 메인 페이지 날씨 확인 파트

🦾 **기능**

- 사용자가 좋아요 누른 게시물 불러오기
- 사용자가 올린 게시물 불러오기
- 로그인 기능 구현
- 게시물 상게 페이지에 댓글 기능 구현
- 현재 날씨 정보 불러와 메인 페이지에 띄우기

## 3. 🛠️ 개발 일정

- 리팩토링 디자인 | 1/2~10 (완)
- 디자인 분해(Atom, Molecule, Organisms, Page) | 1/10 ~ 11 (완)
- 기본 개발 환경 설정 | 1/11 ~ 15 (완)
- 역할 분배 후 개발(+ 백엔드 연결) | 1/15 ~ 2/10 (진행 중)
- 페이지 성능 테스트 및 개선 | 2/11 ~ 13
- 완료

## 4. 🙏 기술 스택 및 협업 방식

### 개발 환경

- 하나의 Organisms 완성 후 테스트 및 코드리뷰를 진행하여 기능의 완성도 및 성능을 높이고 있습니다.
- esLint, Prettier를 통해 코드 컨벤션을 통일하였고, 깃 컨벤션 규칙을 정해서 깃 PR을 깔끔하게 관리하고 있습니다.
- 깃허브에서 제공하는 칸반 형식의 Project를 이용하며 서로의 작업 진행 속도를 파악하고 있습니다.

### 기술 스택

## 5. 🎨 변경된 페이지 디자인

### 메인 페이지
  <table>
  <tbody>
    <tr>
      <td align="center">메인 페이지</td>
    </tr>
    <tr>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/f1f88e81-1356-43eb-8837-759f6758c811" width=300/></td>
    </tr>
  </tbody>
</table>
- 현재 날씨를 보여주고, 기온에 적합한 베스트 코디 Top 3 표시합니다.


### 로그인/회원가입 페이지
<table>
  <tbody>
    <tr>
      <td align="center">로그인 페이지</td>
    </tr>
    <tr>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/c7688a67-8091-4a9d-a881-ef608613db13" width=300/></td>
    </tr>
  </tbody>
</table>
- 일반 로그인과 구글 소셜 로그인 가능입니다.

<table>
  <tbody>
    <tr>
      <td align="center">회원가입 페이지</td>
    </tr>
    <tr>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/7dcd0f08-d95e-4e9f-8aed-fc78f8d61551" width=300/></td>
    </tr>
  </tbody>
</table>
- 일반 회원가입 페이지입니다.

### 피드 페이지

<table>
  <tbody>
    <tr>
      <td align="center">피드 페이지</td>
    </tr>  
    <tr>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/53a6fa96-c4a5-4fc5-866f-7a6d08c88482" width=300/></td>
    </tr>
  </tbody>
</table>
- 온도 조절을 통해 원하는 온도의 게시물을 확인할 수 있고, 태그 검색과 카테고리 검색이 가능합니다.


### 게시물 상세 페이지

<table>
  <tbody>
    <tr>
      <td align="center">게시물 상세 페이지</td>
    </tr>  
    <tr>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/f6c6b8e6-ba41-4013-b384-49cae9f47d28" width=300/></td>
    </tr>
  </tbody>
</table>
- 코디를 올린 시점의 온도와 날씨가 표시되고, 해시태그가 포함된 게시글과 카테고리를 확인할 수 있습니다.
- 좋아요 및 댓글 기능을 통해 소통이 가능합니다.


### 업로드 페이지&게시물 수정 페이지

<table>
  <tbody>
    <tr>
      <td align="center">업로드 페이지 & 게시물 수정 페이지</td>
    </tr>
    <tr>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/5f271f16-a660-42cb-9a98-63bf6405826b" width=300/></td>
    </tr>
  </tbody>
</table>
- 업로드 페이지와 게시물 수정 페이지는 디자인이 동일합니다.
- 차이점은 게시물 수정 시에 수정할려는 게시물의 데이터가 들어있다는 점입니다.
- 해시태그를 글과 함께 입력 가능하며 카테고리를 선택하여 게시물을 업로드합니다.
<br/>

### 마이 페이지

<table>
  <tbody>
    <tr>
      <td align="center">마이 페이지</td>
    </tr>
    <tr>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/3bb2c1a5-5b5a-482f-a33a-85b8ab21c9ab" width=300/></td>
    </tr>
  </tbody>
</table>
- 자신의 회원 정보를 수정할 수 있고, 업로드한 코디와 좋아요한 코디를 확인할 수 있습니다.
