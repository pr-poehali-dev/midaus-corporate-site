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

const outputSignals = [
  { label: '4…20 мА / 2-х пров.', code: '01' },
  { label: '0…5 мА / 3-х пров.', code: '02' },
  { label: '0…5 мА / 4-х пров.', code: '04' },
  { label: '0.4…2 В / 3-х пров.', code: '05/1' },
  { label: '0.5…4.5 В / 3-х пров.', code: '05/2' },
  { label: '0…5 В / 4-х пров.', code: '03' },
  { label: '0…10 В / 3-х пров.', code: '05/4' },
];

const executions = [
  { label: 'Стандартное исполнение', code: '' },
  { label: 'Снижена температурная погрешность', code: 'В' },
  { label: 'С МИДА-УС-411/412', code: 'УС-411/412' },
  { label: 'Микропроцессорная обработка', code: 'К' },
  { label: 'Микропроцессорная с перенастройкой', code: 'КН' },
];

const mechanicalConnections = [
  'М20х1.5 ГОСТ 2405',
  'М20х1.5 DIN 3852',
  'М20х1.5 открытая мембрана',
  'М14х1.5 ГОСТ 2405',
  'М14х1.5 DIN 3852',
  'М14х1.5 открытая мембрана',
  'М12х1.5 ГОСТ 2405',
  'М12х1',
  'G3/4" EN 837',
  'G3/4" DIN 3852',
  'G3/4" открытая мембрана',
  'G1/2" EN 837',
  'G1/2" DIN 3852',
  'G1/2" открытая мембрана',
  'G1/4" EN 837',
  'G1/4" DIN 3852',
  'G1/4" открытая мембрана',
  '1/2" NPT',
  '1/4" NPT',
  'другое',
];

const explosionProtections = [
  { label: 'Электрооборудование общего назначения', code: '-' },
  { label: 'Искробезопасная электрическая цепь', code: 'Ex' },
  { label: 'Взрывонепроницаемая оболочка', code: 'Вн' },
  { label: 'Взрывонепроницаемая оболочка со сменным блоком грозозащиты', code: 'Вн-Г' },
];

const electricalConnections = [
  { label: 'DIN 43650А', code: 'G' },
  { label: 'Кабельный ввод (прямой пластиковый)', code: 'ПП' },
  { label: 'Кабельный ввод (прямой металлический)', code: 'ПМ' },
  { label: 'Кабельный ввод (угловой пластиковый)', code: 'УП' },
  { label: 'Кабельный ввод (угловой металлический)', code: 'УМ' },
  { label: 'Кабельный ввод (прямой под металлорукав)', code: 'ПММ' },
  { label: 'Кабельный ввод (угловой под металлорукав)', code: 'УММ' },
  { label: 'Кабельный ввод (прямой под металлопластиковый рукав)', code: 'УММ-15' },
  { label: 'Кабельный ввод (прямой металлический с усиленным корпусом)', code: 'ПМ1', requiresOpenMembrane: true },
  { label: 'Кабельный ввод (прямой под бронекабель)', code: 'ПБ', requiresExplosionProof: true },
  { label: 'Кабельный ввод (угловой под бронекабель)', code: 'УБ', requiresExplosionProof: true },
  { label: 'Кабельный ввод (угловой трубный)', code: 'УТ', requiresExplosionProof: true },
  { label: 'Кабельный ввод (прямой трубный)', code: 'ПТ', requiresExplosionProof: true },
  { label: 'Разъем РСГ4ТВ', code: 'ПР' },
  { label: 'Разъем РСГ7ТВ', code: 'Р' },
  { label: 'Разъем 2РМТ22', code: 'УР2' },
  { label: 'Разъем 2РМТ14', code: 'УР3' },
  { label: 'Разъем 2РМГ14', code: 'УР4' },
  { label: 'Разъем 2РМГ22', code: 'УР5' },
  { label: 'другое', code: 'другое' },
];

const membraneMaterials = [
  { label: 'Титановый сплав, нержавеющая сталь (стандарт)', code: '' },
  { label: 'Титановый сплав', code: 'штуцер титановый' },
  { label: 'Нержавеющая сталь', code: 'биметал' },
];

