import axios from "axios"
import { useEffect, useState } from "react"
import {Img,Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Footer from "../AddData/Footer"
const Hair=()=>{
    const [Data,setDAta]=useState([])
    const[sort,setsort]=useState("asc")
    const navigate=useNavigate()
    var box=[]
    box = JSON.parse(localStorage.getItem("cartitem"))||[]
    const getData=async(sort)=>{
        return await axios.get(`https://test-api-9m2w.onrender.com/hair?_sort=cost&_order=${sort}`).then((res)=>setDAta(res.data)).catch((res)=>console.log(res))
    }
    useEffect(()=>{
      getData(sort)
    },[sort])
    //https://test-api-9m2w.onrender.com/hair
    const Handleclick=(el)=>{
        box.push(el)
        localStorage.setItem("cartitem",JSON.stringify(box))
        //w W s S x X z Z
        navigate("/mycart")
       //window.location.reload()
         }
    return(
        <div>
            <Button onClick={()=>setsort("asc")}>Ascending</Button>
            <Button onClick={()=>setsort("desc")} >Descending</Button>
            <br/>
            <p style={{fontFamily:"revert-layer"}}>WE CARE FOR U R Hair</p>
        <div style={{display:'grid',gridTemplateRows:"repeat(3,1fr)",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",justifyContent:'center'}} >
        {
            Data.map((el)=>{
                return(
                    <div key={el.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'20px'}} >
                    <Img src={el.image}/>
                    <p>₹{el.cost}</p>
                    <p>{el.description}</p>
                    <Button bg={"pink.400"} onClick={()=>Handleclick(el)}>Add to Cart</Button>
                    </div>
                )
            })
        }
    </div>
    <Footer/>
    </div>
    )
}
export default Hair