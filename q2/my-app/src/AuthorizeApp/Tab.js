import Login from './Login'
import React from 'react'
import Register from './Register';
// import {useState} from 'react'
import { TabContext } from './Context/tabToggle';

export default function Tab() {
  const { toggle, toggleFunction } = React.useContext(TabContext);
    // const [isToggled, setIsToggled] = useState(false);
    // const onToggle = () => setIsToggled(!isToggled);
    return(
          <div className="App">
             <header className='wrapper pt-4 mt-5' >
                <div className=' d-flex text-center justify-content-center'>
                  <div className={' login  py-2 text-center my-2  '+ (toggle ? "not-active":"active")} onClick={toggleFunction}>ورود</div>
                  <div className={'  register py-2 text-center my-2 '+ (toggle ? "active":"not-active")}  onClick={toggleFunction}>ثبت نام</div>
                </div>
                {toggle? <Register/>:<Login/> } 
              </header> 
              
            </div>
    );
 }

