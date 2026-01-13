import { useSelector } from "react-redux";
 

const CardSection = () => {
  const { data, loading, error } = useSelector((state) => state.home);
  const home = data?.data;

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">

      {/* 🔥 Top News (Big Card) */}
      <div className="col-span-12 lg:col-span-6">
        {home?.top_news?.slice(0, 1).map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              className="w-full h-96 object-cover group-hover:scale-105 transition"
            />

            <div className="p-6">
              <span className="text-red-600 text-sm font-semibold">
                {item.category?.name}
              </span>

              <h1 className="font-serif text-3xl font-bold mt-2 leading-tight">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* ⚡ Breaking News */}
      <div className="col-span-12 lg:col-span-3 space-y-4">
        <h2 className="font-bold text-lg">Breaking News</h2>
        {home?.breaking_news?.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <span className="text-xs text-red-600">
              {item.category?.name}
            </span>
            <p className="font-semibold text-sm mt-1">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* 📈 Trending */}
      <div className="col-span-12 lg:col-span-3 space-y-4">
        <h2 className="font-bold text-lg">Trending</h2>
        {home?.trending_news?.map((item, index) => (
          <div
            key={item.id}
            className="flex gap-3 items-start border-b pb-3"
          >
            <span className="text-red-600 font-bold">
              {index + 1}
            </span>
            <p className="text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CardSection;

