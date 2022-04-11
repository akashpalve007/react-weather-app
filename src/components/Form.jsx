import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <form onsubmit="" className="box">
            <h1>Login</h1>
            <p className="text-muted"> Please enter your login and password!</p> 
            <input type="text" name placeholder="Username" /> 
            <input type="password" name placeholder="Password" /> 
            <a className="forgot text-muted" href="#">Forgot password?</a> 
            <input type="submit" name defaultValue="Login" href="https://google.com" />
            {/* <div className="col-md-12">
              <ul className="social-network social-circle">
                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter" /></a></li>
                <li><a href="#" className="icoGoogle" title="Google +"><i className="fab fa-google-plus" /></a></li>
              </ul>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Form;