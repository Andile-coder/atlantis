import react from "react"
// import "../styles/services.css"
const Services=()=>{
    const services=[1,2,3]
    return(<section className="service sec-width" id="services">
        <div className="title"><h2>services</h2>
        </div>
        <div className="service-container">
            {services.map(service=>
                <article className = "service">
                <div className = "service-icon">
                    <span>
                        <i className = "fas fa-utensils"></i>
                    </span>
                </div>
                <div className = "service-content">
                    <h2>Food Service/ Food Runner</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                    <button type = "button" className = "btn">Know More</button>
                </div>
            </article>
            )}
        </div>
    </section>)
}
export default Services