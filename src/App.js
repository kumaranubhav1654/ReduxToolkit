import './App.css';
import Product from './components/Product';
import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Rootlayout from './components/Rootlayout';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
