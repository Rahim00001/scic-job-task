/* eslint-disable react/prop-types */
import { IoTrashBinOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const AllTasks = ({ task }) => {
    console.log(task);
    const { name, _id } = task;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://scic-job-task-server-rho.vercel.app/tasks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="font-semibold border p-3 text-center rounded-lg bg-green-400 my-1">
                <p className="text-2xl text-white font-semibold mb-1">{name}</p>
                <div className="flex justify-center gap-2">
                    <Link to={`/updateTask/${_id}`}><button className="btn btn-square btn-outline text-2xl bg-orange-400 border border-green-400">
                        <FaRegEdit></FaRegEdit>
                    </button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline text-2xl bg-red-500 border-green-400">
                        <IoTrashBinOutline></IoTrashBinOutline>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllTasks;