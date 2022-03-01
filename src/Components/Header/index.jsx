import React from "react";
import styles from "./style.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="Page1.html">Page1</a>
          </li>
          <li>
            <a href="TestAjax.html">Test AJAX</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
