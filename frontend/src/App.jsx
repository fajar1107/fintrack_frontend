import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignLog from "./components/SignLog/SignLog";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import AddIncome from "./components/AddIncome/AddIncome";
import AddExpense from "./components/AddExpense/AddExpense";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? <Preloader /> :
        <Router>
          <Routes>
            <Route path="/" element={<SignLog />} />
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/income" element={<AddIncome />}></Route>
            <Route path="/expense" element={<AddExpense />}></Route>
          </Routes>
        </Router>}
    </div>
  )
}

export default App
