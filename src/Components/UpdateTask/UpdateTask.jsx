import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateTask = () => {
    const task = useLoaderData();
    console.log(task);
    // eslint-disable-next-line no-unused-vars
    const { _id, name, description } = task;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch(`https://scic-job-task-server-rho.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task updated Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset()
                }
            })
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold text-center my-10'>Update Your Task</h1>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Title</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" defaultValue={task.name} className="input input-bordered" />
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
                        <textarea {...register("description", { required: true })} name="description" defaultValue={task.description} className="input input-bordered h-20" />
                        {errors.description && <span className="text-red-600">Task description is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Update Now" className="btn bg-blue-500 text-white hover:bg-blue-600" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;