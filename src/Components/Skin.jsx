import axios from "axios"
import { useEffect, useState } from "react"
import{Img,Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Footer from "../AddData/Footer"
const Skin=()=>{
    const [Data,setData]=useState([])
    const[page,setpage]=useState(1)
    const[sort,setsort]=useState("asc")
    var box=[]
    box = JSON.parse(localStorage.getItem("cartitem"))||[]
    //https://ravishiva-1pi.onrender.com/skin
    const getData=async(sort,page)=>{
        return  await axios.get(`https://ravishiva-1pi.onrender.com/skin?_page=${page}&_limit=6&_sort=cost&_order=${sort}`)
        .then((res)=>setData(res.data))
        .catch((res)=>console.log(res))
    }
    const navigate=useNavigate()
    useEffect(()=>{
     getData(sort,page)
    },[sort,page])
    const Handleclick=(el)=>{
        box.push(el)
        localStorage.setItem("cartitem",JSON.stringify(box))
        //w W s S x X z Z
        navigate("/mycart")
        //window.location.reload()
       }
    return(
        <div>
            <div style={{display:"flex",justifyContent:"start",marginBottom:"20px"}}>
            <Button onClick={()=>setsort("asc")}>Ascending</Button>
            <Button onClick={()=>setsort("desc")} >Desecnding</Button>
            </div>
          <b style={{fontFamily:"revert-layer"}}> get glowing Skin</b>
          <br/>
          <br/>
        <div style={{display:"grid", gridTemplateRows:"repeat(2,1fr)",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",marginBottom:"20px"}}>
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
       <Button disabled={page===1} onClick={()=>setpage(page-1)}>Previous</Button>
       <Button>{page}</Button>
       <Button disabled={page===7} onClick={()=>setpage(page+1)}>Next</Button>
       <Footer/>
        </div>
    )
}
export default Skin