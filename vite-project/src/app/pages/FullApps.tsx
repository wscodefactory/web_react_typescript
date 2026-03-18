export function FullApps() {
  const apps = [
    {
      name: 'Feedback App',
      description: 'Complete feedback collection and rating system',
    },
    {
      name: 'Project Management App',
      description: 'Comprehensive project tracking with analytics and team collaboration',
    },
    {
      name: 'Cleaning Confirmation',
      description: 'Service confirmation and scheduling application',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-4">
          Full <span className="text-blue-600 dark:text-blue-400">Apps</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore complete app templates ready to customize. Each app combines multiple components into a cohesive, production-ready solution.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for apps..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {apps.map((app) => (
          <div
            key={app.name}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-gray-400 dark:text-gray-500">App Preview</div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{app.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{app.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
