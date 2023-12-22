import bannerImg from '../../../public/Images/taskBanner.svg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[90vh] bg-base-100">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="lg:w-1/2" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-6xl font-bold">Manage Work <br /> Efficiency.</h1>
                        <p className="pt-6 pb-2 text-2xl font-bold">Plan, Track and Organise your work..</p>
                        <p className='text-lg font-normal pb-5'>An Intranet platform to Manage projects, organise work and focus on what’s most important.</p>
                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;