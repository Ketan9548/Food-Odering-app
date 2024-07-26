import React, { useContext, useEffect, useState } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams, setsearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const { url } = useContext(StoreContext);
    const Navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url,{success,orderId});
        if (response.data.success) {
            Navigate("/myorders");
        }
        else{
            Navigate("/")
        }
    }
    
    useEffect(()=>{
        verifyPayment();
    },[])

    return (
        <div className='verify'>
            <div className="spinner">

            </div>
        </div>
    )
}

export default Verify
