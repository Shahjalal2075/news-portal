import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCardHome = ({item}) => {
    return (
        <div className="">
            <div className="card">
                <Link to={''}>
                    <img src={item.cover} alt="" />
                </Link>
                <Link className="bg-[#1D1D1D] text-[#fff] px-2 py-1 text-sm font-medium absolute transform top-[10px] left-[10px]">{item.categoryBn}</Link>
                <div className="absolute bottom-[0px] bg-[#111] bg-opacity-[70%] py-1 w-full">
                    <div className="flex gap-4 text-xs text-[#fff] font-bold px-2 items-center">
                        <h2>{item.journalist}</h2>
                        <p>১৫ ই জুন, ২০২২</p>
                    </div>
                    <div className="text-[#fff] font-bold p-2 text-[13px]">
                        <Link>{item.headline}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCardHome;

NewsCardHome.propTypes = {
    item: PropTypes.object,
}