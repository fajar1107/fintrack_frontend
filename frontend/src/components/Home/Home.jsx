import profile from './Profile.jpg'
import './Home.scss'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/user/', {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            const content = response.data;
            console.log(content);
        };

        fetchData();
    }, []);

    return (
        <div className='home_body'>
            <img src={profile} className='prof_icon' />
            <div className='header'>

                <center><select name="" id="" className='month_filter'>
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                </select></center>
            </div>
            <div className='balance'>
                <h1 className='balance_title'>Account Balance</h1> <br />
                <h1 className='balance_amount'>$9400</h1>
            </div>
            <div className='inc_exp_bal'>
                <div className='inc'>
                    <h1 className='inc_title'>Income</h1>
                    <h1 className='inc_amount'>$5000</h1>
                </div>
                <div className='exp'>
                    <h1 className='exp_title'>Expense</h1>
                    <h1 className='exp_amount'>$1200</h1>
                </div>
            </div>
            {/* <div className="graph"></div> */}
            <div className='recent'></div>
            <Footer />
        </div>
    )
}

export default Home