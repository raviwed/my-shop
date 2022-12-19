import axios from "axios"
import { useEffect, useState } from "react"
import{Img,Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Footer from "../AddData/Footer"
const Babycare=()=>{
    const[Data,setData]=useState([])
    const[sort,setsort]=useState("")
    const[page,setpage]=useState(1)
   const getData=(sort,page)=>{
    return axios.get(`https://ravi-shiva-api.onrender.com/babycare?_page=${page}&_limit=9&_sort=cost&_order=${sort}`)
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
    }
    const navigate=useNavigate()
    var box=[]
    box = JSON.parse(localStorage.getItem("cartitem"))||[]
    const Handleclick=(el)=>{
        box.push(el)
        localStorage.setItem("cartitem",JSON.stringify(box))
        //w W s S x X z Z
        navigate("/mycart")
      // window.location.reload()
         }
   useEffect(()=>{
    getData(sort,page)
   },[sort,page])
    return(
        <div>
            <div style={{display:'flex',justifyContent:'start',margin:'20px'}} >
            <Button onClick={()=>setsort("asc")}>Ascending</Button>
           <Button onClick={()=>setsort("desc")}>Descending</Button>
            </div>
        <b style={{fontFamily:"revert-layer"}}> we Take care off your baby</b>
    <div style={{display:'grid',gridTemplateRows:"repeat(3,1fr)",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",justifyContent:'center',marginLeft:"20px"}} >
            
            {
                Data.map((el)=>{
                    return(
                        <div key={el.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'20px'}} >
                        <Img src={el.image}/>
                        <p>{el.cost}</p>
                        <p>{el.description}</p>
                        <Button bg={"green.300"}  color={"white.300"} onClick={()=>Handleclick(el)}>Add to Cart</Button>
                      </div>
                    )
                })
            }
       </div>
       <div style={{marginTop:"10px"}}>
       <Button disabled={page===1} onClick={()=>setpage(page-1)} bg={"blue.400"}>Previous</Button>
       <Button>{page}</Button>
       <Button disabled={page===5} onClick={()=>setpage(page+1)} bg={"red.400"} >Next</Button>
       </div>
       <Footer/>
    </div>
    )
}
export default Babycare