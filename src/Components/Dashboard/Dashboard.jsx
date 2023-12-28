import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import taskAnim from "../../../public/taskAdd.json"
import Swal from "sweetalert2";
const Dashboard = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task Added Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset()
                }
            })
    };
    return (
        <div>
            <h2 className="text-6xl text-center">This is dashboard</h2>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row justify-center items-center lg:gap-20">
                    <div className="text-center lg:w-[700px] border">
                        <h1 className="text-5xl font-bold border -mb-12 lg:-mb-16">Add new task!</h1>
                        <Lottie animationData={taskAnim}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Title</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="task title" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Task title is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Priority</span>
                                </label>
                                <div className="border p-2 rounded-lg">
                                    <select {...register("category", { required: true })}>
                                        <option value="high" className="text-lg">High</option>
                                        <option value="moderate" className="text-lg">Moderate</option>
                                        <option value="low" className="text-lg">Low</option>
                                    </select>
                                </div>
                                {errors.category && <span className="text-red-600">Task Priority is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Description</span>
                                </label>
                                <textarea {...register("description", { required: true })} name="description" placeholder="Task description" className="input input-bordered h-20" />
                                {errors.description && <span className="text-red-600">Task description is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Add Now" className="btn bg-blue-500 text-white hover:bg-blue-600" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;