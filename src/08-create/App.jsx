// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

function Header(props) {
  console.log("props", props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

// Create 컴포넌트
// 8-7 App 참조 (거기서 복붙했슈~)
function Create({ onCreate }) {
  // 생성 함수 전달 : onCreate
  return (
    <article>
      <h2>Create</h2>

      <form
        onSubmit={(event) => {
          // 폼 전송 이벤트
          event.preventDefault(); // 기본 동작 중지       (이벤트 타겟은, from. / 그렇게 from의 타이틀, 바디 값을 받아올것이다)
          const title = event.target.title.value;
          const body = event.target.body.value;
          onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  //   const topics = [
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);
  let content = null;

  // 모드 전환
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          // 새 토픽 생성
          const newTopic = { id: nextId, title: _title, body: _body };

          // 새 토픽을 topic에 추가
          // state 를 변경할 때는 반드시 상태변경함수(set)를 활용해야한다 **매우 중요**
          setTopics([...topics, newTopic]);
          //   topics.push(newTopic);        -> 사용하면 안되는 방법. push가 아니라, 상태 변경 함수(set) 써야함

          // READ 모드로 이동
          // 그럼 뭐 필요해? ~> 선택된 article id, made -> READ
          setMode("READ");
          setId(nextId);

          // nextId 갱신 (id 번호가 중복되는거 막기 위해)
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  }
  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {content}
      <a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          setMode("CREATE");
        }}
      >
        Create
      </a>
    </div>
  );
}

export default App;
