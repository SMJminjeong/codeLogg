---
slug: infra/elasticsearch
title: elasticsearch 메모리 설정
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---
### docker

#### docker 올리는 방법
> docker 관련해서는 조금 더 자세하게 알아볼 예정이다.
```shell
docker-compose up -d
```

### ElasticSearch

#### elasticSearch 가 자꾸 down
elasticSearch 가 자꾸 견디지 못하고 down 되는 상황이 있었는데 memory 관련 오류가 나왔었다. 
memory 때문인줄 알고 memory 설정을 보고 싶었는데 , docker container 가 띄워져 있어야 접속이 가능했기때문에 이 방법으로는 해결이 안되었다.


```shell
vm.max_map_count
```

```shell
sh-5.0# sysctl vm.max_map_count
vm.max_map_count = 262144wkfg
```

너무 어이없지만.. docker desktop 버전 문제였었다. 너무 오래전 버전이라 안되었던 것..? 
