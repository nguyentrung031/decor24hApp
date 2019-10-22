import React, { Component } from 'react';

class NewItem2 extends Component {
  render() {
    return (
      <div className="card-1">
      <div className="img-2">
        <a href={"/Detail/"+ this.props.TinId }>
          <img src={this.props.Image} alt="i1" />
        </a>
      </div> 
      <div className="Title-2">
        <small>Độc lạ</small>
        <h3>{this.props.Name}</h3>
      </div>
    </div>
    );
  }
}

export default NewItem2;