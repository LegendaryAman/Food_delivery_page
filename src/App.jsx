import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './pages/Signin';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Signin' element={<SignIn/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;