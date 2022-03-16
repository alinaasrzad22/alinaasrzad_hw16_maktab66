import Login from './Login'
import React from 'react'
import Register from './Register';
import {useState} from 'react'

export default function Tab() {
  
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);
    return(
          <div className="App">
             <header className='wrapper pt-4 mt-5' >
                <div className=' d-flex text-center justify-content-center'>
                  <div className={'text-light login  py-2 text-center my-2  '+ (isToggled ? "not-active":"active")} onClick={onToggle}>ورود</div>
                  <div className={' text-light register py-2 text-center my-2 '+ (isToggled ? "active":"not-active")}  onClick={onToggle}>ثبت نام</div>
                </div>
                {isToggled? <Register/>:<Login/> } 
              </header> 
              
            </div>
    );
 }

