import React, { Component } from 'react';
import { getAllDataTintuc } from '../../Router/APIRep';
import LisItem from '../Phongthuy/LisItem';
import CardItem from './CardItem';
import CardItemI1 from './CardItemI1';
class Docla extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:null
        }
    }
    componentWillMount(){
        if(this.state.data === null){
            getAllDataTintuc().then((res) => {
                this.setState({
                    data:res
                })
            })
            
        }
    }
    printData = () => {
        if(this.state.data !== null){
           return this.state.data.map((value,key) =>
                (<LisItem key = {key} TinId={key} Image = {value.img}
                          Name = {value.name} Date = {value.date}
                          Content = {value.content}/>)
            )
        }
    }
    PrintDataCardItemI1 = () => {
        if(this.state.data !== null){
            return this.state.data.map((value,key) =>{
                if(key === 7 ){
                   return (<CardItemI1 key = {key} TinId={key} Image = {value.img}
                        Name = {value.name}/>)
                }
                else{
                    return false;
                }
            }
             )
         }
    }
    PrintDataCardItem = () => {
        if(this.state.data !== null){
            return this.state.data.map((value,key) =>{
                if(key <=1 ){
                   return (<CardItem key = {key} TinId={key} Image = {value.img}
                        Name = {value.name}/>)
                }
                else{
                    return false;
                }
            }
             )
         }
    }
    render() {
        return (
            <div>
                <main>
                    <div className="container bread-wrapper">
                        <nav className="bread" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Độc lạ</li>
                        </ol>
                        </nav>
                        <div className="title-wrap">
                        <div className="title-wrap-content">
                            <h2>Độc lạ</h2>
                        </div>
                        <div className="title-wrap-item">
                            <div className="wrap-item">
                            <small>Mới nhất <i className="fas fa-angle-down pr-2" /></small>
                            </div>
                            <ul className="wrap-drop">
                            <li className="wrap-drop-item">
                                <a href="/">Mới nhất</a>
                            </li>
                            <li className="wrap-drop-item">
                                <a href="/">Tin tiêu biểu</a>
                            </li>
                            <li className="wrap-drop-item">
                                <a href="/">Phổ biến nhất</a>
                            </li>
                            <li className="wrap-drop-item">
                                <a href="/">Xem nhiều theo tuần</a>
                            </li>
                            <li className="wrap-drop-item">
                                <a href="/">Ngẫu nhiên</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* section1 mới */}
                    <section className="new">
                        <div className="container">
                        <div className="row Content-new">
                            {this.PrintDataCardItemI1()}
                            <div className="col-md-6 i2">
                            <div className="card-2">
                                {this.PrintDataCardItem()}
                            </div>
                            <div className="card-2">
                                {this.PrintDataCardItem()}
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* end section1 mới */}
                    {/* Tin tức */}
                    <section className="xuhuong">
                        <div className="container">
                        {this.printData()}
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                            <li className="page-item next">
                                <a className="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item">
                                <a className="page-link next" href="/" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </section>
                    </main>
            </div>
        );
    }
}

export default Docla;