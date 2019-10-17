import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Xuhuong from '../components/Xuhuong/Xuhuong';
import Phongcach from '../components/Phongcach/Phongcach';
import KhongGian from '../components/Khonggian/KhongGian';
import Phongthuy from '../components/Phongthuy/Phongthuy';
import Meovat from '../components/Meovat/Meovat';
import Docla from '../components/Docla/Docla';
import Vattu from '../components/Vattu/Vattu';
import Detail from '../components/Detail/Detail';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/XuHuong/" component={Xuhuong} />
                        <Route path="/PhongCach/" component={Phongcach} />
                        <Route path="/KhongGian" component={KhongGian} />
                        <Route path="/PhongThuy/" component={Phongthuy} />
                        <Route path="/MeoVat/" component={Meovat} />
                        <Route path="/VatTu/" component={Vattu} />
                        <Route path="/DocLa/" component={Docla} />
                        <Route path="/Detail/:id" component={Detail} />
                    </div>
             </Router>
            </div>
        );
    }
}

export default RouterURL;