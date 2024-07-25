import FacultyItem from "../component/FacultyItem";
import MaleImg from "/images/male.jpg";
import FemaleImg from "/images/feamle.jpg";

export default function FacultyPage() {
    return (
        <section id="facultypage" className="padding">
            <h1 className="mb-5">Faculty Profiles</h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner">
                    <FacultyItem active name="John Doe" imgSource={MaleImg} info="Principal, M.Ed, 20 years of experience in educational administration." />
                    <FacultyItem name="Jane Smith" imgSource={FemaleImg} info="Vice Principal, M.Sc. in Physics, 15 years of teaching experience." />
                    <FacultyItem name="Michael Brown:" imgSource={MaleImg} info="Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience." />
                    <FacultyItem name="Emily Johnson" imgSource={FemaleImg} info="English Teacher, M.A. in English, 10 years of teaching experience." />
                    <FacultyItem name="Sophia Davis" imgSource={FemaleImg} info="Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience." />
                    <FacultyItem name="David Wilson" imgSource={MaleImg} info="Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience." />
                </div>
                <a className="carousel-control-prev" type="button" role="button" data-target="#carouselExampleControls"
                    data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" type="button" role="button" data-target="#carouselExampleControls"
                    data-slide="next">
                    <span className="carousel-control-next-icon"></span>

                </a>
            </div>
        </section>
    )
}
