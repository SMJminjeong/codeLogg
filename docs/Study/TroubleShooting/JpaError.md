---
slug: TroubleShooting/JpaError
title: JpaError
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---

```shell
Error creating bean with name 'blogRepository' defined in spectra.attic.talk.practice.blog.store.jpa.repository.BlogRepository defined in @EnableJpaRepositories declared on JpaConfig: Invocation of init method failed; nested exception is org.springframework.data.repository.query.QueryCreationException: Could not create query for public abstract void spectra.attic.talk.practice.blog.store.jpa.repository.BlogRepository.removeAllByUserId(java.lang.String); Reason: Failed to create query for method public abstract void spectra.attic.talk.practice.blog.store.jpa.repository.BlogRepository.removeAllByUserId(java.lang.String)! No property 'userId' found for type 'BlogJpo'; nested exception is java.lang.IllegalArgumentException: Failed to create query for method public abstract void spectra.attic.talk.practice.blog.store.jpa.repository.BlogRepository.removeAllByUserId(java.lang.String)! No property 'userId' found for type 'BlogJpo'
```


> method 이름으로 쿼리가 생성되는데 userId 는 없었기 때문에 오류 발생.
> 
> 