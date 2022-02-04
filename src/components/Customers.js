import react from "react"
import img from "../img1.jpg"
// import "../styles/customer.css"
const Customers=()=>{
    const customers=[1,2,3,4,5]
    return(<section class = "customers" id = "customers">
    <div className = "sec-width">
        <div className = "title">
            <h2>customers</h2>
        </div>
        <div class = "customers-container">
            {customers.forEach((i)=>(
                <div className = "customer"key={i} >
                <div className = "rating">
                    <span><i class = "fas fa-star"></i></span>
                    <span><i class = "fas fa-star"></i></span>
                    <span><i class = "fas fa-star"></i></span>
                    <span><i class = "fas fa-star"></i></span>
                    <span><i class = "far fa-star"></i></span>
                </div>
                <h3>We Loved it</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                <img src = {img} alt = "customer image"/>
                <span>Customer Name, Country</span>
            </div>
            ))}
        </div>
    </div>
</section>)
}
export default Customers