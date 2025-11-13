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
      { label: 'Область применения', value: 'общепромышленные системы контроля и регулирования, в т. ч. атомная электроэнергетика' },
      { label: 'Рабочая среда', value: 'жидкости и газы, неагрессивные к титановым сплавам и нержавеющим сталям' },
      { label: 'Номер в Госреестре средств измерения РФ', value: '17636 - 17' },
      { label: 'Межповерочный интервал', value: '5 лет' },
      { label: 'Пылевлагозащищенность', value: 'IP65' },
      { label: 'Напряжение питания, В', value: '12...36 (4-20 мА в зависимости от нагрузки) / 20...36 (для 0-5 мА) / 3,6…36 (для 0,4-2 В) / 9…36 (для 0,5-4,5 В и 0-5 В) / 15…36 (для 0-10 В)' },
    ],
    features: [],
  },
  'mida-15': {
    name: 'МИДА-15',
    description: 'Датчик давления для работы в условиях повышенной вибрации',
    price: '15 800',
    specs: [
      { label: 'Область применения', value: 'общепромышленные системы контроля и регулирования, в т. ч. атомная электроэнергетика' },
      { label: 'Рабочая среда', value: 'жидкости и газы, неагрессивные к титановым сплавам и нержавеющим сталям' },
      { label: 'Номер в Госреестре средств измерения РФ', value: '17636 - 17' },
      { label: 'Межповерочный интервал', value: '5 лет' },
      { label: 'Пылевлагозащищенность', value: 'IP67' },
    ],
    features: [],
  },
  'mida-12': {
    name: 'МИДА-12',
    description: 'Датчик давления для агрессивных сред',
    price: '18 200',
    specs: [
      { label: 'Область применения', value: 'общепромышленные системы контроля и регулирования, в т. ч. атомная электроэнергетика' },
      { label: 'Рабочая среда', value: 'жидкости и газы, неагрессивные к титановым сплавам и нержавеющим сталям' },
      { label: 'Номер в Госреестре средств измерения РФ', value: '17636 - 17' },
      { label: 'Межповерочный интервал', value: '5 лет' },
      { label: 'Пылевлагозащищенность', value: 'IP68' },
    ],
    features: [],
  },
};

const pressureRanges = {
  'ДИ': ['0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.5', '4', '6', '10', '16', '25', '40', '60', '100', '160'],
  'ДА': ['0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.5', '4', '6', '10'],
  'ДВ': ['0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1'],
  'ДИВ': ['0.002', '0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.4'],
};

