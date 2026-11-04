import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 
 
function App() {
  const [color, setColor] = useState('yellow')
  return (
    <div className="w-full h-screen bg-black">
      <button text-white bg-red-500 hover:bg-red-700>
        Red
      </button>

    </div>
  )
}
export default App

