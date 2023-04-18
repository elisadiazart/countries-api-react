import { Outlet } from "react-router-dom"
import Nav from "../nav/Nav"


const Layout = () =>  {
    return <>
    <header>
		  <Nav/>
		</header>
		<Outlet/>
    </>
}

export default Layout