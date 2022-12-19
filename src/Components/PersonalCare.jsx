import axios from "axios"
import { useEffect, useState } from "react"
import {Img,Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Footer from "../AddData/Footer"
const PersonalCare=()=>{
    const[Data,setData]=useState([])
    const[sort,setsort]=useState([])
    var box=[]
    box = JSON.parse(localStorage.getItem("cartitem"))||[]
    //https://test-api-9m2w.onrender.com/PersonalCare
   const getData=async(sort)=>{
     return await axios.get(`https://test-api-9m2w.onrender.com/PersonalCare?_sort=cost&_order=${sort}`)
     .then((res)=>setData(res.data))
     .catch((res)=>console.log(res) )
    }
   const navigate=useNavigate()
    const Handleclick=(el)=>{
        box.push(el)
        localStorage.setItem("cartitem",JSON.stringify(box))
        //w W s S x X z Z
        navigate("/mycart")
        //window.location.reload()
       }
    useEffect(()=>{
     getData(sort)
    },[sort])
    return(
      <div>
      <Button onClick={()=>setsort("asc")} >Ascending</Button>
      <Button onClick={()=>setsort("desc")} >Descending</Button>
      <br/>
          <b style={{fontFamily:"revert-layer"}}>Your Care is Your personal care </b>
        <div style={{display:"grid", gridTemplateRows:"repeat(3,1fr)",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}} >
          {
            Data.map((el)=>{
                return(
                    <div key={el.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'20px'}} >
                    <Img src={el.image}/>
                    <p>{el.cost}</p>
                    <p>{el.description}</p>
                    <Button bg={"blue.200"} onClick={()=>Handleclick(el)}>Add to Cart</Button>
                    </div>
                )
            })
          }
        </div>
        <Footer/>
        </div>
     )
}
export default PersonalCare