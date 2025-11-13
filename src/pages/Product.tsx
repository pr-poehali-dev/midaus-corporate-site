import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link, useParams } from 'react-router-dom';

const productsData: Record<string, {
  name: string;
  description: string;
  price: string;
  specs: Array<{ label: string; value: string }>;
  features: string[];
}> = {
  'mida-13p': {
    name: 'МИДА-13П',
    description: 'Общепромышленный датчик давления',
    price: '12 500',
    specs: [
      { label: 'Диапазон измерений', value: '0...0,1 МПа' },
      { label: 'Точность', value: '±0,25% от диапазона измерений' },
      { label: 'Выходной сигнал', value: '4...20 мА' },
      { label: 'Напряжение питания', value: '12...36 В' },
      { label: 'Температура эксплуатации', value: '-40...+85 °C' },
      { label: 'Степень защиты', value: 'IP65' },
      { label: 'Присоединение к процессу', value: 'G1/2" (М20х1,5)' },
      { label: 'Материал корпуса', value: 'Нержавеющая сталь 12Х18Н10Т' },
    ],
    features: [
      'Технология «кремний на сапфире» обеспечивает высокую точность и долговременную стабильность',
      'Широкий диапазон рабочих температур от -40 до +85°C',
      'Высокая степень защиты корпуса IP65',
      'Устойчивость к вибрационным и ударным нагрузкам',
    ],
  },
  'mida-15': {
    name: 'МИДА-15',
    description: 'Датчик давления для работы в условиях повышенной вибрации',
    price: '15 800',
    specs: [
      { label: 'Диапазон измерений', value: '0...1 МПа' },
      { label: 'Точность', value: '±0,1% от диапазона измерений' },
      { label: 'Выходной сигнал', value: '4...20 мА' },
      { label: 'Напряжение питания', value: '12...36 В' },
      { label: 'Температура эксплуатации', value: '-50...+125 °C' },
      { label: 'Степень защиты', value: 'IP67' },
      { label: 'Присоединение к процессу', value: 'G1/2" (М20х1,5)' },
      { label: 'Материал корпуса', value: 'Нержавеющая сталь 12Х18Н10Т' },
    ],
    features: [
      'Усиленная конструкция для работы в условиях вибрации до 30g',
      'Повышенная точность измерений ±0,1%',
      'Расширенный диапазон рабочих температур до +125°C',
      'Степень защиты IP67 для работы в тяжелых условиях',
    ],
  },
  'mida-12': {
    name: 'МИДА-12',
    description: 'Датчик давления для агрессивных сред',
    price: '18 200',
    specs: [
      { label: 'Диапазон измерений', value: '0...10 МПа' },
      { label: 'Точность', value: '±0,25% от диапазона измерений' },
      { label: 'Выходной сигнал', value: '4...20 мА' },
      { label: 'Напряжение питания', value: '12...36 В' },
      { label: 'Температура эксплуатации', value: '-60...+150 °C' },
      { label: 'Степень защиты', value: 'IP68' },
      { label: 'Присоединение к процессу', value: 'G1/2" (М20х1,5)' },
      { label: 'Материал корпуса', value: 'Титан / Нержавеющая сталь' },
    ],
    features: [
      'Специальное покрытие для защиты от агрессивных химических сред',
      'Корпус из титана или нержавеющей стали',
      'Работа при экстремальных температурах от -60 до +150°C',
      'Максимальная степень защиты IP68 для подводного применения',
    ],
  },
};

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = productsData[id || 'mida-13p'];

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  const productImages: Record<string, string[]> = {
    'mida-13p': [
      'https://cdn.poehali.dev/files/a3f1681a-52dc-44d0-8385-7592e1e0db2e.JPG',
      'https://cdn.poehali.dev/files/a3f1681a-52dc-44d0-8385-7592e1e0db2e.JPG',
      'https://cdn.poehali.dev/files/a3f1681a-52dc-44d0-8385-7592e1e0db2e.JPG',
    ],
    'mida-15': [
      'https://cdn.poehali.dev/files/a3f1681a-52dc-44d0-8385-7592e1e0db2e.JPG',
      'https://cdn.poehali.dev/files/a3f1681a-52dc-44d0-8385-7592e1e0db2e.JPG',
    ],
    'mida-12': [
      'https://cdn.poehali.dev/files/a3f1681a-52dc-44d0-8385-7592e1e0db2e.JPG',
      'https://cdn.poehali.dev/files/a3f1681a-52dc-44d0-8385-7592e1e0db2e.JPG',
    ],
  };

  const images = productImages[id || 'mida-13p'] || productImages['mida-13p'];

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    console.log('Добавлено в корзину:', {
      product,
      quantity,
    });
    alert('Товар добавлен в корзину');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/products" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            <Icon name="arrow-left" className="w-4 h-4" />
            <span>Назад к каталогу</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-600">{product.price} ₽</span>
              <span className="text-gray-500">за единицу</span>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium">Количество:</label>
                    <Input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-24"
                    />
                  </div>

                  <Button onClick={handleAddToCart} className="w-full" size="lg">
                    <Icon name="shopping-cart" className="w-5 h-5 mr-2" />
                    Добавить в корзину
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Icon name="heart" className="w-5 h-5 mr-2" />
                      В избранное
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="share-2" className="w-5 h-5 mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-green-600">
                    <Icon name="check-circle" className="w-5 h-5" />
                    <span>В наличии</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="truck" className="w-5 h-5" />
                    <span>Доставка по всей России</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="shield-check" className="w-5 h-5" />
                    <span>Гарантия 24 месяца</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'description'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Описание
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'specs'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Технические характеристики
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'features'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Особенности
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}. Датчик разработан для измерения давления в различных промышленных применениях.
                  Высокая точность и надежность обеспечивают стабильную работу в широком диапазоне условий эксплуатации.
                </p>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm text-gray-500">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="check-circle" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
