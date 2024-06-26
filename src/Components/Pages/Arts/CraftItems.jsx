import { Link } from "react-router-dom"
import CraftItem from "./CraftItem"
import { useEffect, useState } from "react"

const CraftItems = () => {

  const [crafts, setCraft] = useState([])

  useEffect(() => {
    fetch('https://assesment-server-one.vercel.app/arts')
      .then(res => res.json())
      .then(data => setCraft(data))
  }, [])

  console.log(crafts)
  return (
    <div className="container mx-auto p-40 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 rounded-xl">
        {crafts.slice(0, 6).map(craft => (
          <CraftItem craft={craft} key={craft._id} />
        ))}
      </div>
      <Link to='/allArt'>        <button className="bg-red-400 w-full mt-10 p-4 rounded-2xl ">See All</button>
      </Link>      </div>

  )
}


export default CraftItems