import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)

  const location = useLocation();
  console.log("from login :",location)
  const navigate = useNavigate();
  
    const handleLogin=e=>{
        e.preventDefault();
        
        const form = new FormData(e.currentTarget);
        
        const email = form.get('email')
        const password = form.get('password')

        signIn(email,password)
        .then(user => {
          console.log("sign in success", user)
          // navigation after login
          
          navigate(location?.state ? location.state : '/')
        })
        .catch(error => console.log(error.message))
       
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h2 className="text-2xl font-medium text-center mt-20 mb-2">Please Login</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 card-body mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">Don't have an account ? <span className="text-blue-600 font-medium"><Link to={"/register"}>Register</Link></span></p>
      </div>
    </div>
  );
};

export default Login;
