import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState('orange')
 
  return (
    <div className="w-full h-screen duration-200 flex flex-col justify-end items-center "
      style = {{backgroundColor: color}}
    >
      <div className= "flex pb-2 px-4 py-2 rounded-md">
        <div className="flex justify-center gap-1 2 px-4 py-2 rounded-md"
        style={{backgroundColor: "silver"}}>
          <button onClick={() => setColor('red')}
            className="text-white font-medium px-2 py-1 rounded-full outline-none"
            style={{backgroundColor: "red"}}>
              Red
          </button>
          <button onClick={() => setColor('green')}
            className="text-white font-medium px-2 py-1 rounded-full outline-none"
            style={{backgroundColor: "green"}}>
            Green
          </button>
          <button onClick={() => setColor('blue')}
            className="text-white font-medium px-2 py-1 rounded-full outline-none"
            style={{backgroundColor: "blue"}}>
            Blue
          </button>
          <button onClick={() => setColor('yellow')}
            className="text-white font-medium px-2 py-0.5 rounded-full outline-none"
            style={{backgroundColor: "yellow"}}>
            Yellow
          </button>
          <button onClick={() => setColor('purple')}
            className="text-white font-medium px-2 py-0.5 rounded-full outline-none"
            style={{backgroundColor: "purple"}}>
            Purple
          </button>

        </div>

      </div>
    </div>
  )
}

export default App
