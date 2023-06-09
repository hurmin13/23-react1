# 허민

## 12주차(2023.05.18)

### 합성 : 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것

1. Containment : 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법

2. Soecialization : 범용적인 갸념을 구별이 되게 구체화하는 것

3. Containment와 Specialization을 같이 사용하기

- Containment를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 된다.

### 상속

- 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념이다. 하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성한다.

### 컨텍스트 : 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식을 제공한다

- 컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달할 수 있다.

### 컨텍스트 API

1. React.createContext

- 컨텍스트를 생성하기 위한 함수

- 파라메타에는 기본값을 넣어주면 된다.

2. Context.Provider

- 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 된다.

3. Class.contextType

- Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 에디터에 접근하기 위해 사용.

4. Context.Consumer

- 함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구독할 수 있다.

5. Context.displayName

- 컨테스트 객체는 displayName이라는 문자열 속성을 갖습니다.

## 11주차(2023.05.11)

### 1. Shared State :어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우

![default](image/3.PNG)

- 부모 컴포넌트 -> degree
- 컴포넌트 C -> 온도를 섭씨로 표현하는 컴포넌트
- 컴포넌트 F -> 온도를 화씨로 표현하는 컴포넌트
- 자식 컴포넌트들이 각각 온도 값을 가지고 있을 필요 없이, 부모 컴포넌트에 있는 섭씨온도 값을 변환해서 표시하면 된다.

-> 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는것

## 10주차(2023.05.04)

### 1.1 리스크: 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것입니다.

### 1.2 키: 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.

### 2 여러 개의 컴포넌트 렌더링하기

- 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어 있는 엘리먼트를 map() 함수를 이용하여 렌더링

### 3 기본적인 리스트 컴포넌트

### 4 리스트의 키: 리스트에서 아이템을 구별하기 위한 고유한 문자열

- 이 키는 리스트에서 어떤 아이템이 변경 추가 또는 제거되었는지 구분하기 위해 사용

- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다.

### 5 폼: 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용

ex)

```c
<form>
  <label>
    이름:
    <input type ="text" name="name"/>
  </label>
  <button type="submit">제출</button>
</form>
```

<form>
  <label>
    이름:
    <input type ="text" name="name"/>
  </label>
  <button type="submit">제출</button>
</form>

### 6 제어 컴포넌트 : 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트

### 1. textarea 태그

```c
<textarea>
  안녕하세용
</textarea>
```

<textarea>
  안녕하세용
</textarea>

### 2. select 태그

```c
<select>
  <option value="apple">사과</option>
  <option value="banana">바나나</option>
  <option value="grape">포도</option>
</select>
```

<select>
  <option value="apple">사과</option>
  <option value="banana">바나나</option>
  <option value="grape">포도</option>
</select>

### 3. File input 태그 : 그값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 된다

```c
<input type="file"/>
```

### 4. Input Null Value

- 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없다.

- 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 된다.

```c
ReactDOM.render(<input value="hi"/>,rootNode);

setTimeout(function(){
    ReactDOM.render(<input value={null}/>,rootNode);
},1000);
```

## 9주차(2023.04.27)

### 이벤트 처리하기

```c
<button onClick={activate}>
  Activate
</button>
```

이벤트가 발생했을 떄 해당 이벤트를 처리하는 함수를 "이벤트 핸들러"라고 한다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너"라고도 한다.

함수를 정의할 때는 파라미터 혹은 매개변수, 함수를 사용할 때는 아귀먼트 혹은 인자라고 부른다

```c
<button onClick={(event)=>this.deleteItem(id,event)}>삭제하기</button>

<button onClick={this.deleteItem.bind(this,id)}>삭제하기</button>
```

-동일한 역할이지만 하나는 화살표 함수를 다른 하나는 bind를 사용

-event라는 매개변수는 리액트의 이벤트 객체를 의미

-첫번째 매개변수는 id이고 두번째는 event가 전달

### 조건부 렌더링

```c
function Greeting(props){
  const isLiggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>;
  }
  return <GusetGreeting/>;
}
```

- props로 전달 받은 isLoggedIn이 true이면 <UserGreeting/>을, false면 <GusetGreeting/>을 return

- 이와 같은 렌더링을 조건부 렌더링 이라고 한다.

- 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수

## 8주차(2023.04.20)

중간고사

## 7주차(2023.04.13)

### 1 훅 : State와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수

### 2 useState : 함수형 컴포넌트에서 state를 사용하기 위한 Hook

### 3 use Effect : 사이드 이펙트를 수행하기 위한 Hook

- 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며 렌더링 중에는 작업이 완료될 수 없기 때문이다

- 클래스 컴포넌트의 생명주기 함수와 같은 가능을 하나로 통합한 기능을 제공

###### 사이드 이펙트 : 원래의 용도 혹은 목적의 효과외에, 부수적으로 다른 효과가 있는 것

### 4 useMemo : useMemo() 혹은 Memozide value를 리턴하는 훅

- 이 훅은 렌더링이 일어나는 동안 실행됨

- 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안된다.

### 5 useCallback : useCallback() 훅은 useMemo()와 유사한 역할을 하지만 차이점은 값이 아닌 함수를 반환한다는 점

### 6 useRef : 레퍼런스를 사용하기 위한 훅

##### 레퍼런스 : 특정 컴포넌트에 접근할 수 있는 객체

### 7 훅의 규칙

1. 최상의 레벨에서만 호출해야 한다

