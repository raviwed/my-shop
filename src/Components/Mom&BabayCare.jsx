import axios from "axios"
import { useEffect, useState } from "react"
import {Button, Img} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Footer from "../AddData/Footer"
const MomBabyCare=()=>{
    const btn=new Array(3).fill("")

    console.log(btn)
    var box=[]
    box = JSON.parse(localStorage.getItem("cartitem"))||[]
    const[Data,setData]=useState([])
   const [sort,setsort]=useState("asc")
   const[page,setpage]=useState(1)
   const navigate=useNavigate()
   const Handleclick=(el)=>{
    box.push(el)
    localStorage.setItem("cartitem",JSON.stringify(box))
    //w W s S x X z Z
    navigate("/mycart")
   window.location.reload()
   }
    let getdata=async(sort,page)=>{
      return await axios.get(`https://ravi-api.onrender.com/mom&badycare?_page=${page}&_limit=9&_sort=cost&_order=${sort}`).then((re)=>setData(re.data)).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getdata(sort,page)
    },[sort,page])
    return(
        <div >
           <Button onClick={()=>setsort("asc")} >Ascending</Button> 
          <Button onClick={()=>setsort("desc")}>Descending</Button>
          <br/>
          <b style={{fontFamily:"revert-layer"}}>We Care for MoM </b>
        <div style={{display:"grid", gridTemplateRows:"repeat(3,1fr)",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {
                Data.map((el)=>{
                    return(
                        <div key={el.id} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'20px'}}>
                            <Img src={el.image}/>
                            <p>{el.cost}</p>
                            <p>{el.description}</p>
                            <Button bg={"green.300"} colorScheme={"while"} onClick={()=>Handleclick(el)}>  Add Cart</Button>
                        </div>
                    )
                })
            }
        </div>
        <div style={{marginTop:"10px",display:"flex",justifyContent:"center"}}>
        {
           btn.map((_,i)=>{
            return(
                <div>
                    <Button onClick={()=>setpage(i+1)}>{i+1}</Button>
                </div>
            )
        })
    }     
     </div>
     <Footer/>
     </div>
    )
}
export default MomBabyCare