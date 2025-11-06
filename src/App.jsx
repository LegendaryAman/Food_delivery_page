import './App.css';
import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './pages/Signin';
import Register from './pages/Register';
function App() {
  return (
    <>
    <h1 className="text-4xl font-bold text-blue-500">Tailwind Works!</h1>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;