import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { userSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    userSignIn(email, password)
      .then(() => {
        toast.success("Successfully LogIn");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl my-10 text-center">Login your account</h2>
        <form
          onSubmit={handleLogin}
          className="border-2 p-5 bg-slate-300 rounded-md md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
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
          <p className="text-center mt-4">
            Do not have an account{" "}
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
      <h2 className="text-center text-xl font-semibold">
        --------------Or------------
      </h2>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
