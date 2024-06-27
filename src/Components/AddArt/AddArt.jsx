import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddArt = () => {
  const { user } = useContext(authContext);

  const handleAdd = (e) => {
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

    fetch('https://assesment-server-one.vercel.app/arts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(art)
    })
    .then(res => res.json())
    .then(data => {
      toast.success('Added To List');
      console.log(data);
    })
    .catch(error => {
      toast.error('Failed to add to list');
      console.error(error);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Add New Art</h2>
        <form className="space-y-4" onSubmit={handleAdd}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input name='image' type="text" placeholder="Image URL" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Art Name</span>
            </label>
            <input name='name' type="text" placeholder="Art Name" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Name</span>
            </label>
            <input name='sub_name' type="text" placeholder="Sub Name" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input name='description' type="text" placeholder="Description" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input name='price' type="text" placeholder="Price" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Customize</span>
            </label>
            <select name="customize" className="select select-bordered w-full" required>
              <option disabled value="">Want to customize?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <input name='time' type="text" placeholder="Time" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Customize</span>
            </label>
            <select name="status" className="select select-bordered w-full" required>
              <option disabled value="">Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>n
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input disabled name='email' type="email" placeholder="Email" className="input input-bordered w-full" value={user?.email} required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input name='userName' type="text" placeholder="Your Name" className="input input-bordered w-full" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Submit</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddArt;
