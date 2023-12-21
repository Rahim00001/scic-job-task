import Lottie from "lottie-react";
import errorPage from "../../../public/404.json"
const ErrorPage = () => {
    return (
        <div className="bg-black h-screen">
            <Lottie className="items-center h-screen" animationData={errorPage}></Lottie>
        </div>
    );
};

export default ErrorPage;