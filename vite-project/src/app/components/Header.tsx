import { Link, useLocation } from "react-router";
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const menuItems = [
  { name: "menu1", path: "/" },
  { name: "menu2", path: "/full-apps" },
  { name: "menu3", path: "/libraries" },
  { name: "menu4", path: "/tools" },
  { name: "menu5", path: "/mcp" },
];

export function Header() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-center relative">
        <a href="/" className="flex items-center gap-2 absolute left-6">
          <div className="flex items-center gap-2 absolute left-6">
            <div className="w-6 h-6 bg-indigo-600 rounded"></div>
            <span className="font-semibold text-gray-900 dark:text-white">
              test
            </span>
          </div>
        </a>

        <nav className="flex items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors absolute right-6"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </header>
  );
}
