### 문제점

```jsx
***ERROR*** Failed to execute goal on project internal-share-event: Could not resolve dependencies for project spectra.attic.ctalk.customadapter:internal-share-event:jar:1.2.0-eland: The following artifacts could not be resolved: spectra.attic.ctalk.share:ctalk-share-domain:jar:1.2.0-SNAPSHOT (absent): Could not find artifact spectra.attic.ctalk.share:ctalk-share-domain:jar:1.2.0-SNAPSHOT in nexus-public (https://nexus.spectra.co.kr/repository/maven-public/) -> ***Help 1***
***ERROR*** Failed to execute goal on project internal-share-client: Could not resolve dependencies for project spectra.attic.ctalk.customadapter:internal-share-client:jar:1.2.0-eland: The following artifacts could not be resolved: spectra.attic.ctalk.share:ctalk-share-domain:jar:1.2.0-SNAPSHOT (absent), spectra.attic.ctalk.share:ctalk-share-file-reader:jar:1.2.0-SNAPSHOT (absent), spectra.attic.ctalk.share:ctalk-share-exporter:jar:1.2.0-SNAPSHOT (absent): spectra.attic.ctalk.share:ctalk-share-domain:jar:1.2.0-SNAPSHOT was not found in https://nexus.spectra.co.kr/repository/maven-public/ during a previous attempt. This failure was cached in the local repository and resolution is not reattempted until the update interval of nexus-public has elapsed or updates are forced -> ***Help 1***
***ERROR*** 
***ERROR*** To see the full stack trace of the errors, re-run Maven with the -e switch.
***ERROR*** Re-run Maven using the -X switch to enable full debug logging.
***ERROR*** 
***ERROR*** For more information about the errors and possible solutions, please read the following articles:
***ERROR*** ***Help 1*** http://cwiki.apache.org/confluence/display/MAVEN/DependencyResolutionException
***ERROR*** 
***ERROR*** After correcting the problems, you can resume the build with the command
***ERROR***   mvn <args> -rf :internal-share-event
##***error***Process completed with exit code 1.
```

nexus 에서 다른 dependency 들을 가지고 오는데, `ctalk-share` 가 없어서 못가지고 오는 것으로 확인된다.

### 해결방법

→ `biz` 에서 `partner-domain/pom.xml` 에서 `version` 을 다음과 같이 수정해준다.

```jsx
        <dependency>
            <groupId>spectra.attic.ctalk.share</groupId>
            <artifactId>ctalk-share-file-reader</artifactId>
            <version>${project.version}</version>
        </dependency>
```

→ `customadapter` 에 dependency 추가해준다.

```jsx
        <dependency>
            <groupId>spectra.attic.ctalk.share</groupId>
            <artifactId>ctalk-share-file-reader</artifactId>
            <version>1.2.0</version>
        </dependency>
```

→ 1.2.0-SNAPSHOT 이 없는 케이스 오류이다.

왜 없는지 사유는 아직 파악되지 않은 것 같다.

### 왜 biz에서 share쪽만 project.version 이 아니라 revision 인가??

→ repository 가 달라서 그렇다!

`project.version` 은 동일 `repository` 로 코드가 존재하고 컴파일이 가능하기 때문이고, `revision` 은 다른 `repository` 버전을 의존할 경우로 이미 빌드된 `lib` 로 사용할 경우이다!

ctalk 은 revision 이 제품 버전으로 동일하기 때문이고, 이전 제품에서는 `ctalk.share.version` 이다.