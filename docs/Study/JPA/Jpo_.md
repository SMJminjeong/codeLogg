---
slug: JPA/jpa-jpo_
title: jpo_
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---

### JPO_ 파일은 무엇일까..? 

팀원 중 한분이 오셔서 JPO_ 파일은 무엇이냐고 여쭤보셨다..! 
사실 제대로 알지도 못하고 제품 코드 따라가면서 작성해본것이었는데... 너무 당황스러웠지만..
나도 처음에는 저파일이 따로 있는건가? 새로 생성한건가 싶었다.
그래서 ctrl 누르고 따라가봤더니 ㅋㅋㅋ 빌드 돌리면서 생성된 것이었다!! 

근데 막상 누가 나에게 물어보니.. 그만큼 알지는 못해서 더 알아본다했다.

그래서 gpt 한테 물어보았다.

그랬더니 대답해준 내용은 
```shell
Java Persistence API (JPA) 엔터티인 BlogJpo 클래스에 대한 메타모델 클래스입니다. 

이 파일은 JPA 메타모델 생성 프로세스를 통해 자동으로 생성되었습니다.
```

라고 해주었다.

### 사용된 annotaion 및 코드

#### 1. @Generated

@Generated 는 자동으로 코드를 생성한 것임을 알려준다. 

Hibernate 의 JPA 모델 생성기인 'org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor'에 의해 생성되었다고 알려주는 것이다.

```java
@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
```

#### 2. @StaticMetamodel

@StaticMetamodel 은 메타모델 클래스임을 알려준다.

{엔터티}Jpo 클래스에 대한 메타모델로 사용되고, 해당 엔터티 클래스의 속성에 대한 정적 상수를 제공한다.


```java
@StaticMetamodel({엔터티}.class)
```

#### 3. 그 외

```java
public static volatile SingularAttribute
```


이렇게 사용되었다.