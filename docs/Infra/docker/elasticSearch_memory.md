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

```shell
docker-compose up -d
```

### ElasticSearch

```shell
vm.max_map_count
```

```shell
sh-5.0# sysctl vm.max_map_count
vm.max_map_count = 262144
```