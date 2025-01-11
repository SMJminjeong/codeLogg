서버에 mysql 설치하기

sudo -su

cat /etc/passwd

sudo apt-get install mysql-server

![스크린샷 2025-01-11 19.22.00.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_3wuinw%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202025-01-11%2019.22.00.png)


갑자기... 커널 업데이트를 하라고 떴다..! 이게 뭘까....

캔슬 하고 mysql 설치 여부를 봤다.
![스크린샷 2025-01-11 19.22.49.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_W6gf0f%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202025-01-11%2019.22.49.png)


systemctl status mysql
![스크린샷 2025-01-11 19.28.35.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_qBVod2%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202025-01-11%2019.28.35.png)



데이터베이스 접속해서 user 생성
![스크린샷 2025-01-11 19.30.51.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_jq3ZeO%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202025-01-11%2019.30.51.png)

![스크린샷 2025-01-11 19.32.00.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_GRPyeW%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202025-01-11%2019.32.00.png)

id : dev
pw : databakery




sudo ufw status 
명령어로 방화벽이 열려있는 목록을 보면 3306이 없다....

![스크린샷 2025-01-11 19.37.11.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_cYOAvN%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202025-01-11%2019.37.11.png)

sudo ufw allow 3306 으로 방화벽 추가하고 확인해보면 
![스크린샷 2025-01-11 19.39.27.png](..%2F..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F23%2F0mj819n52sb6k9dsmqdfr2tc0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_yaK28Y%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202025-01-11%2019.39.27.png)


--------

dbeaver 에서 접속이 안되서 지금 하나하나 뜯어보고있는데, 

SELECT user, host FROM mysql.user;

명령어로 접속.......



