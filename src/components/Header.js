import react from "react"
import { useState } from "react"
import "../styles/header.css"
const Header=(props)=>{
    
    return(<header className = "header" id = "header">
    <div className = "head-top">
        <div className = "site-name">
            <span>GEEKPROBIN</span>
        </div>
        <div className = "site-nav">
            <span id = "nav-btn" onClick={props.handleClassname}>MENU <i className = "fas fa-bars"></i></span>
        </div>
    </div>

    <div className = "head-bottom flex">
        <h2>NICE AND COMFORTABLE PLACE TO STAY</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est quos veniam impedit numquam itaque voluptatum, dicta asperiores accusamus, eligendi neque ut incidunt, modi harum molestiae atque natus officia minima.</p>
        <button type = "button" className = "head-btn">GET STARTED</button>
    </div>
</header>)
}
export default Header
