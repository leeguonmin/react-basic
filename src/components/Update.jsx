import PropTypes from "prop-types";

import { useState } from "react";

// function Update(props) {
function Update(props) {
  // 여기서 props 그냥 쓰는 이유 : 밑에 title이 충돌나니까

  // title하고 body, 그리고 onUpdate 받아온거

  // const title = props.title;
  // const body = props.body;

  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
          {/* value 속성과 onChange 이벤트를 이용해 상태를 관리 */}
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}
Update.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default Update;
