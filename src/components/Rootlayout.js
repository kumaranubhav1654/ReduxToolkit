import NavBar from "./NavBarPanel"
import {Outlet} from 'react-router-dom'
import { Provider } from "react-redux"
import store from "../store/store"

const Rootlayout=()=>{
    return(
        <>
        <Provider store={store}>
     <NavBar/>
     <main>
        <Outlet/>
     </main>
     </Provider>
        </>
    )
    }
    
    export default Rootlayout