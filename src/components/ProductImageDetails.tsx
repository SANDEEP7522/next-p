'use client';

import { useState } from 'react';
import { Camera, Eye, Info } from 'lucide-react';

interface ProductImageDetailsProps {
  images: string[];
  productName: string;
  category: string;
}

export default function ProductImageDetails({ images, productName, category }: ProductImageDetailsProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const imageDetails = [
    {
      angle: 'Front View',
      description: 'Complete front perspective showing the main design and features',
      features: ['Main design elements', 'Color and pattern details', 'Overall silhouette']
    },
    {
      angle: 'Back View', 
      description: 'Rear perspective highlighting back design and fit',
      features: ['Back design details', 'Fit and drape', 'Closure mechanisms']
    },
    {
      angle: 'Side View',
      description: 'Profile view showing depth and dimensional details',
      features: ['Side profile', 'Depth and thickness', 'Proportional balance']
    },
    {
      angle: 'Detail View',
      description: 'Close-up of specific features and craftsmanship',
      features: ['Stitching quality', 'Material texture', 'Hardware details']
    },
    {
      angle: 'Close-up',
      description: 'Intimate view of fabric texture and fine details',
      features: ['Fabric weave', 'Color accuracy', 'Surface finish']
    },
    {
      angle: 'Lifestyle',
      description: 'Product in use or styled context',
      features: ['Wearability', 'Style versatility', 'Real-world appearance']
    }
  ];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'men': return '👔';
      case 'women': return '👗';
      case 'beauty': return '💄';
      default: return '🛍️';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <Camera className="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Product Images & Details</h3>
          <p className="text-sm text-gray-600">Explore {productName} from every angle</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Navigation */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900 flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>Image Gallery</span>
          </h4>
          
          <div className="grid grid-cols-3 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === selectedImageIndex 
                    ? 'border-primary-500 ring-2 ring-primary-200' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${productName} - ${imageDetails[index].angle}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center">
                  <span className="text-lg">
                    {getCategoryIcon(category)}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Current Image Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Info className="w-4 h-4 text-primary-600" />
              <span className="font-medium text-gray-900">
                {imageDetails[selectedImageIndex].angle}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {imageDetails[selectedImageIndex].description}
            </p>
          </div>
        </div>

        {/* Image Details */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Image Details</h4>
          
          <div className="space-y-3">
            {imageDetails.map((detail, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                  index === selectedImageIndex
                    ? 'border-primary-300 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    index === selectedImageIndex ? 'bg-primary-500' : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <h5 className={`font-medium text-sm ${
                      index === selectedImageIndex ? 'text-primary-700' : 'text-gray-900'
                    }`}>
                      {detail.angle}
                    </h5>
                    <p className={`text-xs mt-1 ${
                      index === selectedImageIndex ? 'text-primary-600' : 'text-gray-600'
                    }`}>
                      {detail.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mt-2">
                      <ul className="space-y-1">
                        {detail.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              index === selectedImageIndex ? 'bg-primary-400' : 'bg-gray-400'
                            }`} />
                            <span className={`text-xs ${
                              index === selectedImageIndex ? 'text-primary-600' : 'text-gray-500'
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Statistics */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary-600">{images.length}</p>
                <p className="text-xs text-gray-600">Total Images</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-600">6</p>
                <p className="text-xs text-gray-600">Viewing Angles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
