import { useSelector,useDispatch } from "react-redux"
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBCardFooter,MDBBtn} from 'mdb-react-ui-kit';
import { remove } from "../store/cartSlice";


const Cart=()=>{
    const productcart=useSelector(state=>state.cart);
    const dispatch=useDispatch();
 const removeFromCart=(id)=>{
  dispatch(remove(id))
 }

    const carts=productcart.map((product)=>(
        <div div className="col-md-6" key={product.id} style={{marginBottom:'10px'}}>
        <MDBCard className="h-100 text-center">
            <div className="text-center"><MDBCardImage  src={product.image} position='top' alt='...' style={{width:'110px',height:'150px'}}/></div>
            
            <MDBCardBody>
              <MDBCardTitle>{product.title}</MDBCardTitle>
              <MDBCardText>
               $ {product.price}
              </MDBCardText>
              
            </MDBCardBody>
            <MDBCardFooter><MDBBtn href='#' onClick={()=>removeFromCart(product.id)}>Remove</MDBBtn></MDBCardFooter>
          </MDBCard>
        </div>
    ));

    return(
        <>
       <div className="row">
        {carts}
       </div>
        </>
    )
    }
    
    export default Cart