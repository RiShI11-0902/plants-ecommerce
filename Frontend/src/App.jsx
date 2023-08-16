import './App.css'
import { SingleProduct } from './components/SingleProduct'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loginpage from './components/Loginpage'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
      </Routes>
    </Router>
    {/* <SingleProduct/> */}
    </>
  )
}

export default App
