import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navigation/Navbar'
import Footer from './pages/Footer/Footer';

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
