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
                                {/* {
                                introduction.map(a => (
                                    <tr>                                       
                                        <td>{a.id}</td>                                       
                                        <td>{a.name}</td>
                                        <td><img src={a.detail_image} width="200px" height="100px" id="imageDrink"/></td>
                                        <td>{a.description}</td>
                                        <td>{a.price}</td>
                                        <td>{a.sale}</td>
                                        <td>{a.star}</td>                                            
                                        <td>
                                            <ul className="list-inline m-0">
                                                <li className="list-inline-item">                                              
                                                    <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="modal" data-target="#updateDrinkModal" data-placement="top" title="Edit" onClick={()=>this.updateData(a.id)}><i className="fa fa-edit" /></button>
                                                </li>
                                                <li className="list-inline-item">
                                                   <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={()=>this.delete(a.id)}><i className="fa fa-trash" /></button>
                                                </li>
                                            </ul>                                           
                                        </td>
                                    </tr>
                                ))
                            } */}
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