import React from 'react';
import logoreact from '../images/react.svg';
import logoaws from '../images/aws-logo.svg';
import logobootstrap from '../images/bootstrap-4.svg';
import logonodejs from '../images/Node.js_logo.svg';
class AppFooter extends React.Component {
    render() {
        return (
            <div>

<footer className="page-footer font-small mdb-color pt-4 mt-4">

 
  <div className="container text-center text-md-left">

   
    <div className="row text-center text-md-left mt-3 pb-3">

     
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="mb-4 font-weight-bold">AWSHandsOn</h6>
        <p>Our mission is to bring clarity in understanding AWS Services & Concepts</p>
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
        <p><a href="https://principlesofchaos.org/">Chaos Engineering Principle</a></p>
        <p><a href="https://www.reactivemanifesto.org/">Reactive Manifesto</a></p>
      </div>

    
      <hr className="w-100 clearfix d-md-none"/>

      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="font-weight-bold">Contact</h6>
        <p><i className="glyphicon glyphicon-envelope"></i>contact@awshandson.com</p>
      </div>
     

    </div>
    

    <hr/>

    
    <div className="row d-flex align-items-center">
      <div className="col-md-7 col-lg-7">
        <p className="text-center text-md-left">© 2018 Copyright: <a href="https://awshandson.com"><strong>AWSHandsOn</strong></a></p>
      </div>
      <div className="col-sm-12 col-md6 col-lg-5">
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
export default AppFooter;