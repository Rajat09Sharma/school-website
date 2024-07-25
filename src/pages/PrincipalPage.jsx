import principalImg from "/images/principal.jpeg"

export default function PrincipalPage() {
    return (
        <div id="principalpage" className="padding">
            <h1>Principal&#39;s Message</h1>
            <div className="message">
                <img src={principalImg} className="float-image" alt="principle image" />
                <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}
