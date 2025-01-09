
import { Link, NavLink } from 'react-router-dom';
import ".//navbar.css"
function Navbar() {
    return (
        <>
            <div className="bg-nav">
                <nav className=" fixed-top top-0 start-0 end-0   navbar navbar-expand-lg" data-bs-theme="dark">
                    <div className="container">
                        <Link className="navbar-brand" to={""}>Start Framework</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav flex-lg-row justify-content-lg-end">
                                <li className="nav-item m-2">
                                    <NavLink className="NavLink text-uppercase" to={"about"}>About</NavLink>
                                </li>
                                <li className="nav-item m-2">
                                    <NavLink className="NavLink text-uppercase"  to={"portfolio"}>Portfolio</NavLink>
                                </li>
                                <li className="nav-item m-2">
                                    <NavLink className="NavLink text-uppercase" to={"contact"}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
