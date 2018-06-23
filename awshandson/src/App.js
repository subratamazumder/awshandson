import React, { Component } from 'react';
import logo from './images/aws-handson-logo_final2.png';
import logoreact from './images/react.svg';
import logoaws from './images/aws-logo.svg';
import logobootstrap from './images/bootstrap-4.svg';
import logonodejs from './images/Node.js_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="">
            <img src={logo} width="75" height="75" alt="AWS Hands On" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link disabled" href="">About Us</a>
              <a className="nav-item nav-link disabled" href="">Trainigs</a>
              <a className="nav-item nav-link disabled" href="">Blogs</a>
              <a className="nav-item nav-link disabled" href="">Demos</a>
            </div>
          </div>
        </nav>


        <div className="App">
        
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <h1 className="display-6">Welcome to AWS Hands-On</h1>
            <strong>Hello Builders!</strong> Site is under construction, come back soon for utmost interesting <strong>AWS Hands-On</strong> demos.
          </div>
        </div>


        <div className="text-center">
          <img src={logo} className="img-thumbnail rounded-circle w-25 h-25" width="50" height="50" alt="AWS Hands On" />
        </div>


        <div className="text-center">
          <img src={logo} className="img-thumbnail rounded-circle w-25 h-25" width="50" height="50" alt="AWS Hands On" />
        </div>
        <div className="text-center">
          <img src={logo} className="img-thumbnail rounded-circle w-25 h-25" width="50" height="50" alt="AWS Hands On" />
        </div>



        <footer>
        </footer>


        
<footer className="page-footer font-small mdb-color pt-4 mt-4">

 
  <div className="container text-center text-md-left">

   
    <div className="row text-center text-md-left mt-3 pb-3">

     
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="mb-4 font-weight-bold">AWSHandsOn</h6>
        <p>Our vision is to brings clarity in understanding AWS Services & concepts</p>
      </div>
     

      <hr className="w-100 clearfix d-md-none"/>

     
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="font-weight-bold">Resources & Trainings</h6>
        <p><a href="#!">Udemy</a></p>
        <p><a href="#!">Blogs</a></p>
        <p><a href="#!">Youtube</a></p>
        <p><a href="#!">Demos</a></p>
      </div>
      

      <hr className="w-100 clearfix d-md-none"/>

     
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="font-weight-bold">Useful links</h6>
        <p><a href="https://aws.amazon.com/new/">What's new @AWS</a></p>
        <p><a href="https://principlesofchaos.org/">Chaos Engineering</a></p>
        <p><a href="https://www.reactivemanifesto.org/">Reactive Manifesto</a></p>
      </div>

    
      <hr className="w-100 clearfix d-md-none"/>

      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="font-weight-bold">Contact</h6>
        <p><i className="glyphicon glyphicon-envelope"></i>contact@awshanson.com</p>
      </div>
     

    </div>
    

    <hr/>

    
    <div className="row d-flex align-items-center">
      <div className="col-md-8 col-lg-8">
        <p className="text-center text-md-left">© 2018 Copyright: <a href="https://awshandson.com"><strong> awshandson.com</strong></a></p>
      </div>
      <div className="col-md-4 col-lg-4 ml-lg-0">
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1">Powered By</a></li>
            <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><img src={logoaws} width="50" height="50" alt="React JS" /></a></li>
            <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><img src={logoreact} width="50" height="50" alt="React JS" /></a></li>
            <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><img src={logonodejs} width="50" height="50" alt="React JS" /></a></li>
            <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><img src={logobootstrap} width="50" height="50" alt="React JS" /></a></li>
          </ul>
        </div>

      </div>
  

    </div>
    

  </div>
  

</footer>
        
      </div>
    );
  }
}

export default App;
