import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function App() {
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
    <Navbar.Collapse className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>

      </ul>
    </Navbar.Collapse>
  </Container>
</Nav>
<nav>
  <Outlet/>
</nav>

<div className="container-fluid bg-1 text-center">
  <h3 className="margin">Who Am I?</h3>
  <img src="https://www.w3schools.com/bootstrap/bird.jpg" className="img-responsive img-circle margin" style={{display:"inline"}} alt="Bird" width={350} height={350}/>
  <h3>I'm an adventurer</h3>
</div>


<div className="container-fluid bg-2 text-center">
  <h3 className="margin">What Am I?</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  <Link to="/search" className="btn btn-default btn-lg">
    <span className="glyphicon glyphicon-search"></span> Search
  </Link>
</div>


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

export default App;
