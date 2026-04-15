import { NavLink, useNavigate } from "react-router-dom";
import { Home, ScrollText, BarChart2 } from "lucide-react";
import image from '../assets/logo.png'

const links = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/timeline", label: "Timeline", Icon: ScrollText },
  { to: "/stats", label: "Stats", Icon: BarChart2 },
];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-green-brand sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="text-white font-bold text-xl cursor-pointer tracking-tight"
          onClick={() => navigate("/")}
        >
         <img src={image} alt="logo" className=""/>
        </div>

        <div className="flex gap-1">
          {links.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-all duration-150 ${
                  isActive
                    ? "bg-green-900 text-white font-semibold"
                    : "text-gray-500"
                }`
              }
            >
             {Icon && <Icon className="w-5 h-5" />}
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}