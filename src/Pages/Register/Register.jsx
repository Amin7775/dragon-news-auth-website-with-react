import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        
        const name = form.get('name')
        const photo = form.get('photoURL')
        const email = form.get('email');
        const password = form.get('password')

        console.log(name,photo,email,password)

        createUser(email,password)
        .then(res=> console.log(res.user))
        .catch(error => console.log("error", error.message))
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h2 className="text-2xl font-medium text-center mt-20 mb-2">Register Here</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 card-body mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="URL of Profile Picture"
              className="input input-bordered"
              name="photoURL"
            />
          </div>
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
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">Already have an account ? <span className="text-blue-600 font-medium"><Link to={"/login"}>Login</Link></span></p>
      </div>
    </div>
  );
};

export default Register;