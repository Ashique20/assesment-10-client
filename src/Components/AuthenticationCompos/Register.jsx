import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { GithubAuthProvider, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { register } = useContext(authContext);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // Password validation rules
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const minLength = 6;

        if (!uppercaseRegex.test(password)) {
            toast.error('Password must contain at least one uppercase letter');
            return;
        }

        if (!lowercaseRegex.test(password)) {
            toast.error('Password must contain at least one lowercase letter');
            return;
        }

        if (password.length < minLength) {
            toast.error(`Password must be at least ${minLength} characters long`);
            return;
        }

        // Proceed with registration if all validations pass
        register(email, password)
            .then(result => {
                toast.success('Successfully Registered');
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error.message);
            });
    };

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleGithub = () => {
        signInWithPopup(auth, gitProvider)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <button className="btn bg-primary" onClick={handleGoogle}>Sign Up with Google</button>
                        <button className="btn bg-black text-white  mt-4" onClick={handleGithub}>Sign Up with Github</button>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Already have an account? Register?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-red-400">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
