import { useLoaderData, useParams } from "react-router-dom"
import CategorieCard from "./CategorieCard"
import { useEffect, useState } from "react"
import { data } from "autoprefixer"

const CategorieDetail=()=>{
    const {name} = useParams()
    const [drawDetail,setDetail] = useState([])
    useEffect(()=>{
        fetch(`https://assesment-server-one.vercel.app/craft?name=${name}`)
        .then(res=>res.json())
        .then(data=>setDetail(data))
    })

    console.log(drawDetail)
    
return(
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1  m-20 gap-20 justify-center">
      {
            drawDetail?.map(detail=><CategorieCard detail={detail} key={detail._id}></CategorieCard>)
        }
      </div>
    </div>
)
}

export default CategorieDetail