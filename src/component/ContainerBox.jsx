
export default function ContainerBox({info,imgSource}) {
  return (
    <>
    <div className="col-lg-4 mx-auto">
    <div className="container-box">
        <img src={imgSource} alt={info} className="container-img" />
        <p>{info}</p>
    </div>
</div>
    </>
  )
}
