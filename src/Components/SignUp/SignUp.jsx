import LogoSection from '../LogoSection/LogoSection';
import ColorLine from '../ColorLineSection/ColorLine';
import SignUpForm from './SignUpForm';


export default function RegisterAndLogin() {

  return (
    
    <div className='App'>


    <div className='form-table-div'>
      <table className="form-table">
         <tr>
          <td className='form-table-logoSection'>
            <LogoSection/>
          </td>
  
           <td className='form-table-ColorLine'>
             <ColorLine />
           </td>
  
          <td className='form-table-signIn'>
              <SignUpForm/>
          </td>
         </tr>
      </table>
  
      </div>
    </div>
  )
}


