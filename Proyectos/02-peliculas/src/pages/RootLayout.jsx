import Footer from "../components/components/Footer"
import Nav from "../components/components/Nav"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
        <Nav/>        
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout