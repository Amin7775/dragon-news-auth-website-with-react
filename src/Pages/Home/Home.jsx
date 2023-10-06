import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="text-2xl font-poppins">THIS IS HOME</div>

            {/* body */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* left */}
                <div className="border border-black">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* center */}
                <div className="lg:col-span-2 border border-black">
                    <h1 className="text-4xl"> News Coming Soon ...</h1>
                </div>
                {/* right */}
                <div className="border border-black">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;