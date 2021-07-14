import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="home" className="header-area pt-100">
          <div className="shape header-shape-one">
            <img src="assets/images/banner/shape/shape-1.png" alt="shape" />
          </div> {/* header shape one */}
          <div className="shape header-shape-tow animation-one">
            <img src="assets/images/banner/shape/shape-2.png" alt="shape" />
          </div> {/* header shape tow */}
          <div className="shape header-shape-three animation-one">
            <img src="assets/images/banner/shape/shape-3.png" alt="shape" />
          </div> {/* header shape three */}
          <div className="shape header-shape-fore">
            <img src="assets/images/banner/shape/shape-4.png" alt="shape" />
          </div> {/* header shape three */}
          <div className="header-banner d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-sm-10">
                <h4 className="sub-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">Passerelles numériques Vietnam</h4>
                  <div className="banner-content">
                    <h1 className="banner-title mt-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">Nơi nuôi dưỡng những ước mơ tuổi trẻ</h1>
                    <a className="banner-contact mt-25 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.3s" href="#contact">Cùng nhau xây dựng nên một cộng đồng IT vững mạnh và tử tế cùng với dự án #itnuoiit</a>
                  </div> {/* banner content */}
                </div>
              </div> {/* row */}
            </div> {/* container */}
            <div className="banner-image bg_cover" style={{backgroundImage: 'url(assets/images/banner/banner-image.jpg)'}} />
          </div> {/* header banner */}
        </header>
        );
    }
}

export default Header;