import React from "react";

// import Button from "./Button.js";

export default class Header extends React.Component {

  render(){
    console.log(this.props);
    return(
      // <h1 className={ "header " + this.props.className }>Shit</h1>
      <div className={this.props.className}>
          { this.props.children }
          {/* <Button className={ this.props.btnClassName } title={this.props.buttonTitle}/> */}
      </div>
    );
  }
}
