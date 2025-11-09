import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedRange, setSelectedRange] = useState('');

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
            backgroundImage: `url('https://cdn.poehali.dev/projects/821a1e50-8ec8-4e2a-91f3-24ac4fed203b/files/d2a73224-025e-4117-8bf9-05e4149235eb.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              РОССИЙСКИЙ ПРОИЗВОДИТЕЛЬ ДАТЧИКОВ ДАВЛЕНИЯ
            </h1>
            <p className="text-xl text-white/90 mb-8 font-light">
              Высокоточные решения для промышленности с 1993 года
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Icon name="Search" size={20} className="mr-2" />
                Подобрать датчик
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
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
              Подбор датчика давления
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Отрасль применения</Label>
                    <select
                      id="industry"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Выберите отрасль</option>
                      <option value="oil">Нефтегазовая промышленность</option>
                      <option value="energy">Энергетика</option>
                      <option value="chem">Химическая промышленность</option>
                      <option value="water">Водоподготовка</option>
                      <option value="metal">Металлургия</option>
                      <option value="machine">Машиностроение</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="range">Диапазон измерений</Label>
                    <select
                      id="range"
                      value={selectedRange}
                      onChange={(e) => setSelectedRange(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Выберите диапазон</option>
                      <option value="low">0-1 МПа</option>
                      <option value="medium">0-10 МПа</option>
                      <option value="high">0-100 МПа</option>
                      <option value="ultra">Более 100 МПа</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accuracy">Точность</Label>
                    <select
                      id="accuracy"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Выберите точность</option>
                      <option value="standard">±0.5%</option>
                      <option value="high">±0.25%</option>
                      <option value="ultra">±0.1%</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="protection">Взрывозащита</Label>
                    <select
                      id="protection"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Не требуется</option>
                      <option value="ex">Требуется Ex</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-accent hover:bg-accent/90">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти подходящие модели
                </Button>
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
                description: 'Широкий модельный ряд для различных отраслей',
              },
              {
                icon: 'Monitor',
                title: 'Индикаторы',
                description: 'Цифровые и аналоговые индикаторы давления',
              },
              {
                icon: 'Zap',
                title: 'Блоки питания',
                description: 'Стабилизированное питание для датчиков',
              },
              {
                icon: 'Shield',
                title: 'Блоки защиты',
                description: 'Защита измерительных цепей от перегрузок',
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up"
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary" id="solutions">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Отраслевые решения
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: 'Fuel', title: 'Нефтегаз' },
              { icon: 'Zap', title: 'Энергетика' },
              { icon: 'Droplets', title: 'Химия' },
              { icon: 'Droplet', title: 'Водоподготовка' },
              { icon: 'Factory', title: 'Металлургия' },
              { icon: 'Settings', title: 'Машиностроение' },
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
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" size={36} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                Собственное производство
              </h3>
              <p className="text-muted-foreground">
                Полный цикл разработки и производства в России. Контроль качества на всех этапах.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FlaskConical" size={36} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                Испытательная лаборатория
              </h3>
              <p className="text-muted-foreground">
                Аттестованная лаборатория для метрологической поверки и калибровки датчиков.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={36} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                30+ лет опыта
              </h3>
              <p className="text-muted-foreground">
                С 1993 года разрабатываем решения для крупнейших промышленных предприятий России.
              </p>
            </div>
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
                Производство датчиков давления для промышленности с 1993 года. 
                Качество, надежность, российские технологии.
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