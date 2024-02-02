---
slug: react-env
title: env 관련
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---

소스기동시 `package.json` 에 있는 `scripts` 정보들 확인

만약 
```json
"scripts": {
  "start" : "env-cmd -f config/.env.development react-scripts start",
}
```

인 경우 `start` 명령어를 통해 소스기동시 `config/.env.development` 파일을 가서 보면 설정을 알 수 있음!

나는 해당 서비스에서 특정 정보들을 못가져오고 있어서 안되었던 것이고

서비스들 모두 가져오는 명령어를 실행하였더니 정상적으로 기동 완료되었다.
