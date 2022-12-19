import {Input} from "@chakra-ui/react"
 import {useEffect, useState} from "react"
 import React from "react"
//import { useContext } from "react"
//import {UpadateLogin} from "./logapi"
import { useNavigate} from "react-router-dom";
const inisiate={
  name:"",
  email:"",
  password:"",
}
 const Login=()=>{
  const[details,setdetails]=useState(inisiate)
  const[fromErrors,setfromErrors]=useState({})
  const[Submit,setSubmit]=useState(false)
  const navigate = useNavigate();
   const HandleChange=(e)=>{
    const {name,value}=e.target
    setdetails({
      ...details,
      [name]:value
    })
  }
  const HandleSubmit=(e)=>{
    e.preventDefault()
    console.log(details)
    setfromErrors(isValide(details))
    setSubmit(true)
    if( details.email!=="" && details.password.length>4 && details.password.length<=10 ){
      //UpadateLogin(details)
      navigate("/home")
      alert("SucessFully loged In")
    }else{
      alert("Give correct credentials")
    }
  }

  useEffect(()=>{
    console.log(fromErrors)
    if(Object.keys(fromErrors).length===0 && Submit){
      console.log(details)
    }
   },[fromErrors])
  const isValide=(values)=>{
     const errors={};
     const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     if(!values.email){
        errors.email="Email is requeried";
     }else if(!regex.test(values.email)){
      errors.email="this is not valide Email formate requeried";
     }
     if(!values.password){
        errors.password="password is requeried";
     }else if(values.password.length<4 ){
      errors.password="password length should not be less that 4"
     }else if(values.password.length>10){
      errors.password="password length should not exceed 10 "
     }
      return errors
  }
  
    return(
        <div style={{display:"grid",width:"400px",margin:"auto",marginBottom:"50px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
          {/* {Object.keys(fromErrors).length===0 && Submit ?(<div>Signed in  Sucessfully</div>):(<div> Sorry Login Properly</div>)}
          <pre>{JSON.stringify(details,undefined,2)}</pre> */}
          <form onSubmit={HandleSubmit}>
            <p style={{color:"red"}}>{fromErrors.name}</p>
            <div style={{margin:"15px"}}>
            <Input placeholder="Enter_email"name="email" type="email" value={details.email} onChange={HandleChange} />
            </div>
            <p style={{color:"red"}}>{fromErrors.email}</p>
            <br/>
            <div  style={{margin:"15px"}}>
            <Input placeholder="password" type="password" name="password" value={details.password} onChange={HandleChange} />
            </div>
            <p style={{color:"red"}} >{fromErrors.password}</p>
            <div  style={{margin:"10px"}}>
            <Input  type="submit" value="Login" color={"white"} bg="green.400" />
            </div>
          </form>
        </div>
    )
} 
export default Login