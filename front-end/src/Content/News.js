import React, { Component } from 'react';
import Donation_text from '../components/Content/donation-text';
import Image_new from '../components/Image-component/image_new';
import Title from '../components/Title-components/Title';

class News extends Component {
    render() {
        return (
            <section id="news" className="news-area pt-125 pb-130 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-20">
              <Title title="New Information"></Title>
              </div> {/* section title */}
            </div>
          </div> {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-news text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                <div className="services-img">
                  <Image_new image="assets/images/news/news1.jpg"></Image_new>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">Doanh nghiệp hoạt động từ thiện trên thước đo giá trị lâu dài và bền vững</h4>
                  <Donation_text content="Đem lại những tác động lâu dài và bền vững cho cộng đồng, là định hướng hoạt động từ thiện của KMS Technology, công ty dịch vụ phần mềm với hơn 1,000 nhân sự tại Việt Nam và Hoa Kỳ."></Donation_text>
                
                </div>
                <button className="main-btn">Đọc tiếp</button>
              </div> {/* single services */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-news text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
              <div className="services-img">
                  <Image_new image="assets/images/news/news2.jpg"/>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">“Em đã chọn nói không”</h4>
                  <Donation_text content="H. đã chọn nói không với định kiến về việc con gái đủ tuổi thì nên lấy chồng để làm tròn đạo hiếu. 
                  H. đã chọn nói không với suy nghĩ nghèo thì không cần học nhiều, nghỉ ở nhà phụ bố mẹ đi làm nuôi em."/>
                </div>
                <button className="main-btn">Đọc tiếp</button>
              </div> {/* single services */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-news text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
              <div className="services-img">
          
                  <Image_new image="assets/images/news/news3.jpg"/>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">Hoa nở trong bão</h4>
                  <Donation_text content="“Mỗi người sinh ra đều có một số mệnh” – Đó là điều mà Trần T.Q., sinh viên Passerelles numériques Vietnam (PNV) khóa 20, hiện đang là kỹ sư công nghệ thông tin nói về câu chuyện của cuộc đời mình. Như một bông hoa giữa giông bão của cuộc đời, cô gái trẻ đã không ngừng cố gắng để hướng đến một tương lai tốt đẹp hơn."/>
                </div>
                <button className="main-btn">Đọc tiếp</button>
              </div> {/* single services */}
            </div>
          </div> {/* row */}
          <div class="center">
            <button className="main-btn">Đọc thêm nhiều bài báo của PNV</button>
          </div>
        </div> {/* container */}
      </section>
        );
    }
}

export default News;