export default function LeftPanel() {
  return (
    <div className="w-64 hidden lg:flex flex-col space-y-4 sticky top-28">
      {/* Profile */}
      <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <img src="https://i.pravatar.cc/50?img=12" className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-semibold">You</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">12 Posts</p>
        </div>
      </div>


      {/* Disaster Filters */}
      <div className="flex flex-col space-y-1">
        <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Filters</p>
        <button className="text-left p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">🌊 Flood</button>
        <button className="text-left p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">🔥 Fire</button>
        <button className="text-left p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">⛈️ Storm</button>
        <button className="text-left p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">🌍 Earthquake</button>
      </div>
    </div>
  );
}
