import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './Pages.css'
import SignIn from './SignIn'
import LogoSection from '../LogoSection/LogoSection';
import ColorLine from '../ColorLineSection/ColorLine';


export default function RegisterAndLogin() {

  return (
    <div className='App'>
      <div className='form-table-div'>
        <table className="form-table">
          <tr>
            <td className='form-table-logoSection'>
              <LogoSection />
            </td>

            <td className='form-table-ColorLine'>
              <ColorLine />
            </td>

            <td className='form-table-signIn'>
              <SignIn />
            </td>
          </tr>
        </table>

      </div>
    </div>

  )
}
