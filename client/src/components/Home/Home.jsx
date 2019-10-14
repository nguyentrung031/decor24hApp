import React, { Component } from 'react';
import MailItem from './MailItem';

class Home extends Component {
    render() {
        return (
            <div>
                <main>
                  {/* section1 mới */}
                  <section className="new">
                    <div className="container">
                      <div className="Title-new">
                        <h6>new</h6>
                        <div className="Title-slide">
                          <a href="/Detail/"><p>Tốp 5 thiết kế nội thất đẹp nhất!</p></a>
                        </div>
                      </div>
                      <div className="row Content-new">
                        <div className="col-md-6 i1">
                          <div className="img-1 i1">
                            <a href="/Detail/">
                              <img src="/img/i1.jpg" alt="i1" />
                            </a>
                          </div> 
                          <div className="Title-1">
                            <small>Độc lạ</small>
                            <a href="/Detail/"><h3>Nên thiết kế nội thất phòng khách nhỏ như thế nào ? </h3></a>
                            <span>02/04/2019</span>
                          </div>
                        </div>
                        <div className="col-md-6 i2">
                          <div className="card-1">
                            <div className="img-2">
                              <a href="/">
                                <img src="/img/i2.jpg" alt="i1" />
                              </a>
                            </div> 
                            <div className="Title-2">
                              <small>Độc lạ</small>
                              <h3>5 thiết kế nội thất đơn giản!</h3>
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
                                <small>Độc lạ</small>
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
                                <small>Độc lạ</small>
                                <h6>Nguyên tắc thiết kế nội thất thông minh. </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* end section1 mới */}
                  {/* section2 xu hương */}
                  <section className="xuhuong">
                    <div className="container">
                      <div className="Title-wrap">
                        <h6>XU HƯỚNG MỚI NHẤT</h6>
                        <nav>
                          <ul>
                            <li className="T-item">
                              <a href="/">Xem thêm</a>
                            </li>
                            <li className="T-item">
                              <a href="/">Độc lạ</a>
                            </li>
                            <li className="T-item">
                              <a href="/">Không gian</a>
                            </li>
                            <li className="T-item">
                              <a href="/">Mẹo vặt</a>
                            </li>
                            <li className="T-item">
                              <a href="/">Nhiều hơn <i className="fas fa-angle-down pr-2x" /></a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="row xh-content">
                        <div className="col-md-4">
                          <div className="img">
                            <a href="/">
                              <img src="/img/s1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="content-item">
                            <a href="/">
                              <h5>Thiết kế nội thất gỗ Pallet như thế nào?</h5>
                            </a>
                            <span>29/03/2019</span>
                            <p>Thiết kế nội thất gỗ pallet là xu hướng của nhiều không gian hiện nay. Gỗ thông pallet trong trang trí tạo vẻ đẹp bền chắc. Nhiều khách hàng trên thị trường gỗ thông ghép...</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="img">
                            <a href="/">
                              <img src="/img/s1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="content-item">
                            <a href="/">
                              <h5>Nên trang trí nội thất phòng khách gỗ tự nhiên như thế nào?</h5>
                            </a>
                            <span>28/03/2019</span>
                            <p>Các nhà thiết kế luôn yêu cầu sự thống nhất giữa phong cách kiến trúc và phong cách nội thất. Các phong cách kiến trúc nội thất gắn liền với cá tính...</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="media">
                            <a href="/"><img src="/img/s12.jpg" className="mr-3" alt="..." /></a>
                            <div className="media-body">
                              <a href="/"><h5 className="mt-0">Thiết kế nội thất nhà bếp thông minh như thế nào?</h5></a>
                              <span>29/03/2019</span>
                            </div>
                          </div>
                          <div className="media">
                            <a href="/">
                              <img src="/img/s12.jpg" className="mr-3" alt="..." />
                            </a>
                            <div className="media-body">
                              <a href="/">
                                <h5 className="mt-0">5 mẫu thiết kế nội thất nhà bếp đơn giản.</h5>
                              </a>
                              <span>29/03/2019</span>
                            </div>
                          </div>
                          <div className="media">
                            <a href="/">
                              <img src="/img/s13.jpg" className="mr-3" alt="..." />
                            </a>
                            <div className="media-body">
                              <a href="/">
                                <h5 className="mt-0">5 mẫu thiết kế nội thất kiểu hàn đơn giản, đẹp.</h5>
                              </a>
                              <span>29/03/2019</span>
                            </div>
                          </div>
                          <div className="media">
                            <a href="/">
                              <img src="/img/s14.png" className="mr-3" alt="..." />
                            </a>
                            <div className="media-body">
                              <a href="/">
                                <h5 className="mt-0">Những nguyên tắc cần lưu ý khi thiết kế nội thất khách sạn Mini.</h5>
                              </a>
                              <span>29/03/2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* end section2 xu hương */}
                  {/* section 3 phong cach and meo vat */}
                  <section className="wrapper-pc">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 phongcach">
                          <div className="Title">
                            <small>PHONG CÁCH</small>
                          </div>
                          <div className="card-content">
                            <div className="card-item">
                              <div className="img">
                                <a href="/">
                                  <img src="/img/p1.jpg" alt="" />
                                </a>
                              </div>
                              <div className="content-pc">
                                <a href="/">
                                  <h5>Các phong cách kiến trúc nội thất nổi tiếng</h5>
                                </a>
                                <span>31/03/2019</span>
                                <p>Các nhà thiết kế luôn yêu cầu sự thống nhất giữa phong cách kiến trúc và phong cách nội thất. Các phong cách kiến trúc nội thất gắn liền với cá tính...</p>
                              </div>
                            </div>
                            <div className="card-item">
                              <div className="img">
                                <a href="/">
                                  <img src="/img/p2.jpg" alt="" />
                                </a>
                              </div>
                              <div className="content-pc">
                                <a href="/">
                                  <h5>Áp dụng phong cách nhật trong thiết kế nội thất như thế nào?</h5>
                                </a>
                                <span>31/03/2019</span>
                                <p>Phong cách nhật trong thiết kế nội thất đang rất được ưa chuộng bởi kiểu dáng đẹp, sang trọng và tinh tế. Xu hướng bài trí của người Nhật...</p>
                              </div>
                            </div>
                          </div>
                          <div className="media-content">
                            <div className="media m1">
                              <a href="/">
                                <img src="/img/m1.jpg" className="mr-3" alt="..." />
                              </a>
                              <div className="media-body">
                                <a href="/">
                                  <h6 className="mt-0">Thiết kế nội thất phong cách đương đại đẹp</h6>
                                </a>
                                <span>21/03/2019</span>
                              </div>
                            </div>
                            <div className="media m1">
                              <a href="/"><img src="/img/p22.jpg" className="mr-3" alt="..." /></a>
                              <div className="media-body">
                                <a href="/"><h6 className="mt-0">các phong cách tiêu biểu tại việt nam</h6></a>
                                <span>21/03/2019</span>
                              </div>
                            </div>
                          </div>
                          <div className="media-content">
                            <div className="media m1">
                              <a href="/"><img src="/img/p23.jpg" className="mr-3" alt="..." /></a>
                              <div className="media-body">
                                <a href="/">
                                  <h6 className="mt-0">5 quán cafe có thiết kế nội thất phong cách Vintage</h6>
                                </a>
                                <span>06/03/2019</span>
                              </div>
                            </div>
                            <div className="media m1">
                              <a href="/"><img src="/img/m4.jpg" className="mr-3" alt="..." /></a>
                              <div className="media-body">
                                <a href="/">
                                  <h6 className="mt-0">thiết kế nội thất phong cách châu âu cấp 4</h6>
                                </a>
                                <span>06/03/2019</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 meovat">
                          <div className="Title">
                            <small>MẸO VẶT</small>
                          </div>
                          <div className="mv-content">
                            <div className="card-mv">
                              <a href="/"><img src="/img/m11.jpg" alt="" /></a>
                              <a href="/">
                                <h6>Cách phối màu nội thất phòng ngủ hợp phong thủy</h6>
                              </a>
                            </div>
                            <div className="card-mv">
                              <a href="/"><img src="/img/m2.jpg" alt="" /></a>
                              <a href="/">
                                <h6>cách phối màu trong thiết kế nội thất hài hòa</h6>
                              </a>
                            </div>
                          </div>
                          <div className="mv-content">
                            <div className="card-mv">
                              <a href="/">
                                <img src="/img/m3.jpg" alt="" />
                              </a>
                              <a href="/">
                                <h6>Thiết kế nội thất đơn giản cho phòng khách chung cư</h6>
                              </a>
                            </div>
                            <div className="card-mv">
                              <a href="/"><img src="/img/m4.jpg" alt="" /></a>
                              <a href="/">
                                <h6>Thiết kế nội thất nhà hàng nhật sang trọng</h6>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* end section 3 */}
                  {/* section 4 doc la */}
                  <section className="docla">
                    <div className="container">
                      <div className="Title">
                        <small>ĐỘC LẠ</small>
                      </div>
                      <div className="Card-body-01">
                        <div className="card-item">
                          <div className="img">
                            <a href="/">
                              <img src="/img/d1.jpg" alt="" />
                            </a>
                          </div>
                          <h6>Nên thiết kế nội thất phòng khách nhỏ gọn như thế nào?</h6>
                        </div>
                        <div className="card-item">
                          <div className="img">
                            <img src="/img/d2.jpg" alt="" />
                          </div>
                          <h6>5 thiết kế nội thất phòng ngủ đơn dản</h6>
                        </div>
                        <div className="card-item">
                          <div className="img">
                            <img src="/img/d3.jpg" alt="" />
                          </div>
                          <h6>Mẫu thiết kế nội thất phòng ngủ màu trắng</h6>
                        </div>
                        <div className="card-item">
                          <div className="img">
                            <img src="/img/d4.jpg" alt="" />
                          </div>
                          <h6>nguyên tắc thiết kế nội thất phòng ngủ thông minh{/*6*/}
                          </h6></div>
                        <div className="card-item">
                          <div className="img">
                            <img src="/img/d5.jpg" alt="" />
                          </div>
                          <h6>Bí quyết trang trí nội thất cầu thang</h6>
                        </div>
                        <div className="card-item">
                          <div className="img">
                            <img src="/img/d6.jpg" alt="" />
                          </div>
                          <h6>4 mẫu trang trí nội thất nhà cấp 4</h6>
                        </div>
                      </div>
                      <div className="td-next-prev-wrap">
                        <a href="/" className="prev position-top">
                          <i className="fas fa-angle-left" />
                        </a>
                        <a href="/" className="next position-top">
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </section>
                  {/* end section 4 doc la */}
                  {/* section 5 vat tu */}
                  <section className="vattu">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 connect-face">
                          <div className="Title">
                            <small>KẾT NỐI VỚI CHÚNG TÔI</small>
                          </div>
                          <MailItem/>
                        </div>
                        <div className="col-md-8 vattu-body">
                          <div className="Title">
                            <small>VẬT TƯ</small>
                          </div>
                          <div className="vattu-wrap">
                            <div className="vattu-item-one">
                              <div className="img">
                                <a href="/">
                                  <img src="/img/v1.jpg" alt="" />
                                </a>
                              </div>
                              <div className="content-item">
                                <h5>Nên trang trí nội thất phòng khách gỗ tự nhiên như thế nào?</h5>
                                <span>28/03/2019</span>
                                <p>Các nhà thiết kế luôn yêu cầu sự thống nhất giữa phong cách kiến trúc và phong cách nội thất. Các phong cách kiến trúc nội thất gắn liền với cá tính...</p>
                              </div>
                            </div>
                            <div className="vattu-item-tow">
                              <div className="media">
                                <img src="/img/s12.jpg" className="mr-3" alt="..." />
                                <div className="media-body">
                                  <h5 className="mt-0">Thiết kế nội thất nhà bếp thông minh như thế nào?</h5>
                                  <span>29/03/2019</span>
                                </div>
                              </div>
                              <div className="media">
                                <img src="/img/s12.jpg" className="mr-3" alt="..." />
                                <div className="media-body">
                                  <h5 className="mt-0">5 mẫu thiết kế nội thất nhà bếp đơn giản.</h5>
                                  <span>29/03/2019</span>
                                </div>
                              </div>
                              <div className="media">
                                <img src="/img/s13.jpg" className="mr-3" alt="..." />
                                <div className="media-body">
                                  <h5 className="mt-0">5 mẫu thiết kế nội thất kiểu hàn đơn giản, đẹp.</h5>
                                  <span>29/03/2019</span>
                                </div>
                              </div>
                              <div className="media">
                                <img src="/img/s14.png" className="mr-3" alt="..." />
                                <div className="media-body">
                                  <h5 className="mt-0">Những nguyên tắc cần lưu ý khi thiết kế nội thất khách sạn Mini.</h5>
                                  <span>29/03/2019</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* end section 5 vat tu */}
                </main>

            </div>
        );
    }
}

export default Home;