import NavBar from "./NavBarPanel"
import {Outlet} from 'react-router-dom'

const Rootlayout=()=>{
    return(
        <>
     <NavBar/>
     <main>
        <Outlet/>
     </main>
        </>
    )
    }
    
    export default Rootlayout