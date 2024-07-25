

export default function FacultyItem({imgSource,name,info,active}) {
    let css;
    if(active){
        css="carousel-item active";
    }else{
        css="carousel-item";
    }
    return (
        <div className={css}>
            <img className="faculty-image" src={imgSource} alt={name} />
            <em>{name}</em>
            <h2>{info}</h2>
        </div>
    )
}
