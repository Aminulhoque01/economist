const Card = ({ image, title, category, description }) => {
  return (
    <div className="space-y-2">
      <img src={image} alt="" className="w-full h-48 object-cover" />
      <p className="text-red-600 text-xs font-semibold">{category}</p>
      <h3 className="font-serif text-lg font-bold leading-snug">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default Card;
