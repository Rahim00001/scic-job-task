import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Team from "../Team/Team";
import UserTypes from "../UserTypes/UserTypes";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UserTypes></UserTypes>
            <Team></Team>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;