export default function RightPanel() {
  return (
    <div className="w-64 hidden lg:flex flex-col space-y-4 sticky top-28">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3">
        <p className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Trending Reports</p>
        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>🌊 Flood in Northshore – 5 likes</li>
          <li>🔥 Wildfire near Honey Island – 12 likes</li>
          <li>⛈️ Storm warning issued – 8 likes</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3">
        <p className="font-semibold mb-2 text-gray-700 dark:text-gray-300">First Aid Quick Tips</p>
        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>✅ Stop bleeding: Apply pressure</li>
          <li>✅ Burns: Cool with water</li>
          <li>✅ Choking: Heimlich maneuver</li>
        </ul>
      </div>
    </div>
  );
}
