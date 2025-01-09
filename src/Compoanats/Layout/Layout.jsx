
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Upperfooter from "../Upperfooter/Upperfooter";

function Layout() {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Upperfooter />
            <Footer />
        </>
    )
}

export default Layout;