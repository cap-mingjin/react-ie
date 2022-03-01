import React from "react";
import styles from "./styles.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>footer</div>
      </div>
    );
  }
}

export default Footer;
