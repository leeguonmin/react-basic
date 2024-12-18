import PropTypes from "prop-types";

// function Header(props) {
function Header({ title, onChangeMode }) {
  // console.log("props", props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            // props.onChangeMode();
            onChangeMode();
          }}
        >
          {/* {props.title} */}
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

export default Header;
