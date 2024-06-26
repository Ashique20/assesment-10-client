import { useContext } from "react"
import { authContext } from "../AuthProvider/AuthProvider"

const AddArt=()=>{
  const {user} = useContext(authContext)
    const handleAdd =(e)=>{
        e.preventDefault()
        const url = e.target.image.value
        const name= e.target.name.value
        const subName = e.target.sub_name.value
        const description = e.target.description.value
        const price = e.target.price.value
        const rate = e.target.rating.value
        const customize = e.target.customize.value
        const time = e.target.time.value
        const status = e.target.status.value
        const email = user?.email
        const userName = e.target.userName.value
        const art = {email,url,name,subName,description,price,rate,customize,time,status,userName}
        fetch('https://assesment-server-one.vercel.app/arts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(art)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
    }
    return(
        <div>
             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleAdd}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input name='image' type="text" placeholder="Image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ArtName</span>
          </label>
          <input name='name' type="text" placeholder="ArtName" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">SubName</span>
          </label>
          <input name='sub_name' type="text" placeholder="Sub_Name" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Describe</span>
          </label>
          <input name='description' type="text" placeholder="Description" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input name='price' type="text" placeholder="price" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input name='rating' type="text" placeholder="Rating" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Customize</span>
          </label>
          <input name='customize' type="text" placeholder="Customize" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Time</span>
          </label>
          <input name='time' type="text" placeholder="Time" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input name='status' type="text" placeholder="Status" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input disabled name='email' type="email" placeholder="email" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input name='userName' type="text" placeholder="Your Name" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
        </div>
    )
}


export default AddArt