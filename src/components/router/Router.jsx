import { Route, Routes } from "react-router-dom"
import CountryDetail from "../../pages/CountryDetail"
import Layout from "../layout/Layout"
import Main from "../main/Main"

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>

                <Route path="country/:country" element={<CountryDetail/>}/>
            </Route>
        </Routes>
    )
}


export default Router
