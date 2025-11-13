import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Index() {
  const [selectedRange, setSelectedRange] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pressureRange, setPressureRange] = useState('');
  const [signalType, setSignalType] = useState('');
  const [temperature, setTemperature] = useState('');
  const [explosionProtection, setExplosionProtection] = useState('');
  const [recommendedSeries, setRecommendedSeries] = useState<string[]>([]);

  const getSuitableSeries = () => {
    let series = ['МИДА-13П', 'МИДА-12', 'МИДА-15'];

    if (pressureRange === 'over160') {
      series = ['МИДА-15'];
    }

    if (signalType === 'digital') {
      series = series.filter(s => s === 'МИДА-15');
    }

    if (temperature === 'high') {
      series = series.filter(s => s === 'МИДА-12');
    } else if (temperature === 'low') {
      series = series.filter(s => s !== 'МИДА-12');
    } else if (temperature === 'cryo') {
      series = series.filter(s => s === 'МИДА-12');
    }

    if (explosionProtection === 'shell') {
      series = series.filter(s => s === 'МИДА-13П' || s === 'МИДА-15');
    }

    setRecommendedSeries(series);
  };

  const productionImages = [
    { url: 'https://cdn.poehali.dev/files/b0816222-cfbd-4b3a-88c9-322faa989e45.jpg', title: 'Производственный корпус МИДАУС' },
    { url: 'https://cdn.poehali.dev/files/1b6c8ea8-5bea-48db-b363-50ae180491ca.jpeg', title: 'Механический цех' },
    { url: 'https://cdn.poehali.dev/files/af3b298d-3b96-4d06-a1b7-72ee38bac03e.jpeg', title: 'Производственные линии' },
    { url: 'https://cdn.poehali.dev/files/43259228-92ef-472c-9023-4dd7e597f24d.jpeg', title: 'Токарное производство' },
    { url: 'https://cdn.poehali.dev/files/91785d28-cc14-47e5-87bd-58d73f18171a.jpeg', title: '' },
    { url: 'https://cdn.poehali.dev/files/48ace166-ee49-4617-b80f-a5ff3e3b8ac1.jpeg', title: '' },
    { url: 'https://cdn.poehali.dev/files/ac629dca-703c-49d9-a667-09393387e41f.jpeg', title: 'Калибровочная лаборатория' },
    { url: 'https://cdn.poehali.dev/files/ddaf71d8-5625-4d64-a187-6246be0b06d8.jpg', title: 'Метрологическая лаборатория' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productionImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productionImages.length) % productionImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
              alt="МИДАУС" 
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Продукция
            </a>
            <a href="#solutions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Решения
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О компании
            </a>
            <a href="#specialists" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Специалисты
            </a>
            <a href="#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Поддержка
            </a>
          </nav>
          <Button variant="default" className="hidden md:flex">
            Заказать звонок
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/f8cbff73-54cc-4cd0-8d05-1a83dab572df.JPG')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-white font-semibold text-sm">🇷🇺 РОССИЙСКИЙ ПРОИЗВОДИТЕЛЬ</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              ДАТЧИКИ ДАВЛЕНИЯ ПО ТЕХНОЛОГИИ «КРЕМНИЙ НА САПФИРЕ»
            </h1>
            <p className="text-xl text-white/90 mb-8 font-light">Разработка и производство высокоточных датчиков давления для различных отраслей промышленности</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Подобрать датчик
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white border-2 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6">
            <img 
              src="https://cdn.poehali.dev/files/64050177-094a-4f73-a943-ba1d3983b99e.jpg" 
              alt="В реестре российской продукции Минпромторга" 
              className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary" id="selector">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-center mb-8">
              Подбор серии датчика МИДА
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pressure">Величина измеряемого давления</Label>
                    <select
                      id="pressure"
                      value={pressureRange}
                      onChange={(e) => setPressureRange(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Выберите диапазон</option>
                      <option value="up160">До 160 МПа включительно</option>
                      <option value="over160">Более 160 МПа</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signal">Вид выходного сигнала</Label>
                    <select
                      id="signal"
                      value={signalType}
                      onChange={(e) => setSignalType(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Выберите тип сигнала</option>
                      <option value="analog">Аналоговый</option>
                      <option value="digital">Цифровой</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Температура измеряемой среды</Label>
                    <select
                      id="temperature"
                      value={temperature}
                      onChange={(e) => setTemperature(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Выберите диапазон</option>
                      <option value="cryo">От -197°C до 100°C (криогенное исполнение)</option>
                      <option value="low">До 150°C</option>
                      <option value="high">От 150°C до 400°C</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="protection">Вид взрывозащиты</Label>
                    <select
                      id="protection"
                      value={explosionProtection}
                      onChange={(e) => setExplosionProtection(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Не требуется</option>
                      <option value="safe">Искробезопасная цепь</option>
                      <option value="shell">Взрывонепроницаемая оболочка</option>
                    </select>
                  </div>
                </div>
                <Button onClick={getSuitableSeries} className="w-full mt-6 bg-accent hover:bg-accent/90">
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать серию датчика
                </Button>
                {recommendedSeries.length > 0 && (
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-lg mb-3 text-center">Подходящие серии:</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {recommendedSeries.map((series, index) => (
                        <div key={index} className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-lg">
                          {series}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16" id="products">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Категории продукции
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Gauge',
                title: 'Датчики давления',
                description: 'Общепромышленные, взрывозащищенные, аналоговые и цифровые модели',
                link: '/products',
              },
              {
                icon: 'Cpu',
                title: 'Модули давления',
                description: 'С температурной компенсацией и без нее',
                link: '#',
              },
              {
                icon: 'Zap',
                title: 'Источники питания',
                description: 'Стабилизированное питание для датчиков',
                link: '#',
              },
              {
                icon: 'Shield',
                title: 'Средства защиты',
                description: 'Барьеры искрозащиты и блоки грозозащиты',
                link: '#',
              },
            ].map((category, index) => (
              <Link to={category.link} key={index}>
                <Card
                  className="group hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                      <Icon
                        name={category.icon}
                        size={32}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary" id="solutions">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Отраслевые решения
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Building2', title: 'ЖКХ' },
              { icon: 'Drill', title: 'Бурение' },
              { icon: 'Package', title: 'Переработка полимеров' },
              { icon: 'UtensilsCrossed', title: 'Пищевая промышленность' },
              { icon: 'Waves', title: 'Измерение уровня' },
              { icon: 'Gauge', title: 'Вакуумная техника' },
              { icon: 'Car', title: 'Автомобильная промышленность' },
              { icon: 'Plane', title: 'Авиационная промышленность' },
              { icon: 'Flame', title: 'Газ' },
            ].map((solution, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  <Icon
                    name={solution.icon}
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <span className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                  {solution.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Преимущества МИДАУС
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gem" size={36} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                Технология КНС
              </h3>
              <p className="text-muted-foreground">
                Уникальная технология «кремний на сапфире» обеспечивает точность и стабильность от –197°C до +500°C
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" size={36} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                Полный цикл в России
              </h3>
              <p className="text-muted-foreground">
                Собственное производство, контроль качества на всех этапах, независимость от импорта комплектующих
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={36} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                Крупные заказчики
              </h3>
              <p className="text-muted-foreground">
                СИБУР, РАСКО-Газэлектроника, Газпром. География поставок: Россия, Китай, Индия, страны СНГ
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden shadow-xl group">
              <img 
                src={productionImages[currentSlide].url}
                alt={productionImages[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ filter: 'sepia(0.15) saturate(1.1) brightness(0.95)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white font-semibold text-lg">{productionImages[currentSlide].title}</p>
                  {currentSlide === 0 && (
                    <p className="text-white/90 text-sm mt-1">г. Ульяновск, проезд Энергетиков, д. 4</p>
                  )}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Предыдущее фото"
              >
                <Icon name="ChevronLeft" size={24} className="text-primary" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Следующее фото"
              >
                <Icon name="ChevronRight" size={24} className="text-primary" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {productionImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                    aria-label={`Перейти к фото ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">
                Полный цикл производства
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  У нас реализован полный производственный цикл — от изготовления чувствительных элементов на основе технологии «кремний на сапфире» до финальной поверки готовых датчиков в собственной аккредитованной метрологической лаборатории.
                </p>
                <p>
                  Наше современное производство оснащено высокоточным оборудованием, которое позволяет обеспечивать стабильное качество продукции и выполнять заказы любой сложности в установленные сроки.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { value: '30+', label: 'Лет на рынке' },
                    { value: '500+', label: 'Моделей приборов' },
                    { value: '1000+', label: 'Клиентов по России' },
                    { value: '100%', label: 'Российская разработка' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="font-heading font-bold text-3xl text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="specialists">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-4">
            Вопросы к специалистам
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Специалисты компании МИДАУС всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/3d07504c-3256-4d06-9827-becf8e1d2716.png"
                      alt="Бушев Константин"
                      className="w-full h-full object-cover scale-150 object-[center_20%] my-3.5"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    Бушев Константин
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Генеральный директор
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:info@midaus.ru" className="hover:text-primary transition-colors">
                        info@midaus.ru
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" size={16} />
                      <span>+7 8422 360 363 доб. 104</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Общее руководство компанией, стратегическое планирование, вопросы партнерства
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/ba1aecfa-bb8c-46bd-b496-5fe035a2f25c.png"
                      alt="Купырин Владимир"
                      className="w-full h-full object-cover scale-150 object-[center_20%] my-6"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    Купырин Владимир
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Технический директор
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:kupyrin@midaus.com" className="hover:text-primary transition-colors">
                        kupyrin@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" size={16} />
                      <span>+7 8422 360 363 доб. 106</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Технические вопросы, подбор оборудования, разработка специальных решений
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/37913a75-6054-49a6-8b1c-33288be6200d.png"
                      alt="Савченко Евгений"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    Савченко Евгений
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Директор по развитию и науке
                  </p>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    Кандидат технических наук
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:seg@midaus.com" className="hover:text-primary transition-colors">
                        seg@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" size={16} />
                      <span>+7 8422 360 363 доб. 154</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Научные разработки, инновации, развитие новых технологий и продуктов, маркетинг
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/a69e9bf0-3323-44ab-bf08-0a0d54fa6088.png"
                      alt="Алашеев Валентин"
                      className="w-full h-full object-cover scale-125 object-[center_30%] my-0.5"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    Алашеев Валентин
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Главный конструктор
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:ala@midaus.com" className="hover:text-primary transition-colors">
                        ala@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" size={16} />
                      <span>+7 8422 360 363 доб. 103</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Конструкторские решения, проектирование датчиков, техническая документация
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/c4a20118-d30e-4853-a8fc-6acb57406274.png"
                      alt="Мартынова Людмила"
                      className="w-full h-full object-cover scale-150 object-[center_25%] my-6"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    Мартынова Людмила
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Начальник отдела продаж
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:sokol@midaus.com" className="hover:text-primary transition-colors">
                        sokol@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" size={16} />
                      <span>+7 8422 360 363 доб. 161</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Коммерческие предложения, ценообразование, условия поставки
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-white shadow-lg">
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" size={48} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    Маланин Михаил
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Главный метролог
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:malanin@midaus.com" className="hover:text-primary transition-colors">
                        malanin@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" size={16} />
                      <span>+7 8422 360 363 доб. 134</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Метрологическое обеспечение, калибровка, поверка приборов, аттестация оборудования
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/99c522b5-c873-4889-8df0-0576b6a43c3a.png"
                      alt="Лукьянов Сергей"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    Лукьянов Сергей
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Начальник группы качества
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:lsv@midaus.com" className="hover:text-primary transition-colors">
                        lsv@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" size={16} />
                      <span>+7 8422 360 363 доб. 155</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Контроль качества продукции, система менеджмента качества, сертификация
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-secondary">
              <CardContent className="p-8">
                <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2">
                  Не нашли нужного специалиста?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Напишите нам через форму обратной связи, и мы направим ваш вопрос профильному специалисту
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white" id="support">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-center mb-4">
              Техническая поддержка
            </h2>
            <p className="text-center text-white/90 mb-12 text-lg">
              Наши инженеры помогут подобрать оптимальное решение для ваших задач
            </p>
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Компания</Label>
                    <Input id="company" placeholder="ООО Компания" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input id="email" type="email" placeholder="email@company.ru" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="message" className="text-foreground">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваши требования к датчику давления..."
                      rows={4}
                    />
                  </div>
                </div>
                <Button className="w-full mt-6 bg-accent hover:bg-accent/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
                  alt="МИДАУС" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                ООО «МИДАУС» — разработка и производство высокоточных датчиков давления по технологии «кремний на сапфире» для промышленности.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Icon name="Phone" size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Производство</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Сертификаты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Программы</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Гарантия</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ООО "МИДАУС". Все права защищены.
          </div>
        </div>
      </section>
    </div>
  );
}