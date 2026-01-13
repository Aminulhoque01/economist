import { useSelector } from "react-redux";
 
import Card from "../Card/Card";

const Category  = () => {
  const { data } = useSelector((state) => state.home);
  const categories = data?.data?.category_news;

  if (!categories?.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      {categories.map((cat) => (
        <div key={cat.category?.id}>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-3">
            {cat.category?.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cat.news.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Category ;
