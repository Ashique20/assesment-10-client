import { useEffect } from "react"
import { useState } from "react"
import Categorie from "./Categorie"

const Categories = () => {
    const [categories, setCategorie] = useState([])
    useEffect(() => {
        fetch('https://assesment-server-one.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategorie(data))
    }, [])
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 m-20 p-2 gap-20">
                {
                    categories?.map(categorie => <Categorie categorie={categorie} key={categorie._id}></Categorie>)
                }
            </div>
        </div>
    )
}


export default Categories