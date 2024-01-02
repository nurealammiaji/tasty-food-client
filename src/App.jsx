import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './common/Navigation/Navbar'
import Footer from './common/Footer/Footer'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
