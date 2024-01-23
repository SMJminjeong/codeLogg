---
slug: TroubleShooting/KafkaError
title: KafkaError
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---

```shell
11:14:38.449 ERROR [,] [er#0-0-C-1] o.s.k.l.KafkaMessageListenerContainer   :149 error           Error handler threw an exception
org.springframework.kafka.KafkaException: Seek to current after exception; nested exception is org.springframework.kafka.listener.ListenerExecutionFailedException: Listener failed; nested exception is org.springframework.kafka.KafkaException: No method found for class spectra.attic.talk.practice.user.messaging.command.UserCreate
```


> Kafka 메세지 송수신이 정상적으로 이루어지지 않는 것! 
> 
> 