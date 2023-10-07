import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {

    const {id}= useParams();
    return (
        <div className="">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 mt-10 border-2">
                <div className="col-span-3">
                    <h1 className="text-3xl font-medium text-center">News Details </h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;