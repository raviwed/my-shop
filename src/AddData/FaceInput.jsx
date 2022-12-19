import {Input} from "@chakra-ui/react"
import { useState } from "react"
import { FacePics } from "./FacePics"

const FaceInput=()=>{
    const[photo,setphoto]=useState({
        image:"",
        cost:"",
        description:"",
     })
    const HandleSubmit=(e)=>{
     FacePics(photo)
    }
    const HandleChange=(e)=>{
      const {name,value,type}=e.target
      const val= type ==="number"?Number(e.target.value):value
      setphoto({
        ...photo,
        [name]:val
      })
    }
    return(
        <div>
            <form onSubmit={HandleSubmit} >
              <Input placeholder="image url" value={photo.image} type="url" name="image" onChange={HandleChange} />
              <Input placeholder="rs" value={photo.cost} type="number" name="cost" onChange={HandleChange} />
              <Input placeholder="desc" value={photo.description} type="desc" name="description" onChange={HandleChange} />
              <Input value="onclick" type="submit" bgColor={"green.400"} />
            </form>
        </div>
    )
}
export default FaceInput