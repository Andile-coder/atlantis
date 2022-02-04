import react, { useState } from "react"
import BookForm from "../components/BookForm"
import Customers from "../components/Customers"
import Footer from "../components/Footer"
import FullscreenModel from "../components/FullscreenModel"
import Header from "../components/Header"
import Rooms from "../components/Rooms"
import Services from "../components/Services"
import Sidenav from "../components/Sidenav"

const Home=()=>{
    const [sidenav,setSidenav]=useState("sidenav")
    const [modal,setModal]=useState("")
    const handleClassname=()=>{
       
        setSidenav("showSidenav")
        setModal("showModal")
    }
    const removeName=()=>{
        setSidenav("sidenav")
        setModal("modal")
    }
    return( <><Header handleClassname={handleClassname} modal={modal} sidenav={sidenav} removeName={removeName}/>
        <Sidenav handleClassname={handleClassname} modal={modal} sidenav={sidenav} removeName={removeName}/>
        <FullscreenModel handleClassname={handleClassname} modal={modal} sidenav={sidenav} removeName={removeName}/>
        <Services/>
        <BookForm/>
        <Rooms/>
        <Customers/>
        <Footer/>
        <script></script>
        </>)
}
export default Home