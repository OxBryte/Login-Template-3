import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/lojj.svg'

function Signup() {

  return (
    <div className=''>
        <form>
            <div className='form-img'>
                <img src={Logo} alt='' />
            </div>
            <div className="login">
                <div className='login-text'>
                    <h1>Signup</h1>
                    <span>Glad to have you here!</span>
                </div>

                <div className='form'>
                    <div className='row col-12 form-input'>
                        <div className='details row'>
                            <input className='col-12' type='text' placeholder='Full name' required />
                            <input className='col-12' type='username' placeholder='Username' required />
                            <input className='col-12' type='email' placeholder='Email address' required />
                            <input className='col-12' type='password' placeholder='Password' required />
                            <input className='col-12' type='password' placeholder='Confirm password' required />
                            <button className='form-button' type='submit'>Signup</button>
                        </div>
                        <h2>Already a member? Login</h2>
                        <h3>Forgotten password? Reset here</h3>
                    </div>
                </div>
            </div>
            <div className=''>
                
            </div>
        </form>
    </div>
    
  );
}

export default Signup;
