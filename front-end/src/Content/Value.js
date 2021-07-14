import React, { Component } from 'react';

class Value extends Component {
    render() {
        return (
            <section id="service" className="services-area pt-125 pb-130 gray-bg">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title text-center pb-20">
                      <h2 className="title">NHỮNG GIÁ TRỊ CỐT LÕI</h2>
                    </div> {/* section title */}
                  </div>
                </div> {/* row */}
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                      <div className="services-icon">
                        <i className="lni-blackboard" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">YÊU CẦU CAO</h4>
                      </div>
                    </div> {/* single services */}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                      <div className="services-icon">
                        <i className="lni-home" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">TIN TƯỞNG</h4>
                      </div>
                    </div> {/* single services */}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                      <div className="services-icon">
                        <i className="lni-briefcase" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">TRÁCH NHIỆM</h4>
                      </div>
                    </div> {/* single services */}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                      <div className="services-icon">
                        <i className="lni-handshake" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">ĐOÀN KẾT</h4>
                      </div>
                    </div> {/* single services */}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                      <div className="services-icon">
                        <i className="lni-grow" />
                      </div>
                      <div className="services-content mt-15">
                        <h4 className="services-title">TÔN TRỌNG</h4>
                      </div>
                    </div> {/* single services */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
        );
    }
}

export default Value;