- 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 표출하면 안된다.
- 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 한다.

2. 리액트 함수 컴포넌트에서만 훅을 호출해야 한다.

- 따라서 일반 자바스크립트 함수에서 호출하면 안된다.
- 훅은 리액트 함수 컴포넌트 훅은 직접 만든 커스텀 훅에서만 호출 할 수 있다.

## 6주차(2023.04.06)

### (지난주) 5 컴포넌트 추출 : 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다.

- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.

### 1 State: 리액트 컴포넌트의 상태 (상태:컴포넌트의 데이터)

##### 정확히는 컴포넌트의 변경가능한 데이터를 의미

- State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 한다.

### 2 state의 특징

- 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐이다.
- state는 변경은 가능하다고 했지만 직접 수정해서는 안된다.
- 굳이 변경하고자 할 때는 setstate()함수를 사용한다.

### 3 생명주기 : 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것

1. constructor가 실행되면서 컴포넌트가 생성
2. 생성 직후 conponentDidMount() 함수가 호출
3. 컴포넌트가 소멸하기 전까지 여러 번 렌더링
4. 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어진다.
5. 그리고 렌더링이 끝나면 conponentDinUpdate() 함수가 호출
6. 마지막으로 컴포넌트가 언마운트 되면 conponentWillUnmount() 함수가 호출

## 5주차(2023.03.30)

### 1 엘리먼트 : 리액트 앱을 구성하는 요소

##### (리액트 앱의 가장 작은 빌딩 블록들)

##### 웹사이트의 경우 DOM 엘리먼트이며 HTML요소를 의미

\*리액트 엘리먼트와 DOM엘리먼트의 차이점

- 리액트 엘리먼트 ->Virtual DOM(비동기식) 변화된 부분만 갖고 있어 가벼움

- DOM 엘리먼트 ->DOM(동기식) 페이지의 모든 정보를 갖고 있어 무거움

### 2 엘리먼트의 생김새

- 자바스크립트 객체의 형태로 존재
- 컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 JS객체
- 불변성

### 3 엘리먼트의 특징

- 불변성 - 한번 생성된 앨리먼트의 children이나 속성을 바꿀 수 없음

  만약에 내용이 바뀌면...?

  - 컴포넌트를 통해 새로운 엘리먼트를 생성
  - 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것
  - 이렇게 교체라는 작업을 하기위해 Virtual DOM을 사용

### 4 엘리먼트 렌더링하기

### Root DOM node

---

### 1 컴포넌트

- 리액트는 컴포넌트 기반의 구조를 갖는다.
- 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성
- 재사용 가능 -> 전체 코드양 감소 -> 개발시간, 유지 보수 비용 감소

### 2 Props : prop(property 속성,특성)의 준말

- 컴포넌트의 속성
- 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력
- 읽기 전용 즉 변경 할 수가 없다.
- 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 된다.

### 3 컴포넌트 만들기

3.1 컴포넌트의 종류 - 함수 컴포넌트 / 클래스 컴포넌트

- Hook이라는 개념이 나오면서 함수형 컴포넌트를 주로 사용하지만 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 떄문에 둘다 공부해야 한다.

- 항상 대문자로 시작 -> 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 떄문이다.

### 4 컴포넌트 합성 : 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것

- 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용 할 수 있기 떄문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있다.

### 5 컴포넌트 추출 : 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다.

- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.

##### \* 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.

## 4주차 (2023.03.23)

### 1 JSX(JavaScript XML) :자바스크립드에 XML을 추가한 확장 문법

### 2 JSX의 역할 --> 가독성을 높여 주는 역할

-내부적으로 XML/HTML코드를 자바스크립트로 변환

-React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환

### 3 JSX의 장점

-코드가 간결해짐

-가독성이 향상된다

-Injection Attack이라 불리는 해깅 방범을 방어함으로써 보안에 강함

- JSX 사용 - <div>Hello, {name}</div>
- JSX 사용 안함 - React.createElement('div',null,'Hello, ${name}');

### 4 JSX 사용법

-모든 자바스크립트 문법을 지원

-자바스크립트 문법에 XML과 HTML을 섞어서 사용

-html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용

## 3주차 (2023.03.16)

### 1 리액트:사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리

-SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구

### 2 리액트의 장점

2.1 빠른 업테이트와 렌더링 속도

-Virtual DOM :DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법

-DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링

\*동기식 : 서버와 클라이언트 사이에 전체 데이터를 렌더링

\*비동기식 : 서버와 클라이언트 사이에 필요한 데이터만 렌더링

2.2 컴포넌트 기반구조

-리액트의 모든 페이지는 컴포넌트로 구성

-하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성

2.3 재사용성

-반복적인 작업을 줄여주기 때문에 생산성을 높여준다 -유지보수가 용이

### 3 리액트의 단점

- 방대한 학습량 - 전공자에게는 해당 안될듯.. html,css등의 개념이 있기 때문에

- 높은 상태 관리 복잡도

## 2주차 (2023.03.09)

HTML:웹 사이트의 뼈대를 구성하는 테그
CSS: 웹 사이트의 세세한 부분까지의 디자인을 표현
JS: 동적인 부분 표현

자바스크립트의 자료형
var 중복선언 가능, 재할당가능
let 중복선언 불가능, 재할당 가능
const 중복선언 불가능, 재할당 불가능

자바스크립트의 연산자
대입연산자, 산술연산자, 증감 연산자
