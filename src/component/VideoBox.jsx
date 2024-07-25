
export default function VideoBox({ videoSrc, info }) {
    return (
        <div className="col-lg-4 mx-auto">
            <div className="container-box">
                <video autoPlay muted loop id="myVideo" className="w-100 ">
                    <source src={videoSrc} type="video/mp4" />
                </video>
                <p>{info}</p>
            </div>
        </div>
    )
}
