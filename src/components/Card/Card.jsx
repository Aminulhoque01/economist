const Card = ({ item}) => {
 return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
          {item.category?.name}
        </span>

        <h3 className="font-serif text-lg font-bold leading-snug line-clamp-2">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {item.short_description || "Read full story for details"}
        </p>
      </div>
    </div>
  );
};

export default Card;
