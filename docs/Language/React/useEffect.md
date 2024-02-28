---
slug: useEffect
title: useEffect?
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---

`useEffect` 라는 hook 을 사용
컴포넌트의 마운트 (처음 나타났을 때)
언마운트 (사라질 때)
업데이트 (특정 props 가 바뀔 때)

useEffect 구조
함수이다
첫번째 인자는 함수, 두번째 인자는 배열(주로 deps 라고 칭한다.)이 들어간다.

cleanup 함수
useEffect 안에서 return 할 때 실행된다.
useEffcet의 뒷정리를 한다. -> state에서 값 지울때 실행됨

deps
deps 에 특정값을 넣게 되면, 컴퍼넌트가 마운트 될 때, 지정한 값이 업데이트 될 때 useEffect 실행된다.
deps에 값이 없다면 useEffect가 최신 값을 가리키지 않게 된다.
deps에 값이 없다면 컴포넌트가 리렌더링 될 때마다 호출이 된다.
deps에 값을 넣는것을 기본이라고 생각하는게 좋다.