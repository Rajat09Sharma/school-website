
import { NavLink } from "react-router-dom";

export default function MainNavigation() {


    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Springdale Public School</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/about-us">About SPS</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/principal-message">Principal&#39;s Message</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/achievements">Our Achivements</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Curriculum
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>  <NavLink className="dropdown-item" to="/primary-curriculum">Primary Curriculum (Grades 1-5)</NavLink></li>
                                    <li> <NavLink className="dropdown-item" to="/secondary-curriculum">Secondary (Grades 6-10)</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li> <NavLink className="dropdown-item" to="/Senior-curriculum">Senior Secondary (Grades 11-12)</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academic
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>  <NavLink className="dropdown-item" to="/methodolog">Teaching Methodologies</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admissions
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>  <NavLink className="dropdown-item" to="/process">Process</NavLink></li>
                                    <li> <NavLink className="dropdown-item" to="/criteria">Criteria</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link active"} to="/faculty">Faculty</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Students
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>  <NavLink className="dropdown-item" to="/sps-life">Life at Springdale</NavLink></li>
                                    <li> <NavLink className="dropdown-item" to="/student-council">Student Council</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link active"} to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link active"} to="/contact-us">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


{/* <li className="nav-item dropdown">
<div className="dropdown show">
    <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} to="/about-us" role="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        About Us
    </NavLink>

    <div className="dropdown-menu" aria-labelledby="about-us">
        <NavLink className="dropdown-item" to="/about-us">About SPS</NavLink>
        <NavLink className="dropdown-item" to="/principle-message">Principle&#39;s Message</NavLink>
        <NavLink className="dropdown-item" to="/achievements">Our Achivements</NavLink>
    </div>
</div>
</li> */}