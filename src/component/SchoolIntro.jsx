import { Link, useNavigate } from "react-router-dom"
import Announcements from "./Announcement";
import SchoolImg from "/images/school-image.jpg"


export default function SchoolIntro() {
    const navigate = useNavigate()
    function handleClick() {
        navigate("/");
    }
    return (

        <div className="school-intro padding">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Welcome to Springdale Public School</h1>
                    <p> where we nurture young minds for a brighter future.</p>
                    <Link to="/about-us" className="btn btn-dark btn-lg download-button" type="button" onClick={handleClick}>
                        <span className="me-3">
                            <i className="fa-solid fa-angles-right" />
                        </span>
                        Read More
                    </Link>
                </div>
                <div className="col-lg-5">
                    <img className="school-image" src={SchoolImg} alt="school image" />
                </div>
            </div>
            <Announcements />
        </div>

    )
}
