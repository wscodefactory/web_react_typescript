export function Components() {
  const components = [
    { name: 'Accordions', description: 'Interactive accordion components' },
    { name: 'Animations', description: 'Animation effects and transitions' },
    { name: 'App Shells', description: 'Application shell templates' },
    { name: 'Badge', description: 'Badge and tag components' },
    { name: 'Buttons', description: 'Button styles and variants' },
    { name: 'Button Group', description: 'Grouped button components' },
    { name: 'Calendars', description: 'Calendar and date picker components' },
    { name: 'Cards', description: 'Card layout components' },
    { name: 'Drawer', description: 'Drawer and sidebar components' },
    { name: 'Dropdowns', description: 'Dropdown menu components' },
    { name: 'Gallery', description: 'Image gallery components' },
    { name: 'Modals', description: 'Modal and dialog components' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-4">
          Component <span className="text-blue-600 dark:text-blue-400">Library</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Choose a component out of 98 to explore. Each category contains ready-to-use components that you can copy directly into your React Apps.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search categories or components..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Component Library</h2>

      <div className="grid grid-cols-3 gap-4">
        {components.map((component) => (
          <div
            key={component.name}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center">
              <div className="text-gray-400 dark:text-gray-500">Preview</div>
            </div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{component.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{component.description}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                #fundamentals
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
