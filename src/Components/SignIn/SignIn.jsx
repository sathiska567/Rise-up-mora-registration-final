import './Pages.css'

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import { database } from '../../Config/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Create from '../CreateSection/Create';
import { Link } from 'react-router-dom';


export default function RegisterAndLogin() {
  const [errorMessage, setErrorMessage] = useState('');

  const history = useNavigate();


  // ======================================================================================================================= 


  const handleSubmit = (e) => {
    e.preventDefault();


    //get input values
    const email = e.target.email.value
    const password = e.target.password.value

    //Use Firebase authentication
    signInWithEmailAndPassword(database, email, password).then(data => {
      alert("Registration Successfull")
      history("/home")

    }).catch(err => {
      if (err.code === 'auth/wrong-password') {

        setErrorMessage('Please Enter Correct Password');

      }

      else if (err.code === 'auth/missing-password') {

        setErrorMessage('Please Enter your Password');

      }

      else if (err.code === 'auth/invalid-email') {

        setErrorMessage('Please check Enter Correct Email');
      }

      else if (err.code === 'auth/user-not-found') {

        setErrorMessage('Please Check Email Address or Please Register');


      }


    })

  }


  //  ===========================================================================================================


  return (

    <div className='wrapper d-flex align-item-center justify-content-center'>

      <div className="form-div login">
        <h1 className='form-div-h1'>Sign-In</h1><br /><br />

        <form onSubmit={(e) => handleSubmit(e)} className='Form needs-validation'>

          <div className="was-validated">
            <label htmlFor="email" className='form-label'>Email</label> <br />

            <input
              type='email'
              name='email'
              required
            />

            <div className="invalid-feedback">
              Please Enter Your Email ?
            </div>

          </div>

          <br />

          <div className='was-validated'>

            <table className='passwordAndForgotTable'>
              <tr>
                <td>
                  <label htmlFor="password" className='form-label'>Password</label>
                </td>

                <td>
                  <div>
                    <Link to='/reset' className='link'>
                      Forgot password ?
                    </Link>
                  </div>
                </td>
              </tr>

            </table>

            <input
              type='password'
              name='password'
              required
            />

            <div className="invalid-feedback">
              Please Enter Your Password ?
            </div>


          </div>
          <br />
          <div className="show-err">
            {errorMessage && <p className='errorMsg'>{errorMessage}</p>}
          </div>
         
          <div>
            <Button

              text="Sign In"

            />
          </div><br />


          <div>
            <Create />
          </div>

        </form>
      </div>
    </div>
  )
}
