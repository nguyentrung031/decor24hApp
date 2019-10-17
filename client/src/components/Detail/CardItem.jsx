import React, { Component } from 'react';

class CardItem extends Component {
  render() {
    return (
        <div className="card-item">
          <div className="img">
            <a href={"/Detail/"+ this.props.TinId}>
              <img src={this.props.Image} alt="" />
            </a>
          </div>
          <h6>{this.props.Name}</h6>
        </div>
    );
  }
}

export default CardItem;