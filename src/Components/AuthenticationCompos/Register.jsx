import { useContext } from "react"
import { authContext } from "../AuthProvider/AuthProvider"
import { GithubAuthProvider,getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import app from "../../firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
   

    const {register} = useContext(authContext)
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const auth = getAuth(app)
    const location = useLocation()
    const navigate = useNavigate()
    const handleRegister=e=>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        register(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error.message)
        })
    }

    const handleGoogle =()=>{
        signInWithPopup(auth, provider)
         .then((result) => {
         console.log(result.user)
         navigate(location?.state?location.state:'/')
    
          
         }).catch((error) => {
           console.error(error)
         })
       }

       const handleGithub =()=>{
        signInWithPopup(auth, gitProvider)
         .then((result) => {
         console.log(result.user)
         navigate(location?.state?location.state:'/')
    
          
         }).catch((error) => {
           console.error(error)
         })
       }
 

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                        <button className="btn bg-primary" onClick={handleGoogle}>Sign In with Google</button>
                        <button className="btn bg-black text-white  mt-4" onClick={handleGithub}>Sign In with Github</button>
                       
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-400">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register