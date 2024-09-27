import React,{useState} from 'react'
import Weather from './components/Weather'
import Header from './components/header'
const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className='app'>
        <div className='Navbar'>
            <Header/>
        </div>
      <Weather />
    </div>
  )
}

export default App