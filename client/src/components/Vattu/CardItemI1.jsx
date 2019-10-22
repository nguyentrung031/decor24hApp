import React, { Component } from 'react';

class CardItemI1 extends Component {
  render() {
    return (
      <div className="col-md-6 i1">
        <div className="img-1">
            <a href={"/Detail/"+ this.props.TinId }>
            <img src={this.props.Image} alt="i1" />
            </a>
        </div> 
        <div className="Title-1">
            <small>Xu Hướng</small>
            <h3>{this.props.Name} </h3>
            <span>{this.props.Date}</span>
        </div>
      </div>
    );
  }
}

export default CardItemI1;