---
slug: react-storybooke
title: storybooke 관련
author: MinJeong
author_title: Software Developer
author_url: ttps://github.com/SMJminjeong
author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg
tags: [software]
---

항상 `storybook` 을 실행하면 compile 오류가 났었다.

```java
Module build failed (from ./node_modules/@storybook/preset-react-webpack/dist/loaders/react-docgen-loader.js):
```

이런 오류가 나거나 아니면 `''` 같은 정보들을 compile 하지 못한다는 오류였다.

해당 단어들이나 구문들은 eslint 에서 compile 하면서 오류가 발생하는 것이었고, 수정 후 

console 에 찍힌 정보들을 확인하며 진행하였다.

```shell
yarn upgrade
npm update
```

```java
npx sb init --builder webpack5
```

```java
npm run storybook --debug-webpack
```

이렇게 진행하니 오류 없이 정상적으로 `storybook` 을 확인 할 수 있었다.