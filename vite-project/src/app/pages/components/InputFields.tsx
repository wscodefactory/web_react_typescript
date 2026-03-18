export function InputFields() {
  return (
    <div className="p-8">
      <h1 className="text-4xl mb-4">
        Input Fields <span className="text-blue-600 dark:text-blue-400">Component</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Form input components for user data entry.
      </p>
      
      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
          <div className="inline-flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">Text Input</h3>
            <span className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded">
              New
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Text input fields with validation support.
          </p>
        </div>
      </div>
    </div>
  );
}
