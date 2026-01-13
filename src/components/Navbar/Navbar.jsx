import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";  

const links = [
  { name: "Weekly edition", path: "/weekly", highlight: true },
  { name: "The world in brief", path: "/brief" },
  { name: "World Ahead 2026", path: "/world-ahead-2026" },
  { name: "War in Ukraine", path: "/ukraine" },
  { name: "United States", path: "/usa" },
  { name: "Middle East", path: "/middle-east" },
  { name: "Business", path: "/business" },
  { name: "Artificial intelligence", path: "/ai" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between py-3">

          {/* LOGO */}
          <span className="font-bold text-lg">News</span>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  hover:underline
                  ${link.highlight ? "text-red-600 font-semibold" : ""}
                  ${isActive ? "underline text-black" : "text-gray-700"}
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4 space-y-3 border-t pt-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  block text-sm
                  ${link.highlight ? "text-red-600 font-semibold" : ""}
                  ${isActive ? "underline text-black" : "text-gray-700"}
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
