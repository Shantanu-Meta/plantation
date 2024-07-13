import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/Reducers/cart';
import { useLocation } from 'react-router-dom';

const SingleProduct = ({ props }) => {
    const dispatch = useDispatch(); 
    const location = useLocation();
    const [added, setAdded] = useState(false); 
    const plants = useSelector(store => store.cart);
    
    useEffect(() => {
        checkDisable();
    }, [plants]);

    const addToCart = () => {
        dispatch(cartActions.addCart(props)); 
        setAdded(true);
    };

    const deleteFromCart = () => {
        dispatch(cartActions.deleteCart(props)); 
        setAdded(false);
    };

    const checkDisable = () => {
        const found = plants.some(item => item.name === props.name && item.price === props.price && item.thumbnail === props.thumbnail);
        if (found) {
            setAdded(true);
        } else {
            setAdded(false);
        }
    };

    return (
        <div className='p-4 border-2 max-w-[300px] w-full shadow-md rounded-lg'>
            <img src={props.thumbnail} alt="" className='w-full h-full bg-cover'/>
            <h1 className='text-[2rem]'>{props.name}</h1>
            <h1 className='text-[2rem]'>Rs: {props.price}/-</h1>
            {
                location.pathname === "/products" ? 
                <button className={`bg-green-400 p-2`}onClick={addToCart} disabled={added}>{added ? "Added" : "Add to cart"}</button> 
                : 
                <button className='bg-green-400 p-2' onClick={deleteFromCart}>Delete item</button>
            }
        </div>
    );
};

export default SingleProduct;
