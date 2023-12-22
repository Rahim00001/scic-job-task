import man1 from '../../../public/Images/man3.jpg'
import women1 from '../../../public/Images/women.jpg'
import women2 from '../../../public/Images/women1.jpg'
const Team = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-3'>
            <h1 className='text-center text-6xl font-bold mb-10'>Meet Our Team</h1>
            <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card card-compact mx-auto w-80 h-96 bg-base-100 shadow-2xl">
                    <figure><img src={women1} className='w-full' alt="team member" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between mr-5'>
                            <h2 className="card-title">Jem Moreana</h2>
                            <div className="badge badge-secondary font-medium p-4">Planing</div>
                        </div>
                        <p className='text-base font-medium text-gray-500'>Jem Moreana is one of our best team member in planing department</p>
                    </div>
                </div>
                <div className="card card-compact mx-auto w-80 h-96 bg-base-100 shadow-2xl">
                    <figure><img src={man1} className='w-full' alt="team member" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between mr-5'>
                            <h2 className="card-title">John Doe</h2>
                            <div className="badge badge-primary font-medium p-4">Design</div>
                        </div>
                        <p className='text-base font-medium text-gray-500'>John Doe is one of our best team member in design department</p>
                    </div>
                </div>
                <div className="card card-compact mx-auto w-80 h-96 bg-base-100 shadow-2xl">
                    <figure><img src={women2} className='w-full' alt="team member" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between mr-5'>
                            <h2 className="card-title">Jane Buffet</h2>
                            <div className="badge badge-accent font-medium p-4">Management</div>
                        </div>
                        <p className='text-base font-medium text-gray-500'>Jane Buffet is one of our best team member in management department</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;