import React,{useState}from 'react'
import { Form , Button, Row} from 'react-bootstrap';
import { BsEye ,BsEyeSlash } from "react-icons/bs";

export default function Login() {
    
    const [validated, setValidated] = useState(false);
    const [password,setPassword] = useState(false)

    const handleSubmit = (event) => {
      const form = event.currentTarget;
       if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      setValidated(true);
    };
    const handlePassword = ()=>{
        setPassword(!password)
    }
    console.log(password);
  return (
    <div className='wrapper d-flex flex-column justify-content-center'>
        <p className='text-light mt-3 fw-bold fs-4'>خوش آمدید</p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group className='my-2 ' controlId="validationCustom01">
                  <Form.Control type='email' className='email'    placeholder="* پست الکترونیک"/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className='d-flex'>
                <Form.Group controlId="validationCustom02" className='password'>
                  <Form.Control className='pass1 pass2' required  pattern=".{8,}" type={password?'text':'password'} placeholder="* کلمه عبور"/>
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                  
                </Form.Group>
                <Button type="button" className=' btn-password py-0' onClick={handlePassword}>{password?<BsEye/> :<BsEyeSlash/>}</Button>
               </div>
            </Row> 
            <p className='text-success text-end'>فراموش کردید؟</p>   
           <Button type="submit" className='bg-success btn-submit'>ورود</Button>
        </Form>
    </div>
  )
}

