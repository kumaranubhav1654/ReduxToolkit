import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import Axios from 'axios'

const initialState={
    data:[],
    status:'idle'
};
const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
    //    fetchProducts(state,action){
    //     state.data=action.payload

    //We will use extraReducers to get all the cases handy
       },
       extraReducers:(builder)=>{
        builder
        .addCase(getProducts.fulfilled,(state,action)=>{
                state.data=action.payload;
                state.status='Success'
        })
        .addCase(getProducts.pending,(state,action)=>{
            state.status='Loading'
         })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status='Error'
         })
       }
    })

export default productSlice.reducer;
export const {fetchProducts} = productSlice.actions;

export const getProducts=createAsyncThunk('products/get',async()=>{
    const Res= await Axios.get("https://fakestoreapi.com/products");
                  return Res.data;
                })

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         await Axios.get("https://fakestoreapi.com/products").then((res)=>{
//            dispatch(fetchProducts(res.data)) ;
//         })
//     }
// }