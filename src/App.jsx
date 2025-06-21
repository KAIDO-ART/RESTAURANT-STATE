import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './components/pages/home/HomeView'
import Login  from './components/pages/auth/Login'
import PizzaList from './components/pages/menu/PizzaList'
import MyNavbar from './components/pages/Header/MyNavbar'
import AboutView from './components/pages/about/AboutView'
import MenuView from './components/pages/menu/MenuView'
import PizzaDetails from './components/pages/menu/PizzaDetails'


const App = () => {
  return (
    <>
     <MyNavbar/>

     {/* {define routes} */}
     <Routes>
      <Route path='/' element={<HomeView/>}/>
      <Route path='/menu' element={<MenuView/>}/>
      <Route path='/about' element={<AboutView/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu/:title' element={<PizzaDetails/>}/>
     </Routes>
    </>
   
  )
}

export default App