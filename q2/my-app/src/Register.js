import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Button, Form, Row } from 'react-bootstrap';
import React,{useEffect, useState} from 'react'

export default function Register() {
    const [validated, setValidated] = useState(false);
    const [select,setSelect] = useState('')
    const [data,setData]= useState('')
    const [states,setStates]=useState('')
    const [password,setPassword] = useState(false)

    const handleSubmit = (event) => {
      const form = event.currentTarget;
       if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
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
        setPassword(!password)
    }

  return (
        <div className="wrapper">
            <p className='text-light mt-3 fw-bold fs-4'>رایگان ثبت نام کنید</p>
           <Form noValidate validated={validated} onSubmit={handleSubmit} >
               <Row className="mb-3 ">
                  <Form.Group className='mb-3 col-6 ' controlId="validationCustom01">
                      <Form.Control className='pass1 '  required type="text" placeholder="*نام" />
                    </Form.Group>
                    <Form.Group  className='mb-3 col-6' controlId="validationCustom02">
                      <Form.Control className='pass1 ' required type="text" placeholder="*نام خانوادگی" />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="validationCustom03">
                      <Form.Control className='pass1' required type="text" placeholder="*پست الکترونیک" />
                    </Form.Group>
                    <div className='d-flex'>
                       <Form.Group className=' password' controlId="validationCustom04">
                          <Form.Control className='pass1 pass2' type={password?'text':'password'} required  pattern=".{8,}" placeholder="*کلمه عبور" />
                        </Form.Group>
                        <Button type="button" className=' btn-password py-0' onClick={handlePassword}>{password?<BsEye/> :<BsEyeSlash/>}</Button>
                    </div>
                    <Form.Group className='my-3 col-6' controlId="validationCustom05">
                        <select id="education" className='pass1 text-light ' defaultValue={select} onChange={handleSelect}>
                         <option value="" disabled >تحصیلات</option>
                          <option value="1">دیپلم</option>
                          <option value="2">کارشناسی</option>
                          <option value="3">ارشد</option>
                          <option value="4">دکتری</option>
                        </select>

                    </Form.Group>
                    {select===''||select===''? "": 
                        <Form.Group className='mb-3 col-6' controlId="validationCustom06">
                          <Form.Control className='pass1 my-3 ' required type="text" placeholder="*محل تحصیل"/>
                        </Form.Group>  
                    }
                </Row>
                <Row>
                    <Form.Label className='text-light col-12 text-end'>محل سکونت</Form.Label>
                    <Form.Group className='mb-3 col-6' controlId="validationCustom07">
                        
                        <select id="city" className='pass1 form-select text-light' required defaultValue={states} onChange={handleStates}>
                            <option value="" disabled >استان</option>
                            {Object.keys(data).map((item,i)=><option key={i}>{item}</option>)}
                        </select>

                    </Form.Group>
                    <Form.Group className='mb-3 col-6 align-text-bottom' controlId="validationCustom08" >
                      <select id="location" className='pass1 form-select text-light' required>
                         <option value="" disabled selected>شهر</option> 
                          {data[states]?.map((item,i)=><option key={i}>{item}</option>)} 
                        </select>
                    </Form.Group>
                </Row>
                <Button className='bg-success btn-submit fw-bold fs-5' type="submit">ثبت نام</Button>
            </Form>
      
        </div>   
    )
}

