import { Link } from "react-router-dom"

const NotFound =()=>{
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
          <Link 
            to="/" 
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    )
}


export default NotFound