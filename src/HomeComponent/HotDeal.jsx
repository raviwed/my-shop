import {useState, useEffect } from "react"
import {Img,Button} from "@chakra-ui/react"
import Slider from "react-slick";
//import {gettodo} from "../Redux/action"
//import { reduser } from "../Redux/reduser";
//import { useDispatch ,useSelector } from "react-redux";
import "./Home.css"
 const HotDeal=()=>{
    const[data,putdata]=useState([]) 
    var box=[]
     box = JSON.parse(localStorage.getItem("cartitem"))||[]
  const getData=async()=>{
    const res = await fetch(`https://ravi-api.onrender.com/shampoo`)
     let data= await res.json()
        putdata(data)
        console.log(data)
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
   autoplaySpeed: 5000,
    cssEase: "linear",
  };
  useEffect(()=>{
    getData()
  },[])
  let HandlerClick=(el)=>{
    box.push(el)
   localStorage.setItem("cartitem",JSON.stringify(box))
   //w W s S x X z Z
   window.location.reload()
  }
    return(
<div>

        <Slider {...settings}>
          {
            data.map((el)=>{
                return(
                    <div className="HotDeal" key={el.id}>
                        <Img src={el.image} />
                        <b>{el.cost}</b>
                        <p>{el.description}</p>
                      <Button bg={"pink.600"} onClick={()=>HandlerClick(el)} >  Add Cart</Button>
                    
                    </div>
                )
            })
          }
          </Slider>
        </div>
   )

 }
 export default HotDeal