import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import registerAnim from "../../../public/register.json"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser } = useContext(AuthContext);


    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(reault => {
                const loggedUSer = reault.user;
                console.log(loggedUSer);
            })
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
                    <div className="text-center border lg:w-[500px]">
                        <h1 className="text-5xl font-bold mb-3 lg:mb-8">Please Register !</h1>
                        <Lottie animationData={registerAnim}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be atleast 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password must be below 21 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have one upperCase, one LowerCase, one Number and one Special characters</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn bg-violet-600 text-white hover:bg-violet-800" />
                            </div>
                        </form>
                        {/* <div className="divider divider-primary"></div> */}
                        <p className='text-center mb-3 -mt-3'><small>Already have an account? <Link to='/login' className='font-bold hover:underline'>Login Now</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;