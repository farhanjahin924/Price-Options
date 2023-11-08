import { useState } from "react";
import Link from "../../Link/Link";
import { FiMenu, FiAlignLeft } from "react-icons/fi";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", id: 1, name: "Home" },
    { path: "/about", id: 2, name: "About" },
    { path: "/products", id: 3, name: "Products" },
    { path: "/contact", id: 4, name: "Contact" },
    { path: "/profile", id: 5, name: "User Profile" },
  ];

  return (
    <nav className="  text-white">
      <div className="text-2xl  p-6 bg-slate-800 md:hidden " onClick={() => setOpen(!open)}>
        {
            open === true ? <FiAlignLeft></FiAlignLeft> : <FiMenu></FiMenu>
        }
      </div>
      <ul className={`md:flex  absolute p-6 md:static ${open ? '' : '-top-80'} justify-center  bg-slate-800 text-white `}>
        {routes.map((route) => (
          <Link  route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
