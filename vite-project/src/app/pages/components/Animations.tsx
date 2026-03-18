export function Animations() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">
        Power Apps <span className="text-blue-600 dark:text-blue-400">Animation Components</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        Animated progress bars and interactive elements for Microsoft Power Apps - loading states, progress tracking, and visual feedback. Copy-paste YAML code included.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
        Last updated: Sep 1, 2025
      </p>
      
      <div className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Animated Line Chart</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sophisticated animated SVG line chart with gradient fills, data points, and comprehensive customization. Perfect for dashboards and data visualization.
              </p>
            </div>
            <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded font-medium">
              PRO
            </span>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="bg-white dark:bg-gray-900 rounded p-4">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Animated Line Charts</h4>
              <div className="h-64 flex items-end justify-around gap-2">
                {[20, 35, 25, 45, 55, 40, 60, 75].map((height, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Animated Toggle</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Animated toggle switch with customizable text labels that smoothly transitions between states with easing animation.
              </p>
            </div>
            <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded font-medium">
              PRO
            </span>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="bg-white dark:bg-gray-900 rounded p-4 flex justify-center">
              <div className="inline-flex rounded-full bg-gray-200 dark:bg-gray-700 p-1">
                <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium transition-all">
                  Text 1
                </button>
                <button className="px-6 py-2 rounded-full text-gray-600 dark:text-gray-400 font-medium transition-all">
                  Text 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}