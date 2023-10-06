import './App.css'
import { SingleProduct } from './components/SingleProduct'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loginpage from './components/Loginpage'
import Registration from './components/Registration'
import ProductsPage from './components/ProductsPage'
import Cart from './components/Cart'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart/:id' element={<Cart />} />
      </Routes>
    </Router>
    {/* <SingleProduct/> */}
    </>
  )
}

export default App
