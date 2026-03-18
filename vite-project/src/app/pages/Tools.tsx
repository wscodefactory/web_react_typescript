import { Wand2, Code, LayoutGrid, Copy } from 'lucide-react';

export function Tools() {
  const tools = [
    {
      name: 'Logo Generator',
      description: 'AI-powered logo creation. Faster, Better, Easier',
      icon: Wand2,
      badge: 'New',
    },
    {
      name: "PowerT's Toolkit",
      description: 'Convert PowerT code to React, vanilla JS, etc.',
      icon: Code,
    },
    {
      name: 'Form Builder',
      description: 'Drag, Drop, Done! Dynamically + Easy as Breezy',
      icon: LayoutGrid,
    },
    {
      name: 'SVG Editor',
      description: 'No React, Faster builds, or SVG',
      icon: Copy,
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-4 text-blue-600 dark:text-blue-400">Tools</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Powerful tools to speed up your Power Apps development. Generate logos, convert designs, and more.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search components..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.name}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
            >
              <div className="w-full h-32 bg-blue-50 dark:bg-blue-900/20 rounded-md mb-4 flex items-center justify-center">
                <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                {tool.badge && (
                  <span className="px-2 py-0.5 text-xs bg-blue-600 text-white rounded">
                    {tool.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
