export function Tabs() {
  return (
    <div className="p-8">
      <h1 className="text-4xl mb-4">
        Tabs <span className="text-blue-600 dark:text-blue-400">Component</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Tab components for organizing content into sections.
      </p>
      
      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Horizontal Tabs</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Switchable content panels with tab navigation.
          </p>
        </div>
      </div>
    </div>
  );
}
