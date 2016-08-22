import React from "react";

export default class Button extends React.Component{

  render(){
    return(
      <button className={this.props.btnClassName} onClick={this.props.onClick}>Logga in/registrera dig</button>
      // {"btn " + this.props.className}
    );
  }
}
