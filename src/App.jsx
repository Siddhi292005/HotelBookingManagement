
import './App.css';
import Hero from './components/hero';
import Welcome from './components/welcome';
import {Routes, Route} from 'react-router-dom';
import Loginpage from './components/loginpage';
import Signup from './components/signup';
import Payment from './components/payment';
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Loginpage />} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/welcome" element={<Welcome />} />
    <Route path="/booking" element={<Hero />} />
      <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  )
}

export default App
