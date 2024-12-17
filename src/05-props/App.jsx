// import logo from './logo.svg';
// import './App.css';

import PropTypes from "prop-types";

// function Header(props) {
// 함수형 컴포넌트는 모든 attribute 들이 매개변수로 전달된다
//   console.log(props);
function Header({ title }) {
  console.log(title);
  return (
    <header>
      <h1>
        <a href="/">{title}</a>
      </h1>
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string,
};

function Nav({ topics }) {
  console.log("topics:", topics);
  return (
    <nav>
      <ol>
        {/* <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li> */}
        {topics.map((topic) => (
          <li key={topic.id}>
            <a href={"/read/" + topic.id}>{topic.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
Nav.propTypes = {
  topics: PropTypes.array,
};

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      {body}
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
    { id: 3, title: "Javascript", body: "Javascript is ..." },
  ];

  return (
    <div className="App">
      <Header title="REACT"></Header>

      {/* topics 배열을 Nav컴포넌트에 전달  */}
      <Nav topics={topics}></Nav>

      {/* Artocle 컴포넌트에 title, body 속성 전달 */}
      <Article title="Welcome" body="Hello, Web"></Article>
      {/* <Article title="Hi" body="Hello, React"></Article> */}
    </div>
  );
}

export default App;
