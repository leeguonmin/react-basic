// import logo from "./logo.svg";
// import "./App.css";
import PropTypes from "prop-types";

// function Header(props) {                     // 이렇게 통째로 가져와도 되지만
function Header({ title, onChangeMode }) {
  // 이렇게 필요한것만 가져오는게 더 좋음
  // title, onChangeMode 전달 (F12 -> components(확장 프로그램이라서 따로 깔아야함) -> Header 누르면 볼 수 있음 )
  //   console.log("props", props);
  console.log("title:", title);
  return (
    <header>
      <h1>
        {/* 클릭 이벤트 부착 */}
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // 이벤트 기본 동작을 막는다 (해줘야함)
            // props.onChangeMode(); // 전달받은 onChangeMode 안쪽엔 alert 가 있겠지
            onChangeMode();
          }}
        >
          {title}
        </a>
      </h1>
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string,
  onChangeMode: PropTypes.func,
};

// function Nav(props) {
function Nav({ topics, onChangeMode }) {
  // topics, onChangeMode 추가
  const lis = [];
  //   for (let i = 0; i < props.topics.length; i++) {
  for (let i = 0; i < topics.length; i++) {
    // let t = props.topics[i];
    let t = topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault(); // 기본 동작 막기
            // props.onChangeMode(event.target.id);
            onChangeMode(event.target.id);
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
Nav.propTypes = {
  topics: PropTypes.array,
  onChangeMode: PropTypes.func,
};

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  return (
    <div className="App">
      {/* onChangeMode로 이벤트 핸들러 전달  */}
      {/* onChangeMode 얘가 이벤트. 06 App 에선 얘가 중요해 */}
      <Header
        title="WEB"
        onChangeMode={function () {
          alert("Header");
        }}
      ></Header>
      {/* Nav의 각각의 타이틀 링크를 누르면 alert 창이 뜨도록  이벤트 함수 전달*/}
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
