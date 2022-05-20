/* import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger"> Error: {error.message}</p>
      </div>
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email address");
    }
  };

  return (
    <div className=" w-25 mx-auto my-4">
      <h2 className="text-center text-secondary">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="secondary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="text-center">
        You don't have an account?{" "}
        <Link
          to="/register "
          className="text-danger pe-auto text-decoration-none "
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <p className="text-center">
        Forget your password?
        <button
          to="/register "
          className="btn btn-link text-danger pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};
export default Login;
 */






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