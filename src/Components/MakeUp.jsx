
import axios from "axios"
import { useEffect, useState } from "react"
import {Button, Img} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Footer from "../AddData/Footer"
const MakeUp=()=>{
    const[Data,putDAta]=useState([])
    const[sort,setsort]=useState("asc")
    const[page,setpage]=useState(1)
    var box=[]
    box = JSON.parse(localStorage.getItem("cartitem"))||[]
   const getdata=async(sort,page)=>{
    return await axios.get(`https://ravi-api.onrender.com/makeUp?_page=${page}&_limit=9&_sort=cost&_order=${sort}`).then((res)=>putDAta(res.data)).catch((err)=>console.log(err))
   }
   useEffect(()=>{
     getdata(sort,page)
   },[sort,page])
   const navigate=useNavigate()
   const Handleclick=(el)=>{
    box.push(el)
    localStorage.setItem("cartitem",JSON.stringify(box))
    //w W s S x X z Z
   //window.location.reload()
    navigate("/mycart")
   }
    return(
        <div>
            <div>
                <Button onClick={()=>setsort("asc")} >Ascending</Button>
                <Button onClick={()=>setsort("desc")} >Descending</Button>
            </div>
              <br/>
          <b style={{fontFamily:"revert-layer"}}>Special Make Up </b>
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
        <div  style={{margin:"20px"}}>
        <Button bg={"red.300"} onClick={()=>setpage(page-1)}>Previous</Button>
        <Button>{page}</Button>
        <Button  bg={"blue.400"} onClick={()=>setpage(page+1)}>Next</Button>
        </div>
        <Footer/>
        </div>
    )
}
export default MakeUp