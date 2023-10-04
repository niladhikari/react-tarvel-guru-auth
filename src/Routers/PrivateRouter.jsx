import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';


const PrivateRouter = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation()

    if (loading) {
        return
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
  }

export default PrivateRouter;