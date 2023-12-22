import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const LoginByGoogle = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGooglelogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div>
            <div className="px-8 mb-2 -mt-4">
                <button onClick={handleGooglelogin} className="btn btn-block btn-outline btn-warning">
                    <FaGoogle className="text-xl"></FaGoogle>
                    Google Login
                </button>
            </div>
        </div>
    );
};

export default LoginByGoogle;