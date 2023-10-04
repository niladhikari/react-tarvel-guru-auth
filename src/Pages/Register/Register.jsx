import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then(() => {
        toast.success("Register Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      <div className=" ">
        <h2 className="text-3xl my-10 text-center">Register your account</h2>
        <form
          onSubmit={handleSignUp}
          className="border-2 p-5 bg-slate-300 rounded-md md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </form>
        <h2 className="text-center text-xl font-semibold">
          --------------Or------------
        </h2>
        <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Register;
