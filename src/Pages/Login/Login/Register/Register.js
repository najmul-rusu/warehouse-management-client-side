import './Register.css'
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
          console.log('Updated profile');
          navigate('/about')
        
    }
    return (
        <div className='register-form'>
        <h2 className='text-center text-secondary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter Your Name' />
                <input type="email" name="email" id="1" placeholder='Enter Email' required />
                <input type="password" name="password" id="2lo" placeholder='Enter Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-dark text-white w-50 mx-auto d-block my-2 '
                    type="submit"
                    value="Register" />
            </form>
            <p className='login'>Already have an account? <Link to='/login ' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
            <div className='mb-5'>
            </div>
        </div>
    );
};

export default Register;