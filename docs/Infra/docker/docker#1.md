---
slug: infra/docker/#1
title: docker에 서버 설치하기
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---
## docker 로 제품 설치하기


서버에 제품을 설치한 경험이 2번이나 있었지만, 기억이 나지 않았고 문서가 없다는 것을 알게된 나는 정리를 하게 되었다.

우선 설치 파일들을 다운받아서 설치하는 방식은 제외하고 docker 로 구성하는 방식만 정리해둘 예정이다.


---

나는 도커를 잘 모르지만 우선 해당 서버에 어떤 컨테이너가 기동중인지 확인하기 위해서 
`systemctl status docker` 를 통해 **docker** 가 실행중인지 확인 후 
`docker ps` 명령어를 통해서 어떤 컨테이너가 기동 중인지 확인한다.


도커로 서비스를 기동시키려면 `docker-compose.yml` 파일을 생성해야한다.

나는 `service` 디렉토리 하위에 `docker-compose.yml` 파일을 생성했다.

```yml
services:
  ${serviceName}:
     image:
     container_name:
     volumes:
     environment:
     user:
     healthcheck:
     network_mode:
     mem_limit:   
```

- ${serviceName} 을 지정한다.
- `image` 는 어디서 Docker 이미지를 가져올지 지정하는데 나는 `.env` 파일을 이용하여 버전을 최신 버전을 가져올 수 있도록 해놓았다.
- `container_name` 은 내가 식별하기 쉬운 이름으로 지정하였고, `docker ps` 를 통해서 확인 가능하다.
- `volumes` 설정은 **호스트 머신(서버)** 의 파일이나 디렉토리를 **컨테이너 내부** 에 마운트하여 공유하기 위한 설정인데, 컨테이너가 종료되더라도 데이터가 호스트에 보존되거나, 컨테이너 실행 중에도 외부 파일을 컨테이너에서 사용할 수 있다.

- `volumes` 설정은 {`호스트 경로`}:{`컨테이너 경로`} 처럼 작성하면 된다.
  ```yml
    volumes:
      - "/home/service/config:/tmp/config"
  ``` 
   - 컨테이너 내부에서 해당 경로로 접근 가능하게 만들거나 사용할 수 있게 설정하는 것이다.
- `environment` 환경 변수 설정을 해주는데 이는 컨테이너가 실행 될 때 필요한 설정들로 구성되어있다.
   - `TZ=Asia/Seoul` 타임존을 서울로 설정해주었다.
   - `SPRING_PROFILES_ACTIVE=local` 을 통해 `local` 프로파일을 활성화해주었다.
   - 또 추가적인 `Spring` 설정 파일 경로를 지정하거나 `SERVICE_PORT` 를 지정해주는 설정도 가능하다.
- `user` 사용자 권한을 `root` 권한으로 설정해주었다.
- `healthcheck` 를 통해서 컨테이너의 상태를 확인할 수 있다.
   ```yml
   healthcheck:
    test: ["CMD", "wget", "--spider", "http://localhost:8888/config/application/default"]
    interval: 10s
    timeout: 5s
    retries: 10
   ``` 
   -  `test` 는 컨테이너 내부에서 실행될 **헬스 체크 명령어** 를 정의하는 설정이다.
      - `CMD` 는 쉘 없이 직접 명령어를 실행하는 방식이다.
      - 쉘 모드가 필요하다면 `CMD-SHELL` 을 사용하면 된다.
      - `wget` 은 HTTP 요청을 보내는 명령어이다.
      - `--spider` 옵션은 파일 다운로드 없이 HTTP 응답이 성공하는지만 확인하고 그 뒤에는 서비스 상태 확인을 위한 엔드포인트를 작성해주면 된다.
   - `interval` 을 통해 헬스 체크를 실행하는 간격을 설정할 수 있다.
   - `timeout` 을 통해 헬스 체크 명령어가 응답을 기다리는 최대 시간을 설정할 수 있다.
   - `retries` 를 통해 헬스 체크가 연속으로 실패 할 수 있는 최대 횟수를 지정 가능하고 해당 횟수만큼 실패하면 컨테이너는 `unhealth` 상태로 표시된다.
- `network_mode:host` 를 통해서 컨테이너가 호스트의 네트워크를 직접 사용하도록 설정할 수 있다. 이는 컨테이너가 자체적으로 포트를 관리하지 않고, 호스트의 네트워크 환경과 동일하게 동작할 수 있는 것이다.
- `mem_limit: 1g` 를 통해 컨테이너가 사용할 수 있는 메모리를 `1GB`로 제한해두었다.


<br/>

------------

<br/>

추가로 `depends on` 이라는 설정도 있는데 어떤 컨테이너가 `condition` 이 `service_healthy` 일 때 해당 컨테이너가 실행될 수 있도록 설정할 수 있다.
나는 `V2.4` 이기 때문에 `condition` 필드를 사용할 수 있는데, `Compose V3.4` 이상에서는 `condition` 필드가 없어서 `healthcheck` 를 사용해야 한다고 한다.

<br/>
# Docker Compose 2.4 `depends_on` 조건 정리

| **조건**                     | **설명**                                                                                 | **사용 예시**                                                                 |
|-------------------------------|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| `service_started` (기본값)    | 의존하는 서비스가 **시작된 상태**이면 현재 서비스가 실행됩니다.                           | 의존 서비스가 실행만 되면 되는 경우.                                          |
| `service_healthy`             | 의존하는 서비스가 **헬스 체크에 성공**한 상태여야 현재 서비스가 실행됩니다.               | 데이터베이스나 API 서버가 준비된 후 실행해야 할 경우.                         |
| `service_completed_successfully` | 의존하는 서비스가 **정상적으로 종료**된 상태여야 현재 서비스가 실행됩니다.               | 특정 작업이 완료된 이후에 실행해야 할 경우 (예: 마이그레이션 완료 후).          |


- `service_healthy` 에 의존하는 서비스에는 `healthcheck` 가 정의되어 있어야 한다!!! 
---
  
