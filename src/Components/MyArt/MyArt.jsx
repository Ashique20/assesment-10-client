import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import MyCard from "./MyCard";
import { ToastContainer, toast } from 'react-toastify';


const MyArt = () => {
  const { user,setLoading } = useContext(authContext);
  const [myArts, setArts] = useState([]);
 
  useEffect(() => {
    if (user) {
      console.log("Fetching data for user:", user.email); // Debugging log

      fetch(`https://assesment-server-one.vercel.app/arts?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setArts(data)
          setOriginalArt(data)
        });
    }
  }, [user]);

  const handleYes=(customize)=>{
    console.log(customize)
  
    if(customize==='yes'){
      const ifYes= originalArts.filter(art=>art.customize===customize)
    setArts(ifYes)
    }
  else if(customize==='no'){
    const ifNo= originalArts.filter(art=>art.customize===customize)


    setArts(ifNo)
  }

   
   
   
  }



  const handleDelete = (_id) => {
    fetch(`https://assesment-server-one.vercel.app/arts/${_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const remaining = myArts.filter(myArt => myArt._id !== _id)
        setArts(remaining)
        toast.success('Deleted Art')
      })
  }

  return (
   <div >
     <div className="text-center  m-10 ">
     <div className="dropdown  dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 bg-red-400">Click to see Customization</div>
  <ul tabIndex={0} className="dropdown-content menu bg-red-400 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleYes('yes')}><a>Yes</a></li>
    <li onClick={()=>handleYes('no')}><a>No</a></li>
  </ul>
</div>      <div className="grid grid-cols-1 lg:grid-cols-3   mt-40   ">
        {
          myArts.map(myArt => <MyCard myArt={myArt}  handleDelete={handleDelete} key={myArt._id}></MyCard>)
        }
      </div>
    </div>
    <ToastContainer/>
   </div>
  );
};

export default MyArt;
