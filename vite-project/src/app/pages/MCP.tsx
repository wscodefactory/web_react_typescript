import { Shield, Cloud, Code2, Zap, Lock, Users } from 'lucide-react';

export function MCP() {
  const features = [
    {
      title: 'Build custom components',
      description: 'Reusable UI components ready to-use',
      icon: Code2,
    },
    {
      title: 'Combine common UIs',
      description: 'Flowchart maker, calendar, form builders, etc.',
      icon: Cloud,
    },
    {
      title: 'Launch a product',
      description: 'Build production-ready solutions',
      icon: Zap,
    },
    {
      title: 'Create Components',
      description: 'Custom components using MCP',
      icon: Shield,
    },
    {
      title: 'Combine native Power Apps controls',
      description: 'Integrate with existing controls',
      icon: Lock,
    },
    {
      title: 'Generate entire Apps instantly',
      description: 'AI-powered app generation',
      icon: Users,
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl mb-4">
          PowerLibs <span className="text-blue-600 dark:text-blue-400">MCP</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Build your own Component Library MCP (Master Control Program) platform, share components with
          your team, or download from the community site - Think of it as GitHub for Power Apps Components.
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          <input
            type="text"
            placeholder="Paste import URL here and hit "
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Import
          </button>
        </div>
      </div>

      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What is MCP?</h2>
        <p className="text-gray-600 dark:text-gray-400">
          MCP (Master Control Protocol) gives you instant access to the MCP Knowledge Base (Communities Site), Think of it as your one-stop shop for everything Power Apps components.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What you AI can do</h2>
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800"
              >
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Works with</h2>
        <div className="flex gap-4">
          {['Canvas', 'UI Library', 'GitHub'].map((platform) => (
            <div
              key={platform}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300"
            >
              {platform}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
