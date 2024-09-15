import { useState } from 'react'
import './App.css'

import logo from "./assets/instaimages.png"
function App() {
  const [login, setlogin] = useState(true)

  const loginSwitch = ()=>{
    setlogin(!login)
  }

  return (
    <>
      <div id='Container'>
         <div id='user'>
             <img src={logo} alt="" />
             <input hidden={login} type="text" name="" placeholder="mobile Number or Email" id="" />
             <input hidden={login} type="text" placeholder='Full name' id="" />
             <input type="email" name='' id='' placeholder='Phone Number, username, or email' />
             <input type='text' name='' id='' placeholder='Password' />
             <button>{login?  "Sign in" : "Sign up"}</button>
             <div id='footer'>
              {login?"Don't have an account" : "have an account?" } <span onClick={loginSwitch}> {login? "Sign up" : "Log in"}</span> 
             </div>
         </div>
      </div>
        
    </>
  );
}

export default App
