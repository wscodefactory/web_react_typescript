import { Outlet } from 'react-router';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-[200vh] grid grid-cols-[minmax(40px,5vw)_minmax(180px,15vw)_1fr_minmax(200px,20vw)_minmax(40px,5vw)] gap-0">
          {/* 1번째: 왼쪽 공백 */}
          <div className="bg-gray-50 dark:bg-gray-950"></div>
          
          {/* 2번째: 사이드바 */}
          <div className="h-screen sticky top-0 overflow-hidden">
            <Sidebar />
          </div>
          
          {/* 3번째: 메인 컨텐츠 */}
          <div className="h-screen sticky top-0 overflow-y-auto bg-white dark:bg-gray-900">
            <Outlet />
          </div>
          
          {/* 4번째: 기타 부분 (나중에 추가) */}
          <div className="h-screen sticky top-0 overflow-y-auto border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accolate Ad library</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Additional content area</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What User Say</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">User feedback section</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Features</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Feature highlights</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Resources</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Resource links</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Community updates</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Latest News</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Recent announcements</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Getting started guides</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Help and support</p>
              </div>
            </div>
          </div>
          
          {/* 5번째: 오른쪽 공백 */}
          <div className="bg-gray-50 dark:bg-gray-950"></div>
        </div>
      </div>
    </div>
  );
}