import { NavLink } from "react-router-dom";

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
  return (
    <nav className="border-b">
      <div className="container mx-auto flex gap-8  py-3 text-sm font-medium">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={`hover:underline ${
              link.highlight ? "  " : ""
            }`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
