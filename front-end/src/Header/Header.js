import React, { Component } from 'react';
import callAPI from '../service/api-donation';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introductions:'',
            id: '',
            content: "",
            image: "",
            title: "",
            description: "",
        }
    }
    getData = () => {
        callAPI('introductions','GET',null).then(res=>{
            this.setState({ 
                introductions: res.data,
            });
            console.log(this.state.introductions.title);
        }).catch(err => { });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        const {introductions}=this.state;
        return (
            <div>
                <header id="home" className="header-area pt-100">
                    <div className="shape header-shape-one">
                        <img src="assets/images/banner/shape/shape-1.png" alt="shape" />
                    </div>
                    {/* header shape one */}
                    <div className="shape header-shape-tow animation-one">
                        <img src="assets/images/banner/shape/shape-2.png" alt="shape" />
                    </div>
                    {/* header shape tow */}
                    <div className="shape header-shape-three animation-one">
                        <img src="assets/images/banner/shape/shape-3.png" alt="shape" />
                    </div>
                    {/* header shape three */}
                    <div className="shape header-shape-fore">
                        <img src="assets/images/banner/shape/shape-4.png" alt="shape" />
                    </div>
                    {/* header shape three */}
                    <div className="header-banner d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-9 col-sm-10">
                                    <h4 className="sub-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">{introductions.title}</h4>
                                    <div className="banner-content">
                                        <h1 className="banner-title mt-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">{introductions.content}</h1>
                                        <a className="banner-contact mt-25 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.3s" href="#contact">{introductions.descriptions}</a>
                                    </div>                          
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */} <div className="banner-image bg_cover" style={{backgroundImage: 'url(assets/images/banner/banner-image.jpg)'}} />
                    </div>
                    {/* header banner */}
                </header>

            </div>
        );
    }
}

export default Header;