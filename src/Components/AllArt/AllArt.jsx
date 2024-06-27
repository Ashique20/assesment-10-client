import { useLoaderData } from "react-router-dom"
import AllCard from "./AllCard"

const AllArt = ()=>{
    const arts = useLoaderData()
    console.log(arts)
    return(
        <div className="p-2">
           
        </div>
    )
}

export default AllArt