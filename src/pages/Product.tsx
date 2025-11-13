import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

interface ConfiguratorState {
  pressureType: string;
  pressureUnit: string;
  pressureMin: string;
  pressureMax: string;
  accuracyClass: string;
  executionType: string;
  mechanicalConnection: string;
  electricalConnection: string;
  explosionProtection: string;
  membraneMaterial: string;
  climateExecution: string;
}

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showConfigurator, setShowConfigurator] = useState(false);
  
  const [config, setConfig] = useState<ConfiguratorState>({
    pressureType: '',
    pressureUnit: '',
    pressureMin: '',
    pressureMax: '',
    accuracyClass: '',
    executionType: '',
    mechanicalConnection: '',
    electricalConnection: '',
    explosionProtection: '',
    membraneMaterial: '',
    climateExecution: '',
  });

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
    if (id === 'mida-13p' && showConfigurator) {
      const missingFields = [];
      if (!config.pressureType) missingFields.push('Тип давления');
      if (!config.pressureUnit) missingFields.push('Единица измерения');
      if (!config.pressureMin) missingFields.push('Нижний предел');
      if (!config.pressureMax) missingFields.push('Верхний предел');
      if (!config.accuracyClass) missingFields.push('Класс точности');
      if (!config.executionType) missingFields.push('Исполнение');
      if (!config.mechanicalConnection) missingFields.push('Механическое присоединение');
      if (!config.electricalConnection) missingFields.push('Электрическое присоединение');
      if (!config.explosionProtection) missingFields.push('Взрывозащита');
      if (!config.membraneMaterial) missingFields.push('Материал мембраны');
      if (!config.climateExecution) missingFields.push('Климатическое исполнение');

      if (missingFields.length > 0) {
        alert(`Заполните все обязательные поля конфигурации:\n${missingFields.join('\n')}`);
        return;
      }
    }

    console.log('Добавлено в корзину:', {
      product,
      quantity,
      config: showConfigurator ? config : undefined,
    });
    alert('Товар добавлен в корзину');
  };

  const generateArticle = () => {
    if (!config.pressureType || !config.accuracyClass || !config.executionType) {
      return 'МИДА-13П-...';
    }

    const parts = ['МИДА-13П'];
    
    // Тип давления
    parts.push(config.pressureType);
    
    // Класс точности
    parts.push(config.accuracyClass);
    
    // Исполнение
    parts.push(config.executionType);
    
    // Присоединение
    if (config.mechanicalConnection) {
      parts.push(config.mechanicalConnection);
    }
    
    // Электрическое присоединение
    if (config.electricalConnection) {
      parts.push(config.electricalConnection);
    }
    
    // Взрывозащита
    if (config.explosionProtection && config.explosionProtection !== 'none') {
      parts.push(config.explosionProtection);
    }
    
    // Материал мембраны
    if (config.membraneMaterial && config.membraneMaterial !== 'standard') {
      parts.push(config.membraneMaterial);
    }
    
    // Климатическое исполнение
    if (config.climateExecution) {
      parts.push(config.climateExecution);
    }

    return parts.join('-');
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

            {id === 'mida-13p' && (
              <Card>
                <CardContent className="pt-6">
                  <Button 
                    onClick={() => setShowConfigurator(!showConfigurator)} 
                    variant="outline" 
                    className="w-full"
                  >
                    <Icon name="settings" className="w-5 h-5 mr-2" />
                    {showConfigurator ? 'Скрыть конфигуратор' : 'Настроить конфигурацию'}
                  </Button>
                </CardContent>
              </Card>
            )}

            {id === 'mida-13p' && showConfigurator && (
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Конфигурация датчика</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pressureType">Тип давления *</Label>
                      <Select value={config.pressureType} onValueChange={(value) => setConfig({...config, pressureType: value})}>
                        <SelectTrigger id="pressureType">
                          <SelectValue placeholder="Выберите тип давления" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ДИ">ДИ - Избыточное давление</SelectItem>
                          <SelectItem value="ДА">ДА - Абсолютное давление</SelectItem>
                          <SelectItem value="ДВ">ДВ - Вакуумметрическое давление</SelectItem>
                          <SelectItem value="ДИВ">ДИВ - Избыточное-вакуумметрическое давление</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pressureUnit">Единица измерения *</Label>
                      <Select value={config.pressureUnit} onValueChange={(value) => setConfig({...config, pressureUnit: value})}>
                        <SelectTrigger id="pressureUnit">
                          <SelectValue placeholder="Выберите единицу измерения" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kPa">кПа (килопаскаль)</SelectItem>
                          <SelectItem value="MPa">МПа (мегапаскаль)</SelectItem>
                          <SelectItem value="bar">бар</SelectItem>
                          <SelectItem value="kgf/cm2">кгс/см² (техническая атмосфера)</SelectItem>
                          <SelectItem value="mmHg">мм рт. ст.</SelectItem>
                          <SelectItem value="mmH2O">мм вод. ст.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pressureMin">Нижний предел *</Label>
                        <Input 
                          id="pressureMin"
                          type="number"
                          placeholder="0"
                          value={config.pressureMin}
                          onChange={(e) => setConfig({...config, pressureMin: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pressureMax">Верхний предел *</Label>
                        <Input 
                          id="pressureMax"
                          type="number"
                          placeholder="100"
                          value={config.pressureMax}
                          onChange={(e) => setConfig({...config, pressureMax: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accuracyClass">Класс точности *</Label>
                      <Select value={config.accuracyClass} onValueChange={(value) => setConfig({...config, accuracyClass: value})}>
                        <SelectTrigger id="accuracyClass">
                          <SelectValue placeholder="Выберите класс точности" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0.1">0,1% (высокая точность)</SelectItem>
                          <SelectItem value="0.25">0,25% (стандарт)</SelectItem>
                          <SelectItem value="0.5">0,5% (базовая)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="executionType">Исполнение *</Label>
                      <Select value={config.executionType} onValueChange={(value) => setConfig({...config, executionType: value})}>
                        <SelectTrigger id="executionType">
                          <SelectValue placeholder="Выберите исполнение" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="std">Стандартное</SelectItem>
                          <SelectItem value="corr">Коррозионностойкое</SelectItem>
                          <SelectItem value="vibro">Виброустойчивое</SelectItem>
                          <SelectItem value="high-temp">Высокотемпературное</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mechanicalConnection">Механическое присоединение *</Label>
                      <Select value={config.mechanicalConnection} onValueChange={(value) => setConfig({...config, mechanicalConnection: value})}>
                        <SelectTrigger id="mechanicalConnection">
                          <SelectValue placeholder="Выберите присоединение" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="G1/2">G1/2" (внутренняя резьба)</SelectItem>
                          <SelectItem value="M20x1.5">М20х1,5 (метрическая резьба)</SelectItem>
                          <SelectItem value="G1/4">G1/4" (внутренняя резьба)</SelectItem>
                          <SelectItem value="NPT1/2">NPT1/2" (коническая резьба)</SelectItem>
                          <SelectItem value="flange">Фланцевое соединение</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="electricalConnection">Электрическое присоединение *</Label>
                      <Select value={config.electricalConnection} onValueChange={(value) => setConfig({...config, electricalConnection: value})}>
                        <SelectTrigger id="electricalConnection">
                          <SelectValue placeholder="Выберите тип присоединения" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cable">Кабельный ввод (М12)</SelectItem>
                          <SelectItem value="cable-m20">Кабельный ввод (М20)</SelectItem>
                          <SelectItem value="connector">Разъем DIN 43650</SelectItem>
                          <SelectItem value="connector-m12">Разъем M12</SelectItem>
                          <SelectItem value="terminal">Клеммная колодка</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="explosionProtection">Взрывозащита *</Label>
                      <Select value={config.explosionProtection} onValueChange={(value) => setConfig({...config, explosionProtection: value})}>
                        <SelectTrigger id="explosionProtection">
                          <SelectValue placeholder="Выберите взрывозащиту" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Без взрывозащиты</SelectItem>
                          <SelectItem value="ExiaIICT6">ExiaIICT6 (искробезопасная цепь)</SelectItem>
                          <SelectItem value="ExdIICT6">ExdIICT6 (взрывонепроницаемая оболочка)</SelectItem>
                          <SelectItem value="ExnAIIT6">ExnAIIT6 (тип защиты "n")</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="membraneMaterial">Материал мембраны *</Label>
                      <Select value={config.membraneMaterial} onValueChange={(value) => setConfig({...config, membraneMaterial: value})}>
                        <SelectTrigger id="membraneMaterial">
                          <SelectValue placeholder="Выберите материал" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">12Х18Н10Т (стандарт)</SelectItem>
                          <SelectItem value="316L">316L (коррозионностойкая)</SelectItem>
                          <SelectItem value="titanium">Титан (для агрессивных сред)</SelectItem>
                          <SelectItem value="hastelloy">Hastelloy (максимальная стойкость)</SelectItem>
                          <SelectItem value="tantalum">Тантал (для особых сред)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="climateExecution">Климатическое исполнение *</Label>
                      <Select value={config.climateExecution} onValueChange={(value) => setConfig({...config, climateExecution: value})}>
                        <SelectTrigger id="climateExecution">
                          <SelectValue placeholder="Выберите исполнение" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="UHL1">УХЛ1 (-60...+50°C)</SelectItem>
                          <SelectItem value="UHL2">УХЛ2 (-50...+40°C)</SelectItem>
                          <SelectItem value="UHL3">УХЛ3 (-40...+40°C)</SelectItem>
                          <SelectItem value="UHL4">УХЛ4 (-40...+35°C)</SelectItem>
                          <SelectItem value="T1">Т1 (-10...+50°C)</SelectItem>
                          <SelectItem value="T2">Т2 (0...+50°C)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {config.pressureType && config.accuracyClass && config.executionType && (
                      <div className="pt-4 border-t">
                        <Label className="text-sm font-medium text-gray-700">Сформированный артикул:</Label>
                        <p className="mt-2 text-lg font-mono font-semibold text-blue-600">
                          {generateArticle()}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

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
                    <span>Гарантия 2 года</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="award" className="w-5 h-5" />
                    <span>Сертифицирован</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'description'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Описание
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'specs'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Характеристики
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'features'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Особенности
              </button>
              <button
                onClick={() => setActiveTab('docs')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'docs'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Документация
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Датчик давления {product.name} разработан специально для работы в промышленных условиях. 
                  Использование технологии "кремний на сапфире" обеспечивает высокую точность измерений 
                  и долговременную стабильность показаний даже в самых сложных условиях эксплуатации.
                </p>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{spec.label}:</span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <Icon name="check-circle" className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'docs' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="file-text" className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium">Техническое описание</p>
                      <p className="text-sm text-gray-500">PDF, 2.5 МБ</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="download" className="w-4 h-4 mr-2" />
                    Скачать
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="file-text" className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium">Руководство по эксплуатации</p>
                      <p className="text-sm text-gray-500">PDF, 3.1 МБ</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="download" className="w-4 h-4 mr-2" />
                    Скачать
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="file-text" className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium">Сертификат соответствия</p>
                      <p className="text-sm text-gray-500">PDF, 1.2 МБ</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="download" className="w-4 h-4 mr-2" />
                    Скачать
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="file-text" className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium">Декларация о соответствии</p>
                      <p className="text-sm text-gray-500">PDF, 0.8 МБ</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="download" className="w-4 h-4 mr-2" />
                    Скачать
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
