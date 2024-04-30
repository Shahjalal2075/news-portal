import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryHome = () => {

    const [sectionList, setSectionList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/menu`)
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => a.sl - b.sl);
                setSectionList(sortedData)
            });
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4">

            {
                sectionList.map(section =>
                    <CategoryCard
                        key={section._id}
                        section={section}
                    ></CategoryCard>)
            }

        </div>
    );
};

export default CategoryHome;