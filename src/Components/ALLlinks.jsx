import{Link} from "react-router-dom"
import { Select,Input, HStack, Button,} from "@chakra-ui/react"
import {FaShoppingCart} from 'react-icons/fa'
import "./ALLlink.css"
var arr=JSON.parse(localStorage.getItem("cartitem"))
const ALLlinks=()=>{
    return(
<div>
<div style={{ marginLeft:"10px"}}>
<img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="navbar" />
{/* <img src="https://www.beautybebo.com/pub/media/bb-app.png" alt="googlepay" /> */}

<HStack>
<img  src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="logo" />
<Select>
    <option>All</option>
    <option>---Make</option>
    <option>-----Face</option>
    <option>------Blush</option>
    <option>-------Highlighter</option>
    <option>------concealear</option>
    <option>------Compact & Powder</option>
    <option>------Face Primer</option>
    <option>------Makeup Remover</option>
    <option>------Contour</option>
    <option>------Bronzer</option>
    <option>------BB Cream</option>
    <option>------Loose Powder</option>
    <option>-------Setting Spray</option>
    <option>-------MakeUp Kits</option>
    <option>-------CC Cream</option>
    <option>---Eye</option>
    <option>-----Eye Showdow</option>
    <option>-----Eyeliner</option>
    <option>-----FalseEyelashes</option>
    <option>-----Mascara</option>
    <option>-----Eye Brow Enhancers</option> 
    <option>------Kajal</option> 
    <option>------Under Eye Concealer</option> 
    <option>------Eye Makeup Remover</option> 
    <option>-------ContactLenses</option>
    <option>-------Eye Primer</option>
    <option>-------Eye-Palettes</option>
    <option>-------Eye Kit</option>
    <option>----Lips</option>
    <option>-------Lipstick</option>
    <option>-------Liquid Lipstick</option>
    <option>-------LipLiner</option>
    <option>-------Lip Gloss</option>
    <option>-------Lip Blam</option>
    <option>-------Lip Crayon</option>
    <option>-------Lip Stain</option>
    <option>-------Lip Plumper</option>
    <option>-----Nalis</option>
    <option>------Nail Polish</option>
    <option>------Manicure & pedicure Kits</option>
    <option>------Nali care</option>
    <option>------Nail Polish Sets</option>
    <option>------Nail Art Kits</option>
    <option>------Nail Polish Remover</option>
    <option>----Tools brushes</option>
    <option>-----Face Brush</option>
    <option>-----Makeup Pouches</option>
    <option>-----Sponges &  Applicators</option>
    <option>------Eye Brush</option>
    <option>------Blush Brush</option>
    <option>------Tweezers</option>
    <option>------Lip Brush</option>
    <option>------Eyelash Curlers</option>
    <option>-------Brush Sets</option>
    <option>-------Sharpeners</option>
    <option>-------Mirrors</option>
    <option>----Skin</option>
    <option>------Body Care</option>
    <option>------Body Moisturizers</option>
    <option>------Kits & Combos</option>
    <option>-----Body Toners</option>
    <option>-----Hands & Feet</option>
    <option>-----Dark Cricles & Wrinkles</option> 
    <option>-----Neck Creams</option>
    <option>-----Brightening Lotion</option>
    <option>-----Foot Creams</option>
    <option>-----Night Cream</option>
    <option>-----Hair Remover Cream</option>
    <option>-----All Cream</option>
    <option>-----Day Cream</option>
    <option>---Face Oil</option>
    <option>-----Mask & Peels</option>
    <option>-----Toner & Astringents</option>
    <option>-----Bleach Creams</option>
    <option>-----Anti-Agening Cream</option>
    <option>-----Face Tools</option>
    <option>-------Serum</option>
    <option>------Cleansing Cream</option>
    <option>----Eye Care</option>
    <option>---------Dark Cricles</option>
    <option>---------Eye Coctour Care</option>
    <option>---------Eye Cream</option>
    <option>---------Eye Masks</option>
    <option>---------Under Eye Creams </option>
    <option>---------Under Eye Wrinkles</option>
    <option>---------Puffiness</option>
    <option>---Hair</option>
    <option>---------Hair Care</option>
    <option>---------Hair Color/Dye</option>
    <option>---------Gels &Waxes</option>
    <option>---------Hair Spary</option>
    <option>---------Hairfall & Thinning</option>
    <option>---------Dandruff</option>
    <option>---------Color Protection</option>
    <option>---------Hair Creams & Masks</option>
    <option>---------Dry Shampoo</option>
    <option>---------Hair Styling</option>
    <option>---------Strainghter</option>
    <option>---------Hairv Styling</option>
    <option>---------Staighteners</option>
    <option>------Hair Loss</option>
    <option>---------Shampoo</option>
    <option>---------Hair Oil</option>
    <option>---------Hair Serum</option>
    <option>---------Conditioner</option>
    <option>----------Hair Growth Solutions</option>
    <option>--Personal Care</option>
    <option>-------Bath & Body</option>
    <option>--------Essential Oils</option>
    <option>--------Ubtan & Face Packs</option>
    <option>--------Creams</option>
    <option>--------Foot Cream</option>
    <option>---------Body Cleansers</option>
    <option>---------Body & Shower</option>
    <option>----------Shower Gel</option>
    <option>----------Body Soaps</option>
</Select>
<Input placeholder="Enter then"/>
<Button colorScheme='teal'>search</Button>
</HStack>
</div>
<div className="linkstyle" >
<Link to="/make" >
<p>make</p>
</Link>
<Link to="/mom" >
<p>mom</p>
</Link>
<Link to="/personalcare" >
<p>personalcare</p>
</Link>
<Link to="/hair" >
<p>hair</p>
</Link>
<Link to="/fragrance" >
<p>fragrance</p>
</Link>
<Link to="/ayurve" >
<p>Ayurveda</p>
</Link>
<Link to="/skin" >
<p>SkinCare</p>
</Link>
<Link to="/baby">
<p>Babycare</p>
</Link>
 <Link to="/mycart"  >
   <Button style={{width:'95%',margin:"0 10px"}} > <FaShoppingCart/> myCart:-{arr.length}</Button>
 </Link>
 
</div>
 </div>
    )
}
export default ALLlinks