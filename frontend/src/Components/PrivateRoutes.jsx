import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const PrivateRoutes =({children})=>{
    const {isAuthanticated} = useSelector((store)=>store.auth);
    const navigate = useNavigate();
    if(!isAuthanticated){
        navigate("/login");
    }
    return children;
}

export default PrivateRoutes;