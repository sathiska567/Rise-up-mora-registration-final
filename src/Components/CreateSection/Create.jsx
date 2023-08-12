import React from 'react'
import './Create.css'
import { Link} from 'react-router-dom';



export default function Create() {

  return (
    <div>
   
      <div className="navigate-section">
        <h5 className='navigate-section-text'>Not Registered ? <Link to="/signUp" className='navigate-section-link'>Create an account</Link></h5>
      </div>
    </div>
  )
}
