import React from 'react'
import './PasswordLoginWithFirebase.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
// import RegisterAndLogin from '../Pages/RegisterAndLogin'
import SignIn from '../Components/SignIn/SignIn'
import SignUp from '../Components/SignUp/SignUp'

import Test from '../Components/SignIn/Test'
import Forgotten from '../Pages/ForgottenPassword/Forgotten'
import UserId from '../Pages/UserId/UserId'

export default function PasswordLoginWithFirebase() {
  return (
      <>
       <BrowserRouter>
         <div>
            <Routes>
              
               <Route path='/' element={<Test />}/>

               <Route path='/signIn' element={<SignIn/>} />

               <Route path='/signUp' element={<SignUp />}/>

               <Route path='/home/:id' element={<Home />} />

               <Route path='/reset' element={<Forgotten />}/>

               <Route path='/user' element={<UserId />}/>

            </Routes>
         </div>
       
       
       </BrowserRouter>
      </>
 
    )
}
