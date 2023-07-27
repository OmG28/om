import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import Menu from './Components/Menu'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

// import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     {/* <Navbar></Navbar> */}
     <Routes>
<Route path='/' element={<Home></Home>}></Route>

<Route path='/menu' element={<Menu></Menu>}></Route>
     </Routes>
     </BrowserRouter>      
    </div>
  )
}

export default App
