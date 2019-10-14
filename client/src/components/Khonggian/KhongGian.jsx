import React, { Component } from 'react';

class KhongGian extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="container bread-wrapper">
                        <nav className="bread" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Không gian</li>
                        </ol>
                        </nav>
                        <div className="title-wrap">
                        <div className="title-wrap-content">
                            <h2>Không gian</h2>
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
                                <small>Không gian</small>
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
                                    <small>Không gian</small>
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
                                    <small>Không gian</small>
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
                                    <small>Không gian</small>
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
                                    <small>Không gian</small>
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
                        <ul className="list-unstyled">
                            <li className="media">
                            <a href="/">
                                <img src="/img/x14.png" className="mr-3" alt="..." />
                            </a>
                            <div className="media-body">
                                <a href><h3 className="mt-0 mb-1">5 mẫu thiết kế nội thất cao Cấp</h3></a>
                                <span>29/03/2019</span>
                                <p>Với 5 mẫu thiết kế nội thất châu Âu cao cấp sẽ giúp cho bạn có được nhiều sự lựa chọn hơn cho ngôi...</p>
                            </div>
                            </li>
                        </ul>
                        <ul className="list-unstyled">
                            <li className="media">
                            <a href="/">
                                <img src="/img/x15.png" className="mr-3" alt="..." />
                            </a>
                            <div className="media-body">
                                <a href><h3 className="mt-0 mb-1">5 Cách Trang Trí Nội Thất Phòng Khách Sang Trọng</h3></a>
                                <span>29/03/2019</span>
                                <p>Hãy để phòng khách của bạn trở nên đặc biệt và độc đáo bạn nên tham khảo ngay 5 cách trang trí nội thất...</p>
                            </div>
                            </li>
                        </ul>
                        <ul className="list-unstyled">
                            <li className="media">
                            <a href="/">
                                <img src="/img/x16.jpg" className="mr-3" alt="..." />
                            </a>
                            <div className="media-body">
                                <a href><h3 className="mt-0 mb-1">Một Số Thiết Kế Hồ Bơi Mini Trong Nhà Phố</h3></a>
                                <span>29/03/2019</span>
                                <p>Thiết kế hồ bơi mini trong nhà phố là một trong những xu hướng nổi bật thịnh hành hiện nay trên thị trường với...</p>
                            </div>
                            </li>
                        </ul>
                        <ul className="list-unstyled">
                            <li className="media">
                            <a href="/">
                                <img src="/img/x17.jpg" className="mr-3" alt="..." />
                            </a>
                            <div className="media-body">
                                <a href><h3 className="mt-0 mb-1">Những Lưu Ý Khi Thiết Kế Nhà Cấp 4 3 Phòng Ngủ</h3></a>
                                <span>29/03/2019</span>
                                <p>Nếu bạn đang có ý đinh xây tổ ấm của mình bằng ngôi nhà cấp 4 thì phải tham khảo những lưu ý khi...</p>
                            </div>
                            </li>
                        </ul>
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

export default KhongGian;