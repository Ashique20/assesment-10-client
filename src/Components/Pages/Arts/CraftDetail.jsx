import { useLoaderData } from "react-router-dom"

const CraftDetail =()=>{

    const craft = useLoaderData()
    return(
        <div className="text-white">
           <div className="w-[60%] mx-auto ">
           <img className=" w-full h-full object-cover rounded-xl p-2"  src={craft.url} alt="" />
           </div>
            <div className="flex justify-between m-20">
                <div className="w-2/4 p-2 m-10">
                   <h1 className="text-5xl mb-4">{craft.name}</h1>
                   <h1 className="text-2xl mb-8">Sub Category Name:{craft.subName}</h1> 
                   <h1 className="text-xl mb-10">{craft.description}</h1>
                   <h1 className="text-2xl mb-2">Price:{craft.price}</h1>
                   <h1 className="text-2xl mb-2">Rating:{craft.rate}</h1>
                   <h1 className="text-2xl mb-2">Customize Option</h1>
                   <h1 className="text-2xl mb-2">TIme{craft.time}</h1>
                   <h1 className="text-2xl mb-2">{craft.status}</h1>
                </div>
                <div className="w-1/4 mx-auto ">
                    <h1 className="text-4xl font-bold mb-2">Your Detail</h1>
                <h1 className="text-2xl mb-4">Name:{craft.userName}</h1>
                <h1 className="text-2xl">Email:{craft.email}</h1>
                </div>
            </div>
        </div>
    )
}

export default CraftDetail