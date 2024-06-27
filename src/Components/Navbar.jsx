import { useContext } from "react"
import { Link } from "react-router-dom"
import { authContext } from "./AuthProvider/AuthProvider"
import { getAuth, signOut } from "firebase/auth"

const Navbar = () => {
    const logOut = () => {
        const auth = getAuth();
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <div className="navbar bg-[#4c3e67]">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">aRTS</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/add'>AddArt</Link></li>
                        <li><Link to='allArt'> All Art & Craft Items</Link></li>
                        <li><Link to='/myArt'> My Art & Craft Items</Link></li>
                        {
                            user ? <button onClick={logOut} className="bg-[#d67775] p-2 rounded-xl"> Sign Out</button> :<Link to='/login'> <button className="bg-[#d67775] p-2 rounded-xl"> Log In</button></Link>


                        }                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar