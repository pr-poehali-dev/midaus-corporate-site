import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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

  const images = [
    'https://cdn.poehali.dev/files/f8cbff73-54cc-4cd0-8d05-1a83dab572df.JPG',
    'https://cdn.poehali.dev/files/f8cbff73-54cc-4cd0-8d05-1a83dab572df.JPG',
    'https://cdn.poehali.dev/files/f8cbff73-54cc-4cd0-8d05-1a83dab572df.JPG',
  ];

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
            <div className="flex gap-2">
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
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-primary">от {product.price} ₽</span>
                <span className="text-sm text-muted-foreground">с НДС</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Label htmlFor="quantity">Количество:</Label>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <Input 
                    id="quantity"
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center"
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
              <div className="flex gap-3">
                <Button className="flex-1 bg-accent hover:bg-accent/90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  В корзину
                </Button>
                <Button variant="outline">
                  <Icon name="Heart" size={20} />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Icon name="CheckCircle2" size={20} className="text-green-600" />
                <span>В наличии на складе</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Truck" size={20} className="text-primary" />
                <span>Доставка по России и СНГ</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="FileText" size={20} className="text-primary" />
                <span>Полный комплект документации</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Shield" size={20} className="text-primary" />
                <span>Гарантия 24 месяца</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="border-b border-border mb-6">
            <div className="flex gap-8">
              {[
                { id: 'description', label: 'Описание' },
                { id: 'specs', label: 'Технические характеристики' },
                { id: 'docs', label: 'Документация' },
                { id: 'delivery', label: 'Доставка и оплата' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Датчик давления {product.name} предназначен для непрерывного преобразования 
                измеряемой величины избыточного давления жидких и газообразных сред в 
                унифицированный токовый выходной сигнал 4...20 мА.
              </p>
              <h3 className="font-heading font-bold text-xl mt-6 mb-3">Особенности</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-heading font-bold text-xl mt-6 mb-3">Области применения</h3>
              <p>
                Датчик применяется в системах автоматического контроля и регулирования 
                технологических процессов в нефтегазовой, химической, энергетической 
                промышленности, системах водоснабжения и ЖКХ.
              </p>
            </div>
          )}

          {activeTab === 'specs' && (
            <div>
              <Card>
                <CardContent className="p-6">
                  <table className="w-full">
                    <tbody>
                      {product.specs.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-secondary/50' : ''}>
                          <td className="py-3 px-4 font-medium">{spec.label}</td>
                          <td className="py-3 px-4 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="space-y-4">
              {[
                { name: 'Паспорт изделия', size: '2.4 МБ', type: 'PDF' },
                { name: 'Руководство по эксплуатации', size: '3.1 МБ', type: 'PDF' },
                { name: 'Декларация о соответствии', size: '856 КБ', type: 'PDF' },
                { name: 'Габаритные чертежи', size: '1.2 МБ', type: 'DWG' },
              ].map((doc, index) => (
                <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                        <Icon name="FileText" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{doc.name}</div>
                        <div className="text-sm text-muted-foreground">{doc.type} • {doc.size}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Download" size={20} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'delivery' && (
            <div className="prose max-w-none">
              <h3 className="font-heading font-bold text-xl mb-3">Способы доставки</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Truck" size={20} className="text-primary mt-1" />
                  <div>
                    <strong>Транспортные компании</strong>
                    <p className="text-muted-foreground">СДЭК, ПЭК, Деловые Линии — 3-7 дней</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Building2" size={20} className="text-primary mt-1" />
                  <div>
                    <strong>Самовывоз</strong>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                  </div>
                </li>
              </ul>
              <h3 className="font-heading font-bold text-xl mt-6 mb-3">Способы оплаты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Безналичный расчет для юридических лиц</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Банковские карты (предоплата)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Наличные при получении (для физических лиц)</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        <section className="py-12 bg-secondary rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-center mb-8">
              Получить консультацию
            </h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="contact-message">Вопрос</Label>
                    <Textarea
                      id="contact-message"
                      placeholder={`Интересует датчик ${product.name}...`}
                      rows={3}
                    />
                  </div>
                </div>
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90">
                  Отправить запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
                alt="МИДАУС" 
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80 text-sm">
                Российский производитель датчиков давления с 1992 года
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white">Датчики давления</a></li>
                <li><a href="#" className="hover:text-white">Модули давления</a></li>
                <li><a href="#" className="hover:text-white">Источники питания</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@midaus.ru</li>
                <li>г. Москва, ул. Примерная, д. 10</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Документы</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white">Реквизиты</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 МИДАУС. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}