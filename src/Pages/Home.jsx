import React from 'react'
import { database } from '../Config/FirebaseConfig'
import { signOut } from 'firebase/auth'
import { useParams,useNavigate } from 'react-router-dom'

export default function Home(props) {

  const { id } = useParams();

  const history = useNavigate();

 const hadleClick = ()=>{
     signOut(database).then(val=>{

        history("/")
       
     })
 }


  return (
    <div>
      <h1>Home Page</h1>

       <p>Item ID: {id}</p>

       

      <button onClick={hadleClick}> SignOut </button>

    </div>
  )
}
