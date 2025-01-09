
import logo from './../../assets/avataaars.svg'
function Home() {
    return (
        <div className=" home hero-section text-white">
            <div>
                <img src={logo} alt="" />
            </div>
            <h1>Start Framework</h1>
            <span className='icon'>
                <i className="fa-solid fa-star"></i>
            </span>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    )
}

export default Home;