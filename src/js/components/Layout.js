import React from "react";

import Header from "./Header.js";
import Button from "./Button.js";
import Footer from "./Footer.js";

export default class Layout extends React.Component{
  changeTitle = (e) => {
    alert(e.target);
    console.log(this);
    // this.setState({title});
  };
  render(){
    return(
      <div className="container-site">
        <Header className="container-site-header"><Button btnClassName="btn-primary" onClick={this.changeTitle}/> </Header>
        <div className="container-site-innerBody">
          some content
        </div>
        <Footer className="container-site-footer"/>

        {/* <Footer className="btn-success" buttonTitle="test"/> */}
      </div>
    );
  }
}
