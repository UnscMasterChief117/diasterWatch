
import LeftPanel from "../components/LeftPanel";
import NewsFeed from "./NewsFeed";
import RightPanel from "../components/RightPanel";

export default function Home() {
  return (
    <div className="flex justify-center gap-4 p-4 pt-28 min-h-screen bg-gray-100 dark:bg-gray-900">
      <LeftPanel />
      <NewsFeed />
      <RightPanel />
    </div>
  );
}
