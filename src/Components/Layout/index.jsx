import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styles from "./style.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
