import { useState } from "react"
import { useEffect } from "react"
import Slider from "react-slick";
import HotDeal from "../HomeComponent/HotDeal"
import "./Home.css"
import {Button, Img} from "@chakra-ui/react"
import axios from "axios";
import { FaRegGrinTongueWink } from "react-icons/fa";
import Footer from "../AddData/Footer";
const Home=()=>{
    const[data,setdata]=useState([])
    const[product1,setpro1]=useState([])
    const[Beta,setBeta]=useState([])
    const[matter,setmatter]=useState([])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
       // autoplaySpeed: 2000,
        cssEase: "linear",
      };
    const firstLine=async()=>{
       const res= await fetch(`https://koti-api.onrender.com/Products`)
       const Data=await res.json()
       setdata(Data)
       console.log(Data)
    }
    const pro1=()=>{
        return axios.get(`https://ravi-api.onrender.com/makeUp?_page=1&_limit=4`)
        .then((res)=>setpro1(res.data))
        .catch((res)=>console.log(res))
    }
    const revenu=()=>{
        return axios.get(`https://test-api-9m2w.onrender.com/skin?_page=1&_limit=3`)
        .then((res)=>setBeta(res.data))
        .catch((res)=>console.log(res))
    }
    const DataWeneed=()=>{
        return axios.get(`https://mock-api-gn3h.onrender.com/fragrancy?_page=1&_limit=3`)
        .then((res)=>setmatter(res.data))
        .catch((err)=>console.log(err))
    }
    //https://test-api-9m2w.onrender.com/PersonalCare
    useEffect(()=>{
     firstLine()
     pro1()
     revenu()
     DataWeneed()
    },[])

    return(
        <div>
            <div style={{marginBottom:'50px', }}>
            <Slider  {...settings}>
            {
            data.map((el)=>{
                    return(
                        <div  key={el.id}>
                            <Img src={el.image} />
                        </div>
                    )
                })
            }
        </Slider>
        </div>
        <b>Hot deal (Now) </b>
        <HotDeal/>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"40px"}} >
            <div>
            <Img src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif"/>
            </div> 
            <div><Img src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif"/>
            </div> 
        </div>
        <div style={{marginTop:"40px"}}>
        <Img w={"100%"} src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg" />
        </div>
        <div style={{display:'flex',height:"650px",justifyContent:"space-around"}}>
            <div style={{fontSize:"20px",border:"1px soli red",height:"100%", width:"30%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'10px'}}>
                <b >BEST SELLER</b>
                {
                    product1.map((el)=>{
                       return(
                            <div style={{justifyContent:"center"}} key={el.id}>
                                <Img h={50} style={{borderRadius:"50%"}} src={el.image} />
                                <p>{el.cost}</p>
                                <p>{el.description}</p>
                                <Button bg={"yellow.400"}><FaRegGrinTongueWink/>Add to Cart</Button>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{fontSize:"20px",border:"1px soli red",height:"100%", width:"35%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'10px'}}>
                <b >LATEST PRODUCTS</b>
                <b >BEST SELLER</b>
                {
                    Beta.map((el)=>{
                       return(
                            <div style={{justifyContent:"center"}} key={el.id}>
                                <Img h={75} style={{borderRadius:"50%"}} src={el.image} />
                                <p>{el.cost}</p>
                                <p>{el.description}</p>
                                <Button bg={"yellow.400"}><FaRegGrinTongueWink/>Add to Cart</Button>
                            </div>
                        )
                    })
                }
                </div>
            <div style={{fontSize:"20px",border:"1px soli red",height:"100%", width:"30%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'10px'}}>
                <b >MOST VIEWED</b>
                {
                    matter.map((el)=>{
                       return(
                            <div style={{justifyContent:"center"}} key={el.id}>
                                <Img h={55} style={{borderRadius:"50%"}} src={el.image} />
                                <p>{el.cost}</p>
                                <p>{el.description}</p>
                                <Button bg={"yellow.400"}><FaRegGrinTongueWink/>Add to Cart</Button>
                            </div>
                        )
                    })
                }
                </div>
        </div>
        <div style={{marginTop:"40px"}}>
            <Img w={"100%"} src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif" />
        </div>
        <div>
            <b style={{fontFamily:'initial',fontSize:"30px"}}>Welcome to Beauty Products Online Shopping India- Beauty Bebo</b>
            <p style={{fontFamily:"revert-layer"}}>     
            If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a modelling competition is only achieved through makeup.

Don’t get me wrong, you are naturally beautiful, that’s obvious. But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before you buy beauty products online!

Clean Your Face First!

Before embarking on any makeup, always ensure that your face is clean. Need some assistance in absolute cleaning? Visit our range of face wash beauty products online for your best pick. We have made it our duty to carefully select the best products for you, so that you don’t experience breaks and allergies after use. So now you can be confident that your buy cosmetic online shopping will be worth your time and effort.

Wondering then how you will make a choice among the spectrum available? Most of our products are purely natural in ingredient, so you can as well check for your favorite ingredient combination. If not sure, we are still here for you. We can help narrow down your options, together with you.

<span style={{fontSize:"20px", fontFamily:'monospace'}}>Apply a Moisturizer</span><br/>

Next, you need a moisturizer in your makeup kit. Moisturizers keep your face glowing regardless of the mood of the day. Most essentially, moisturizers will keep your skin hydrated from the outside, while your constant hydration by taking fluids enhance the efforts.

Our moisturizers range from matte, ponds, creams and gels, all to ensure that your specific need is met. Just go through the list for a better selection, which will aid you through your cosmetic online shopping. With the best moisturizer, it will also work as a primer. Hence, you don’t have to buy an extra product, which saves you some cost.

<span style={{fontSize:"17px", fontFamily:'monospace'}}>Get Your Makeup Kit</span><br></br>

Your general makeup will consist, of more than the moisturizer. Some o the other major components include the foundation, which you use on your whole face. Then there is the concealer, which you concentrate on areas of the face you want to hide. There is the brightener and highlighter, which you will highlight areas you want conspicuous on your face.

And don’t forget to look into our range of toners for your best shot at a firmer face and neck.

We have the most effective beauty products India has dreamt of to replenish your kit, so don’t miss out!

<span style={{fontSize:"20px", fontFamily:'monospace'}}>Enhance the Outlook of the Eyes</span>

At this point, your eyebrows should be in the shape and size you want them to be. Now you can brush them up to bring out a perfect outlook. Apply eye pencil to cover any gaps within the eyebrows for an ideal outlook.

If the area surrounding your eyes has a different color shade, probably more tanned or lighter in color in comparison to your general face color, then pay attention to the area.

Use concealers to bring out the perfect shade you want for a uniform outlook. Alternatively, you can use the highlighter to bring attention to your eyes, which even adds to a seemingly large-eye size.

If your eyes are starting to show wrinkles, then our under-eye wrinkle creams from our cosmetic online shop should come in handy.

Want to finish up with a luminating cosmetic product for a conspicuously radiant look? Go ahead and make your makeup experience more appealing.

Your Lips?

For a natural beauty look, go for a glossy lip gloss or a light lipstick. Or are you going out with the girls, and thicker lips your way? Our range of matte lipstick collection should work for you.

Bottom Line

Want to buy beauty products online to improve your makeup kit? We are always there for you, ready to help.

All you have to do is take a step, look into our products and try us. Looking forward to seeing you!
            </p>
        </div>
        <Footer/>
     </div>
    )
}
export default Home
