import { useCallback, useEffect, useState, useRef } from 'react'
import "./App.css"
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.selectSelectionRange(0, 99); // this tells the range to copy the element
    window.navigator.clipboard.writeText(password)
    alert(`The copied text is: ${password}`)
    document.getElementsByTagName('button')
    
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCSEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) { str += "0123456789" }
    if (charAllowed) { str += "~!@#$%^&*()_-+=><?" }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str[char]
      // pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center">Paasword Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder='Password' readOnly ref={passwordRef}/>
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard} id='buttonBlue'>Copy</button>
        </div>
        <div className="flex flex-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" max={100} min={8} value={length} className="cursor-pointer" onChange={(e) => setLength(e.target.value)} />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
              setNumberAllowed(!numberAllowed)
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
              setCharAllowed(!charAllowed)
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
