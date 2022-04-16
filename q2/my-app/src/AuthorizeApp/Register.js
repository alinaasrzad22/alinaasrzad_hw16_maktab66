import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Button, Form, Row } from 'react-bootstrap';
import React,{useEffect, useState} from 'react'

import { TabContext } from './Context/tabToggle';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function Register() {

  const { toggle, toggleFunction } = React.useContext(TabContext);


    const [validated, setValidated] = useState(false);
    const [select,setSelect] = useState('')
    const [data,setData]= useState('')
    const [states,setStates]=useState('')
    const [password,setShowPassword] = useState(false)
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPassword] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(fname);
      console.log(lname);
      console.log(email);
      console.log(pass);
      const user = {
        id:uuidv4(),
        firstname: fname,
        lastname: lname,
        email: email,
        password: pass
      };
  
      axios.post(`http://localhost:3000/users`, { user })
        .then(res => {
          if (res.status === 201) 
          toggleFunction(toggle)
          console.log("res",res);
          
        })
     
      setValidated(true);
      
    };
    const handleSelect =(event)=>{
       console.log(event.target.value); 
       setSelect(event.target.value)
    }
    const handleStates =(event)=>{
      setStates(event.target.value)
    }
     
    const getData=()=>{
        fetch('./iranstates.json')
        .then(response=>response.json())
        .then(res=> setData(res))
    }
    console.log(data);
    useEffect(()=>{ getData() },[])

    const handlePassword = ()=>{
      setShowPassword(!password)
    }

  return (
        <div className="wrapper">
            <p className='text-light mt-3 fw-bold fs-4'>رایگان ثبت نام کنید</p>
           <Form noValidate validated={validated} onSubmit={e =>handleSubmit(e)} >
               <Row className="mb-3 ">
                  <Form.Group className='mb-3 col-6 ' controlId="validationCustom01">
                      <Form.Control className='pass1 ' name='firstname' value={fname} onChange={e=> setFname(e.target.value)}  required type="text" placeholder="*نام" />
                    </Form.Group>
                    <Form.Group  className='mb-3 col-6' controlId="validationCustom02">
                      <Form.Control className='pass1 ' name='lastname' value={lname} onChange={e=> setLname(e.target.value)} required type="text"  placeholder="*نام خانوادگی" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="validationCustom03">
                      <Form.Control className='pass1' name="email" value={email} onChange={e=> setEmail(e.target.value)} required type="text"  placeholder="*پست الکترونیک" />
                    </Form.Group>
                    <div className='d-flex'>
                       <Form.Group className=' password' controlId="validationCustom04">
                          <Form.Control className='pass1 pass2' name="password" value={pass} onChange={e=> setPassword(e.target.value)} type={password?'text':'password'}  required  pattern=".{8,}" placeholder="*کلمه عبور" />
                        </Form.Group>
                        <Button type="button" className=' btn-password py-0'  onClick={handlePassword}>{password?<BsEye/> :<BsEyeSlash/>}</Button>
                    </div>
                    <Form.Group className='my-3 col-6' controlId="validationCustom05">
                        <select id="education" className='pass1 text-light ' name="education"  defaultValue={select} onChange={handleSelect}>
                         <option value="" disabled >تحصیلات</option>
                          <option value="1">دیپلم</option>
                          <option value="2">کارشناسی</option>
                          <option value="3">ارشد</option>
                          <option value="4">دکتری</option>
                        </select>

                    </Form.Group>
                    {select===''||select===''? "": 
                        <Form.Group className='mb-3 col-6' controlId="validationCustom06">
                          <Form.Control className='pass1 my-3 ' required type="text" name="educationCity"  placeholder="*محل تحصیل"/>
                        </Form.Group>  
                    }
                </Row>
                <Row>
                    <Form.Label className='text-light col-12 text-end'>محل سکونت</Form.Label>
                    <Form.Group className='mb-3 col-6' controlId="validationCustom07">
                        
                        <select id="city" className='pass1 form-select text-light'  required  defaultValue={states} onChange={handleStates}>
                            <option value="" name="city" disabled >استان</option>
                            {Object.keys(data).map((item,i)=><option key={i}>{item}</option>)}
                        </select>

                    </Form.Group>
                    <Form.Group className='mb-3 col-6 align-text-bottom' controlId="validationCustom08" >
                      <select id="location" className='pass1 form-select text-light'  required>
                         <option value="" name="location" disabled selected>شهر</option> 
                          {data[states]?.map((item,i)=><option key={i}>{item}</option>)} 
                        </select>
                    </Form.Group>
                </Row>
                <Button className='bg-success btn-submit fw-bold fs-5' type="submit">ثبت نام</Button>
            </Form>
      
        </div>   
    )
}

