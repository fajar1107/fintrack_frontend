import { useNavigate } from 'react-router-dom'
import './AddExpense.scss'

const AddExpense = () => {

    const navigate = useNavigate()

    return (
        <div className='expense-body'>
            <h1 className='back-btn' onClick={() => navigate('/home')}>back</h1>
            <div className="header">
                <h1>Expense</h1>
            </div>
            <div className="amount">
                <h1 className='ques'>How much?</h1>
                <h1 className='amt'>$1200</h1>
            </div>
            <form action="" className='add-income-form'>
                <select name="" id="" className='category'><option value="">Category</option></select>
                <input type="text" className='description' placeholder='Description' />
                <button className='submit-btn' onClick={() => navigate('/home')}>Submit</button>
            </form>
        </div>
    )
}

export default AddExpense