import { useState } from 'react';
import back from './back.png'
import './Login.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                email,
                password
            }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            const content = response.data;
            localStorage.setItem('jwt', content)
            console.log(content);
            setRedirect(true);
        }
        catch (error) {
            if (error.response && error.response.data) {
                // Capture and log the error message from the backend
                console.error('Error:', error.response.data.detail);
            }
        }
    }
    if (redirect) {
        return <Navigate to='/home' />
    }

    function togglePass() {
        var x = document.getElementById('pass');
        if (x.type === 'password') {
            x.type = 'text';
        } else {
            x.type = 'password';
        }
    }

    return (
        <div className="login-body">
            <div className="header">
                <img src={back} onClick={() => navigate('/')} className='back-btn' />
                <h1 className='title'>Login</h1>

            </div>

            <div className="form-container">
                <form onSubmit={submit} >
                    <input type="email" placeholder="Email" className='input-field'
                        onChange={e => setEmail(e.target.value)}
                    /> <br />
                    <input type="password" placeholder='Password' className='input-field' id='pass'
                        onChange={e => setPassword(e.target.value)}
                    /> <br />
                    <input type="checkbox" onClick={togglePass} className='show-pass' /><span className='show-pass'>Show Password</span> <br />
                    <button type='submit' className='login-btn' >Login</button>
                </form>
                <h1 className='login-prompt'>Do not have an account yet? <span onClick={() => navigate('/signup')} className='login-link'>Sign Up</span></h1>
            </div>
        </div>
    )
}

export default Login