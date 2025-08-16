export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 border-4 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <h1 className="text-xl md:text-xl lg:text-4xl font-bold leading-tight">
              Discover Your
              <span className="block text-primary-200">Perfect Style</span>
            </h1>

            <p className="text-sm text-primary-100 max-w-lg">
              Explore our curated collection of fashion and beauty products.
              From trendy clothing to premium beauty essentials, find everything
              you need to express your unique style.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="reusable-card ">
                  <div className="reusable-icon">
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop"
                      alt="Men's Fashion"
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <h3 className="font-semibold">Men's Fashion</h3>
                  <p className="text-sm text-primary-200">Up to 40% off</p>
                </div>
                <div className="reusable-card ">
                  <div className="reusable-icon">
                    <img
                      src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop"
                      alt="Beauty Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Beauty Products</h3>
                  <p className="text-sm text-primary-200">New arrivals</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="reusable-card ">
                  <div className="reusable-icon">
                    <img
                      src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop"
                      alt="Women's Fashion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Women's Fashion</h3>
                  <p className="text-sm text-primary-200">Trending now</p>
                </div>
                <div className="reusable-card ">
                  <div className="reusable-icon">
                    <img
                      src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=200&fit=crop"
                      alt="Flash Sale"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Flash Sale</h3>
                  <p className="text-sm text-primary-200">Limited time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
