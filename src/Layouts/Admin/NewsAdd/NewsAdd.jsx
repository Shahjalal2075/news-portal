import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsAdd = () => {

    const menu = useLoaderData();
    const { name, link } = menu;

    const [details, setDetails] = useState("");
    const [detailsView, setDetailsView] = useState("");
    const [coverFile, setCoverFile] = useState(null);

    const handleDetailsChange = (e) => {
        const value = e.target.value;
        setDetailsView(value);
        setDetails(value.replace(/\r?\n/g, "/n"));  // Replacing new line with \n
    };

    const handleFileChange = (e, setFiles) => {
        const files = Array.from(e.target.files);
        setFiles(files.length === 1 ? files[0] : files);
    };

    const uploadToImgBB = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=fd17c529f0340228187c8df57c534dea`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            return data.data.url;
        } else {
            throw new Error('Failed to upload image to ImgBB');
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const headline = form.headline.value;
        const date = form.date.value;
        const cover = form.cover.value;

        const category = link;
        const categoryBn = name;
        const isTopHead = false;
        const isTopNews = false;
        const journalist = "Nishi Barta"

        const news = { category, categoryBn, date, headline, details, detailsView, cover, isTopHead, isTopNews, journalist };
        console.log(news)
    }

    return (
        <div>

            <div className="bg-[#eee] pt-8 pb-14 px-8">
                <form onSubmit={handleAddProduct}>
                    <h2 className="text-[#28084B] text-2xl font-bold pb-8">{name}</h2>
                    <div className="grid grid-cols-1 gap-4 bg-[#fff] p-4 pb-6 rounded-lg">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex
                                t font-medium">Headline</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="headline" className="input bg-[#fff] input-bordered w-full px-2" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex
                                t font-medium">Details</span>
                            </label>
                            <label className="input-group">
                                <textarea
                                    required
                                    type="text"
                                    name="details"
                                    value={detailsView}
                                    onChange={handleDetailsChange}
                                    className="input bg-[#fff] input-bordered w-full h-60 px-2" />
                            </label>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-tex
                                t font-medium">Date</span>
                                </label>
                                <label className="input-group">
                                    <input required type="date" name="date" className="input bg-[#fff] input-bordered w-full px-2" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-tex
                                t font-medium">Cover</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        style={{ height: "35px", paddingLeft: "10px" }}
                                        type="file"
                                        name="cover"
                                        id="cover"
                                        className="form-control"
                                        onChange={(e) => handleFileChange(e, setCoverFile)}
                                        required
                                    />
                                </label>
                            </div>
                        </div>


                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Fecha</span>
                            </label>
                            <label className="input-group">
                                <div className="input bg-[#fff] input-bordered w-full flex items-center">
                                    <DatePicker
                                        selected={selectedDate1}
                                        onChange={handleDateChange1}
                                        dateFormat="dd-MM-yyyy"
                                        placeholderText="dd-mm-yyyy"
                                    />
                                </div>
                            </label>
                        </div> */}

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Fecha de pago</span>
                            </label>
                            <label className="input-group">
                                <div className="input bg-[#fff] input-bordered w-full flex items-center">
                                    <DatePicker
                                        selected={selectedDate2}
                                        onChange={handleDateChange2}
                                        dateFormat="dd-MM-yyyy"
                                        placeholderText="dd-mm-yyyy"
                                    />
                                </div>
                            </label>
                        </div> */}

                    </div>

                    <input type="submit" value="Add" className="px-4 cursor-pointer py-2 rounded-lg bg-[#157347] text-[#fff] mt-6 w-full" />

                </form>

            </div>
            <ToastContainer />
        </div>
    );
};

export default NewsAdd;