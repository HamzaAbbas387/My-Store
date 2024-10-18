// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../Store/Slices/productSlice';

// const CartPage = () => {
  
// const { product, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  
// const dispatch = useDispatch();

// useEffect(() => {

//   dispatch(getCartTotal());

// },[dispatch,product])

//   return (
//     <div>
//     <section className="h-100 gradient-custom">
//     <div className="container py-5">
//       <div className="row d-flex justify-content-center my-4">
//         <div className="col-md-8">
//           <div className="card mb-4">
//             <div className="card-header py-3">
//               <h5 className="mb-0">Cart - {product.length} items</h5>
//             </div>
//             <div className="card-body">
//             { product.map((data) => (
//                           <div className="row">
//                           <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
//                             <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
//                               <img src={data.image}
//                                 className="w-100" alt="Blue Jeans Jacket" />
//                               <a href="#!">
//                                 <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
//                               </a>
//                             </div>
//                           </div>
            
//                           <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
//                             <p><strong>{data.title}</strong></p>
//                             <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
//                               title="Remove item"onClick={() => dispatch(removeItem(data.id))}>
//                               <i className="fas fa-trash"></i>
//                             </button>
//                           </div>
            
//                           <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
//                             <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
//                               <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2"
//                                 onClick={() => dispatch(decreaseItemQuantity(data.id))}>
//                                 <i className="fas fa-minus"></i>
//                               </button>
            
//                               <div data-mdb-input-init className="form-outline">
//                                 <input id="form1" min="0" name="quantity" value={data.quantity} type="number" className="form-control" onChange={() => null} />
//                                 <label className="form-label" htmlFor="form1">Quantity</label>
//                               </div>
            
//                               <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2"
//                                 onClick={() => dispatch(increaseItemQuantity(data.id))}>
//                                   {console.log(data.id)}
//                                 <i className="fas fa-plus"></i>
//                               </button>
//                             </div>
            
//                             <p className="text-start text-md-center">
//                               <strong>{data.price}</strong>
//                             </p>
//                           </div>
//                           <hr className="my-4" />
//                         </div>
//             ))
 
// }

//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card mb-4">
//             <div className="card-header py-3">
//               <h5 className="mb-0">Summary</h5>
//             </div>
//             <div className="card-body">
//               <ul className="list-group list-group-flush">
//                 <li
//                   className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                   Total Quantity
//                   <span>{totalQuantity}</span>
//                 </li>
//                 <li
//                   className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                   <div>
//                     <strong>Total amount</strong>
//                   </div>
//                   <span><strong>$ {totalPrice}</strong></span>
//                 </li>
//               </ul>
  
//               <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
//                 Go to checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   </div>
//   )
// }

// export default CartPage



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../Store/Slices/productSlice';

const CartPage = () => {
  const { product, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, product]);

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {product.length} items</h5>
                </div>
                <div className="card-body">
                  {product.map((data) => (
                    <div className="row" key={data.id}> {/* Unique key added */}
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img src={data.image} className="w-100" alt={data.title} />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.title}</strong>
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          title="Remove item"
                          onClick={() => dispatch(removeItem(data.id))}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() => dispatch(decreaseItemQuantity(data.id))}
                            disabled={data.quantity === 1} // Disable when quantity is 1
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="form-outline">
                            <input
                              id="form1"
                              name="quantity"
                              value={data.quantity}
                              type="number"
                              className="form-control"
                              onChange={() => null} // Optional: Handle this input if needed
                              readOnly // Prevent manual input, or remove this line to allow manual quantity changes
                            />
                            <label className="form-label" htmlFor="form1">Quantity</label>
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={() => dispatch(increaseItemQuantity(data.id))}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>${data.price.toFixed(2)}</strong> {/* Display price properly */}
                        </p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>$ {totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
