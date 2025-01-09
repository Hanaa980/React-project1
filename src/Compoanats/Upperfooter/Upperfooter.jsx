import "./upperfooter.css"
function Upperfooter() {
    return (
        <div className=" bg-upper-footer">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="text-center">
                            <h3 className="fs-2">LOCATION</h3>
                            <p className="m-0">2215 John Daniel Drive</p>
                            <p className="">Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <h3>AROUND THE WEB</h3>
                            <div className="icons d-flex justify-content-center">
                                <span className="con-icon">
                                    <i className="fa-brands fa-facebook mx-2"></i>
                                </span>
                                <span className="con-icon">
                                    <i className="fa-brands fa-twitter mx-2"></i>
                                </span>
                                <span className="con-icon">
                                    <i className="fa-brands fa-linkedin-in mx-2 "></i>
                                </span>
                                <span className="con-icon"> <i className="fa-solid fa-globe mx-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div></div>

    )
}

export default Upperfooter;