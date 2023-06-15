import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Axios from "axios";
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBCardImage,MDBBtn} from 'mdb-react-ui-kit';
import { useDispatch,useSelector } from "react-redux";  
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product=()=>{
// const[productData,setProductData]=useState([]);
const {data:productData,status} =useSelector(state=>state.products);
console.log("here",productData);
const dispatch=useDispatch(); 

useEffect(()=>{
    //Dispatch an action for fetch
     dispatch(getProducts());
    // Axios.get("https://fakestoreapi.com/products").then((res)=>{
    //     setProductData(res.data);
    // })
},[]);

const addToCart=(product)=>{
dispatch(add(product))
}

const cards= productData.map(product=>(
    <div div className="col-md-3" key={product.id} style={{marginBottom:'10px'}}>
    <MDBCard className="h-100 text-center">
        <div className="text-center"><MDBCardImage  src={product.image} position='top' alt='...' style={{width:'110px',height:'150px'}}/></div>
        
        <MDBCardBody>
          <MDBCardTitle>{product.title}</MDBCardTitle>
          <MDBCardText>
           $ {product.price}
          </MDBCardText>
          
        </MDBCardBody>
        <MDBCardFooter><MDBBtn href='#' onClick={()=>addToCart(product)}>Add To Cart</MDBBtn></MDBCardFooter>
      </MDBCard>
    </div>
));


// console.log("data",productData);
// console.log(typeof productData)
if(status==='Loading'){
    return(
        <>
        <h1>Loading...</h1>
        </>
    )
}

if(status==='Error'){
    return(
        <>
        <h1>Something went wrong :( ! Try again later</h1>
        </>
    )
}

return(
    <div className="container">
    <h1>Products</h1>
    <div className="row">{cards}</div>
    </div>
)
}

export default Product;