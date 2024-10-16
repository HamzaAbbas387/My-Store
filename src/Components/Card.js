import React, { useEffect } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { addToCart } from '../Store/Slices/productSlice';
import { fetchProducts } from '../Store/Slices/cardSlice';

const Card = () => {

    
    
    
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const productStatus = useSelector(state => state.products.status);
    
    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);
    
    return(
        <div className='d-flex row'>
    {productStatus === 'loading' ? <p>Loading...</p> : null}
{
    products.map(product => (

        <div className="my-4 mx-2 rounded col-md-2" style={{width: "19rem",height: "24rem"}}>
            <div key={product.id} className="card">
                <img style={{height: "12rem"}} src={product.image} className="card-img-top" alt="..."/>
                <div className="card-body" style={{height: "8.5rem"}}>
                    <h5 className="card-title">$ {product.price}</h5>
                    <p className="card-text">{product.title}</p>
                </div>
                <div className="align-self-end ml-auto my-2 mx-2">
                    <button onClick={() => dispatch(addToCart(product))} type="button" className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
))}

    </div>
)
}

export default Card;



// const allitems = useSelector((state) => state.cart.items);

//   return (
    //     <div className='d-flex row'>
// {
//     allitems.map((item) => (

//         <div className="my-4 mx-2 rounded col-md-2" style={{width: "19rem",height: "24rem"}}>
//             <div key={item.id} className="card">
//                 <img style={{height: "12rem"}} src={item.img} className="card-img-top" alt="..."/>
//                 <div className="card-body" style={{height: "8.5rem"}}>
//                     <h5 className="card-title">Rs {item.price}</h5>
//                     <p className="card-text">{item.title}</p>
//                 </div>
//                 <div className="align-self-end ml-auto my-2 mx-2">
//                     <button onClick={() => dispatch(addToCart(item))} type="button" className="btn btn-primary">Add To Cart</button>
//                 </div>
//             </div>
//         </div>
// ))}

//     </div>
// )