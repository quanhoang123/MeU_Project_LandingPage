import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <section id="about" className="about-area pt-80 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image mt-50 clearfix">
                  <div className="single-image float-left">
                    <img src="assets/images/about/about-1.jpg" alt="About" />
                  </div>
                  <div data-aos="fade-right" className="about-btn">
                    <a className="main-btn" href="#"><span>10+</span> Years Experience</a>
                  </div>
                  <div className="single-image image-tow float-right">
                    <img src="assets/images/about/about-2.jpg" alt="About" />
                  </div> {/* single image */}
                </div> {/* about image */}
              </div>
              <div className="col-lg-6">
                <div className="about-content mt-45">
                  <h4 className="about-welcome">Chúng tôi là ai? </h4>
                  <h2 className="about-title mt-10">Xin chào mọi người, </h2>
                  <p className="mt-25">Passerelles numériques (PN) là một tổ chức phi chính phủ đến từ Pháp, được thành lập từ năm 2005 với mong muốn tạo điều kiện để những thanh, thiếu niên có hoàn cảnh đặc biệt khó khăn có cơ hội học tập và tìm được việc làm trong lĩnh vực công nghệ thông tin.Tổ chức Passerelles numériques bắt đầu hoạt động tại Việt Nam từ năm 2010, đặt trụ sở tại thành phố Đà Nẵng, theo giấy phép hoạt động do Bộ Ngoại Giao Việt Nam cấp.
Đến nay PN Việt Nam đã cấp học bổng cho 326 sinh viên, trong số đó hiện tại có 89 sinh viên đang theo học (Khóa 6 và Khóa 7).
Trong năm 2017, Tổ chức PN Việt Nam cấp 45 suất học bổng toàn phần đào tạo Công nghệ Thông tin hệ Cao Đẳng 3 năm cho những thanh niên có hoàn cảnh khó khăn ở các tỉnh miền Trung và Tây Nguyên Việt Nam bao gồm: Đà Nẵng, Quảng Nam, Quảng Ngãi, Quảng Bình, Quảng Trị, Bình Định và Kon Tum.</p>
                  <a className="main-btn mt-25" href="#">Đọc thêm</a>
                </div> {/* about content */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
        </section>
        );
    }
}

export default AboutUs;