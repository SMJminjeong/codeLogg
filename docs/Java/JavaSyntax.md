---
sidebar_position: 6
---
# Java Syntax

:::info
scanner.useDelimiter()
:::


Java에서 useDelimiter를 사용할 경우 "."이 아닌, "\\."를 적어주셔야 함에 유의합니다.
Java에서 useDelimiter 안에 적어야 하는 내용은 실제 정규 표현식 (Regular expression)이기에,
"." 문자를 문자 그대로 사용하고 싶을시 escape string인 "\"를 붙여주셔야 합니다.

:::info
String.valueOf(i)
:::
String.valueOf()는 주어진 값을 문자열로 변환하는 Java의 메서드입니다.
이 메서드는 다양한 데이터 타입(정수, 부동 소수점, 문자 등)을 문자열로 변환할 수 있습니다.
예를 들어, String.valueOf(123)는 정수 123을 "123"이라는 문자열로 변환합니다.


:::info
String.valueOf(i).matches()
:::
정규 표현식인 .matches(".*[369].*")은 문자열 안에 3, 6, 9 중 하나라도 포함되는지 확인합니다.

여기서 .은 어떠한 문자 하나를 의미하고, *는 0개 이상의 앞선 표현식을 의미합니다.
[369]는 대괄호 안에 들어간 숫자 중 하나를 나타내며, 여기서는 3, 6, 9 중 하나를 의미합니다.
그리고 .*는 어떠한 문자열이든 가능한 최대 길이의 문자열을 의미합니다.
따라서 .matches(".*[369].*")는 어떤 문자열이던, 그 안에 3, 6, 9 중 하나라도 포함되면 참(true)으로 반환합니다.
