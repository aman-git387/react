import { useState, useCallback, useEffect, useRef} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (characterAllowed) str+= "~`!@#$%^&*()_+{}[]"
    if (numberAllowed) str += "123456789"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length,numberAllowed,characterAllowed,setPassword])
  const Passwordcopy = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
  passwordgenerator()
  }, [length, numberAllowed, characterAllowed, setPassword])
  return (
    <div className=" h-30 bg-gray-200 my-4 mx-44 justify-center">
     <h3 className="font-bold my-4 text-blue-500">password generator</h3>
     <input type='text' placeholder="Your password" value={password} ref = {passwordRef}
     className='w-150 rounded-xl bg-pink-50 border border-solid border-blue outline-none'>
       </input>
      <button onClick={Passwordcopy}
       className='cursor-pointer text-red-500'>
        copy
      </button>
     <div className='flex justify-center gap-2'>
      <input type='range' min={8} max={32} value={length}
        onChange={(e) => {setLength(e.target.value)}}>
      </input>
      <label>length:{length}</label>
      <label htmlFor='Numberinput' className='text-blue-700 font-medium border border-solid border-l-black px-3 rounded-xl'>
        <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} 
        className='accent-blue-500 size-3.5'/>
        Include numbers
      </label>
      <label htmlFor='characterinput' className='text-blue-700 font-medium outline-none border border-solid border-2-black px-3 rounded-xl 
      '>
        <input type="checkbox" defaultChecked={characterAllowed} onChange={() => {setCharacterAllowed((prev) => !prev);}}
        className='accent-blue-500 size-3.5' />
        Include characters
      </label>
     </div>
    </div>
  )
}
export default App
