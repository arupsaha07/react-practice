import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);




  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+=[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg p-5 bg-slate-800 mt-36'>
        <h1 className='text-2xl text-center text-slate-400 font-semibold'>Password Generator</h1>
        <div className="bg-slate-700 p-4 rounded-lg mt-5">
          <div className="flex gap-2 mb-3">
            <input className='rounded w-full px-2 py-2 outline-none bg-slate-600 border-slate-400 border cursor-not-allowed text-slate-200' type="text" name="" value={password} readOnly ref={passwordRef} />
            
            <button className="rounded border-slate-400 border bg-slate-800 text-slate-400 px-4 py-2 hover:bg-slate-600" onClick={copyPasswordToClipboard}>Copy</button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="range" id='range' className='range-slider' min={6} max={16} value={length} onChange={(e) => { setLength(e.target.value) }} />
              <label htmlFor='range' className='text-slate-400'>Length: {length}</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className='switch' defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} id="number" />
              <label htmlFor='number' className='text-slate-400'>Numbers</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} id="char" />
              <label htmlFor='char' className='text-slate-400'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
