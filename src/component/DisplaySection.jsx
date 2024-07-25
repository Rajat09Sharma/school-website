
import DisplayBox from "./DisplayBox";

export default function DisplaySection() {
    return (
        <div id="display" className="row" >
            <DisplayBox to="/methodolog" icon={<i className="fa-solid fa-book-open-reader"></i>} className="col-lg-3 display-container green" boxClass="display-box">
                <h4>Teaching Methodologies</h4>
                <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles</p>
            </DisplayBox>
            <DisplayBox to="/achievements" icon={<i className="fa-solid fa-trophy"></i>} className="col-lg-3 display-container orange" boxClass="display-box" >
                <h4>Our Achievements</h4>
                <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles</p>
            </DisplayBox>
            <DisplayBox to="/secondary-curriculum" icon={<i className="fa-solid fa-clipboard-list"></i>} className="col-lg-3 display-container blue" boxClass="display-box" >
                <h4>CBSE Curriculum</h4>
                <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles</p>
            </DisplayBox>
            <DisplayBox to="/sps-life" icon={<i className="fa-brands fa-web-awesome"></i>} className="col-lg-3 display-container pink" boxClass="display-box">
                <h4>Facilities</h4>
                <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles</p>
            </DisplayBox>
        </div>
    )
}
