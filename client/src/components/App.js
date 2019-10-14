import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './../App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouterURL from '../Router/RouterURL';
// import axios from 'axios';

class App extends Component {
//     state = {
//         greeting: ''
//     }
  
//   componentDidMount() {
//       axios.get('api/helloworld')
//           .then(result => this.setState({greeting: result.data.Title}))
//   }
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <RouterURL/>
                    <Footer/>
                </div>
            </Router> 
        );
    }
}

export default App;