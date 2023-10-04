import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SocialLogin = () => {
   const {singInGoogle} = useAuth()
    const navigate = useNavigate()

   const handleSocialLogin = (media)=>{
      media()
      .then(() => {
        toast.success(" Successfully Login");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
   }
  
  return (
    <div>
      <div className="p-4 space-y-3 mb-7 text-center grid w-96 m-auto">
        <button onClick={()=>handleSocialLogin(singInGoogle)}
        className="btn btn-outline  text-blue-600 ">
          <FaGoogle></FaGoogle>
          Google Login
        </button>
        <button className="btn btn-outline ">
          <FaGithub></FaGithub>
          GitHub Login
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialLogin;
