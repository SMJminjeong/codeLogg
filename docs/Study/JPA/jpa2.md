---
slug: JPA/jpa1
title: jpa1
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---

### JPA 에서 중요한 2가지

1. 객체 - 관계형 데이터베이스 매핑
2. 영속성 컨텍스트

### 엔티티 매니저 팩토리 & 엔티티 매니저

### 영속성 컨텍스트란?
> 엔티티를 영구 저장하는 환경
>
```angular2html
EntityManager.persist(entity);
```

persist 메소드는 영속성 컨텍스트에 저장한다는 개념이다.
영속성 컨텍스트는 논리적 개념으로 눈에 보이지 않는다!

<br/>

### 엔티티의 생명주기
엔티티는 생명주기가 있다.

|     |               |                            |
|-----|:-------------:|:--------------------------:|
| 비영속 | new/transient | 영속성 컨텍스트와 전혀 관계가 없는 새로운 상태 |
| 영속  |    managed    |     영속성 컨텍스트에 관리되는 상태      |
| 준영속 |   detached    |  영속성 컨텍스트에 저장되었다가 분리된 상태   |
| 삭제 |   removed     | 삭제된 상태 |

#### 1. 비영속
JPA 랑 관계없이 객체를 생성한 상태를 말한다.

#### 2. 영속
객체를 생성한 이후에 객체를 저장한 상태를 말한다.
```angular2html
Member memeber = new Member();
member.setId("test);

entityManager.persist(member);
```
이렇게 영속상태일때에는 DB에 저장되지는 않는다. SQL 쿼리문도 실행되지 않는 것을 확인 할 수 있다.

영속상태가 되었다고 쿼리가 날라가는 것이 아닌 
```
tx.commit();
```
트랜잭션이 커밋되어야 실행된다.

#### 3. 준영속
```
entityManager.detach(member);
```

#### 4. 삭제
```
entityManager.remove(member);
```


### 영속성 컨텍스트의 이점

1. 1차 캐시

@Id, Entity (key , member객체)

em.find 로 찾으면 db를 먼저 조회하는 것이 아닌 1차 캐시를 조회한다.

member2를 find 할 경우 ,

만약 1차 캐시에 없으면 db 를 조회하고 1차 캐시에 저장 후 member2 를 반환한다.

그치만 entityManager는 비즈니스가 끝나면 지우게된다. 그래서 순간에만 이득이 있고 애플리케이션 전체에서 이용하게 되지는 않는다.



2. 동일성 보장
3. 트랜잭션을 지원하는 쓰기 지원
4. 


