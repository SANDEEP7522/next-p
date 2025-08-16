'use client';

import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import Toast from './Toast';

interface FeaturedProductsProps {
  products: Product[];
  title: string;
}

export default function FeaturedProducts({ products, title }: FeaturedProductsProps) {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium products. 
          Quality meets style in every item.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="block">
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart, isInCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(null);
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.inStock) return;
    
    // If product has sizes/colors and none selected, show toast
    if ((product.sizes && product.sizes.length > 0 && !selectedSize) ||
        (product.colors && product.colors.length > 0 && !selectedColor)) {
      showToast('Please select a size and color before adding to cart', 'error');
      return;
    }
    
    setIsAddingToCart(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addToCart(product, selectedSize || undefined, selectedColor || undefined);
    setIsAddingToCart(false);
    
    showToast('Product added to cart successfully!', 'success');
  };

  const handleSizeSelect = (e: React.MouseEvent, size: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSize(size);
  };

  const handleColorSelect = (e: React.MouseEvent, color: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColor(color);
  };

  return (
    <>
      <div className="group bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          {/* Main Image */}
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center hidden">
            <span className="text-4xl">
              {product.category === 'men' ? '👔' : product.category === 'women' ? '👗' : '💄'}
            </span>
          </div>
          
          {/* Mini Image Gallery - Show 3 additional images */}
          <div className="absolute bottom-2 left-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.images.slice(1, 4).map((image, index) => (
              <div key={index} className="w-8 h-8 rounded border border-white overflow-hidden">
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 2}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300  items-center justify-center hidden">
                  <span className="text-xs">
                    {product.category === 'men' ? '👔' : product.category === 'women' ? '👗' : '💄'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button 
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary-50 transition-colors"
            >
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary-50 transition-colors"
            >
              <ShoppingCart className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Sale Badge */}
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              SALE
            </div>
          )}

          {/* Out of Stock Badge */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-black px-3 py-1 rounded-full font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <div className="text-xs text-primary-600 font-medium mb-2 uppercase tracking-wide">
            {product.category} • {product.subcategory}
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Click to view details →
          </p>
          <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl" />

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Sizes/Colors Selection */}
          {(product.sizes || product.colors) && (
            <div className="space-y-3 mb-4">
              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <p className="text-xs text-gray-600 mb-1">Size:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.slice(0, 3).map((size) => (
                      <button
                        key={size}
                        onClick={(e) => handleSizeSelect(e, size)}
                        className={`px-2 py-1 text-xs rounded border transition-colors ${
                          selectedSize === size
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <p className="text-xs text-gray-600 mb-1">Color:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.colors.slice(0, 2).map((color) => (
                      <button
                        key={color}
                        onClick={(e) => handleColorSelect(e, color)}
                        className={`px-2 py-1 text-xs rounded border transition-colors ${
                          selectedColor === color
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAddingToCart}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
              product.inStock
                ? isInCart(product.id)
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } ${isAddingToCart ? 'opacity-75 cursor-wait' : ''}`}
          >
            {isAddingToCart 
              ? 'Adding...' 
              : isInCart(product.id) 
                ? 'In Cart ✓' 
                : product.inStock 
                  ? 'Add to Cart' 
                  : 'Out of Stock'
            }
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={hideToast}
        />
      )}
    </>
  );
}
