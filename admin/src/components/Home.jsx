import React from 'react'
import MenuBar from './MenuBar'
import { useSelector } from 'react-redux'

const Home = () => {
  const items = useSelector(state => state.auth.allItmes)
  return (
    <div>
            <MenuBar/>

    </div>
  )
}

export default Home