import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";

const Navbar = ():JSX.Element => {
  return(
    <div className="w-3/4 lg:w-1/3 flex justify-between items-center">
      <Link to="/">
        <img className="w-12 h-12 mx-5" alt="logo" src={Logo} />
      </Link>
      <div className="flex items-center gap-8 text-lg font-semibold">
        <Link to="/" className="text-[#3a1212] border-b-4 border-b-[#9d4edd]">Home</Link>
        <Link to="/exercises" className="text-[#3a1212]">Exercises</Link>
      </div>
    </div>
  )
}

export default Navbar;