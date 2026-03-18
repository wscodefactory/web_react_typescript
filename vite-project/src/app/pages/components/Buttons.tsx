export function Buttons() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">
        Power Apps <span className="text-blue-600 dark:text-blue-400">Button Components</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        Button styles and variants for various use cases in Microsoft Power Apps - primary actions, secondary actions, and more. Copy-paste YAML code included.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
        Last updated: Sep 1, 2025
      </p>
      
      <div className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Primary Button</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Main action buttons with different states and hover effects.
              </p>
            </div>
            <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded font-medium">
              FREE
            </span>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="bg-white dark:bg-gray-900 rounded p-4 flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Primary
              </button>
              <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                Secondary
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Success
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Danger
              </button>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Outline Buttons</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Outline style buttons for secondary actions with smooth transitions.
              </p>
            </div>
            <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded font-medium">
              PRO
            </span>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="bg-white dark:bg-gray-900 rounded p-4 flex flex-wrap gap-4">
              <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                Primary
              </button>
              <button className="px-6 py-2 border-2 border-gray-600 text-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Secondary
              </button>
              <button className="px-6 py-2 border-2 border-green-600 text-green-600 rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                Success
              </button>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Icon Buttons</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Buttons with icons for enhanced visual communication.
              </p>
            </div>
            <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded font-medium">
              PRO
            </span>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="bg-white dark:bg-gray-900 rounded p-4 flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
                <span>➕</span> Add New
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2">
                <span>🗑️</span> Delete
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2">
                <span>✓</span> Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}