import logo from './logo.svg';
import './App.css';
import React, {useRef, useEffect, useState} from 'react'
import Reception from './Reception';
import {ThemeContext} from './Contexts/Contexts'

function App() {

  const btnRef = useRef(0)
  const paragraphRef = useRef()
  const [ btnState, setBtnState ] = useState(0)
  const [ themeValue, setThemeValue ] = useState('white')

  console.log('test git comit --amend')
  console.log('hello')
  useEffect(() => {
    btnRef.current = btnRef.current + 1
  })

  const countRender = () => {
    setBtnState(btnState+1)
    // (btnRef.current >10 && btnState < 20) ? setThemeValue('red') : setThemeValue('white');
    
    if(btnRef.current >10 && btnState < 20) {
      setThemeValue('red')
      paragraphRef.current.hidden = true
    } else {
      setThemeValue('white');
      paragraphRef.current.hidden = false
    }
  }


  return (
    <div className="App" style={{border: "2px solid #fefae0", margin:"4px"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p ref={paragraphRef} value="test">
          Ref <code> render time {btnRef.current} </code>
        </p>
  
        <button onClick={countRender}> Click me </button>
        <ThemeContext.Provider value={themeValue}>
          <Reception/>
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
