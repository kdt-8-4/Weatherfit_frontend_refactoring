## 옷늘날씨 리팩토링

- 목차
    1. 옷늘날씨 리팩토링의 목적
    2. 팀원 소개
    3. 개발 일정
    4. 리팩토링을 하며 바뀐 협업 방식과 기술 스택
    5. 변경된 페이지 디자인

## 1. 👔 옷늘날씨 리팩토링의 목적
- 한눈에 정보가 들어오지 않는 기존 디자인의 문제점 보완  

   <tbody>
    <tr>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/fde559d8-0570-42f7-b759-7a45da95c512" width=300 height="500"/></td>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/3269884b-10b2-46ea-af7a-22b49f149b02" width=50 /></td>
        <td align="center"><img src="https://github.com/kdt-8-4/Weatherfit_frontend_refactoring/assets/114459629/f1f88e81-1356-43eb-8837-759f6758c811" width=300 height="500"/></td>
    </tr>
  </tbody>

<br/>

- 기능 구현 위주로 프로젝트를 진행하며 발생한 문제점 보용

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
- 역할 분배 후 개발(+ 백엔드 연결) | 2/2 ~ 3/27 (진행 중 : 게시물 관련 백엔드 이슈로 지연)
- 최종 코드 리뷰를 통한 클린 코드 적용 및 웹 표준 & 웹 접근성을 고려해 코드 수정 | 3/28 ~ 3/29
- 페이지 성능 테스트 및 개선 | 3/30
- 완료

## 4. 🙏 기술 스택 및 협업 방식

### 개발 환경

- 하나의 Organisms 완성 후 테스트 및 코드리뷰를 진행하여 기능의 완성도 및 성능을 높이고 있습니다.
- esLint, Prettier를 통해 코드 컨벤션을 통일하였고, 깃 컨벤션 규칙을 정해서 깃 PR을 깔끔하게 관리하고 있습니다.
- 깃허브에서 제공하는 칸반 형식의 Project를 이용하며 서로의 작업 진행 속도를 파악하고 있습니다.

### 기술 스택

<table>
  <tr>
    <td align="center">Front-End</td>
    <td>
      <span><img src="https://img.shields.io/badge/next.js-000?style=flat-square&logo=next.js&logoColor=white"></span>&nbsp
      <span><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"></span>&nbsp
      <span><img src="https://img.shields.io/badge/reactquery-FF4154?style=flat-square&logo=reactquery&logoColor=black"></span>&nbsp
      <span><img src="https://img.shields.io/badge/recoil-FF4655?style=flat-square&logo=recoil&logoColor=white"></span>&nbsp
    </td>
  </tr>
  <tr>
    <td align="center">Collaboration</td>
    <td>
      <span><img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/></span>&nbsp
      <span><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></span>&nbsp 
      <span><img src="https://img.shields.io/badge/Discord-4263f5?style=flat-square&logo=Discord&logoColor=white"/></span>&nbsp 
    </td>
  </tr>
  <tr>
     <td align="center">Design</td>
     <td>
       <span><img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/></span>&nbsp
     </td>
  </tr>
  <tr>
   <td align="center">IDE</td>
   <td>
      <span><img src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white"/></span>&nbsp
  </tr>
  <tr>
   <td align="center">Convention</td>
   <td>
      <span><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/></span>&nbsp
      <span><img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=Prettier&logoColor=white"/></span>&nbsp
   </td>
  </tr>
  <tr>
   <td align="center">Deployment</td>
   <td>
      <span><img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Netlify&logoColor=white"/></span>&nbsp
   </td>
  </tr>
</table>


<br />

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
- 현재 날씨를 보여주고, 기온에 적합한 베스트 코디 Top 3 표시합니다.<br/>


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
- 일반 로그인과 구글 소셜 로그인이 가능입니다.<br/>

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
- 일반 회원가입 페이지입니다.<br/>

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
- 온도 조절을 통해 원하는 온도의 게시물을 확인할 수 있고, 태그 검색과 카테고리 검색이 가능합니다.<br/>


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
- 코디를 올린 시점의 온도와 날씨가 표시되고, 해시태그가 포함된 게시글과 카테고리를 확인할 수 있습니다.<br/>
- 좋아요 및 댓글 기능을 통해 소통이 가능합니다.<br/>


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
- 업로드 페이지와 게시물 수정 페이지는 디자인이 동일합니다.<br/>
- 차이점은 게시물 수정 시에 수정할려는 게시물의 데이터가 들어있다는 점입니다.<br/>
- 해시태그를 글과 함께 입력 가능하며 카테고리를 선택하여 게시물을 업로드합니다.<br/>
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
- 자신의 회원 정보를 수정할 수 있고, 업로드한 코디와 좋아요한 코디를 확인할 수 있습니다.<br/>
