import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";


const Categorie = ({ categorie }) => {
    return (
      <Slide>
          <div>
            <div className="card text-red-400 bg-black w-96 h-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{categorie.Subcategory_name}</h2>
                    <p>{categorie.description}</p>
                    <p>By-{categorie.artist}</p>
                    <Link to={`craft/${categorie.Subcategory_name}`} className="rounded  font-bold btn bg-red-400 text-white">Show Crafts</Link>
                </div>
                <figure>
                    <img
                    
                        src={categorie?.image}
                        alt="Shoes" />
                </figure>
            </div>
        </div>
      </Slide>
    )
}


export default Categorie;