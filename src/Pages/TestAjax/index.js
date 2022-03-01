import React from "react";
import ReactDOM from "react-dom";
import JSON from "JSON2";

import Layout from "../../Components/Layout";
import UserCard from "../../Components/UserCard";
import styles from "./styles.css";
import { getXMLHttpRequest } from "../../utils";

const baseURL = "http://localhost:8080/users";

class TestAjax extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    try {
      const request = getXMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          // console.log(request);
          this.setState({
            users: JSON.parse(request.responseText),
          });
        }
      }.bind(this);

      request.open("POST", baseURL);
      request.send();
    } catch (err) {
      alert(err.message);
    }
  }

  render() {
    return (
      <Layout>
        <button onClick={this.fetchData}>Fetch users</button>
        <div className={styles.userCardList}>
          {this.state.users.map((u) => (
            <UserCard user={u} />
          ))}
        </div>
      </Layout>
    );
  }
}

ReactDOM.render(<TestAjax />, document.getElementById("app"));
