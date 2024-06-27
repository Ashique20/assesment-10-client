import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const AllCard = ({ art }) => {
  return (
    <div className="relative group">
      <div className="card card-side shadow-xl mt-10 m-10 p-2 bg-[#ad6468]" id={`card-${art._id}`}>
        <figure className="w-96 h-60">
          <img
            className="object-cover h-full w-full"
            src={art.url}
            alt={art.name}
          />
        </figure>
        <div className="card-body w-1/4">
          <h2 className="card-title">{art.name}</h2>
          <p>{art.description}</p>
          <p>Price: {art.price}</p>
          <div className="card-actions justify-end">
            <Link to={`/arts/${art._id}`}>
              <button className="btn btn-primary">Detail</button>
            </Link>
          </div>
        </div>
      </div>
      <Tooltip
        anchorSelect={`#card-${art._id}`}
        place="top"
        className="group-hover:block hidden absolute w-full p-2  text-center rounded"
      >
        <span > {art.status}</span>
      </Tooltip>
    </div>
  );
};

export default AllCard;
