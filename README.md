# 📰나만의 newsViewer 만들기

## 📢미션 소개
이 프로젝트는 React와 `react-router-dom`을 사용하여 구현한 SPA (Single Page Application) 뉴스 뷰어 애플리케이션입니다. 사용자는 다양한 카테고리의 뉴스를 실시간으로 확인하고, 원하는 기사를 선택하여 자세한 내용을 볼 수 있습니다.

![newsViewer](https://github.com/user-attachments/assets/96189f72-4154-414c-be89-e9ac08f35a91)


## 🔧주요 기능
1️⃣ **홈 화면**: 기본 뉴스 목록을 표시합니다.<br/>
2️⃣ **카테고리별 뉴스 필터링**: 사용자가 원하는 카테고리를 선택하여 해당 카테고리의 뉴스만 필터링할 수 있습니다.<br/>
3️⃣ **기사 상세 페이지**: 특정 기사를 클릭하면 해당 기사의 상세 내용을 확인할 수 있습니다.<br/>
4️⃣ **페이지 간 이동**: `react-router-dom`을 사용하여 페이지 간 빠르고 매끄러운 이동을 지원합니다.

## 👻기능 요구 사항
1️⃣ UI는 자유롭게 구성해도 되나 주요기능에 명시된 기능들을 모두 수행할 수 있어야 합니다.<br/>
2️⃣ 해당뉴스를 클릭했을 때 정상적으로 그 **링크**로 이어져야합니다.<br/>
3️⃣ api로 받아온 모든 뉴스들이 비슷한 포맷을 가지지만 어떠한 것들은 그렇지 않습니다. 이 문제를 해결하세요.("이 문제"에 대한 정보는 `미션소개.gif`에서 **힌트**를 얻을 수 있습니다.)<br/>
4️⃣ 다크모드 버튼과 기능이 원활하게 작동해야합니다.

## ✏️학습 요구 사항
1️⃣ SPA가 무엇인지, 기존의 방식(MPA)과 어떤 차이가 있는지 PR에 작성해주세요.<br/>
2️⃣ UI를 스스로 만들어낼 수 있어야합니다.

## 📍외부 API 사용법
이 프로젝트에서는 외부 뉴스 API를 사용하여 데이터를 가져옵니다.<br/>
1️⃣ https://newsapi.org/ 에 가입하고 newsapi API키를 발급 받습니다.<br/>
2️⃣ 이후는 newsapi 웹문서를 읽고 학습하시면 됩니다.<br/>

## 🧱참고 자료
1. [react-router](https://reactrouter.com/) 공식문서
2. [axios](https://axios-http.com/kr/) 공식문서
3. [토스 개발자센터](https://docs.tosspayments.com/resources/glossary/spa)
