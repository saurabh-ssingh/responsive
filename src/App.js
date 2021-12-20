import React from 'react'
import Navbar from './components/Navbar'

import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import './index.css'
const App = () =>{
  return(
    <>
      <Navbar/>
      
      <Service/>
      <Portfolio/>
      <Team/>
    </>
  )
}
export default App