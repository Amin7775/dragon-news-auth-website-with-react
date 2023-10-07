import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [category, setCategory]= useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className="p-1">
        <div className="space-y-6">
            <h2 className="text-xl font-medium">All Categories : {category.length}</h2>
            {
                category.map(list => <Link className="block ml-4 text-lg font-medium" key={list.id} to={`/category/${list.name}`}>{list.name}</Link>)
            }
        </div>  
        </div>
    );
};

export default LeftSideNav;