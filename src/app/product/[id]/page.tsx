'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, Share2, Eye } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import Toast from '@/components/Toast';
import ImageGallery from '@/components/ImageGallery';
import ProductImageDetails from '@/components/ProductImageDetails';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/" className="hover:text-gray-700 transition-colors">
                Products
              </Link>
              <span>/</span>
              <Link href={`/product/${product.id}`} className="text-gray-900 font-medium">
                {product.name}
              </Link>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image Section */}
            <div className="space-y-6">
              {/* Image Gallery */}
              <ImageGallery images={product.images} productName={product.name} />
              
              {/* Quick Actions */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-white border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 hover:border-primary-300 transition-all duration-200">
                  <Heart className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Add to Wishlist</span>
                </button>
                <button className="flex-1 bg-white border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 hover:border-primary-300 transition-all duration-200">
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Share</span>
                </button>
              </div>

              {/* Product Features */}
              <div className="bg-white rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">Product Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Free Shipping</p>
                      <p className="text-sm text-gray-600">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Secure Payment</p>
                      <p className="text-sm text-gray-600">100% secure checkout</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Easy Returns</p>
                      <p className="text-sm text-gray-600">30 day return policy</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Quality Assured</p>
                      <p className="text-sm text-gray-600">Premium materials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info Section */}
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Product Image Details Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductImageDetails images={product.images} productName={product.name} category={product.category} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProductInfo({ product }: { product: any }) {
  const { addToCart, isInCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(null);
  };

  const handleAddToCart = async () => {
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
    
    // Add multiple quantities
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize || undefined, selectedColor || undefined);
    }
    
    setIsAddingToCart(false);
    
    showToast(`Added ${quantity} item(s) to cart!`, 'success');
  };

  return (
    <>
      <div className="space-y-6">
        {/* Category & Breadcrumb */}
        <div className="text-sm text-primary-600 font-medium uppercase tracking-wide">
          {product.category} • {product.subcategory}
        </div>

        {/* Product Name */}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600">({product.reviews} reviews)</span>
          <span className="text-sm text-gray-500">• Verified Purchase</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-2xl text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Description */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Quantity</h3>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              -
            </button>
            <span className="w-16 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Sizes */}
        {product.sizes && (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Select Size</h3>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border-2 rounded-lg transition-all duration-200 font-medium ${
                    selectedSize === size
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-primary-500 hover:bg-primary-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors */}
        {product.colors && (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Select Color</h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color: string) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border-2 rounded-lg transition-all duration-200 font-medium ${
                    selectedColor === color
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-primary-500 hover:bg-primary-50'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <div className="space-y-4 pt-4">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAddingToCart}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
              product.inStock
                ? isInCart(product.id)
                  ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } ${isAddingToCart ? 'opacity-75 cursor-wait' : ''}`}
          >
            {isAddingToCart 
              ? 'Adding to Cart...' 
              : isInCart(product.id) 
                ? 'In Cart ✓' 
                : product.inStock 
                  ? 'Add to Cart' 
                  : 'Out of Stock'
            }
          </button>
          
          {!product.inStock && (
            <p className="text-red-600 text-center font-medium">This item is currently out of stock</p>
          )}

          {product.inStock && (
            <p className="text-sm text-gray-600 text-center">
              Usually ships within 2-3 business days
            </p>
          )}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-gray-900">Product Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">SKU:</span>
              <span className="ml-2 font-medium">{product.id}</span>
            </div>
            <div>
              <span className="text-gray-600">Category:</span>
              <span className="ml-2 font-medium capitalize">{product.category}</span>
            </div>
            <div>
              <span className="text-gray-600">Subcategory:</span>
              <span className="ml-2 font-medium capitalize">{product.subcategory}</span>
            </div>
            <div>
              <span className="text-gray-600">Availability:</span>
              <span className={`ml-2 font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
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
