import "./portfolio.css";
import port1 from './../../assets/poert1.png';
import port2 from './../../assets/port2.png';
import port3 from './../../assets/port3.png';
function Portfolio() {
    return (
        <div className="portfolio custum-margin py-5 ">
            <div className="custum-header-title text-center mb-5">
                <h2 className="text-uppercase">portfolio component</h2>
                <span className='icon'>
                    <i className="fa-solid fa-star"></i>
                </span>
            </div>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="img-con position-relative">
                            <img src={port1} alt="" className='w-100 rounded-4' />
                            <div className="layer rounded-4">
                                <i className='fa-solid fa-plus display-1 text-white'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="img-con position-relative">
                            <img src={port2} alt="" className='w-100  rounded-4' />
                            <div className="layer rounded-4">
                                <i className='fa-solid fa-plus display-1 text-white'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="img-con position-relative">
                            <img src={port3} alt="" className='w-100  rounded-4' />
                            <div className="layer rounded-4">
                                <i className='fa-solid fa-plus display-1 text-white'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="img-con position-relative">
                            <img src={port1} alt="" className='w-100  rounded-4' />
                            <div className="layer rounded-4">
                                <i className='fa-solid fa-plus display-1 text-white'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="img-con position-relative">
                            <img src={port2} alt="" className='w-100  rounded-4' />
                            <div className="layer rounded-4">
                                <i className='fa-solid fa-plus display-1 text-white'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="img-con position-relative">
                            <img src={port3} alt="" className='w-100  rounded-4' />
                            <div className="layer rounded-4">
                                <i className='fa-solid fa-plus display-1 text-white'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;