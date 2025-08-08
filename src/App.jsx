import { useState } from 'react'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='mask'>
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  )
}

export default App
