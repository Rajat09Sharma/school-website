import { useState } from "react"

// const contents = [
//     { id: "vission", text: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world" },
//     { id: "mission", text: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values." }
// ]

export default function AboutusPage() {
    const [isMission, setMission] = useState(true);
    const [isVission, setVission] = useState(false);

    function handleMission() {
        setMission(true);
        setVission(false);
    }

    function handleVission() {
        setMission(false);
        setVission(true);
    }

    let active = "col-lg-6 mx-auto toggle-container active-box";
    let notActive = "col-lg-6 mx-auto toggle-container not-active-box "


    return (

        <div id="aboutpage" className="padding">
            <h1>About SPS</h1>
            <div className="history">
                <h2>History</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students</p>
            </div>
            <div className="row">
                <div className={isMission ? active : notActive} onClick={handleMission}>
                    <h2>Our Mission</h2>
                </div>
                <div className={isVission ? active : notActive} onClick={handleVission}>
                    <h2>Our Vision</h2>
                </div>
                <div className="col-lg-12 content-box">
                    {isMission ? "To create a learning environment that fosters academic excellence, critical thinking, and ethical values." : null}
                    {isVission ? "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world." : null}
                </div>
            </div>
        </div>
        
    )
}
