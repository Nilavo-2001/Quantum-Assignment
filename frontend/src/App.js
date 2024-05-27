import "react-toastify/dist/ReactToastify.css";
import SignupForm from './components/Signup';
import UserTable from './components/UserTable';
import LoginForm from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'
import { useContext } from 'react';
import { userContext } from './context/UserProvider';

function App() {
  const { userInfo } = useContext(userContext);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={(userInfo && userInfo.token) ? <UserTable /> : <LoginForm />} />
        <Route path='/login' element={(!userInfo) ? <LoginForm /> : <UserTable />} />
        <Route path='/signup' element={(!userInfo) ? <SignupForm /> : <UserTable />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
