import Footer from "../Footer/Footer"
import './Profile.scss'
import profilepic from './Profile.jpg'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const navigate = useNavigate();

    return (
        <div className='profile-body'>
            <div className='user'>
                <img src={profilepic} className='prof-pic' />
                <h1 className='username'>Username <br /> <span>Fajar Mohammed</span> </h1>
            </div>
            <div className='settings'>
                <button className='logout-btn' onClick={() => navigate('/')} ><FontAwesomeIcon icon={faRightFromBracket} className='logout-icon' />Logout</button>
            </div>

            <Footer />
        </div>
    )
}

export default Profile