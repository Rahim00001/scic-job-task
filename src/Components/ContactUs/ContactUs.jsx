import Lottie from 'lottie-react';
import contact from '../../../public/contact.json'
import { BsSendFill } from "react-icons/bs";
const ContactUs = () => {
    return (
        <div className="hero-content flex-col lg:flex-row justify-center items-center gap-1 max-w-screen-xl mx-auto">
            <Lottie animationData={contact}></Lottie>
            <div>
                <h1 className="uppercase text-2xl mb-2 font-bold text-slate-600">Share your thouts</h1>
                <h1 className="text-6xl font-bold mb-5">Messege Us.</h1>
                <div className="card shrink-0 w-[380px] max-w-sm shadow-2xl bg-base-100 border-l-4 border-b-4 border-gray-700">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Your Name</span>
                            </label>
                            <input type="text" placeholder="Sample Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Your Email</span>
                            </label>
                            <input type="email" placeholder="sample@gmail.com" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-sm" ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">
                                Send Messege
                                <BsSendFill />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;