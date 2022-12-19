
import {Img, Button } from "@chakra-ui/react"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import Footer from "../AddData/Footer"
import "./ALLlink.css"
//import BasicUsage from "./BasicUsage"

let Mycart=({onOpen})=>{
    const[itemnumber,putitemnumber]=useState(1) 
    const navigate=useNavigate()
    const HandleBuy=()=>{
     navigate("/buy")
     onOpen()
    }
    const Handlesum=(value)=>{
        putitemnumber((prev)=>prev+value)
    }
    var arr=JSON.parse(localStorage.getItem("cartitem"))
    const HandleClick=(index)=>{
       arr.splice(index,1)
       localStorage.setItem("cartitem",JSON.stringify(arr))
       window.location.reload()
    }
    return(
        <div>
            <div  style={{display:"grid",justifyContent:"end"}}>
            <Button bg={"red"} color={"white"} onClick={HandleBuy}>BUY Now</Button>
            </div>
            
        <div style={{display:'grid',gridTemplateRows:"repeat(2,1fr)",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",justifyContent:'center'}}>
            { 
                arr.map((el,index)=>{
                    return(
                        <div>
                             
                        <div  style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"20px"}} key={index}>
                            <Img src={el.image} alt={el.id}/>
                              <p>{el.cost*itemnumber}</p>
                            <Button disabled={itemnumber===1} onClick={()=>Handlesum(-1) } >-</Button>
                            <Button>{itemnumber}</Button>
                            <Button onClick={()=>Handlesum(1)}>+</Button>
                            <br/>
                            <br/>
                            <div className="May"  >
                            <Button onClick={()=>HandleClick(index)} bg={"orange.400"} >Remove Item </Button>
                            </div>
                            
                        </div>
                       
                        </div>
                    )
                })
            }
        </div>
        <Footer/>
        </div>
    )
}
export default Mycart