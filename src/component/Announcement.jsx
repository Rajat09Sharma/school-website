import Imgone from "/images/annual-sport-day.jpg";
import Imgsecond from "/images/science-exhibition.jpg";
import ImgThrid from "/images/cultural-fest.jpg";
import ImgFouth from "/images/school-classroom.jpg";
import Imgfifth from "/images/school-library.jpg";
import NewsImg from "/images/news-image.gif";

const announcements = [
    "Admission Form Availability: March 1st",
    "Last Date for Submission: March 31st",
    "Entrance Test: April 15th",
    "Announcement of Results: April 30th",
];

export default function Announcements() {
    return (
        <div id="announcement" className="row">
            <div className="col-lg-4 announcement-container">
                <div className="announcement-title">Latest News & Announcements</div>
                <div id="announcementMarquee" className="announcement-marquee">
                    <marquee direction="up" onMouseOver={(e) => { e.target.stop() }} onMouseOut={(e) => { e.target.start() }} >
                        <ul>
                            {announcements.map((announcement, index) => (
                                <li key={index}><span className="me-2"><img src={NewsImg} /></span>{announcement}</li>
                            ))}
                        </ul>
                    </marquee>
                </div>
            </div>
            <div className="col-lg-6 ms-auto announcement-container">
                <div className="announcement-title">Gallery</div>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ImgFouth} className="d-block w-100 announcement-image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={ImgThrid} className="d-block w-100 announcement-image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Imgfifth} className="d-block w-100 announcement-image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Imgsecond}className="d-block w-100 announcement-image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Imgone} className="d-block w-100 announcement-image" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    );
}
