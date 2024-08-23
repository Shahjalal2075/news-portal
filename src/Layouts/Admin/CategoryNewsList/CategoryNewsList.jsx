import { Link, useLoaderData } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";

const CategoryNewsList = () => {

    const menu = useLoaderData();
    const { name,link } = menu;

    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/news/${link}`)
            .then(res => res.json())
            .then(data => setCategoryNews(data));
    }, [link]);

    console.log(categoryNews)

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://account-ser.vercel.app/purchase-invoice/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        res.json()
                    })
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                ` has been deleted.`,
                                'success'
                            )
                        }
                    })
                setTimeout(() => {
                    window.location.reload();
                }, 600);


            }
        })
    }

    return (
        <div className="pt-14">
            <div className='bg-[#eee] pt-8 pb-14 px-8'>
                <div className="flex pb-6 justify-between items-center">
                    <div className="">
                        <h2 className="text-[#28084B] text-2xl font-bold">{name}</h2>
                    </div>
                    <div>
                        <Link to={`/dashboard/${link}/add`} className="px-4 cursor-pointer py-2 rounded-lg bg-[#733CFF] border border-[#733CFF] hover:border-[#733CFF] text-[#fff] hover:text-[#733CFF] hover:bg-[#fff]">
                            Add News
                        </Link>
                    </div>
                </div>
                <div className="overflow-x-auto bg-[#fff] p-2 rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Headline</th>
                                <th>Publish Date</th>
                                <th>Cover</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoryNews.map((news, idx) =>
                                    <tr key={news._id}>
                                        <td>{idx + 1}</td>
                                        <td>{news.headline}</td>
                                        <td>{news.date}</td>
                                        <td>
                                            <div className="">
                                                <img className="w-16" src={news.cover} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <Link to={`/`} className=' text-[green] font-bold'>
                                                <FaRegEdit />
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(news._id)} className=' text-[red] font-bold'>
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CategoryNewsList;