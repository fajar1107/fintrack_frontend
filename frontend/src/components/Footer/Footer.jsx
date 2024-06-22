import './Footer.scss'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCirclePlus, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Modal.scss'

const Footer = () => {

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    };

    // if (modal) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

    return (
        <>
            <div className='footer'>
                <FontAwesomeIcon icon={faHouse} onClick={() => navigate('/home')} className='home-icon' />
                <FontAwesomeIcon icon={faCirclePlus} onClick={toggleModal} className='plus-icon' />
                <FontAwesomeIcon icon={faUser} onClick={() => navigate('/profile')} className='profile-icon' />
            </div>
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <FontAwesomeIcon icon={faXmark} className="close-modal" onClick={toggleModal} />
                        <button className='add-income-btn' onClick={() => navigate('/income')}>ADD INCOME</button>
                        <button className='add-expense-btn' onClick={() => navigate('/expense')}>ADD EXPENSE</button>
                    </div>
                </div>
            )}
        </>

    )
}

export default Footer