import React, { Component } from 'react';

class DangKiNhanThongTin extends Component {
    render() {
        return (
            <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-20">
                  <h2 className="title">ĐĂNG KÍ ĐỂ TRỞ THÀNH TÌNH NGUYỆN VIÊN CỦA CHÚNG TÔI</h2>
                </div> {/* section title */}
              </div>
            </div> {/* row */}
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form">
                  <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input type="text" name="name" placeholder="Họ và tên" data-error="Name is required." required="required" />
                          <div className="help-block with-errors" />
                        </div> {/* single form */}
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input type="email" name="email" placeholder="Địa chỉ E-mail" data-error="Valid email is required." required="required" />
                          <div className="help-block with-errors" />
                        </div> {/* single form */}
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input type="text" name="subject" placeholder="Nội dung E-Mail" data-error="Subject is required." required="required" />
                          <div className="help-block with-errors" />
                        </div> {/* single form */}
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input type="text" name="phone" placeholder="Số điện thoại" data-error="Phone is required." required="required" />
                          <div className="help-block with-errors" />
                        </div> {/* single form */}
                      </div>
                      <div className="col-md-12">
                        <div className="single-form form-group">
                          <textarea placeholder="Lời nhắn của bạn" name="message" data-error="Please,leave us a message." required="required" defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div> {/* single form */}
                      </div>
                      <p className="form-message" />
                      <div className="col-md-12">
                        <div className="single-form form-group text-center">
                          <button type="submit" className="main-btn">ĐĂNG KÍ</button>
                        </div> {/* single form */}
                      </div>
                    </div> {/* row */}
                  </form>
                </div> {/* row */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
        </section>
        );
    }
}

export default DangKiNhanThongTin;