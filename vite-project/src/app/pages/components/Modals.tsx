export function Modals() {
  return (
    <div className="p-8">
      <h1 className="text-4xl mb-4">
        Modals <span className="text-blue-600 dark:text-blue-400">Component</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Modal and dialog components for focused interactions.
      </p>
      
      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Confirmation Modal</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Modal dialogs for user confirmations.
          </p>
        </div>
      </div>
    </div>
  );
}
