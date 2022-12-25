import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


const Login =() => {
  const [inputValue ,  setInputValue] = useState("")

  const change = (e) =>{
    const {name ,  value} = e.target;

    setInputValue((prev)=>{
      return{...prev,[name]:value}
    })
  }

  const submit = (e) =>{
    e.preventDefault();


    // setUserValue((prev)=>{
    //   return[...prev,inputValue]
    // })

  }
  // console.log(userValue,"userValue");
  return (
    <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={change}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={change}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
