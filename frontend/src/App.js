import LoginForm from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignupForm from './components/Signup';
import UserTable from './components/UserTable';


function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;
