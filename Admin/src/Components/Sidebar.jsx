import { NavLink } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";

const navItems = [
  { icon: ImSpoonKnife, label: "Food List", path: "/" },
  { icon: FaClipboardList, label: "Orders", path: "/orders" },
  { icon: LuUsers, label: "Employees", path: "/employees" },
  { icon: IoHomeOutline, label: "Booking", path: "/booking" },
];

const Sidebar = () => {
  return (
    <aside className="w-28 min-h-screen bg-card border-r border-border flex flex-col items-center py-8 gap-2">
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-20 h-20 rounded-2xl transition-all duration-200 group
            hover:bg-sidebar-accent ${
              isActive ? "bg-sidebar-accent" : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-1 border-2 transition-colors
                ${
                  isActive
                    ? "border-primary"
                    : "border-border group-hover:border-primary"
                }`}
              >
                <item.icon
                  size={24}
                  className={`transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
              </div>

              <span
                className={`text-xs font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                }`}
              >
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
