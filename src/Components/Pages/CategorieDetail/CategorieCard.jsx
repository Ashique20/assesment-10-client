import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const CategorieCard = ({ detail }) => {
  return (
   <Fade cascade>
     <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className=" h-96" src={detail?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{detail?.item_name}</h2>
          <h2 className="card-title">
            Subcategoty Name:{detail?.Subcategory_name}
          </h2>
          <p>{detail?.short_description}</p>
          <p>{detail?.price}</p>
          <div className="card-actions justify-end">
            <Link to={`/drawDetail/${detail._id}`}>
         
              <button className="btn bg-red-400">See Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
   </Fade>
  );
};

export default CategorieCard;
