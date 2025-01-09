import "./contact.css"
function Contact() {

    return (
        <div className="contact custum-margin py-5">
            <div className="custum-header-title text-center mb-5">
                <h2 className="text-uppercase custum-color-section">conatct section</h2>
                <span className='icon custum-color-section'>
                    <i className="fa-solid fa-star"></i>
                </span>
            </div>
            <div className="w-50 m-auto form d-flex flex-column p-2">
                <div className="input-container">
                    <input
                        type="text" placeholder="Your Name" className="custom-input"
                    />
                    <label className="custom-label">Your Name</label>
                </div>
                <div className="input-container">
                    <input
                        type="number" placeholder="Your Age" className="custom-input"
                    />
                    <label className="custom-label">Your Age</label>
                </div>
                <div className="input-container">
                    <input
                        type="email" placeholder="Your Email" className="custom-input"
                    />
                    <label className="custom-label">Your Email</label>
                </div>
                <div className="input-container">
                    <input
                        type="password" placeholder="Your Password" className="custom-input"
                    />
                    <label className="custom-label">Your Password</label>
                </div>
                <button className=" btn text-white  my-4">send Message</button>
            </div >
        </div>
    )
}

export default Contact;