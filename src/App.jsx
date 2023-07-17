import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/navbar'

import './App.css'

function App() {

  const [searchValue, setSearchValue] = useState('');


  return (
    <>
     <div className="App">
     <Navbar/>
        <Outlet />
     </div>
    </>
  )
}

export default App
