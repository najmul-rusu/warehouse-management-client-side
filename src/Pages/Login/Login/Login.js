import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { FaGoogle } from 'react-icons/fa';
import './Login.css'

const Login = () => {
    const { loginUser, googleSignIn } = useFirebase();

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        loginUser(email, password);

        fetch('https://nmk-flashshop.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => localStorage.setItem('access-token', JSON.stringify(data.token)))
    }

    const handleGoogle = (event) => {
        event.preventDefault();
        googleSignIn();
    }
    return (
        <div className="Login">
            <div className="inner__login container">
              <h2 className='text-center text-secondary'>Please Login</h2>
                <div className="login__content">
                    <form onSubmit={handleLogin}>
                        <div className="login__form">
                            <div className="input__group">
                                <input type="email" name="email" id="email" placeholder="Enter Email" />
                            </div>
                            <div className="input__group">
                                <input type="password" name="password" id="password" placeholder="Enter Password" />
                            </div>
                            <div className="input__group">
                                <div className="account__login">
                                    <p>New user here? <Link to="/register">Register</Link></p>
                                </div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="google__login">
                                <h4>OR</h4>
                                <button onClick={handleGoogle}><FaGoogle /> Google Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;