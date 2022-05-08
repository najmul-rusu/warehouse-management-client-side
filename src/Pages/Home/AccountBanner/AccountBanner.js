import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AccountBanner = () => {
    
    const handelBtnClick = useNavigate ()
    return (
        <div className='d-flex mt-5 bg-dark p-5 bg-opacity-10'>
            <div className='w-50'>
                <h2>
                Sign in for a members only experience
                </h2>
                <p>Manage your preferred stores, orders and wishlist</p>
            </div>
            <div className='w-50 ps-5'>
                <Button className='btn btn-danger m-2 py-2 px-5' onClick={() => handelBtnClick('/login')}>SIGN IN</Button>
                <Button className='btn btn-dark py-2 px-5' onClick={() => handelBtnClick('/register')}>CREATE ACCOUNT</Button>
            </div>
        </div>
    );
};

export default AccountBanner;