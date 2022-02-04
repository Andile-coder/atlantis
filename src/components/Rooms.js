import react from "react"
// import "../styles/room.css"
import img from "../img1.jpg"
const Rooms=()=>{
    const rooms =[1,2,3]
    return(<section className = "rooms sec-width" id = "rooms">
    <div className = "title">
        <h2>rooms</h2>
    </div>
    <div className = "rooms-container">

        <article className = "room">
            <div className = "room-image">
                <img src = {img} alt = "room image"/>
            </div>
            <div className = "room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                <p className = "rate">
                    <span>$99.00 /</span> Per Night
                </p>
                <button type = "button" className ="btn">book now</button>
            </div>
        </article>
        
        <article className = "room">
            <div className = "room-image">
                <img src = {img} alt = "room image" />
            </div>
            <div className = "room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lorem ipsum dolor sit amet.
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                <p className = "rate">
                    <span>$99.00 /</span> Per Night
                </p>
                <button type = "button" className = "btn">book now</button>
            </div>
        </article>
        
    </div>
</section>
)
} 
export default Rooms