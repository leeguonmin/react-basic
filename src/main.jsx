import { StrictMode } from "react"; // 모듈 modlue 이름 => react로 부터 StrictMode를 가져오겟다?
import { createRoot } from "react-dom/client"; // react-dom/client로 부터 createRoot를 가져오겠다? 받아오겠다?
// import './index.css'
// import App from './App.jsx'
// import App from "./04-create-component/App.jsx";
// import App from "./05-props/App.jsx";
// import App from "./06-events/App.jsx";
// import App from "./07-state/App.jsx";
import App from "./08-create/App.jsx";

//                                 Canvas 아이디를 가져왔
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
