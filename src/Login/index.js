import React, { useState } from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";

const Login =  () =>{
 const [userStore,setUserStore] = useState([])
 const [userName,setUserName] = useState('')
const  [password, setPassword] = useState('')
const[error,setError] = useState('')
const navigate = useNavigate()

const validate =async () =>{
  setError('')
  if (!userName) {
    setError("please enter userName ");
    return false;
  }
  if (!password) {
    setError("please enter password ");
    return false;
  }
    try{

      
      let url = "https://dummyjson.com/auth/login"

      let data ={
        'username':userName,
        'password':password

      }; 
      let options={
        method: 'POST',
        headers: {
          'Content-Type':"application/json",
        },
          body:JSON.stringify(data)
        };
         
        const response = await fetch(url,options);
        if (!response.ok) {
          setError("Network response was not ok");
        }
        const temp = await response.json();
        console.log(temp)

        //result
        if(temp?.message){
          setError(temp?.message)
        }
        else
        {
          localStorage.setItem('userdata',JSON.stringify(temp))
          navigate('/signup')
        }



    } 
    catch(error){
       setError(error.message)
    }
}
 return(
    <div className="container">
      <div className="outer_container">
        <div className="inner_container">

          
         <div className="login_heading_div">
         <h2 >Login</h2>

         </div>

    <div>
        <input type="text" value={userName} 
        placeholder="Username" onChange={(e) =>setUserName(e.target.value)} className="input"/>
    </div>

    <div>
        <input type="password" value={password}
         placeholder="Password" onChange={(e)=>setPassword(e.target.value)}className="input"/>
    </div>
    <label className="forget_password">Forget Password?</label>

   <button onClick={validate} className="button">Login</button>
   {
    error&& <label>{error}</label>
   }
   <span className="not_a_member">Not a Member<span className="what">?
    </span><span className="signup_inlogin" onClick={()=>navigate('/signup')}>Signup</span>
   </span>
   </div>
    </div>
    </div>
  )
}
  export default Login;