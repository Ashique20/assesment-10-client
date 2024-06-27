import { useLoaderData } from "react-router-dom"
import AllCard from "./AllCard"

const AllArt = ()=>{
    const arts = useLoaderData()
    console.log(arts)
    return(
        <div className="p-2">
            <div>
            {arts?.map(art=><AllCard art={art} key={art._id}></AllCard>)}

            </div>
        </div>
    )
}

export default AllArt