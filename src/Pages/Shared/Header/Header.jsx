import moment from "moment/moment";
import logo from "../../../assets/logo.png"


const Header = () => {
    return (
        <div>
          
            <img className="w-2/4 mx-auto mt-10" src={logo} alt="" />
            <p className="text-lg text-center">Journalism Without Fear or Favour</p>
            <p className="text-xl text-center">{moment().format('dddd , MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;