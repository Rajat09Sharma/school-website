import { NavLink } from "react-router-dom";


export default function DisplayBox({icon,children,className,boxClass,to}) {
   
  return (
    <NavLink to={to} className={className}>
    <div className={boxClass}>
        {/* <img src={imgSource} alt="Image-1" class="event-img" /> */}
        {icon}
        {children}
    </div>
</NavLink>
  )
}
