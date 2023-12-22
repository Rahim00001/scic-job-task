import student from '../../../public/student.json'
import buiseness from '../../../public/businessman.json'
import traveleer from '../../../public/traveler.json'
import developer from '../../../public/developer.json'
import Lottie from 'lottie-react';
const UserTypes = () => {
    return (
        <div>
            <h1 className='text-6xl font-bold text-center mb-2'>Our User</h1>
            <p className='text-lg font-semibold text-center mb-10'>All type of people are using TaskCraft and they enhanced there performance.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 xl:px-20 max-w-screen-2xl'>
                <div className="card w-80 mx-auto bg-blue-300 text-black">
                    <div className="card-body items-center text-center">
                        <Lottie animationData={student}></Lottie>
                        <h2 className="text-3xl font-bold">Student</h2>
                        <p>Students maximize productivity by utilizing task management websites, seamlessly organizing assignments and collaborating on projects for enhanced academic performance.</p>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-purple-300 text-black">
                    <div className="card-body items-center text-center">
                        <Lottie animationData={developer}></Lottie>
                        <h2 className="text-3xl font-bold">Developer</h2>
                        <p>Developers optimize their workflow using task management websites, enhancing collaboration, tracking project progress, and meeting deadlines with efficiency.</p>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-red-200 text-black">
                    <div className="card-body items-center text-center">
                        <Lottie animationData={traveleer}></Lottie>
                        <h2 className="text-3xl font-bold">Traveler</h2>
                        <p>Travelers rely on task management websites to plan seamlessly—organizing itineraries, setting reminders, and collaborating effortlessly for stress-free adventures.</p>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-yellow-200 text-black">
                    <div className="card-body items-center text-center">
                        <Lottie animationData={buiseness}></Lottie>
                        <h2 className="text-3xl font-bold">Businessmen</h2>
                        <p>Businessmen optimize productivity with task management websites, streamlining project planning, team collaboration, and deadline tracking for successful outcomes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTypes;