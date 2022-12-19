import { Route, Routes } from "react-router-dom"
import Ayurveda from "../Components/Ayurveda"
import Fragrance from "../Components/Fragrance"
import Hair from "../Components/Hair"
import Home from "../HomeComponent/Home"
import MakeUp from "../Components/MakeUp"
import MomBabyCare from "../Components/Mom&BabayCare"
import PersonalCare from "../Components/PersonalCare"
import Skin from "../Components/Skin"
import Mycart from "../Components/Mycart"
import Login from "../AddData/Login"
import Babycare from "../Components/Babycare"
import BasicUsage from "../Components/BasicUsage"
const Navbar=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/make" element={<MakeUp/>} />
                <Route  path="/mom" element={<MomBabyCare/>} />
                <Route  path="/personalcare" element={<PersonalCare/>}  />
                <Route  path="/hair" element={<Hair/>}  />
                <Route  path="/fragrance" element={<Fragrance/>} />
                <Route  path="/ayurve" element={<Ayurveda/>} />
                <Route  path="/skin" element={<Skin/>} />
                <Route path="/mycart" element={<Mycart/>} />
                <Route path="/baby"element={<Babycare/>} />
                <Route path="/buy" element={<BasicUsage/>} />
            </Routes>
        </div>
    )
}
export default Navbar