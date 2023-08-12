# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




<!-- edited code in signIn page -->
import './SignIn.css'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import { database } from '../../Config/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Create from '../CreateSection/Create';
import { Link } from 'react-router-dom';


export default function RegisterAndLogin() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState();
  const [email , setEmail ] = useState()
  const [emaiError,setEmailError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)

  const history = useNavigate();


  // ======================================================================================================================= 


  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(e.target.email.value);

    const email = e.target.email.value
    const password = e.target.password.value


  signInWithEmailAndPassword(database, email, password).then(data => {
      console.log(data, 'Authdata');
      alert("Registration Successfull")
      history("/home")

    }).catch(err => {
      if(err.code === 'auth/wrong-password'){
           alert(err.code)
           alert("Please Enter Correct Password")
           setEmailError(false)
           setPasswordError(true)
      }

      else if(err.code === 'auth/missing-password'){
        alert(err.code)
        alert("Please Enter your Password")  
        setEmailError(false)
        setPasswordError(true)   
           
      }

      else if(err.code === 'auth/invalid-email'){
        alert(err.code)
        alert("Please Enter Correct Email")
        setPasswordError(false)     
        setEmailError(true)
      }

        else if(err.code === 'auth/user-not-found'){
          alert(err.code)
          alert("Please Check Email Address or Please Register")
          setPasswordError(false)
          setEmailError(true)
        }


    })

  }


  //  ===========================================================================================================


  return (

    <div className='App'>

      <div className="form-div">
        <h1 className='form-div-h1'>Sign-In</h1><br /><br />

        <form onSubmit={(e) => handleSubmit(e)} className='Form'>

          <label htmlFor="">Email</label> <br />

          <input
            type='email'
            name='email'
            // required
            onChange={(e) => setEmail(e.target.value)} 
          />

          {emaiError ?
          <p className='errorMsg'>Email Name can't be Empty </p> : "" }
          
          <br /><br />

          <div>

            <table className='passwordAndForgotTable'>
              <tr>
                <td>
                  <label htmlFor="">Password</label>
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
              className='password-input'
              value={password}
              type={visible ? 'text' : 'password'}
              name='password'
              onChange={(e) => setPassword(e.target.value)} 
              // required                         
            />

            {passwordError ?
            <p className='errorMsg'>Password can't be Empty</p> : "" }


          </div>
          <br />
          <div>
            <Button

              text="Sign In"

            />
          </div><br /><br />


          <div>
            <Create />
          </div>

        </form>
      </div>
    </div>
  )
}

