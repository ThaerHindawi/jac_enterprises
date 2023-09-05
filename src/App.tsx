import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nasa from './components/Nasa/Nasa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Nasa />
  )
}

export default App
