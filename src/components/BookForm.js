import react from "react"
import "../styles/bookform.css"
const BookForm=()=>{
    return(<div className = "book">
    <form className = "book-form">
        <div className = "form-item">
            <label htmlfor = "checkin-date">Check In Date: </label>
            <input type = "date" id = "chekin-date"/>
        </div>
        <div className = "form-item">
            <label htmlFor= "checkout-date">Check Out Date: </label>
            <input type = "date" id = "chekout-date"/>
        </div>
        <div className = "form-item">
            <label htmlfor = "adult">Adults: </label>
            <input type = "number" min = "1" value = "1" id = "adult"/>
        </div>
        <div className = "form-item">
            <label htlmfor = "children">Children: </label>
            <input type = "number" min = "1" value = "1" id = "children"/>
        </div>
        <div className = "form-item">
            <label htmlfor = "rooms">Rooms: </label>
            <input type = "number" min = "1" value = "1" id = "rooms" />
        </div>
        <div className = "form-item">
            <input type = "submit" className = "btn" value = "Book Now" />
        </div>
    </form>
</div>
)
}
export default BookForm