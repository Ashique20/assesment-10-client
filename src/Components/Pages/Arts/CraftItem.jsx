import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const CraftItem = ({ craft }) => {
  return (
   <Fade>
     <div className="relative overflow-hidden group h-96 rounded-xl drop-shadow-lg">
      <img className="w-full h-full object-cover" src={craft.url} alt="" />
      <div className="absolute h-full w-full bg-black/80 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col">
        <h1 className="text-white font-bold p-4">{craft.description}</h1>

        <Link to={`/arts/${craft._id}`} className="btn mt-2">
          View Detail
        </Link>
      </div>
    
    </div>
   </Fade>
  );
};

export default CraftItem;
