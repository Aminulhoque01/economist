import { useSelector } from "react-redux";
import Card from "../Card/Card";
 

const VideoRow = () => {
  const { data } = useSelector((state) => state.home);
  const home = data?.data;

  if (!home?.latest_news?.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-6">
        Latest News
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {home.latest_news.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default VideoRow;
