import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router";

type SidebarItem = {
  name: string;
  path: string;
  badge?: string;
};

const sidebarItems: SidebarItem[] = [
  { name: "1", path: "/components/accordions" },
  { name: "2", path: "/components/animations" },
  { name: "3", path: "/components/app-shells" },
  { name: "4", path: "/components/badge" },
  { name: "5", path: "/components/buttons" },
  { name: "6", path: "/components/button-group" },
  { name: "7", path: "/components/calendars" },
  { name: "8", path: "/components/cards" },
  { name: "9", path: "/components/drawer" },
  { name: "10", path: "/components/dropdowns" },
  { name: "11", path: "/components/gallery" },
  { name: "12", path: "/components/modals" },
  { name: "13", path: "/components/navigation-bars" },
  { name: "14", path: "/components/sidebar" },
  { name: "15", path: "/components/steppers" },
  { name: "16", path: "/components/tabs" },
  { name: "17", path: "/components/toggles" },
  { name: "18", path: "/components/input-fields", badge: "New" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="h-full overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="p-4">
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors group ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight
                    className={`w-4 h-4 transition-opacity ${
                      isActive
                        ? "opacity-100 text-blue-600 dark:text-blue-400"
                        : "opacity-0 group-hover:opacity-100 text-gray-400"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
