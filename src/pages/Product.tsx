import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

const pressureRanges: Record<string, string[]> = {
  'ДИ': ['0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.5', '4', '6', '10', '16', '25', '40', '60', '100', '160'],
  'ДА': ['0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.5', '4', '6', '10'],
  'ДВ': ['0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1'],
  'ДИВ': ['0.002', '0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.4'],
};

const lowerPressureRanges: Record<string, string[]> = {
  'ДА': ['0', '0.01', '0.016', '0.025', '0.04', '0.06', '0.08'],
  'ДИВ': ['0.002', '0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1'],
};

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const [config, setConfig] = useState({
    pressureType: '',
    unit: '',
    upperLimit: '',
    upperLimitCustom: '',
    lowerLimit: '',
    lowerLimitCustom: '',
    accuracy: '',
  });

  const [showUpperCustomInput, setShowUpperCustomInput] = useState(false);
  const [showLowerCustomInput, setShowLowerCustomInput] = useState(false);

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

  const handleConfigChange = (field: string, value: string) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleAddToCart = () => {
    console.log('Добавлено в корзину:', {
      product,
      quantity,
      config,
    });
    alert('Товар добавлен в корзину');
  };

  const generateArticleNumber = () => {
    const parts = [];
    parts.push('МИДА-13П');
    if (config.pressureType) parts.push(config.pressureType);
    if (config.upperLimit || config.upperLimitCustom) {
      parts.push(config.upperLimit === 'custom' ? config.upperLimitCustom : config.upperLimit);
    }
    if (config.unit) parts.push(config.unit);
    if (config.accuracy) parts.push(config.accuracy);
    return parts.join('-');
  };

  const isConfigValid = () => {
    return (
      config.pressureType &&
      config.unit &&
      (config.upperLimit || config.upperLimitCustom) &&
      config.accuracy &&
      (config.pressureType === 'ДА' || config.pressureType === 'ДИВ' ? config.lowerLimit || config.lowerLimitCustom : true)
    );
  };

  useEffect(() => {
    setConfig({
      pressureType: '',
      unit: '',
      upperLimit: '',
      upperLimitCustom: '',
      lowerLimit: '',
      lowerLimitCustom: '',
      accuracy: '',
    });
    setShowUpperCustomInput(false);
    setShowLowerCustomInput(false);
  }, [id]);

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

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{product.price} ₽</div>
              <div className="text-sm text-gray-600">Цена за единицу</div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <Label htmlFor="quantity">Количество</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full"
                />
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full mb-4"
              size="lg"
            >
              <Icon name="shopping-cart" className="w-5 h-5 mr-2" />
              Добавить в корзину
            </Button>

            <Button 
              variant="outline"
              className="w-full"
              size="lg"
            >
              <Icon name="phone" className="w-5 h-5 mr-2" />
              Запросить консультацию
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <div className="flex">
              <button
                className={`px-6 py-4 font-medium ${
                  activeTab === 'description'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Описание
              </button>
              <button
                className={`px-6 py-4 font-medium ${
                  activeTab === 'specs'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('specs')}
              >
                Характеристики
              </button>
              <button
                className={`px-6 py-4 font-medium ${
                  activeTab === 'configurator'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('configurator')}
              >
                Конфигуратор
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Описание продукта</h2>
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                <h3 className="text-xl font-semibold mb-3">Особенности</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specs' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Технические характеристики</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="border-b pb-3">
                      <div className="text-sm text-gray-600 mb-1">{spec.label}</div>
                      <div className="font-medium">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'configurator' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Конфигуратор изделия</h2>
                <p className="text-gray-600 mb-6">
                  Настройте параметры датчика согласно вашим требованиям
                </p>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="pressureType">Тип давления</Label>
                    <Select
                      value={config.pressureType}
                      onValueChange={(value) => {
                        handleConfigChange('pressureType', value);
                        handleConfigChange('upperLimit', '');
                        handleConfigChange('lowerLimit', '');
                        setShowUpperCustomInput(false);
                        setShowLowerCustomInput(false);
                      }}
                    >
                      <SelectTrigger id="pressureType">
                        <SelectValue placeholder="Выберите тип давления" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ДИ">ДИ - Избыточное давление</SelectItem>
                        <SelectItem value="ДА">ДА - Абсолютное давление</SelectItem>
                        <SelectItem value="ДВ">ДВ - Вакуумметрическое давление</SelectItem>
                        <SelectItem value="ДИВ">ДИВ - Избыточно-вакуумметрическое давление</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {config.pressureType && (
                    <div>
                      <Label htmlFor="unit">Единица измерения</Label>
                      <Select
                        value={config.unit}
                        onValueChange={(value) => handleConfigChange('unit', value)}
                      >
                        <SelectTrigger id="unit">
                          <SelectValue placeholder="Выберите единицу измерения" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="МПа">МПа</SelectItem>
                          <SelectItem value="кПа">кПа</SelectItem>
                          <SelectItem value="кгс/см²">кгс/см²</SelectItem>
                          <SelectItem value="бар">бар</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {(config.pressureType === 'ДА' || config.pressureType === 'ДИВ') && (
                    <div>
                      <Label htmlFor="lowerLimit">Нижний предел измерения</Label>
                      <Select
                        value={config.lowerLimit}
                        onValueChange={(value) => {
                          handleConfigChange('lowerLimit', value);
                          setShowLowerCustomInput(value === 'custom');
                        }}
                      >
                        <SelectTrigger id="lowerLimit">
                          <SelectValue placeholder="Выберите нижний предел" />
                        </SelectTrigger>
                        <SelectContent>
                          {lowerPressureRanges[config.pressureType]?.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range} {config.unit || 'МПа'}
                            </SelectItem>
                          ))}
                          <SelectItem value="custom">Другое значение</SelectItem>
                        </SelectContent>
                      </Select>
                      {showLowerCustomInput && (
                        <Input
                          placeholder="Введите нижний предел"
                          value={config.lowerLimitCustom}
                          onChange={(e) => handleConfigChange('lowerLimitCustom', e.target.value)}
                          className="mt-2"
                        />
                      )}
                    </div>
                  )}

                  {config.pressureType && (
                    <div>
                      <Label htmlFor="upperLimit">Верхний предел измерения</Label>
                      <Select
                        value={config.upperLimit}
                        onValueChange={(value) => {
                          handleConfigChange('upperLimit', value);
                          setShowUpperCustomInput(value === 'custom');
                        }}
                      >
                        <SelectTrigger id="upperLimit">
                          <SelectValue placeholder="Выберите верхний предел" />
                        </SelectTrigger>
                        <SelectContent>
                          {pressureRanges[config.pressureType]?.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range} {config.unit || 'МПа'}
                            </SelectItem>
                          ))}
                          <SelectItem value="custom">Другое значение</SelectItem>
                        </SelectContent>
                      </Select>
                      {showUpperCustomInput && (
                        <Input
                          placeholder="Введите верхний предел"
                          value={config.upperLimitCustom}
                          onChange={(e) => handleConfigChange('upperLimitCustom', e.target.value)}
                          className="mt-2"
                        />
                      )}
                    </div>
                  )}

                  <div>
                    <Label htmlFor="accuracy">Класс точности</Label>
                    <Select
                      value={config.accuracy}
                      onValueChange={(value) => handleConfigChange('accuracy', value)}
                    >
                      <SelectTrigger id="accuracy">
                        <SelectValue placeholder="Выберите класс точности" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0.1">0.1%</SelectItem>
                        <SelectItem value="0.25">0.25%</SelectItem>
                        <SelectItem value="0.5">0.5%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {isConfigValid() && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">Артикул изделия:</h3>
                        <p className="text-lg font-mono">{generateArticleNumber()}</p>
                      </CardContent>
                    </Card>
                  )}

                  <div>
                    <Label htmlFor="comments">Дополнительные пожелания</Label>
                    <Textarea
                      id="comments"
                      placeholder="Укажите дополнительные требования к изделию"
                      rows={4}
                    />
                  </div>

                  <Button 
                    className="w-full"
                    size="lg"
                    disabled={!isConfigValid()}
                  >
                    Отправить запрос
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
