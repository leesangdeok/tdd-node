# Node.js TDD

## package.json

npm으로 의존성 및 프로젝트 관리에 필요한 package.json 생성

```bash
# npm init
```

## mocha 

mocha는 Node.js, 브라우저, 비동기 테스트를 할 수 있는 javascript test framework 이다.

mocha install 
```bash
# npm install mocha -g
```

## chai 

chai는 Assert, Expect, Should 세가지 스타일을 제공하는 BDD/TDD assertion 라이브러리이다.

Assert : Node.js의 Assert와 유사하다.  

Expect :  
* BBD 스타일의 chainable language이다.   
* should와 동일하지만 초기 구성이 다르다.   
* 테스트 실패에 대한 메세지를 추가할 수 있다.

```javascript
var answer = 43;
// AssertionError: expected 43 to equal 42.
expect(answer).to.equal(42);
// AssertionError: topic [answer]: expected 43 to equal 42.
expect(answer, 'topic [answer]').to.equal(42);
```
Should : 
* expect와 동일한 BBD 스타일의 chainable language이다.  
* IE 호환성 문제가 발생한다.

chai install
* npm install 'module' 에서 --save 옵션은 로컬에 모듈을 설치하면서 자동으로 package.json의 dependencies에 업데이트
```bash
# npm install chai --save-dev
```

## test case

## test 
* test 디렉토리의 테스트 파일을 실행한다. (단일 파일 선택가능)
* --recursive 는 서브 디렉토리를 포함하여 테스트한다.
* --watch 는 소스를 수정하는 동한 테스트가 지속된다.

```bash
# mocha test --recursive --watch
# mocha test\tdd\chai-test.js --watch
```

* package.json에 스크립트 정의 후 테스트

```json
{
  "name": "node-tdd",
  "version": "1.0.0",
  "description": "node tdd",
  "main": "crawling.js",
  "scripts": {
    "test": "mocha test --recursive --watch"
  },
  "devDependencies": {
    "chai": "^4.1.2"
  }
}
```

* scripts에 테스트 내용을 정의 후 npm으로 실행한다.

```bash
# npm test
```
