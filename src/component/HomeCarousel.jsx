import Imgone from "/images/annual-sport-day.jpg";
import Imgsecond from "/images/science-exhibition.jpg";
import ImgThrid from "/images/cultural-fest.jpg";

export default function HomeCarousel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Imgone} className="carousel-image " alt="Annual Sports Day" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Annual Sports Day</h5>
                            <p>Celebrating Excellence in Sports.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Imgsecond} className="carousel-image " alt="Science Exhibition" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Science Exhibition</h5>
                            <p>Showcasing Student Innovations.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ImgThrid} className=" carousel-image " alt="Cultural Fest" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cultural Fest</h5>
                            <p> Embracing Diversity and Creativity.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
