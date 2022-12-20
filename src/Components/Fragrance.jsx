import axios from "axios"
import { useEffect, useState } from "react"
import {Img,Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Footer from "../AddData/Footer"
const Fragrance=()=>{
    const[Data,setData]=useState([])
    const[sort,setsort]=useState("asc")
    const[page,setpage]=useState(1)
    const navigate=useNavigate()
    var box=[]
    box = JSON.parse(localStorage.getItem("cartitem"))||[]
    const getData=async(sort,page)=>{
        return await axios.get(`https://mock-api-gn3h.onrender.com/fragrancy?_page=${page}&_limit=9&_sort=cost&_order=${sort}`)
        .then((res)=>setData(res.data))
    }
    const Handleclick=(el)=>{
        box.push(el)
       navigate('/mycart')
        localStorage.setItem("cartitem",JSON.stringify(box))
        //w W s S x X z Z
        //window.location.reload()
       }
    useEffect(()=>{
       getData(sort,page)
    },[sort,page])
return(
    <div>
        <Button onClick={()=>setsort("asc")}>Ascending</Button>
        <Button onClick={()=>setsort("desc")}>Descending</Button>
        <br/>
        <b style={{fontFamily:"sans-serif"}}>Fragrancy perfume for u</b>
    <div style={{display:'grid',gridTemplateRows:"repeat(3,1fr)",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",justifyContent:'center'}} >
            
            {
                Data.map((el)=>{
                    return(
                        <div key={el.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'20px'}} >
                        <Img src={el.image}/>
                        <p>₹{el.cost}</p>
                        <p>{el.description}</p>
                        <Button bg={"green.400"} color={"white.300"} onClick={()=>Handleclick(el)}>Add to Cart</Button>
                        </div>
                    )
                })
            }
    </div>
    <div style={{margin:"20px"}}>
    <Button bg={"blue.400"} onClick={()=>setpage(page-1)}>pervious</Button>
    <Button>{page}</Button>
    <Button bg={"red.300"} onClick={()=>setpage(page+1)}>Next</Button>
    </div>
    <Footer/>
    </div>
)
}
export default Fragrance