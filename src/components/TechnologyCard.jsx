function TechnologyCard({ tech, isSelected, onAdd }) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      
      <div className="flex items-start justify-between mb-3">
        <span className="text-4xl">{tech.icon}</span>

        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-pink-50 text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold text-lg mb-1">
        {tech.name}
      </h3>

      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        {tech.description}
      </p>

      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 flex-wrap">
        <span className="px-2 py-1 bg-gray-100 rounded-md">
          {tech.category}
        </span>

        <span className="px-2 py-1 bg-gray-100 rounded-md">
          {tech.difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1 text-amber-500 font-medium">
          ★ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isSelected}
        className={`w-full py-2 rounded-lg font-semibold text-sm ${
          isSelected
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;