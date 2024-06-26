import { Link, useLoaderData } from "react-router-dom"

const DrawDetail = ()=>{
    const detail = useLoaderData();
    console.log(detail);
    return(
        <div className=" ml-96 p-2 mt-20 mb-20">
             <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className=" h-96"
                        src={detail?.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{detail?.item_name}</h2>
                    <h2 className="card-title">Subcategoty Name:{detail?.Subcategory_name}</h2>
                    <p>{detail?.short_description}</p>
                    <p>Price:{detail?.price}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </div>
    )
}


export default DrawDetail