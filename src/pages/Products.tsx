import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

export default function Products() {
  const products = [
    {
      id: 'mida-13p',
      name: 'МИДА-13П',
      description: 'Общепромышленный датчик давления с унифицированным выходным сигналом',
      price: '12 500',
      image: 'https://cdn.poehali.dev/files/b6fbb7ec-4f53-4d1f-b905-fd7e4106c1e9.JPG',
      specs: ['0...0,1 МПа', '±0,25%', '4...20 мА', 'IP65'],
      inStock: true,
    },
    {
      id: 'mida-15',
      name: 'МИДА-15',
      description: 'Датчик давления для работы в условиях повышенной вибрации',
      price: '15 800',
      image: 'https://cdn.poehali.dev/files/f6170bf3-77d4-4804-ba4c-3a0939d5b87c.JPG',
      specs: ['0...1 МПа', '±0,1%', '4...20 мА', 'IP67'],
      inStock: true,
    },
    {
      id: 'mida-12',
      name: 'МИДА-12',
      description: 'Датчик давления для агрессивных сред с защитой от коррозии',
      price: '18 200',
      image: 'https://cdn.poehali.dev/files/c10af49a-98c2-485f-bf8b-3ccf239ce5fb.JPG',
      specs: ['0...10 МПа', '±0,25%', '4...20 мА', 'IP68'],
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-foreground">Датчики давления</span>
        </nav>

        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Датчики давления
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Высокоточные датчики давления на основе технологии «кремний на сапфире» 
            для различных отраслей промышленности. Полный цикл производства в России.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-white p-6 border-b border-border">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {product.inStock ? (
                      <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        <Icon name="CheckCircle2" size={14} />
                        В наличии
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        <Icon name="Clock" size={14} />
                        Под заказ
                      </span>
                    )}
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      🇷🇺 Россия
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="text-xs bg-secondary px-2 py-1 rounded text-center">
                        {spec}
                      </div>
                    ))}
                  </div>



                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-accent hover:bg-accent/90">
                      <Link to={`/product/${product.id}`}>
                        Подробнее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="py-12 bg-secondary rounded-lg mt-12">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-center mb-4">
              Не нашли подходящий датчик?
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Наши инженеры помогут подобрать оптимальное решение для ваших задач 
              или разработают датчик под ваши требования
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать на email
              </Button>
            </div>
          </div>
        </section>
      </div>

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
                ООО «МИДАУС» — разработка и производство высокоточных датчиков давления по технологии «кремний на сапфире» для промышленности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary">О компании</Link></li>
                <li><Link to="/laboratory" className="hover:text-primary">Метрологическая лаборатория</Link></li>
                <li><Link to="/news" className="hover:text-primary">Новости</Link></li>
                <li><Link to="/careers" className="hover:text-primary font-semibold">Вакансии</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-primary font-semibold">Датчики давления</Link></li>
                <li><a href="#" className="hover:text-primary">Сенсоры давления</a></li>
                <li><a href="#" className="hover:text-primary">Источники питания</a></li>
                <li><a href="#" className="hover:text-primary">Средства защиты</a></li>
                <li><a href="#" className="hover:text-primary">Устройства настройки и индикации</a></li>
                <li><a href="#" className="hover:text-primary">Монтажная арматура</a></li>
                <li><Link to="/software" className="hover:text-primary font-semibold">Программное обеспечение</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>г. Ульяновск, проезд Энергетиков, д. 4</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 8422 360 363</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8-800-200-03-04 (бесплатно по РФ)</span>
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
              © 2025 МИДАУС. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}