import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
  return (<>

    <Nav className="navbar navbar-default">
  <Container className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link  to="/" className="navbar-brand">Me</Link>

    </div>
    {/* <Navbar.Collapse className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>

      </ul>
    </Navbar.Collapse> */}
  </Container>
</Nav>
<h2 style={{color:"black",display:"flex",justifyContent:"center"}} >Login Page</h2>
<div className="container-fluid bg-1 text-center">
    <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-black'>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={change}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-black'>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={change}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>

{/* <div className="container-fluid bg-2 text-center">
  <h3 className="margin">What Am I?</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  <Link to="/search" className="btn btn-default btn-lg">
    <span className="glyphicon glyphicon-search"></span> Search
  </Link>
</div> */}
<div className="container-fluid bg-3 text-center">
  <h3 className="margin">Where To Find Me?</h3>

  <br/>
  <div className="row">
    <div className="col-sm-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="https://www.w3schools.com/bootstrap/birds1.jpg" className="img-responsive margin" style={{width:"100%"}} alt="birds1"/>
    </div>
    <div className="col-sm-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="https://www.w3schools.com/bootstrap/birds2.jpg" className="img-responsive margin" style={{width:"100%"}} alt="birds1"/>
    </div>
    <div className="col-sm-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="https://www.w3schools.com/bootstrap/birds3.jpg" className="img-responsive margin" style={{width:"100%"}} alt="birds1"/>
    </div>
  </div>
</div>


<footer className="container-fluid bg-4 text-center">
  <p>Bootstrap Theme Made By <Link to="https://www.w3schools.com">www.w3schools.com</Link></p>
</footer>

  </>
  );
}

export default Login;
