import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const form = new FormData(e.currentTarget);

        // console.log(email,password)
        console.log(form.get('email'));
        console.log(form.get('password'));
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
