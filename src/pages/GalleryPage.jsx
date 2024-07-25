import ContainerBox from "../component/ContainerBox";
import Imgone from "/images/annual-sport-day.jpg";
import Imgsecond from "/images/science-exhibition.jpg";
import ImgThrid from "/images/cultural-fest.jpg";
import ImgFouth from "/images/school-classroom.jpg";
import Imgfifth from "/images/school-library.jpg";
import VideoBox from "../component/VideoBox";
import SchoolTourVideo from "/videos/school-tour.mp4"


export default function GalleryPage() {
    return (
        <div id="gallerypage" className="padding">
            <h1>Gallery</h1>
            <div className="row mb-5">
                <ContainerBox imgSource={Imgone} info="Students participating in various sports events." />
                <ContainerBox imgSource={Imgsecond} info="Students presenting their science projects." />
                <ContainerBox imgSource={ImgThrid} info="Students performing in the cultural fest." />
                <ContainerBox imgSource={ImgFouth} info="A glimpse of our interactive classrooms." />
                <ContainerBox imgSource={Imgfifth} info="Students reading and studying in the school library." />
            </div>
            <h1 className="my-5">videos</h1>
            <div className="row">
               <VideoBox videoSrc={SchoolTourVideo} info="Virtual tour of Springdale Public School." />
            </div>
        </div>
    )
}
