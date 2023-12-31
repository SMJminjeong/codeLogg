---
slug: architecture
title: Architecture
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software, architecture, Hexagonal]
---

### ✅ 아키텍처란? = Architecture
> 비즈니스 요구사항을 만족하는시스템을 구축하기 위해 정의한 것이며 소프트웨어를 설계하기 위한 모델 또는 패턴

### 👉 Hexagonal Architecture?
`육각형 건축물` 을 의미한다.

- 레이어 간의 원하지 않는 종속성이나 비즈니스 로직으로 인한 사용자 인터페이스 코드의 오염과 같은 객체지향 소프트웨어 설계의 알려진 구조적 함정을 피하기 위해 발명된 아키텍처
- `포트 및 어댑터 아키텍처` 라고도 불린다.

### 👉 Advantage 
:::tip

1. 아키텍처 확장이 용이
2. SOLID 원칙을 쉽게 적용 가능
3. 모듈 일부 배포 용이
4. 테스트를 위해 모듈을 가짜로 바꿀 수 있으므로 테스트가 더 안정적이고 쉬움
5. 더 큰 비즈니스적 가치를 갖고 더 오래 지속되는 도메인 모델에 큰 관심
:::

### 👉 구성
- 내부 (도메인) & 외부 (인프라) 로 구분
>- 내부 영역 :
>  - 순수한 비즈니스 로직 
>  - 캡슐화 영역
>  - 기능적 요구사항에 따라 먼저 설계
>- 외부 영역 :
>  - 내부 영역에서 기술을 분리하여 구성한 영역
>  - 내부 영역 설계 이후 설계


- 내부 비즈니스 영역을 외부 영역에 노출한 API = 포트
>- 인바운드 포트 : 내부 영역을 위해 노출된 API
>- 아웃바운드 포트 : 내부 영역이 외부 영역을 사용하기 위한 API


- 외부 세계와 포트 간 교환을 조정하는 어댑터
>- 인바운드 어댑터 : 외부 어플리케이션/서비스와 내부 비즈니스 영역(인바운드 포트) 간 데이터 교환을 조정
>- 아웃바운드 어댑터 : 내부 비즈니스 영역(아웃바운드 포트) 과 외부 애플리케이션/서비스 간 데이터 교환을 조정


### 💥 핵심 💥
: 비즈니스 로직이 표현 로직이나 데이터 접근 로직에 의존하지 않는 것 
