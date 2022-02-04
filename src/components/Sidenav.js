import react from "react"
import "../styles/sidenav.css"
const Sidenav=(props)=>{
    console.log(props.sidenav)
    return(<div className = {props.sidenav} id = "sidenav">
    <span className = "cancel-btn" onClick={props.removeName}id = "cancel-btn">
        hello<i className = "fas fa-times"></i>
    </span>

    <ul className = "navbar">
        <li><a href = "#header">home</a></li>
        <li><a href = "#services">services</a></li>
        <li><a href = "#rooms">rooms</a></li>
        <li><a href = "#customers">customers</a></li>
    </ul>
    <button className = "btn sign-up">sign up</button>
    <button className = "btn log-in">log in</button>
</div>)
}

export default Sidenav