const lowerPressureRanges = {
  'ДА': ['0', '0.01', '0.016', '0.025', '0.04', '0.06', '0.08'],
  'ДИВ': ['0.002', '0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1'],
};

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('specs');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showPriceModal, setShowPriceModal] = useState(false);
  
  const [config, setConfig] = useState({
    pressureType: '',
    unit: '',
    upperLimit: '',
    upperLimitCustom: '',
    lowerLimit: '',
    lowerLimitCustom: '',
    accuracy: '',
    outputSignal: '',
    mechanicalConnection: '',
    electricalConnection: '',
    explosionProtection: '',
    membraneMaterial: '',
  });

  const [showUpperCustomInput, setShowUpperCustomInput] = useState(false);
  const [showLowerCustomInput, setShowLowerCustomInput] = useState(false);

  const product = productsData[id || 'mida-13p'];

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  const productImages: Record<string, string[]> = {
    'mida-13p': [
      'https://cdn.poehali.dev/files/b6fbb7ec-4f53-4d1f-b905-fd7e4106c1e9.JPG',
      'https://cdn.poehali.dev/files/b6fbb7ec-4f53-4d1f-b905-fd7e4106c1e9.JPG',
      'https://cdn.poehali.dev/files/b6fbb7ec-4f53-4d1f-b905-fd7e4106c1e9.JPG',
    ],
    'mida-15': [
      'https://cdn.poehali.dev/files/f6170bf3-77d4-4804-ba4c-3a0939d5b87c.JPG',
      'https://cdn.poehali.dev/files/f6170bf3-77d4-4804-ba4c-3a0939d5b87c.JPG',
      'https://cdn.poehali.dev/files/f6170bf3-77d4-4804-ba4c-3a0939d5b87c.JPG',
    ],
    'mida-12': [
      'https://cdn.poehali.dev/files/c10af49a-98c2-485f-bf8b-3ccf239ce5fb.JPG',
      'https://cdn.poehali.dev/files/c10af49a-98c2-485f-bf8b-3ccf239ce5fb.JPG',
      'https://cdn.poehali.dev/files/c10af49a-98c2-485f-bf8b-3ccf239ce5fb.JPG',
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
    
    if (config.outputSignal === '4…20 мА / 2-х пров.') code += '-01';
    else if (config.outputSignal === '0…5 мА / 3-х пров.') code += '-02';
    else if (config.outputSignal === '0…5 мА / 4-х пров.') code += '-04';
    else if (config.outputSignal === '0.4…2 В / 3-х пров.') code += '-05/1';
    else if (config.outputSignal === '0.5…4.5 В / 3-х пров.') code += '-05/2';
    else if (config.outputSignal === '0…5 В / 4-х пров.') code += '-03';
    else if (config.outputSignal === '0…10 В / 3-х пров.') code += '-05/4';
    
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
  const isMechanicalConnectionEnabled = isOutputSignalEnabled && config.outputSignal !== '';
  const isExplosionProtectionEnabled = isMechanicalConnectionEnabled && config.mechanicalConnection !== '';
  const isElectricalConnectionEnabled = isExplosionProtectionEnabled && config.explosionProtection !== '';
  const isMembraneMaterialEnabled = isElectricalConnectionEnabled && config.electricalConnection !== '';

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
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Продукция
            </Link>
            <Link to="/#solutions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Решения
            </Link>
            <Link to="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О компании
            </Link>
            <Link to="/#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Поддержка
            </Link>
          </nav>
          <Button variant="default" className="hidden md:flex">
            Заказать звонок
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/#products" className="hover:text-primary">Датчики давления</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
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

            {id === 'mida-13p' && (
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

            {id === 'mida-15' && (
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

            {id === 'mida-12' && (
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

          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-3">
              <span className="text-primary font-semibold text-sm">🇷🇺 Российское производство</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {product.description}
            </p>

            <div className="bg-secondary p-6 rounded-lg mb-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Конфигуратор заказа</h3>
              
              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="pressureType">Тип давления</Label>
                  <Select value={config.pressureType} onValueChange={(value) => setConfig({...config, pressureType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип давления" />
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
                  <Label htmlFor="unit" className={!isUnitEnabled ? 'text-muted-foreground' : ''}>Единица измерения</Label>
                  <Select value={config.unit} onValueChange={(value) => setConfig({...config, unit: value})} disabled={!isUnitEnabled}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите единицу измерения" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="МПа">МПа</SelectItem>
                      <SelectItem value="кПа">кПа</SelectItem>
                      <SelectItem value="бар">бар</SelectItem>
                      <SelectItem value="кгс/см²">кгс/см²</SelectItem>
                      <SelectItem value="psi">psi</SelectItem>
                      <SelectItem value="мм рт. ст.">мм рт. ст.</SelectItem>
                      <SelectItem value="м вод. ст.">м вод. ст.</SelectItem>
                      <SelectItem value="другая">другая</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {config.pressureType && (
                  <div className="space-y-2">
                    <Label htmlFor="upperLimit" className={!isUpperLimitEnabled ? 'text-muted-foreground' : ''}>
                      Верхний предел измерения давления
                      {config.pressureType === 'ДИ' && ' (до 160 МПа)'}
                      {config.pressureType === 'ДА' && ' (до 10 МПа)'}
                      {config.pressureType === 'ДВ' && ' (от 0.004 до 0.1 МПа)'}
                      {config.pressureType === 'ДИВ' && ' (от 0.002 до 2.4 МПа)'}
                    </Label>
                    {!showUpperCustomInput ? (
                      <Select value={config.upperLimit} onValueChange={(value) => {
                        if (value === 'custom') {
                          setShowUpperCustomInput(true);
                          setConfig({...config, upperLimit: ''});
                        } else {
                          setConfig({...config, upperLimit: value});
                        }
                      }} disabled={!isUpperLimitEnabled}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите из стандартного ряда" />
                        </SelectTrigger>
                        <SelectContent>
                          {pressureRanges[config.pressureType as keyof typeof pressureRanges]?.map((value) => (
                            <SelectItem key={value} value={value}>
                              {config.pressureType === 'ДВ' ? `-${value}` : value} МПа
                            </SelectItem>
                          ))}
                          <SelectItem value="custom">Другой (ввести вручную)</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Введите значение"
                          value={config.upperLimitCustom}
                          onChange={(e) => setConfig({...config, upperLimitCustom: e.target.value})}
                          disabled={!isUpperLimitEnabled}
                        />
                        <Button
                          variant="outline"
                          onClick={() => {
                            setShowUpperCustomInput(false);
                            setConfig({...config, upperLimitCustom: ''});
                          }}
                        >
                          Отмена
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {showLowerLimitField && (
                  <div className="space-y-2">
                    <Label htmlFor="lowerLimit" className={!isLowerLimitEnabled ? 'text-muted-foreground' : ''}>
                      Нижний предел измерения давления
                      {config.pressureType === 'ДА' && ' (от 0 до 0.08 МПа)'}
                      {config.pressureType === 'ДИВ' && ' (от -0.002 до -0.1 МПа)'}
                    </Label>
                    {config.pressureType === 'ДИ' ? (
                      <Input
                        type="text"
                        placeholder="Введите значение"
                        value={config.lowerLimitCustom}
                        onChange={(e) => setConfig({...config, lowerLimitCustom: e.target.value})}
                        disabled={!isLowerLimitEnabled}
                      />
                    ) : !showLowerCustomInput ? (
                      <Select value={config.lowerLimit} onValueChange={(value) => {
                        if (value === 'custom') {
                          setShowLowerCustomInput(true);
                          setConfig({...config, lowerLimit: ''});
                        } else {
                          setConfig({...config, lowerLimit: value});
                        }
                      }} disabled={!isLowerLimitEnabled}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите из стандартного ряда" />
                        </SelectTrigger>
                        <SelectContent>
                          {lowerPressureRanges[config.pressureType as keyof typeof lowerPressureRanges]?.map((value) => (
                            <SelectItem key={value} value={value}>
                              {config.pressureType === 'ДИВ' ? `-${value}` : value} МПа
                            </SelectItem>
                          ))}
                          <SelectItem value="custom">Другой (ввести вручную)</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Введите значение"
                          value={config.lowerLimitCustom}
                          onChange={(e) => setConfig({...config, lowerLimitCustom: e.target.value})}
                          disabled={!isLowerLimitEnabled}
                        />
                        <Button
                          variant="outline"
                          onClick={() => {
                            setShowLowerCustomInput(false);
                            setConfig({...config, lowerLimitCustom: ''});
                          }}
                          disabled={!isLowerLimitEnabled}
                        >
                          Отмена
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="accuracy" className={!isAccuracyEnabled ? 'text-muted-foreground' : ''}>Основная приведенная погрешность, % от диапазона измерения</Label>
                  <Select value={config.accuracy} onValueChange={(value) => setConfig({...config, accuracy: value})} disabled={!isAccuracyEnabled}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите точность" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="±0.15%">±0.15%</SelectItem>
                      <SelectItem value="±0.2%">±0.2%</SelectItem>
                      <SelectItem value="±0.25%">±0.25%</SelectItem>
                      <SelectItem value="±0.5%">±0.5%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="outputSignal" className={!isOutputSignalEnabled ? 'text-muted-foreground' : ''}>Выходной сигнал</Label>
                  <Select value={config.outputSignal} onValueChange={(value) => setConfig({...config, outputSignal: value})} disabled={!isOutputSignalEnabled}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите выходной сигнал" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4…20 мА / 2-х пров.">4…20 мА / 2-х пров. (Код 01)</SelectItem>
                      <SelectItem value="0…5 мА / 3-х пров.">0…5 мА / 3-х пров. (Код 02)</SelectItem>
                      <SelectItem value="0…5 мА / 4-х пров.">0…5 мА / 4-х пров. (Код 04)</SelectItem>
                      <SelectItem value="0.4…2 В / 3-х пров.">0.4…2 В / 3-х пров. (Код 05/1)</SelectItem>
                      <SelectItem value="0.5…4.5 В / 3-х пров.">0.5…4.5 В / 3-х пров. (Код 05/2)</SelectItem>
                      <SelectItem value="0…5 В / 4-х пров.">0…5 В / 4-х пров. (Код 03)</SelectItem>
                      <SelectItem value="0…10 В / 3-х пров.">0…10 В / 3-х пров. (Код 05/4)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mechanicalConnection" className={!isMechanicalConnectionEnabled ? 'text-muted-foreground' : ''}>Механическое присоединение</Label>
                  <Select value={config.mechanicalConnection} onValueChange={(value) => setConfig({...config, mechanicalConnection: value})} disabled={!isMechanicalConnectionEnabled}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип присоединения" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="М20х1.5 ГОСТ 2405">М20х1.5 ГОСТ 2405</SelectItem>
                      <SelectItem value="М20х1.5 DIN 3852">М20х1.5 DIN 3852</SelectItem>
                      <SelectItem value="М20х1.5 открытая мембрана">М20х1.5 открытая мембрана</SelectItem>
                      <SelectItem value="М14х1.5 ГОСТ 2405">М14х1.5 ГОСТ 2405</SelectItem>
                      <SelectItem value="М14х1.5 DIN 3852">М14х1.5 DIN 3852</SelectItem>
                      <SelectItem value="М14х1.5 открытая мембрана">М14х1.5 открытая мембрана</SelectItem>
                      <SelectItem value="М12х1.5 ГОСТ 2405">М12х1.5 ГОСТ 2405</SelectItem>
                      <SelectItem value="М12х1">М12х1</SelectItem>
                      <SelectItem value='G3/4" EN 837'>G3/4" EN 837</SelectItem>
                      <SelectItem value='G3/4" DIN 3852'>G3/4" DIN 3852</SelectItem>
                      <SelectItem value='G3/4" открытая мембрана'>G3/4" открытая мембрана</SelectItem>
                      <SelectItem value='G1/2" EN 837'>G1/2" EN 837</SelectItem>
                      <SelectItem value='G1/2" DIN 3852'>G1/2" DIN 3852</SelectItem>
                      <SelectItem value='G1/2" открытая мембрана'>G1/2" открытая мембрана</SelectItem>
                      <SelectItem value='G1/4" EN 837'>G1/4" EN 837</SelectItem>
                      <SelectItem value='G1/4" DIN 3852'>G1/4" DIN 3852</SelectItem>
                      <SelectItem value='G1/4" открытая мембрана'>G1/4" открытая мембрана</SelectItem>
                      <SelectItem value='1/2" NPT'>1/2" NPT</SelectItem>
                      <SelectItem value='1/4" NPT'>1/4" NPT</SelectItem>
                      <SelectItem value="другое">другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="explosionProtection" className={!isExplosionProtectionEnabled ? 'text-muted-foreground' : ''}>Вид взрывозащиты</Label>
                  <Select value={config.explosionProtection} onValueChange={(value) => setConfig({...config, explosionProtection: value})} disabled={!isExplosionProtectionEnabled}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вид взрывозащиты" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Без взрывозащиты">Без взрывозащиты</SelectItem>
                      <SelectItem value="Искробезопасная цепь (Іа)">Искробезопасная цепь (Іа)</SelectItem>
                      <SelectItem value="Взрывонепроницаемая оболочка (Вн)">Взрывонепроницаемая оболочка (Вн)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="electricalConnection" className={!isElectricalConnectionEnabled ? 'text-muted-foreground' : ''}>Электрическое присоединение</Label>
                  <Select value={config.electricalConnection} onValueChange={(value) => setConfig({...config, electricalConnection: value})} disabled={!isElectricalConnectionEnabled}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип присоединения" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DIN 43650А (код G)">DIN 43650А (код G)</SelectItem>
                      <SelectItem value="Кабельный ввод прямой пластиковый (код ПП)">Кабельный ввод (прямой пластиковый) код ПП</SelectItem>
                      <SelectItem value="Кабельный ввод прямой металлический (код ПМ)">Кабельный ввод (прямой металлический) код ПМ</SelectItem>
                      <SelectItem value="Кабельный ввод угловой пластиковый (код УП)">Кабельный ввод (угловой пластиковый) код УП</SelectItem>
                      <SelectItem value="Кабельный ввод угловой металлический (код УМ)">Кабельный ввод (угловой металлический) код УМ</SelectItem>
                      <SelectItem value="Кабельный ввод прямой под металлорукав (код ПММ)">Кабельный ввод (прямой под металлорукав) код ПММ</SelectItem>
                      <SelectItem value="Кабельный ввод угловой под металлорукав (код УММ)">Кабельный ввод (угловой под металлорукав) код УММ</SelectItem>
                      <SelectItem value="Кабельный ввод прямой под металлопластиковый рукав (код УММ-15)">Кабельный ввод (прямой под металлопластиковый рукав) код УММ-15</SelectItem>
                      <SelectItem value="Кабельный ввод примой металлический с усиленным корпусом (код ПМ1)">Кабельный ввод (примой металлический с усиленным корпусом) код ПМ1</SelectItem>
                      <SelectItem value="Кабельный ввод прямой под бронекабель (код ПБ)">Кабельный ввод (прямой под бронекабель) код ПБ</SelectItem>
                      <SelectItem value="Кабельный ввод угловой под бронекабель (код УБ)">Кабельный ввод (угловой под бронекабель) код УБ</SelectItem>
                      <SelectItem value="Кабельный ввод угловой трубный (код УТ)">Кабельный ввод (угловой трубный) код УТ</SelectItem>
                      <SelectItem value="Кабельный ввод прямой трубный (код ПТ)">Кабельный ввод (прямой трубный) код ПТ</SelectItem>
                      <SelectItem value="Разъем РСГ4ТВ (код ПР)">Разъем РСГ4ТВ код ПР</SelectItem>
                      <SelectItem value="Разъем РСГ7ТВ (код Р)">Разъем РСГ7ТВ код Р</SelectItem>
                      <SelectItem value="Разъем 2РМТ22 (код УР2)">Разъем 2РМТ22 код УР2</SelectItem>
                      <SelectItem value="Разъем 2РМТ14 (код УР3)">Разъем 2РМТ14 код УР3</SelectItem>
                      <SelectItem value="Разъем 2РМГ14 (код УР4)">Разъем 2РМГ14 код УР4</SelectItem>
                      <SelectItem value="Разъем 2РМГ22 (код УР5)">Разъем 2РМГ22 код УР5</SelectItem>
                      <SelectItem value="другое">другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="membraneMaterial" className={!isMembraneMaterialEnabled ? 'text-muted-foreground' : ''}>Материал мембраны</Label>
                  <Select value={config.membraneMaterial} onValueChange={(value) => setConfig({...config, membraneMaterial: value})} disabled={!isMembraneMaterialEnabled}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите материал" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12Х18Н10Т">Нержавеющая сталь 12Х18Н10Т</SelectItem>
                      <SelectItem value="Титан">Титан</SelectItem>
                      <SelectItem value="Хастеллой">Хастеллой</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {config.pressureType && (
                <div className="p-4 bg-white rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Код заказа:</p>
                  <p className="font-mono font-semibold text-lg">{getOrderCode()}</p>
                </div>
              )}
            </div>



            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button className="flex-1" size="lg" onClick={() => setShowPriceModal(true)}>
                <Icon name="DollarSign" size={20} className="mr-2" />
                Запросить цену
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex gap-2 border-b border-border mb-6">
            {['specs', 'docs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab === 'specs' && 'Технические характеристики'}
                {tab === 'docs' && 'Документация'}
              </button>
            ))}
          </div>

          {activeTab === 'specs' && (
            <div className="space-y-4">
              {product.specs.map((spec, index) => (
                <div key={index} className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold text-lg mb-2">{spec.label}</div>
                  <div className="text-muted-foreground">{spec.value}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="space-y-4">
              {id === 'mida-13p' && (
                <Card className="hover:shadow-md transition-shadow overflow-hidden">
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
                    <div className="p-4">
                      <h4 className="font-semibold">Видеообзор МИДА-13П</h4>
                      <p className="text-sm text-muted-foreground">Подробный обзор датчика и его возможностей</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {id === 'mida-15' && (
                <Card className="hover:shadow-md transition-shadow overflow-hidden">
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
                    <div className="p-4">
                      <h4 className="font-semibold">Видеообзор МИДА-15</h4>
                      <p className="text-sm text-muted-foreground">Подробный обзор датчика и его возможностей</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {id === 'mida-12' && (
                <Card className="hover:shadow-md transition-shadow overflow-hidden">
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
                    <div className="p-4">
                      <h4 className="font-semibold">Видеообзор МИДА-12П</h4>
                      <p className="text-sm text-muted-foreground">Подробный обзор датчика и его возможностей</p>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon name="FileText" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold mb-1">Техническое описание</h4>
                      <p className="text-sm text-muted-foreground">PDF, 2.5 МБ</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon name="FileText" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold mb-1">Руководство по эксплуатации</h4>
                      <p className="text-sm text-muted-foreground">PDF, 3.8 МБ</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon name="FileText" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold mb-1">Сертификат соответствия</h4>
                      <p className="text-sm text-muted-foreground">PDF, 1.2 МБ</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="font-heading font-bold text-2xl mb-6 text-center">
            Остались вопросы?
          </h2>
          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea id="message" placeholder="Ваш вопрос..." rows={4} />
            </div>
            <Button className="w-full" size="lg">
              Отправить запрос
            </Button>
          </form>
        </div>
      </div>

      <footer className="bg-secondary mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
                alt="МИДАУС" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Производство датчиков давления и систем измерения для промышленности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Датчики давления</a></li>
                <li><a href="#" className="hover:text-primary">Манометры</a></li>
                <li><a href="#" className="hover:text-primary">Преобразователи</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">О нас</a></li>
                <li><a href="#" className="hover:text-primary">Сертификаты</a></li>
                <li><a href="#" className="hover:text-primary">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@midaus.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 МИДАУС. Все права защищены.
          </div>
        </div>
      </footer>

      {showPriceModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowPriceModal(false)}>
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-xl">Запросить цену</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowPriceModal(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Заполните форму, и мы отправим вам коммерческое предложение с актуальными ценами на {product.name}
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowPriceModal(false); }}>
                <div className="space-y-2">
                  <Label htmlFor="modal-name">Имя *</Label>
                  <Input id="modal-name" placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-company">Компания *</Label>
                  <Input id="modal-company" placeholder="ООО Компания" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-phone">Телефон *</Label>
                  <Input id="modal-phone" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-email">Email *</Label>
                  <Input id="modal-email" type="email" placeholder="email@company.ru" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-quantity">Количество</Label>
                  <Input id="modal-quantity" type="number" min="1" defaultValue="1" />
                </div>
                {config.pressureType && (
                  <div className="p-3 bg-secondary rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Конфигурация:</p>
                    <p className="font-mono text-sm">{getOrderCode()}</p>
                  </div>
                )}
                <div className="flex gap-3 pt-2">
                  <Button type="submit" className="flex-1">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить запрос
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowPriceModal(false)}>
                    Отмена
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}