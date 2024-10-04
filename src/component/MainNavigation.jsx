
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function MainNavigation() {

    const [isNavlinkCollapsed, setNavlinkCollapsed] = useState(false)

    function handleNavlinksCollapse() {
        setNavlinkCollapsed((prevs) => {
            return !prevs;
        })
    }

    useEffect(() => {
        let size = window.innerWidth;
        let navLinks = document.querySelectorAll(".toggle");

        const updateWindowDimensions = () => {
            size = window.innerWidth;
        };
        if (size > 992) {
            navLinks.forEach((link) => {
                link.removeAttribute("data-toggle");
                link.removeAttribute("data-target");
            });
            console.log("removed attributes");
        } else {
            navLinks.forEach((link) => {
                link.setAttribute("data-toggle", "collapse");
                link.setAttribute("data-target", "#navbarTogglerDemo02");
            });
            console.log("set attributes");
        }
        
        window.addEventListener("resize", () => {
            updateWindowDimensions();
            if (size > 992) {
                navLinks.forEach((link) => {
                    link.removeAttribute("data-toggle");
                    link.removeAttribute("data-target");
                });
                console.log("removed attributes");
            } else {
                navLinks.forEach((link) => {
                    link.setAttribute("data-toggle", "collapse");
                    link.setAttribute("data-target", "#navbarTogglerDemo02");
                });
                console.log("set attributes");
            }

        });
    }, [isNavlinkCollapsed])
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
                                <NavLink className={({ isActive }) => isActive ? "nav-link active toggle" : "nav-link toggle active"} aria-current="page" to="/" onClick={handleNavlinksCollapse} >Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item toggle" to="/about-us" onClick={handleNavlinksCollapse}>About SPS</NavLink></li>
                                    <li><NavLink className="dropdown-item toggle" to="/principal-message" onClick={handleNavlinksCollapse}>Principal&#39;s Message</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item toggle" to="/achievements" onClick={handleNavlinksCollapse}>Our Achivements</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Curriculum
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>  <NavLink className="dropdown-item toggle" to="/primary-curriculum" onClick={handleNavlinksCollapse}>Primary Curriculum (Grades 1-5)</NavLink></li>
                                    <li> <NavLink className="dropdown-item toggle" to="/secondary-curriculum" onClick={handleNavlinksCollapse}>Secondary (Grades 6-10)</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li> <NavLink className="dropdown-item toggle" to="/Senior-curriculum" onClick={handleNavlinksCollapse}>Senior Secondary (Grades 11-12)</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academic
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>  <NavLink className="dropdown-item toggle" to="/methodolog" onClick={handleNavlinksCollapse}>Teaching Methodologies</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admissions
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>  <NavLink className="dropdown-item toggle" to="/process" onClick={handleNavlinksCollapse}>Process</NavLink></li>
                                    <li> <NavLink className="dropdown-item toggle" to="/criteria" onClick={handleNavlinksCollapse}>Criteria</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active toggle" : "nav-link active toggle"} to="/faculty" onClick={handleNavlinksCollapse}>Faculty</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Students
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>  <NavLink className="dropdown-item toggle" to="/sps-life" onClick={handleNavlinksCollapse}>Life at Springdale</NavLink></li>
                                    <li> <NavLink className="dropdown-item toggle" to="/student-council" onClick={handleNavlinksCollapse}>Student Council</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active toggle" : "nav-link active toggle"} to="/gallery" onClick={handleNavlinksCollapse}>Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active toggle" : "nav-link active toggle"} to="/contact-us" onClick={handleNavlinksCollapse}>Contact Us</NavLink>
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