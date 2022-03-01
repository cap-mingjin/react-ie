import React from "react";
import ReactDOM from "react-dom";
import Layout from "../../Components/Layout";
import styles from "./styles.css";

class Home extends React.Component {
  render() {
    return <Layout>This is the content for home page</Layout>;
  }
}

ReactDOM.render(<Home />, document.getElementById("app"));
