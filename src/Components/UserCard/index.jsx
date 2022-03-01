import React from "react";
import styles from "./styles.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={styles.container}>
        <div className={styles.title}>ID: {this.props.user.id}</div>
        <div className={styles.title}>{this.props.user.name}</div>
      </span>
    );
  }
}

export default UserCard;
