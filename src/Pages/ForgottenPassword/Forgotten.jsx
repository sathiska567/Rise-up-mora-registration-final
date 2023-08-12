import React from 'react'
import Button from '../../Components/Button/Button'
import { sendPasswordResetEmail } from 'firebase/auth';
import { database } from '../../Config/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Forgotten.css'


export default function Forgotten() {
  const history = useNavigate();


  const handleReset = async (e) => {
    e.preventDefault();

    const email = e.target.email.value


    sendPasswordResetEmail(database, email).then(data => {
      alert("Check your email")
      history("/")

    })
  }


  return (
    <>
      <div className='wrapper d-flex'>
        <div className="forgot-div login">
          <p className='forgot-div-para mb-2'>Reset Password</p>
          <form onSubmit={(e) => handleReset(e)} className='forgot-div-form needs-validation'>

            <div className="was-validated">
              <label htmlFor="email" className='form-label'>Enter Email</label> <br />

              <input
                className='form-control'
                type='email'
                name='email'
                placeholder='Enter your email'
                required

              />
              <div className="invalid-feedback">
              Please Enter Your Email ?
            </div>
            </div>
            <br /><br /><br />
            <div>

              <Button

                text='Reset'

              />

            </div>
            <br />
          </form>
        </div>
      </div>
    </>
  )
}