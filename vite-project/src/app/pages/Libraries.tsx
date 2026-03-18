import { FileCode, Palette } from 'lucide-react';

export function Libraries() {
  const libraries = [
    {
      name: 'Custom YAML Library',
      description: 'Store and manage custom YAML files. Use this component library for rapid development.',
      icon: FileCode,
    },
    {
      name: 'Custom SVG Library',
      description: 'Import, store and manage custom SVG icons.',
      icon: Palette,
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-4">
          Your <span className="text-blue-600 dark:text-blue-400">Libraries</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your saved custom components. Create, organize, and share your own component library with your team.
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
        {libraries.map((library) => {
          const Icon = library.icon;
          return (
            <div
              key={library.name}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
            >
              <div className="w-full h-32 bg-blue-50 dark:bg-blue-900/20 rounded-md mb-4 flex items-center justify-center">
                <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{library.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{library.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
