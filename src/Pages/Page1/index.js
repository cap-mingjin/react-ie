import React from "react";
import ReactDOM from "react-dom";
import Layout from "../../Components/Layout";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isYes: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle (){
    this.setState({isYes:!this.state.isYes})
  }

  render() {
    return <Layout>
      <div>This is the content for page 1</div>
      <div>Toggle Yes/No: {this.state.isYes?"Yes":"No"}</div>
      <button onClick={this.toggle}>Toggle</button></Layout>;
  }
}

ReactDOM.render(<Page1 />, document.getElementById("app"));
