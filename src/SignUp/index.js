import React, { useState } from "react";
 import "../App.css"
import { renderMatches, useNavigate } from "react-router-dom";


 const SignUp =()=>{

    const [storeData,setStoreData] = useState([])
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] =useState('')
    const[email,setEmail] = useState('')
    const [checkbox,setCheckbox] = useState(false)
    const [error,setError] = useState('')

    const navigate = useNavigate()


    let temp = JSON.parse(localStorage.getItem('userdata'))
    console.log(temp)

    const validate = ()=>{
       if(!name){
        setError("Please enter your name")
        return false;
      }
      if(!email){
        setError('Please enter email')
        return false;
      }
      if(!password){
        setError('Please enter password')
        return false;
      }
      if(!confirm){
        setError('Please enter confirm password')
        return false;
      }

      if(!checkbox){
        setError('Please checkmark the given options')
        return false;
      }
      else{
        alert('all good');
     }
   

     
}

    return(
        <div className="signup_container">

        <div className="inner_container">
        <h2>Registration</h2>
        <div>
        <input type="text" value={name} 
        placeholder="Enter your name" onChange={(e) =>setName(e.target.value)} className="input_signup"/>
       </div>

       <div>
        <input type="email" value={email} 
        placeholder="Enter your email" onChange={(e) =>setEmail(e.target.value)} className="input_signup"/>
       </div>


       <div>
        <input type="password" value={password}
         placeholder=" Create password" onChange={(e)=>setPassword(e.target.value)}className="input_signup"/>
       </div>

       <div>
        <input type="password" value={confirm} 
        placeholder="Confirm password" onChange={(e) =>setConfirm(e.target.value)} className="input_signup"/>
       </div>

       <div className="check_box">
       <label>
        <input type="checkbox" checked={checkbox}
        onChange={(e)=>setCheckbox(e.target.checked)}/>

        I am agree to the terms & condition
    
        </label>
        
       </div>

        <div>
        <button onClick={validate} className="button_signup">Register Now</button>
        </div>

        {error&&<label>{error}</label>}

        <span className="account">Already have an account?<span className="login_now"
        onClick={()=>navigate('/login')}>Login now</span></span>
    


        </div>

        </div>
    )

 }
  export default SignUp;