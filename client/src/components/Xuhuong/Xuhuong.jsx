import React, { Component } from 'react';
import ListItem from './ListItem';
// import {connect} from 'react-redux';
import { getAllDataTintuc } from '../../Router/APIRep';
// import axios from 'axios';
// const geXuHuongData = () => 
//     axios.get('/api/TinTuc')
//     .then((Response) => Response.data)
//     .catch((error) => console.log(error))

class Xuhuong extends Component {
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
        // if(this.props.getDataTintuc !== null){
        //     return this.props.getDataTintuc.map((value, key) => (
        //         <ListItem key = {key} Image = {value.img}
        //                   Name = {value.name} Date = {value.date}
        //                   Content = {value.content}/>
        //     ))
        // }
        // this.props.getDataTintuc && this.props.getDataTintuc.map((value,key) => {
        //     if(!value){
        //         return <div></div>
        //     }
        //     return <ListItem key = {key} Image = {value.img}
        //                       Name = {value.name} Date = {value.date}
        //                       Content = {value.content}/>
        // }) 
        if(this.state.data !== null){
           return this.state.data.map((value,key) =>
                (<ListItem key = {key} Image = {value.img}
                          Name = {value.name} Date = {value.date}
                          Content = {value.content}/>)
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
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Xu hướng</li>
                        </ol>
                        </nav>
                        <div className="title-wrap">
                        <div className="title-wrap-content">
                            <h2>Xu hướng</h2>
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
                            <div className="col-md-6 i1">
                            <div className="img-1">
                                <a href="/">
                                <img src="/img/x3.jpg" alt="i1" />
                                </a>
                            </div> 
                            <div className="Title-1">
                                <small>Xu Hướng</small>
                                <h3>Nên thiết kế nội thất phòng khách nhỏ như thế nào ? </h3>
                                <span>02/04/2019</span>
                            </div>
                            </div>
                            <div className="col-md-6 i2">
                            <div className="card-2">
                                <div className="card-item">
                                <div className="img-3">
                                    <a href="/">
                                    <img src="/img/x1.jpg" alt="i1" />
                                    </a>
                                </div> 
                                <div className="Title-3">
                                    <small>Xu Hướng</small>
                                    <h6>Mẫu thiết kế nội thất phòng ngủ màu trắng.</h6>
                                </div>
                                </div>
                                <div className="card-item">
                                <div className="img-3">
                                    <a href="/">
                                    <img src="/img/x2.jpg" alt="i1" />
                                    </a>
                                </div> 
                                <div className="Title-3">
                                    <small>Xu Hướng</small>
                                    <h6>Nguyên tắc thiết kế nội thất thông minh. </h6>
                                </div>
                                </div>
                            </div>
                            <div className="card-2">
                                <div className="card-item">
                                <div className="img-3">
                                    <a href="/">
                                    <img src="/img/i3.jpg" alt="i1" />
                                    </a>
                                </div> 
                                <div className="Title-3">
                                    <small>Xu Hướng</small>
                                    <h6>Mẫu thiết kế nội thất phòng ngủ màu trắng.</h6>
                                </div>
                                </div>
                                <div className="card-item">
                                <div className="img-3">
                                    <a href="/">
                                    <img src="/img/i4.jpg" alt="i1" />
                                    </a>
                                </div> 
                                <div className="Title-3">
                                    <small>Xu Hướng</small>
                                    <h6>Nguyên tắc thiết kế nội thất thông minh. </h6>
                                </div>
                                </div>
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
                            <ul className="pagination" id="navi-01">
                            <li className="page-item next">
                                <a className="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                </a>
                            </li>
                            <li className="page-item page-01 naviactive"><a className="page-link" href="/">1</a></li>
                            <li className="page-item page-01"><a className="page-link" href="/">2</a></li>
                            <li className="page-item page-01"><a className="page-link" href="/">3</a></li>
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
// const mapStateToProps = (state, ownProps) => {
//     return {
//         getDataTintuc: state.Tintuc
//     }
// }
// export default connect(mapStateToProps)(Xuhuong);
export default Xuhuong;