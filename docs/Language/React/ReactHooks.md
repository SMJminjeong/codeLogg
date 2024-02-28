---
slug: React Hooks
title: React Hooks
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---

함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 연동, 연결 (hook into) 해주는 함수

훅의 장점
여러 훅들 끼리 재조립 가능하므로, 재사용 가능한 로직을 쉽게 만들 수 있다.
로직을 한 곳에 모을 수 있다.
훅은 단순한 함수이기 때문에 정적타입 언어에서도 타입을 쉽게 작성할 수 있다.

useState
```jsx
const [state, setState] = useState(initialState);
```
상태 유지 값과 그 값을 갱신하는 함수를 반환

최초 렌더링 하는동안, 반환된 state(state) 는 첫번째 전달된 인자 (initialState)의 값과 같다.
setState 는 state 를 갱신할 떄 사용 -> 새 state 값을 받아 컴포넌트 리렌더링을 큐에 등록한다.

```jsx
setState(newState);
```

useEffect 에 전달된 함수는 화면에 렌더링이 완료된 후에 수행되게 될 것이다.


> 정리
> 
effect 는 종종 컴포넌트가 화면에서 저게될 때 정리해야 하는 리소스를 만든다. 
구독이나 타이머 Id 같은 것이다.
이것을 수행하기 위해서 useEffect 로 전달된 함수는 정리 (clean-up) 함수를 반환할 수 있다.

지연 이벤트 동안에 레이아웃 배치와 그리기를 완료한 후 발생한다.
대부분 작업이 브라우저에서 화면을 업데이트하는 것을 차단해서는 안되기 때문이다.

