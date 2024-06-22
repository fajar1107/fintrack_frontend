import { Navigate, useNavigate } from 'react-router-dom';
import back from './back.png';
import axios from 'axios';
import './SignUp.scss'
import { useState } from 'react';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                name,
                email,
                password
            }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            const content = response.data;
            console.log(content);
            setRedirect(true);
        }
        catch (error) {
            setErrorMessage('User already exists with this email');
        }
    }
    if (redirect) {
        return <Navigate to='/login' />
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
        <div className="signup-body">
            <div className="header">
                <img src={back} onClick={() => navigate('/')} className='back-btn' />
                <h1 className='title'>Sign Up</h1>
            </div>

            <div className="form-container">
                {errorMessage && <><br /><p style={{ color: 'red', margin: 0, padding: 0 }}>{errorMessage}</p></>}

                <form onSubmit={submit} >
                    <input type="text" placeholder="Name" className='input-field' required
                        onChange={e => setName(e.target.value)}
                    /> <br />
                    <input type="email" placeholder="Email" className='input-field'
                        onChange={e => setEmail(e.target.value)}
                    /> <br />
                    <input type="password" placeholder='Password' className='input-field' id='pass'
                        onChange={e => setPassword(e.target.value)}
                    /> <br />
                    <input type="checkbox" onClick={togglePass} className='show-pass' /><span className='show-pass'>Show Password</span> <br />
                    <button type='submit' className='sign-btn' >Sign Up</button>
                </form>
                <h1 className='login-prompt'>Already have an account? <span onClick={() => navigate('/login')} className='login-link'>Login</span></h1>
            </div>
        </div>
    )
}

export default SignUp