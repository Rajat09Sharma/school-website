import ContainerBox from "../component/ContainerBox";
import Imgone from "/images/math-medal.jpg";
import Imgsecond from "/images/swim-medal.jpg";
import ImgThrid from "/images/tech-medal.jpg";

export default function AchivementPage() {
    return (
        <div id="achivementpage" className="padding">
            <h1>Our Achivements</h1>
            <div className="row">
                <ContainerBox imgSource={Imgone} info="John Smith - National Level Math Olympiad Winner" />
                <ContainerBox imgSource={Imgsecond} info="Sarah Lee - Gold Medalist in State Swimming Championship" />
                <ContainerBox imgSource={ImgThrid} info="Tech Innovators Club - Winners of Inter-School Robotics Competition" />
            </div>
        </div>
    )
}
