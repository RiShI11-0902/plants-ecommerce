import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuBar from './components/MenuBar'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Panel from './components/Panel'
import Home from './components/Home'
import CreateProduct from './components/CreateProduct'
import Settings from './components/Settings'
import History from './components/History'
import Analysis from './components/Analysis'



function App() {
  return (
    <>
      {/* <MenuBar/> */}
      <Router>
        <Routes>
        <Route path='/' element={<LoginPage />} />
          {/* <Route path='/panel' element={<Panel />} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/history' element={<History />} />
          <Route path='/analysis' element={<Analysis />} />

        </Routes>
      </Router>
      {/* <LoginPage /> */}
    </>
  )
}

export default App
