import ContactUs from "../ContactUs/ContactUs";
import Team from "../Team/Team";
import UserTypes from "../UserTypes/UserTypes";

const Home = () => {
    return (
        <div>
            <h1 className="text-5xl text-center">This is home</h1>
            <UserTypes></UserTypes>
            <Team></Team>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;