const climateExecutions = [
  { label: 'УХЛ**3.1', code: 'УХЛ**3.1', maxPressure: 0.025 },
  { label: 'У**2', code: 'У**2', minPressure: 0.04 },
  { label: 'У**1', code: 'У**1', requiresSpecialConnection: true },
];

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
    outputSignal: '',
    execution: '',
    mechanicalConnection: '',
    electricalConnection: '',
    explosionProtection: '',
    membraneMaterial: '',
    climateExecution: '',
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
      'https://cdn.poehali.dev/files/7a89d217-d4c2-4e24-a104-517e6812f925.JPG',
      'https://cdn.poehali.dev/files/7a89d217-d4c2-4e24-a104-517e6812f925.JPG',
      'https://cdn.poehali.dev/files/7a89d217-d4c2-4e24-a104-517e6812f925.JPG',
    ],
    'mida-12': [
      'https://cdn.poehali.dev/files/be011901-0128-4730-b5b2-1583c9ceb051.JPG',
      'https://cdn.poehali.dev/files/be011901-0128-4730-b5b2-1583c9ceb051.JPG',
      'https://cdn.poehali.dev/files/be011901-0128-4730-b5b2-1583c9ceb051.JPG',
    ],
  };

  const images = productImages[id || 'mida-13p'];

  const getOrderCode = () => {
    let code = 'МИДА-';
    
    if (config.pressureType === 'ДИ') code += 'ДИ';
    else if (config.pressureType === 'ДА') code += 'ДА';
    else if (config.pressureType === 'ДВ') code += 'ДВ';
    else if (config.pressureType === 'ДИВ') code += 'ДИВ';
    
    code += '-13П';
    
    const outputSignal = outputSignals.find(s => s.label === config.outputSignal);
    if (outputSignal) {
      code += `-${outputSignal.code}`;
    }
    
    const upperValue = showUpperCustomInput ? config.upperLimitCustom : config.upperLimit;
    const lowerValue = showLowerCustomInput ? config.lowerLimitCustom : config.lowerLimit;
    
    if (config.pressureType === 'ДИ' && lowerValue && upperValue) {
      code += `-${lowerValue.replace('.', ',')}...${upperValue.replace('.', ',')}`;
    } else if (config.pressureType === 'ДА' && lowerValue && upperValue) {
      code += `-${lowerValue.replace('.', ',')}...${upperValue.replace('.', ',')}`;
    } else if (config.pressureType === 'ДВ' && upperValue) {
      code += `-${upperValue.replace('.', ',')}`;
    } else if (config.pressureType === 'ДИВ' && lowerValue && upperValue) {
      code += `-${lowerValue.replace('.', ',')}...${upperValue.replace('.', ',')}`;
    }
    
    if (config.unit) {
      code += ` ${config.unit}`;
    }
    
    if (config.accuracy) {
      code += ` (${config.accuracy})`;
    }

    const execution = executions.find(e => e.label === config.execution);
    if (execution && execution.code) {
      code += ` ${execution.code}`;
    }

    const explosionProtection = explosionProtections.find(e => e.label === config.explosionProtection);
    if (explosionProtection && explosionProtection.code !== '-') {
      code += ` ${explosionProtection.code}`;
    }

    const electricalConnection = electricalConnections.find(e => e.label === config.electricalConnection);
    if (electricalConnection && electricalConnection.code !== 'другое') {
      code += ` ${electricalConnection.code}`;
    }

    const membraneMaterial = membraneMaterials.find(m => m.label === config.membraneMaterial);
    if (membraneMaterial && membraneMaterial.code) {
      code += ` ${membraneMaterial.code}`;
    }

    if (config.climateExecution) {
      code += ` ${config.climateExecution}`;
    }
    
    return code;
  };

  useEffect(() => {
    setConfig(prev => ({
      ...prev,
      upperLimit: '',
      upperLimitCustom: '',
      lowerLimit: '',
      lowerLimitCustom: '',
    }));
    setShowUpperCustomInput(false);
    setShowLowerCustomInput(false);
  }, [config.pressureType]);

  const showLowerLimitField = config.pressureType && config.pressureType !== 'ДВ';

  const isUnitEnabled = config.pressureType !== '';
  const isUpperLimitEnabled = isUnitEnabled && config.unit !== '';
  const isLowerLimitEnabled = isUpperLimitEnabled && (config.upperLimit !== '' || config.upperLimitCustom !== '');
  const isAccuracyEnabled = showLowerLimitField 
    ? (isLowerLimitEnabled && (config.lowerLimit !== '' || config.lowerLimitCustom !== ''))
    : isUpperLimitEnabled && (config.upperLimit !== '' || config.upperLimitCustom !== '');
  const isOutputSignalEnabled = isAccuracyEnabled && config.accuracy !== '';
  const isExecutionEnabled = isOutputSignalEnabled && config.outputSignal !== '';
  const isMechanicalConnectionEnabled = isExecutionEnabled && config.execution !== '';
  const isExplosionProtectionEnabled = isMechanicalConnectionEnabled && config.mechanicalConnection !== '';
  const isElectricalConnectionEnabled = isExplosionProtectionEnabled && config.explosionProtection !== '';
  const isMembraneMaterialEnabled = isElectricalConnectionEnabled && config.electricalConnection !== '';
  const isClimateExecutionEnabled = isMembraneMaterialEnabled && config.membraneMaterial !== '';

  const availableElectricalConnections = electricalConnections.filter(conn => {
    if (conn.requiresOpenMembrane) {
      return config.mechanicalConnection.includes('открытая мембрана');
    }
    if (conn.requiresExplosionProof) {
      return config.explosionProtection === 'Взрывонепроницаемая оболочка' || config.explosionProtection === 'Взрывонепроницаемая оболочка со сменным блоком грозозащиты';
    }
    return true;
  });

  const availableClimateExecutions = climateExecutions.filter(climate => {
    const upperPressure = parseFloat(showUpperCustomInput ? config.upperLimitCustom : config.upperLimit);
    
    if (climate.maxPressure && upperPressure > climate.maxPressure) {
      return false;
    }
    if (climate.minPressure && upperPressure < climate.minPressure) {
      return false;
    }
    if (climate.requiresSpecialConnection) {
      const electricalCode = electricalConnections.find(e => e.label === config.electricalConnection)?.code || '';
      return ['УММ', 'ПММ', 'УММ-15', 'УБ', 'УТ'].includes(electricalCode);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
              alt="МИДАУС" 
              className="h-10 w-auto"
            />
          </Link>
          <Button variant="default">
            Заказать звонок
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
            <Icon name="ChevronLeft" size={16} className="mr-1" />
            Вернуться к каталогу
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-muted rounded-lg overflow-hidden mb-4">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-heading font-bold text-4xl mb-4">{product.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{product.description}</p>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-heading font-bold text-3xl text-primary">от {product.price} ₽</span>
              <span className="text-sm text-muted-foreground">за единицу</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <Label>Количество:</Label>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Icon name="Minus" size={16} />
                </Button>
                <Input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center"
                  min="1"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Icon name="Plus" size={16} />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                В корзину
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Heart" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="border-b border-border mb-6">
            <div className="flex gap-8">
              {['description', 'specs', 'configurator'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-medium transition-colors relative ${
                    activeTab === tab 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab === 'description' && 'Описание'}
                  {tab === 'specs' && 'Характеристики'}
                  {tab === 'configurator' && 'Конфигуратор'}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'description' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-2xl mb-4">Особенности</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-6">Технические характеристики</h3>
              <div className="grid gap-4">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'configurator' && (
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-6">Конфигуратор МИДА-13П</h3>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Тип давления</Label>
                      <Select value={config.pressureType} onValueChange={(value) => setConfig({...config, pressureType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ДИ">Избыточное (ДИ)</SelectItem>
                          <SelectItem value="ДА">Абсолютное (ДА)</SelectItem>
                          <SelectItem value="ДВ">Давление-разрежение (ДВ)</SelectItem>
                          <SelectItem value="ДИВ">Избыточное давление-разрежение (ДИВ)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Единица измерения</Label>
                      <Select 
                        value={config.unit} 
                        onValueChange={(value) => setConfig({...config, unit: value})}
                        disabled={!isUnitEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите единицу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="МПа">МПа</SelectItem>
                          <SelectItem value="кПа">кПа</SelectItem>
                          <SelectItem value="бар">бар</SelectItem>
                          <SelectItem value="кгс/см2">кгс/см²</SelectItem>
                          <SelectItem value="psi">psi</SelectItem>
                          <SelectItem value="мм рт. ст.">мм рт. ст.</SelectItem>
                          <SelectItem value="м вод. ст.">м вод. ст.</SelectItem>
                          <SelectItem value="другая">другая</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Верхний предел измерения</Label>
                      {!showUpperCustomInput ? (
                        <div className="flex gap-2">
                          <Select 
                            value={config.upperLimit} 
                            onValueChange={(value) => {
                              if (value === 'custom') {
                                setShowUpperCustomInput(true);
                              } else {
                                setConfig({...config, upperLimit: value});
                              }
                            }}
                            disabled={!isUpperLimitEnabled}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите предел" />
                            </SelectTrigger>
                            <SelectContent>
                              {config.pressureType && pressureRanges[config.pressureType]?.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {config.pressureType === 'ДВ' ? `-${range}` : range} МПа
                                </SelectItem>
                              ))}
                              <SelectItem value="custom">Другой (ввести вручную)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Input
                            type="number"
                            step="0.001"
                            value={config.upperLimitCustom}
                            onChange={(e) => setConfig({...config, upperLimitCustom: e.target.value})}
                            placeholder="Введите значение"
                          />
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => {
                              setShowUpperCustomInput(false);
                              setConfig({...config, upperLimitCustom: ''});
                            }}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      )}
                    </div>

                    {showLowerLimitField && (
                      <div className="space-y-2">
                        <Label>Нижний предел измерения</Label>
                        {config.pressureType === 'ДИ' ? (
                          <Input
                            type="number"
                            step="0.001"
                            value={config.lowerLimitCustom}
                            onChange={(e) => setConfig({...config, lowerLimitCustom: e.target.value})}
                            placeholder="Введите значение"
                            disabled={!isLowerLimitEnabled}
                          />
                        ) : !showLowerCustomInput ? (
                          <div className="flex gap-2">
                            <Select 
                              value={config.lowerLimit} 
                              onValueChange={(value) => {
                                if (value === 'custom') {
                                  setShowLowerCustomInput(true);
                                } else {
                                  setConfig({...config, lowerLimit: value});
                                }
                              }}
                              disabled={!isLowerLimitEnabled}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите предел" />
                              </SelectTrigger>
                              <SelectContent>
                                {config.pressureType && lowerPressureRanges[config.pressureType]?.map((range) => (
                                  <SelectItem key={range} value={range}>
                                    {config.pressureType === 'ДИВ' ? `-${range}` : range} МПа
                                  </SelectItem>
                                ))}
                                <SelectItem value="custom">Другой (ввести вручную)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <Input
                              type="number"
                              step="0.001"
                              value={config.lowerLimitCustom}
                              onChange={(e) => setConfig({...config, lowerLimitCustom: e.target.value})}
                              placeholder="Введите значение"
                            />
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => {
                                setShowLowerCustomInput(false);
                                setConfig({...config, lowerLimitCustom: ''});
                              }}
                            >
                              <Icon name="X" size={16} />
                            </Button>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label>Погрешность</Label>
                      <Select 
                        value={config.accuracy} 
                        onValueChange={(value) => setConfig({...config, accuracy: value})}
                        disabled={!isAccuracyEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите погрешность" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="±0.15%">±0.15%</SelectItem>
                          <SelectItem value="±0.2%">±0.2%</SelectItem>
                          <SelectItem value="±0.25%">±0.25%</SelectItem>
                          <SelectItem value="±0.5%">±0.5%</SelectItem>
                          <SelectItem value="±1%">±1%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Выходной сигнал</Label>
                      <Select 
                        value={config.outputSignal} 
                        onValueChange={(value) => setConfig({...config, outputSignal: value})}
                        disabled={!isOutputSignalEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите сигнал" />
                        </SelectTrigger>
                        <SelectContent>
                          {outputSignals.map((signal) => (
                            <SelectItem key={signal.code} value={signal.label}>
                              {signal.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Исполнение</Label>
                      <Select 
                        value={config.execution} 
                        onValueChange={(value) => setConfig({...config, execution: value})}
                        disabled={!isExecutionEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите исполнение" />
                        </SelectTrigger>
                        <SelectContent>
                          {executions.map((execution) => (
                            <SelectItem key={execution.code} value={execution.label}>
                              {execution.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Механическое присоединение</Label>
                      <Select 
                        value={config.mechanicalConnection} 
                        onValueChange={(value) => setConfig({...config, mechanicalConnection: value})}
                        disabled={!isMechanicalConnectionEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите присоединение" />
                        </SelectTrigger>
                        <SelectContent>
                          {mechanicalConnections.map((connection) => (
                            <SelectItem key={connection} value={connection}>
                              {connection}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Вид взрывозащиты</Label>
                      <Select 
                        value={config.explosionProtection} 
                        onValueChange={(value) => setConfig({...config, explosionProtection: value})}
                        disabled={!isExplosionProtectionEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите вид" />
                        </SelectTrigger>
                        <SelectContent>
                          {explosionProtections.map((protection) => (
                            <SelectItem key={protection.code} value={protection.label}>
                              {protection.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Электрическое присоединение</Label>
                      <Select 
                        value={config.electricalConnection} 
                        onValueChange={(value) => setConfig({...config, electricalConnection: value})}
                        disabled={!isElectricalConnectionEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите присоединение" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableElectricalConnections.map((connection) => (
                            <SelectItem key={connection.code} value={connection.label}>
                              {connection.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Материал мембраны</Label>
                      <Select 
                        value={config.membraneMaterial} 
                        onValueChange={(value) => setConfig({...config, membraneMaterial: value})}
                        disabled={!isMembraneMaterialEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите материал" />
                        </SelectTrigger>
                        <SelectContent>
                          {membraneMaterials.map((material) => (
                            <SelectItem key={material.code} value={material.label}>
                              {material.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Климатическое исполнение</Label>
                      <Select 
                        value={config.climateExecution} 
                        onValueChange={(value) => setConfig({...config, climateExecution: value})}
                        disabled={!isClimateExecutionEnabled}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите исполнение" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableClimateExecutions.map((climate) => (
                            <SelectItem key={climate.code} value={climate.code}>
                              {climate.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {getOrderCode() !== 'МИДА--13П' && (
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-heading font-semibold text-lg mb-4">Код заказа</h4>
                    <div className="bg-secondary p-4 rounded-lg font-mono text-lg">
                      {getOrderCode()}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
