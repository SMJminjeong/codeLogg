---
slug: jpa1
title: jpa1
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---


h2 download
가볍고, 웹용 쿼리툴 제공

```angular2html
cd h2/bin 
./h2.sh
```

```
![스크린샷 2024-01-15 21.14.46.png](..%2F..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_bpXoqW%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-01-15%2021.14.46.png)
![스크린샷 2024-01-15 21.14.27.png](..%2F..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_z92WuD%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-01-15%2021.14.27.png)
```

maven 이용

java 17 버전으로 변경

hibernate dependency 추가
https://docs.spring.io/spring-boot/docs/3.1.7/reference/html/dependency-versions.html#appendix.dependency-versions

```angular2html
<!-- JPA 하이버네이트 -->
        <dependency>
            <groupId>org.hibernate.orm</groupId>
            <artifactId>hibernate-core</artifactId>
            <version>6.2.13.Final</version>
        </dependency>

<!-- H2 데이터베이스 -->
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <version>2.1.214</version>
        </dependency>
```
h2 dependency는 다운받은 버전이랑 동일하게 맞춰주기

jpa 는 방언을 사용하지 않는다~



