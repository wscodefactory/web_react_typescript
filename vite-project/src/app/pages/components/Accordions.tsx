export function Accordions() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">
        Power Apps <span className="text-blue-600 dark:text-blue-400">Accordion Components</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        Collapsible content sections for Microsoft Power Apps - perfect for FAQs, settings panels, and organized information. Copy-paste YAML code included.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
        Last updated: Sep 1, 2025
      </p>
      
      <div className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Accordion Plus</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                An accordion with animated plus/minus icons that morph smoothly when expanding.
              </p>
            </div>
            <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded font-medium">
              PRO
            </span>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="bg-white dark:bg-gray-900 rounded p-4 space-y-2">
              <div className="border border-gray-200 dark:border-gray-700 rounded p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">Why should I use accordions in my Power Apps?</span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400">+</span>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">How do accordions improve mobile responsiveness?</span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400">+</span>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">Are accordions difficult to implement in Power Apps?</span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400">+</span>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">What are common use cases for accordions?</span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Accordion</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A vertically stacked set of interactive headings that each reveal a section of content.
              </p>
            </div>
            <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded font-medium">
              FREE
            </span>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="bg-white dark:bg-gray-900 rounded p-4 space-y-2">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="flex items-center justify-between cursor-pointer">
                  <span className="font-medium text-gray-900 dark:text-white">How do I import custom icons?</span>
                  <span className="text-gray-600 dark:text-gray-400">▼</span>
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="flex items-center justify-between cursor-pointer">
                  <span className="font-medium text-gray-900 dark:text-white">Where can I learn more Power Apps design tricks?</span>
                  <span className="text-gray-600 dark:text-gray-400">▼</span>
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="flex items-center justify-between cursor-pointer">
                  <span className="font-medium text-gray-900 dark:text-white">Why do most Power Apps look outdated?</span>
                  <span className="text-gray-600 dark:text-gray-400">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}