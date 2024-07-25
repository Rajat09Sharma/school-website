import DisplayBox from "./DisplayBox";


export default function Features() {
    return (
        <div id="feature" className=" padding bg-dark">
            <h1 className="mb-5">CAMPUS & INFRASTRUCTURE</h1>
            <div className="row" >
                <DisplayBox icon={<i className="fa-solid fa-computer"></i>} className="col-lg-2 feature-container pink" boxClass="feature-box">
                    <p>computer lab</p>
                </DisplayBox>
                <DisplayBox icon={<i className="fa-solid fa-trophy"></i>} className="col-lg-2 feature-container orange" boxClass="feature-box">
                    <p>Sports facilities</p>
                </DisplayBox>
                <DisplayBox icon={<i className="fa-solid fa-guitar"></i>} className="col-lg-2 feature-container blue" boxClass="feature-box">
                    <p>Arts, Music & Dance</p>
                </DisplayBox>
                <DisplayBox icon={<i className="fa-brands fa-connectdevelop"></i>} className="col-lg-2 feature-container green" boxClass="feature-box">
                    <p>Skill Developemnt</p>
                </DisplayBox>
                <DisplayBox icon={<i className="fa-solid fa-book-open-reader"></i>} className="col-lg-2 feature-container light" boxClass="feature-box">
                    <p>Library</p>
                </DisplayBox>
            </div>
        </div>
    )
}
