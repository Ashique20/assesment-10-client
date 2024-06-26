import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Update = () => {
  const myArt = useLoaderData();
  const { user } = useContext(authContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const url = e.target.image.value;
    const name = e.target.name.value;
    const subName = e.target.sub_name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rate = e.target.rating.value;
    const customize = e.target.customize.value;
    const time = e.target.time.value;
    const status = e.target.status.value;
    const email = user?.email;
    const userName = e.target.userName.value;
    const art = { email, url, name, subName, description, price, rate, customize, time, status, userName };

    fetch(`https://assesment-server-one.vercel.app/arts/${myArt._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(art),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Delete art with id: ${id}`);
  };

  return (
    <div className="flex lg:flex-row flex-col justify-evenly m-20 p-2 items-center">
      <div className="card bg-base-100  shadow-xl m-10">
        <figure>
          <img src={myArt.url} alt="Art" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {myArt.name}
            <div className="badge badge-secondary">{myArt.status}</div>
          </h2>
          <p>{myArt.description}</p>
         
        </div>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#4c3e67]">
        <h1 className="text-center m-2 text-2xl text-green-200 font-bold">Update {myArt.name}</h1>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input name="image" type="text" placeholder="Image" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Art Name</span>
            </label>
            <input name="name" type="text" placeholder="Art Name" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Sub Name</span>
            </label>
            <input name="sub_name" type="text" placeholder="Sub Name" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input name="description" type="text" placeholder="Description" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input name="price" type="text" placeholder="Price" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input name="rating" type="text" placeholder="Rating" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Customize</span>
            </label>
            <input name="customize" type="text" placeholder="Customize" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <input name="time" type="text" placeholder="Time" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input name="status" type="text" placeholder="Status" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input disabled name="email" type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input name="userName" type="text" placeholder="Your Name" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
