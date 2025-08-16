'use client';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategorySectionProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategorySection({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategorySectionProps) {
  const handleCategoryChange = (categoryId: string) => {
    onCategoryChange(categoryId);
  };

  const categoryItem = (id: string, name: string, img: string) => (
    <button
      key={id}
      onClick={() => handleCategoryChange(id)}
      className={`group relative overflow-hidden rounded-xl p-4 lg:p-6 text-center transition-all duration-300 w-full
        ${selectedCategory === id
          ? 'ring-2 ring-primary-600 bg-primary-500'
          : 'bg-white hover:bg-primary-50 hover:shadow-lg'
        }`}
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 lg:w-16 lg:h-16 mb-2 rounded-lg overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-sm lg:text-lg font-semibold text-gray-900">{name}</h3>
      </div>
      {selectedCategory === id && (
        <div className="absolute inset-0 bg-primary-200 opacity-20"></div>
      )}
    </button>
  );

  return (
    <aside className="bg-blue-700 text-gray-100 ">
      <h2 className="text-xl lg:text-2xl font-bold p-4 lg:p-6">Shop by Category</h2>

      {/* Sidebar for desktop / scrollable row for mobile */}
      <div className="flex lg:flex-col gap-4 p-4 lg:p-6 overflow-x-auto lg:overflow-visible">
        {categoryItem(
          'all',
          'All Products',
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop'
        )}

        {categories.map((c) =>
          categoryItem(c.id, c.name, getCategoryImageSrc(c.id))
        )}
      </div>

      {/* Optional description */}
      {selectedCategory !== 'all' && (
        <div className="p-4 lg:p-6 text-sm lg:text-base">
          Showing products from{' '}
          <span className="font-semibold text-primary-200">
            {categories.find((c) => c.id === selectedCategory)?.name}
          </span>
        </div>
      )}
    </aside>
  );
}

function getCategoryImageSrc(categoryId: string): string {
  switch (categoryId) {
    case 'men':
      return 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop';
    case 'women':
      return 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop';
    default:
      return 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop';
  }
}
