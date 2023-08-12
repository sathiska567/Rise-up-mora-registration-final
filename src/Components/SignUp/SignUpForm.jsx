import '../SignIn/SignIn'
import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

import { dataRef, database } from '../../Config/FirebaseConfig'
import Button from '../Button/Button'

export default function SignUpForm() {


  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  // ======================================================================================================================= 


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    

    createUserWithEmailAndPassword(database,email, password).then(data => {
      alert("Reagister Successfull")

      // Pass the user id using navigate
      navigate(`/home/${data.user.uid}`); // Assuming you have a route like "/item/:id"
        
      alert(data.user.uid);

    }).catch(err => {
      if (err.code === 'auth/weak-password') {
        setErrorMessage('Please Enter 6 Characters with letter,Numbers and symbols');

      }

      if(err.code === 'auth/invalid-email'){
        setErrorMessage('Please Enter Your Email corrected order');
      }

      if(err.code === 'auth/email-already-in-use'){

        setErrorMessage('Already Registered This email ! Use Another Email');

      }

    })

  }




  return (
    <div>
      <div className='wrapper d-flex align-item-center justify-content-center'>

        <div className="form-div login">
          <h1 className='form-div-h1 mb-2'>Register</h1>

          <form onSubmit={(e) => handleSubmit(e)} className='Form needs-validation'>

            <div className="was-validated">
              <label htmlFor="name" className='form-label'>Name</label> <br />

              <input
                type='text'
                name='name'
                required
               

              />
              <div className="invalid-feedback">
                Please Enter Your Name ?
              </div>

            </div>

            <br />

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

              <label htmlFor="password" className='form-label'>Password</label> <br />

              <input
                type='password'
                required
                name='password'
               

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

                text="Sign Up"

              />
            </div>
             <br />
          </form>
        </div>
      </div>
    </div>
  )
}
