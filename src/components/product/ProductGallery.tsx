import { Card, CardContent } from '@/components/ui/card';

interface ProductGalleryProps {
  images: string[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
  productId: string;
}

export default function ProductGallery({ images, selectedImage, setSelectedImage, productId }: ProductGalleryProps) {
  return (
    <div>
      <div className="bg-white rounded-lg p-8 mb-4 border border-border">
        <img 
          src={images[selectedImage]} 
          alt="МИДА-ДИ-13П-01" 
          className="w-full h-auto object-contain max-h-96"
        />
      </div>
      <div className="flex gap-2 mb-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`border-2 rounded p-2 ${
              selectedImage === index ? 'border-primary' : 'border-border'
            }`}
          >
            <img src={img} alt={`Вид ${index + 1}`} className="w-16 h-16 object-contain" />
          </button>
        ))}
      </div>

      {productId === 'mida-13p' && (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://rutube.ru/play/embed/869b65d10a3dcb9242d5d78a78a442c3"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-4 bg-secondary">
              <h4 className="font-semibold mb-1">Видеообзор МИДА-13П</h4>
              <p className="text-sm text-muted-foreground">Подробный обзор датчика и его возможностей</p>
            </div>
          </CardContent>
        </Card>
      )}

      {productId === 'mida-15' && (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://rutube.ru/play/embed/e041fefdb90eb03e2785855147aac905"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-4 bg-secondary">
              <h4 className="font-semibold mb-1">Видеообзор МИДА-15</h4>
              <p className="text-sm text-muted-foreground">Подробный обзор датчика и его возможностей</p>
            </div>
          </CardContent>
        </Card>
      )}

      {productId === 'mida-12' && (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://rutube.ru/play/embed/bca0ffbb508aff480d9d5b71b5f61c0c"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-4 bg-secondary">
              <h4 className="font-semibold mb-1">Видеообзор МИДА-12П</h4>
              <p className="text-sm text-muted-foreground">Подробный обзор датчика и его возможностей</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
