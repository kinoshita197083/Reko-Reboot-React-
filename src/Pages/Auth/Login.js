import React, { useEffect, useState, useRef } from 'react';
import './Login.css';
import useAuth from '../../Hook/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const passwordRef = useRef();

    const [userInput, setUserInput] = useState('');
    const [err, setErr] = useState(false);

    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const handleAuth = (e) => {
        e.preventDefault();
        if (userInput === 'password') {
            setAuth('approved');
            navigate("/")
        } else {
            setErr(true);
        }
    }

    useEffect(() => {
        if (auth.auth === "approved") {
            navigate("/");
        }

        passwordRef.current.focus();
    }, [])

    useEffect(() => {
        setErr(false);
    }, [userInput])

    return (
        <div className='login-page'>
            <form onSubmit={handleAuth}>
                <h1 className='section-heading'>Sign in</h1>
                <input
                    ref={passwordRef}
                    type='password'
                    required
                    value={userInput}
                    onChange={(e) => { setUserInput(e.target.value) }}
                />
                <br></br>
                <button className='btn'>Submit</button>
            </form>
            <p className={err ? 'display' : 'hide'}>Failed: wrong password</p>
        </div>
    )
}

export default LoginPage;