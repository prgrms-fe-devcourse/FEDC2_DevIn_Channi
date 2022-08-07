# [DevIn](https://zingy-donut-e91f0f.netlify.app/)
기술 블로그 & 이벤트 일정 공유 서비스


[![Netlify Status](https://api.netlify.com/api/v1/badges/7ce6df7f-32a7-482b-9312-4b41bd76116a/deploy-status)](https://app.netlify.com/sites/zingy-donut-e91f0f/deploys)

:point_right: [DevIn 바로가기](https://zingy-donut-e91f0f.netlify.app/)


![썸네일](https://user-images.githubusercontent.com/73787590/175005381-8728fe74-d41e-4be5-8414-9777f5de1a6a.jpg)


## 프로젝트 소개
좋은 포스트의 내용들을 한 곳에서 모아볼 수 있고 개발관련 다양한 이벤트들을 한눈에 볼 수 있는 SNS.
- DevIn은 개발자들에게 블로그 컨텐츠를 자유롭게 공유할 수 있고 개발 관련 이벤트와 모임을 쉽게 확인할 수 있는 서비스입니다.
- 좋은 블로그 컨텐츠를 공유하고 개발 관련 정보도 얻어갈 수 있는 개발자들을 위한 공간입니다.

## 팀원 소개
|이름|역할|
|-----------|-----------|
|[김가연](https://github.com/lexie-kaia) :crown:|게시물 기능|
|[김민기](https://github.com/93minki)|홈, 이벤트 기능|
|[박인화](https://github.com/parkinhwa)|사용자 프로필, 검색, 팔로우 기능|
|[염상권](https://github.com/Yummy-sk)|사용자 인증, 사용자 정보 변경, 알림, Open Graph 서버|


## 개발 환경
#### 라이브러리
<div align=left>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black"> 
<img src="https://img.shields.io/badge/redux toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=black"> 
</div>

#### 코드
<div align=left>  
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=black"> 
<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
</div>

#### 협업
<div align=left> 
<img src="https://img.shields.io/badge/notion-f7f6f3?style=for-the-badge&logo=notion&logoColor=black">
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black">
<img src="https://img.shields.io/badge/github-24292f?style=for-the-badge&logo=github&logoColor=white">
</div>

## 실행
#### 노드 버전
<img src="https://img.shields.io/badge/node.js->=16-D6F49B?&logoColor=white">

#### 환경변수
프로젝트를 실행시키려면 .env 파일의 다음과 같은 환경변수가 필요합니다.
```
REACT_APP_API_BASEURL // API URL
REACT_APP_API_CHANNEL_ID // POST CHANNEL ID
REACT_APP_OG_API_BASEURL // 블로그 링크 이미지, 내용 관련 OG API
```

#### 라우트

| 이름  | 경로 |
| :-- | :-- |
| 홈 | / |
| 로그인 | /signin |
| 회원가입 | /signup |
| 포스트 작성 | /posts/create |
| 포스트 상세 | /posts/:postId |
| 포스트 수정 | /posts/:postId/update |
| 이벤트/모임 | /events |
| 검색 | /search |
| 사용자 프로필 | /profiles/:userId |
| 사용자 정보 수정 | /profiles/edit |
| 알림 | /notification |
| 404 |  |

## 중요 컴포넌트
![Group 53](https://user-images.githubusercontent.com/65644486/174992470-2e5d3aa9-56b0-4d59-99cd-34d049b96077.png)

**Page**

`Home` - 메인 홈 페이지

`Event` - 이벤트 정보 페이지

`Search` - 검색 페이지

**Organisms**

`PostList` - 포스트 목록

`Post` - 포스트 컴포넌트

`SearchArea` - 검색 입력창과 탭

`ProfileList` - 사용자 목록

`EventArea` - 이벤트 목록과 필터

**Molecules**

`PostHeader` - 포스트 작성자 프로필과 포스트 수정/삭제 기능

`PostBody` - 포스트의 내용과 url 미리보기

`PostFooter` - 포스트의 좋아요/댓글 기능

`SearchBar` - 검색 입력창

`SearchResultItem` - 사용자 프로필과 포스트 검색 결과 항목 

`EventHeader` - 이벤트 필터

`EventItemList` - 이벤트 목록
