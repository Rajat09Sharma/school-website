
export default function ContactUs() {
    return (
        <div id="contact" className="row contact-us-container">
            <div className="col-lg-5 contact-info">
                <h2>Contact Us</h2>
                <p>Springdale Public School</p>
                <p><span className="me-2"><i className="fas fa-map-marker-alt" ></i></span>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                <p><span className="me-2"><i className="fa-solid fa-mobile-screen-button"></i></span>+91 8827224471</p>
                <p><span className="me-2"><i className="fas fa-envelope"></i></span> frontoffice@arunodaya.ac.in</p>
                <h3>School Account Details</h3>
                <p><strong>Bank Name:</strong> Bank of School</p>
                <p><strong>Account Name:</strong> Springdale Public School</p>
                <p><strong>Account Number:</strong> 000000</p>
                <p><strong>Currency Code:</strong> INR</p>
            </div>
            <div className="col-lg-5 quick-enquiry">
                <h2>Quick Enquiry</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="tel" placeholder="Your Mobile No." required />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Give us a brief description" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}



