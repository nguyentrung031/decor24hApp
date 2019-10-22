import React, { Component } from 'react';
import { AddData } from '../../Router/APIRep';
class MailItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            Email:''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    handleClick = (email,event) => {
        event.preventDefault(); //stop, ko cho chạy lại trang
        var item = {};
        item.Email = email;
        AddData(item).then(res =>{
            console.log(res);
            
        }); 
        alert("Đã gửi Email!");
    }
    render() {
        return (
            <form>
            <div className="form-group">
              <label htmlFor="Email"></label>
              <input onChange = {(event) => this.isChange(event)} type="Email" className="form-control" name="Email" id="Email" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button onClick = {(event) => this.handleClick(this.state.Email,event)} type="submit" className="btn btn-info">Send</button>
          </form>
        );
    }
}
export default MailItem;