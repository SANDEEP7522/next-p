# StyleHub - E-commerce Website

A modern, responsive e-commerce website built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful UI with dummy products for men's and women's fashion, as well as beauty products.

## 🚀 Features

- **Modern Design**: Clean, responsive design with beautiful UI components
- **Category Filtering**: Filter products by men's fashion, women's fashion, and beauty
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Cards**: Interactive product cards with ratings, prices, and quick actions
- **Search Functionality**: Search bar for finding products
- **Shopping Cart**: Cart icon with item count (UI only)
- **Wishlist**: Heart icon for favorite products (UI only)

## 🛍️ Product Categories

### Men's Fashion
- Classic Fit Cotton T-Shirts
- Slim Fit Denim Jeans
- Casual Blazer Jackets
- Polo Shirt Collections

### Women's Fashion
- Floral Summer Dresses
- High-Waist Skinny Jeans
- Silk Blouses
- Knit Sweaters

### Beauty Products
- Hydrating Face Serums
- Matte Liquid Lipsticks
- Natural Bristle Hairbrushes
- Vitamin C Brightening Creams

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript ans Js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Responsive Design**: Mobile-first approach

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd e-commerse
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── CategorySection.tsx  # Category filtering
│   ├── FeaturedProducts.tsx # Product grid
│   └── Footer.tsx           # Footer component
└── data/
    └── products.ts          # Product data and types
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `primary` color palette.

### Products
Add or modify products in `src/data/products.ts`. Each product should follow the `Product` interface.

### Styling
Modify component styles in their respective `.tsx` files using Tailwind CSS classes.

## 🔧 Development

### Adding New Components
1. Create a new `.tsx` file in the `src/components/` directory
2. Export the component as default
3. Import and use it in your pages

### Adding New Products
1. Open `src/data/products.ts`
2. Add new product objects following the existing structure
3. Products will automatically appear in the grid

### Styling Changes
- Use Tailwind CSS utility classes for styling
- Custom CSS can be added in `src/app/globals.css`
- Component-specific styles can be added using Tailwind's `@apply` directive

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Design inspiration from modern e-commerce platforms

---

**Note**: This is a demo project with dummy data. In a production environment, you would integrate with a real backend API, database, and payment processing system.
