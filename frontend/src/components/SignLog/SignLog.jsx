import { useNavigate } from 'react-router-dom';
import illustration1 from './Illustration1.png';
import './SignLog.scss';

const SignLog = () => {

    const navigate = useNavigate();

    return (
        <div className="signlog-body">
            <div className="sign-log">
                <img src={illustration1} className='illustration' alt="Illustration 1" />
                <h1 className='title'>Gain total control <br /> of your money</h1>
                <p className='para'>Become your own money manager <br /> and make every cent count.</p>
                <button className="sign-btn" onClick={() => navigate('/signup')}>Sign Up</button>
                <button className="log-btn" onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>

    )
}

export default SignLog