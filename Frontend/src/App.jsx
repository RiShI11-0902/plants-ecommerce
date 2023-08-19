import './App.css'
import { SingleProduct } from './components/SingleProduct'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loginpage from './components/Loginpage'
import Registration from './components/Registration'
import ProductsPage from './components/ProductsPage'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </Router>
    {/* <SingleProduct/> */}
    </>
  )
}

export default App
