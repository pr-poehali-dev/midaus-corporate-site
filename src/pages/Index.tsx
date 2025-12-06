import { useState, useEffect, useRef } from 'react';
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
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              className="h-10 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Продукция
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О компании
            </Link>
            <Link to="/laboratory" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Метрологическая лаборатория
            </Link>
            <Link to="/software" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Программное обеспечение
            </Link>
            <Link to="/news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Новости
            </Link>
          </nav>
          <Button variant="default" className="hidden md:flex" onClick={() => setShowCallModal(true)}>
            Заказать звонок
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
        
        <div 
          className={`md:hidden border-t border-border bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/products" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '50ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Продукция
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '100ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              О компании
            </Link>
            <Link 
              to="/laboratory" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '150ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Метрологическая лаборатория
            </Link>
            <Link 
              to="/software" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '200ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Программное обеспечение
            </Link>
            <Link 
              to="/news" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '250ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Новости
            </Link>
            <Button variant="default" className="w-full animate-slide-up" style={{ animationDelay: '300ms' }} onClick={() => { setShowCallModal(true); setMobileMenuOpen(false); }}>
                Заказать звонок
              </Button>
          </nav>
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

      <section 
        className={`py-16 transition-all duration-1000 ${
          visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        id="products"
        ref={(el) => (sectionRefs.current['products'] = el)}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Наша продукция
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Gauge',
                title: 'Датчики давления',
                description: 'Общепромышленные, взрывозащищенные, аналоговые и цифровые модели',
                link: '/products',
              },
              {
                icon: 'Cpu',
                title: 'Сенсоры давления',
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
              {
                icon: 'Monitor',
                title: 'Устройства настройки и индикации',
                description: 'Индикаторы, корректоры сигналов, конвертеры интерфейсов и устройства настройки',
                link: '#',
              },
              {
                icon: 'Wrench',
                title: 'Монтажная арматура и комплектующие',
                description: 'Вентильные блоки, демпферы, переходники',
                link: '#',
              },
            ].map((category, index) => (
              <Link to={category.link} key={index}>
                <Card
                  className={`group hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up h-full ${
                    index === 0 ? 'border-2 border-primary shadow-md' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center relative">
                    {index === 0 && (
                      <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-1.5">
                        <img 
                          src="https://cdn.poehali.dev/files/52691f8a-384c-41a9-90e3-9a8249ecd678.jpg"
                          alt="В реестре Минпромторга"
                          className="h-16 w-auto"
                          title="В реестре российской продукции Минпромторга"
                        />
                      </div>
                    )}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      index === 0 ? 'bg-primary' : 'bg-primary/10 group-hover:bg-primary'
                    }`}>
                      <Icon
                        name={category.icon}
                        size={32}
                        className={`transition-all duration-300 ${
                          index === 0 ? 'text-white' : 'text-primary group-hover:text-white'
                        }`}
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

      <section 
        className={`py-16 bg-secondary transition-all duration-1000 ${
          visibleSections.has('solutions') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        id="solutions"
        ref={(el) => (sectionRefs.current['solutions'] = el)}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Отраслевые решения
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: 'Building2', title: 'ЖКХ' },
              { icon: 'Drill', title: 'Бурение' },
              { icon: 'Package', title: 'Переработка полимеров' },
              { icon: 'UtensilsCrossed', title: 'Пищевая промышленность' },
              { icon: 'Waves', title: 'Измерение уровня' },
              { icon: 'Gauge', title: 'Вакуумная техника' },
              { icon: 'Car', title: 'Автомобильная промышленность' },
              { icon: 'Plane', title: 'Авиационная промышленность' },
            ].map((solution, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-2 group-hover:bg-primary transition-colors group-hover:scale-110 duration-300">
                  <Icon
                    name={solution.icon}
                    size={22}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <span className="font-medium text-xs text-center group-hover:text-primary transition-colors leading-tight">
                  {solution.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className={`py-16 transition-all duration-1000 ${
          visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        id="about"
        ref={(el) => (sectionRefs.current['about'] = el)}
      >
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
                Наши датчики работают в широчайшем температурном диапазоне (от –197°C до +500°C), устойчивы к сильным вибрациям и агрессивным средам
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
                Широкий ассортимент для любых задач
              </h3>
              <p className="text-muted-foreground">
                Мы предлагаем комплексные решения: от первичных преобразователей (модулей давления) и готовых датчиков с различными выходными сигналами до источников питания и средств защиты, покрывая все потребности в создании измерительной точки
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="font-heading font-bold text-2xl text-center mb-6">
              О нашем производстве
            </h3>
            <div className="relative rounded-lg overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://rutube.ru/play/embed/5f1d55ec80dbb1bb62cd4ea52458caeb"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
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

      <section 
        className={`py-16 bg-white transition-all duration-1000 ${
          visibleSections.has('specialists') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        id="specialists"
        ref={(el) => (sectionRefs.current['specialists'] = el)}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-4">
            Вопросы к специалистам
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Специалисты компании МИДАУС всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted border-2 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/3d07504c-3256-4d06-9827-becf8e1d2716.png"
                      alt="Бушев Константин"
                      className="w-full h-full object-cover scale-150 object-[center_20%] my-2"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-0.5">
                    Бушев Константин
                  </h3>
                  <p className="text-primary text-xs font-medium mb-2">
                    Генеральный директор
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Mail" size={12} />
                      <a href="mailto:info@midaus.ru" className="hover:text-primary transition-colors truncate">
                        info@midaus.ru
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Phone" size={12} />
                      <span className="text-xs">360 363 доб. 104</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted border-2 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/ba1aecfa-bb8c-46bd-b496-5fe035a2f25c.png"
                      alt="Купырин Владимир"
                      className="w-full h-full object-cover scale-150 object-[center_20%] my-3"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-0.5">
                    Купырин Владимир
                  </h3>
                  <p className="text-primary text-xs font-medium mb-2">
                    Технический директор
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Mail" size={12} />
                      <a href="mailto:kupyrin@midaus.com" className="hover:text-primary transition-colors truncate">
                        kupyrin@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Phone" size={12} />
                      <span className="text-xs">360 363 доб. 106</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted border-2 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/37913a75-6054-49a6-8b1c-33288be6200d.png"
                      alt="Савченко Евгений"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-0.5">
                    Савченко Евгений
                  </h3>
                  <p className="text-primary text-xs font-medium mb-1">
                    Директор по развитию
                  </p>
                  <p className="text-[10px] text-muted-foreground italic mb-2">
                    Кандидат техн. наук
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Mail" size={12} />
                      <a href="mailto:seg@midaus.com" className="hover:text-primary transition-colors truncate">
                        seg@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Phone" size={12} />
                      <span className="text-xs">360 363 доб. 154</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted border-2 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/a69e9bf0-3323-44ab-bf08-0a0d54fa6088.png"
                      alt="Алашеев Валентин"
                      className="w-full h-full object-cover scale-125 object-[center_30%]"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-0.5">
                    Алашеев Валентин
                  </h3>
                  <p className="text-primary text-xs font-medium mb-2">
                    Главный конструктор
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Mail" size={12} />
                      <a href="mailto:ala@midaus.com" className="hover:text-primary transition-colors truncate">
                        ala@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Phone" size={12} />
                      <span className="text-xs">360 363 доб. 103</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted border-2 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/c4a20118-d30e-4853-a8fc-6acb57406274.png"
                      alt="Мартынова Людмила"
                      className="w-full h-full object-cover scale-150 object-[center_25%] my-3"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-0.5">
                    Мартынова Людмила
                  </h3>
                  <p className="text-primary text-xs font-medium mb-2">
                    Начальник отдела продаж
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Mail" size={12} />
                      <a href="mailto:sokol@midaus.com" className="hover:text-primary transition-colors truncate">
                        sokol@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Phone" size={12} />
                      <span className="text-xs">360 363 доб. 161</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted border-2 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/7d62bd22-19be-4dc5-99a6-e6fdc092c2e5.png"
                      alt="Маланин Михаил"
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-0.5">
                    Маланин Михаил
                  </h3>
                  <p className="text-primary text-xs font-medium mb-2">
                    Главный метролог
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Mail" size={12} />
                      <a href="mailto:malanin@midaus.com" className="hover:text-primary transition-colors truncate">
                        malanin@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Phone" size={12} />
                      <span className="text-xs">360 363 доб. 134</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted border-2 border-white shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/99c522b5-c873-4889-8df0-0576b6a43c3a.png"
                      alt="Лукьянов Сергей"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-0.5">
                    Лукьянов Сергей
                  </h3>
                  <p className="text-primary text-xs font-medium mb-2">
                    Начальник группы качества
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Mail" size={12} />
                      <a href="mailto:lsv@midaus.com" className="hover:text-primary transition-colors truncate">
                        lsv@midaus.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Phone" size={12} />
                      <span className="text-xs">360 363 доб. 155</span>
                    </div>
                  </div>
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

      <section 
        className={`py-16 bg-gradient-to-br from-primary to-primary/80 text-white transition-all duration-1000 ${
          visibleSections.has('support') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        id="support"
        ref={(el) => (sectionRefs.current['support'] = el)}
      >
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
                <a href="mailto:info@midaus.com" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Email">
                  <Icon name="Mail" size={20} />
                </a>
                <a href="tel:+88002000304" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Телефон">
                  <Icon name="Phone" size={20} />
                </a>
                <a href="https://rutube.ru/channel/30623596" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="RuTube канал">
                  <Icon name="Youtube" size={20} />
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
                <li><Link to="/software" className="text-muted-foreground hover:text-primary transition-colors">Программное обеспечение</Link></li>
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
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </Button>
      )}

      {showCallModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowCallModal(false)}>
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-xl">Заказать звонок</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowCallModal(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Оставьте свои контакты, и мы перезвоним вам в течение рабочего дня
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowCallModal(false); }}>
                <div className="space-y-2">
                  <Label htmlFor="call-name">Имя *</Label>
                  <Input id="call-name" placeholder="Ваше имя" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="call-phone">Телефон *</Label>
                  <Input id="call-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="call-comment">Комментарий</Label>
                  <Textarea id="call-comment" placeholder="Опишите ваш вопрос или задачу" rows={3} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-secondary py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
                alt="МИДАУС" 
                className="h-10 w-auto mb-4 object-contain"
              />
              <p className="text-sm text-muted-foreground">
                Производство датчиков давления и систем измерения для промышленности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary">О компании</Link></li>
                <li><Link to="/laboratory" className="hover:text-primary">Метрологическая лаборатория</Link></li>
                <li><Link to="/news" className="hover:text-primary">Новости</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-primary">Датчики давления</Link></li>
                <li><Link to="/software" className="hover:text-primary">Программное обеспечение</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Ульяновск</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (8422) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@midaus.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 МИДАУС. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}