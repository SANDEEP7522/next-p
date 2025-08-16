export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "men" | "women" | "beauty";
  subcategory: string;
  image: string; // Main image (kept for backward compatibility)
  images: string[]; // Array of 6 images from different angles
  rating: number;
  reviews: number;
  description: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  // Men's Clothing
  {
    id: "1",
    name: "Classic Fit Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    category: "men",
    subcategory: "clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.5,
    reviews: 128,
    description:
      "Premium cotton t-shirt with a comfortable fit, perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Gray"],
    inStock: true,
  },
  {
    id: "2",
    name: "Slim Fit Denim Jeans",
    price: 79.99,
    originalPrice: 99.99,
    category: "men",
    subcategory: "clothing",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.3,
    reviews: 89,
    description:
      "Modern slim fit jeans with stretch denim for maximum comfort and style.",
    sizes: ["30x32", "32x32", "34x32", "36x32"],
    colors: ["Blue", "Black", "Gray"],
    inStock: true,
  },
  {
    id: "3",
    name: "Casual Blazer Jacket",
    price: 129.99,
    category: "men",
    subcategory: "clothing",
    image: "https://m.media-amazon.com/images/I/818LFVAQSCL._UY1100_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/818LFVAQSCL._UY1100_.jpg", // Front view
      "https://m.media-amazon.com/images/I/410egNoZ8rL._SY350_.jpg", // Back view
      "https://m.media-amazon.com/images/I/41Zbx5LnDML._SY1000_.jpg", // Side view
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjG88Okxy6lAtrtfYg88kvI0UYrVU7u9qJ5EsRyUPRsWN7wIcy-SOEp1HQMdRsaVem-L0&usqp=CAU", // Detail view
      "https://images.unsplash.com/photo-1593030761757-71cae45d48e7?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.7,
    reviews: 56,
    description:
      "Versatile casual blazer perfect for both office and evening wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal", "Brown"],
    inStock: true,
  },
  {
    id: "4",
    name: "Polo Shirt Collection",
    price: 49.99,
    category: "men",
    subcategory: "clothing",
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.4,
    reviews: 102,
    description: "Classic polo shirts made from breathable pique cotton.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Navy", "Red", "Green"],
    inStock: true,
  },

  // Women's Clothing
  {
    id: "5",
    name: "Floral Summer Dress",
    price: 89.99,
    originalPrice: 119.99,
    category: "women",
    subcategory: "clothing",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.6,
    reviews: 156,
    description:
      "Beautiful floral print summer dress perfect for warm weather occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue Floral", "Pink Floral", "Yellow Floral"],
    inStock: true,
  },
  {
    id: "6",
    name: "High-Waist Skinny Jeans",
    price: 69.99,
    category: "women",
    subcategory: "clothing",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.4,
    reviews: 134,
    description: "Flattering high-waist skinny jeans with stretch denim.",
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Blue", "Black", "White"],
    inStock: true,
  },
  {
    id: "7",
    name: "Silk Blouse",
    price: 99.99,
    category: "women",
    subcategory: "clothing",
    image:
      "https://peelidori.com/media/catalog/product/cache/418514c009cdcb6e46fdeb6bc8de530f/d/a/daj02837.jpg",
    images: [
      "https://peelidori.com/media/catalog/product/cache/418514c009cdcb6e46fdeb6bc8de530f/d/a/daj02837.jpg", // Front view
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcREMvd1Z4Lrri2lS8ArKUo0EawXsu67jb79e9Hrz6dYWqdVguDrbFnbCqX6MnQ-vHpIY&usqp=CAU", // Back view
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkO6VV9E8_LSloWlzObAXX33384vQOjqHkV6wJg_x7xBGo27tal7A3pjwrJC6rdBJ0AY0&usqp=CAU", // Side view
      "https://peelidori.com/media/catalog/product/cache/418514c009cdcb6e46fdeb6bc8de530f/d/a/daj02858_2.jpg", // Detail view
      "https://images.unsplash.com/photo-1564257631407-3deb25f9c2e8?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.8,
    reviews: 78,
    description:
      "Elegant silk blouse with a modern cut, perfect for professional settings.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black", "Blush", "Navy"],
    inStock: true,
  },
  {
    id: "8",
    name: "Knit Sweater",
    price: 59.99,
    originalPrice: 79.99,
    category: "women",
    subcategory: "clothing",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1564257631407-3deb25f9c2e8?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1564257631407-3deb25f9c2e8?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1564257631407-3deb25f9c2e8?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.5,
    reviews: 92,
    description: "Soft knit sweater perfect for layering in cooler weather.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Gray", "Pink", "Blue"],
    inStock: true,
  },

  // Beauty Products
  {
    id: "9",
    name: "Hydrating Face Serum",
    price: 34.99,
    category: "beauty",
    subcategory: "skincare",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.7,
    reviews: 203,
    description:
      "Intensive hydrating serum with hyaluronic acid for plump, glowing skin.",
    colors: ["Clear"],
    inStock: true,
  },
  {
    id: "10",
    name: "Matte Liquid Lipstick",
    price: 24.99,
    category: "beauty",
    subcategory: "makeup",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1522338140263-f46f5913618a?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1522338140263-f46f5913618a?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1522338140263-f46f5913618a?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.6,
    reviews: 167,
    description:
      "Long-lasting matte liquid lipstick with intense color payoff.",
    colors: ["Red", "Pink", "Nude", "Berry", "Coral"],
    inStock: true,
  },
  {
    id: "11",
    name: "Natural Bristle Hairbrush",
    price: 19.99,
    category: "beauty",
    subcategory: "haircare",
    image:
      "https://m.media-amazon.com/images/I/91ezEu3CUxL._UF1000,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/91ezEu3CUxL._UF1000,1000_QL80_.jpg", // Front view
      "https://m.media-amazon.com/images/I/71Vy-yBzxfL._UF894,1000_QL80_.jpg", // Back view
      "https://m.media-amazon.com/images/I/71HjaZ9QC8L._UF1000,1000_QL80_.jpg", // Side view
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1522338140263-f46f5913618a?w=500&h=500&fit=crop", // Close-up
      "https://m.media-amazon.com/images/I/91ezEu3CUxL._UF1000,1000_QL80_.jpg", // Lifestyle
    ],
    rating: 4.4,
    reviews: 89,
    description:
      "Gentle natural bristle hairbrush that promotes healthy hair and scalp.",
    colors: ["Brown"],
    inStock: true,
  },
  {
    id: "12",
    name: "Vitamin C Brightening Cream",
    price: 44.99,
    originalPrice: 59.99,
    category: "beauty",
    subcategory: "skincare",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.8,
    reviews: 145,
    description:
      "Brightening cream with Vitamin C to even skin tone and reduce dark spots.",
    colors: ["White"],
    inStock: true,
  },

  // Additional Products
  {
    id: "13",
    name: "Classic Oxford Shirt",
    price: 59.99,
    category: "men",
    subcategory: "clothing",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1593030761757-71cae45d48e7?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1593030761757-71cae45d48e7?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1593030761757-71cae45d48e7?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.6,
    reviews: 78,
    description:
      "Timeless Oxford shirt perfect for both casual and formal occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Pink"],
    inStock: true,
  },
  {
    id: "14",
    name: "Summer Maxi Dress",
    price: 79.99,
    originalPrice: 99.99,
    category: "women",
    subcategory: "clothing",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.7,
    reviews: 112,
    description:
      "Elegant maxi dress perfect for summer events and beach vacations.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Blue", "Pink"],
    inStock: true,
  },
  {
    id: "15",
    name: "Anti-Aging Night Cream",
    price: 54.99,
    category: "beauty",
    subcategory: "skincare",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Front view
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Back view
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Side view
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Detail view
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", // Close-up
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop", // Lifestyle
    ],
    rating: 4.9,
    reviews: 89,
    description: "Advanced anti-aging night cream with retinol and peptides.",
    colors: ["White"],
    inStock: true,
  },
];

export const categories = [
  { id: "men", name: "Men's Fashion", icon: "👔" },
  { id: "women", name: "Women's Fashion", icon: "👗" },
  { id: "beauty", name: "Beauty & Care", icon: "💄" },
];

export const subcategories = {
  men: ["Clothing", "Accessories", "Shoes"],
  women: ["Clothing", "Accessories", "Shoes"],
  beauty: ["Skincare", "Makeup", "Haircare", "Fragrances"],
};
