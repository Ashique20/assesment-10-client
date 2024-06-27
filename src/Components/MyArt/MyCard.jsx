import { Link } from "react-router-dom"

const MyCard = ({ myArt, handleDelete }) => {


    return (
        <div>
            <div className="mt-10 card bg-base-100 w-96 h-96  shadow-xl ">
                <figure>
                    <img
                    className="h-full w-full object-cover"
                        src={myArt.url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {myArt.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{myArt.description}</p>
                    <div className="card-actions justify-end">
                        <div onClick={() => handleDelete(myArt._id)} className="rounded-xl bg-red-600 p-2 text-white cursor-pointer	">Delete</div>
                        <Link to={`/update/${myArt._id}`}>
                            <div className="rounded-xl bg-green-600 p-2 text-white cursor-pointer	">Update</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MyCard