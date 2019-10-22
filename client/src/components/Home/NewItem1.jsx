import React, { Component } from 'react';

class NewItem1 extends Component {
  render() {
    return (
      <div className="col-md-6 i1">
      <div className="img-1 i1">
        <a href={"/Detail/"+ this.props.TinId }>
          <img src={this.props.Image} alt="i1" />
        </a>
      </div> 
      <div className="Title-1">
        <small>Độc lạ</small>
        <a href={"/Detail/"+ this.props.TinId }><h3>{this.props.Name}</h3></a>
        <span>{this.props.Date}</span>
      </div>
    </div>
    );
  }
}

export default NewItem1;