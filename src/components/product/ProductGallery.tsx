import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
        <img 
          src={images[selectedImage]} 
          alt={productName}
          className="w-full h-full object-contain"
        />
        <button 
          onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        <button 
          onClick={() => setSelectedImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        >
          <Icon name="ChevronRight" size={24} />
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-border'
            }`}
          >
            <img 
              src={img} 
              alt={`${productName} - вид ${idx + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
