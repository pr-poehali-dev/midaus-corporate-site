import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Products() {
  const [showDevModal, setShowDevModal] = useState(false);

  const products = [
    {
      id: 'mida-13p',
      name: 'МИДА-13П',
      description: 'Общепромышленные датчики с аналоговым стандартным сигналом для измерения давления в обычном и взрывозащищённом (-Ех и -Exd) исполнениях',
      price: '12 500',
      image: 'https://cdn.poehali.dev/files/b6fbb7ec-4f53-4d1f-b905-fd7e4106c1e9.JPG',
      specs: ['0...160 МПа', 'от ±0,15%', 'Аналоговый', '-60...+80 °C'],
      gosreestr: '№ 17636-17',
    },
    {
      id: 'mida-15',
      name: 'МИДА-15',
      description: 'Малогаборитные общепромышленные датчики с аналоговым и цифровым выходным сигналом, в том числе с низким энергопотреблением и с взрывозащищённым исполнением -Ех, Exd',
      price: '15 800',
      image: 'https://cdn.poehali.dev/files/f6170bf3-77d4-4804-ba4c-3a0939d5b87c.JPG',
      specs: ['0...250 МПа', 'от ±0,05%', 'Аналоговый/Цифровой', '-40...+125 °C'],
      gosreestr: '№ 50730-17',
    },
    {
      id: 'mida-12',
      name: 'МИДА-12П',
      description: 'Датчики давления высокотемпературных и низкотемпературных сред, есть взрывозащита Ex',
      price: '18 200',
      image: 'https://cdn.poehali.dev/files/c10af49a-98c2-485f-bf8b-3ccf239ce5fb.JPG',
      specs: ['0...160 МПа', 'от ±0,25%', 'Аналоговый/Цифровой', '-197...+500 °C'],
      gosreestr: '№ 17635-03',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8 relative">
        <div 
          className="absolute right-0 top-32 w-96 h-96 opacity-[0.15] bg-no-repeat bg-contain pointer-events-none z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/mida-pipes.jpg')`,
          }}
        ></div>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
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
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      🇷🇺 Россия
                    </span>
                    <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded font-medium">
                      Госреестр СИ {product.gosreestr}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="text-xs bg-secondary px-2 py-1 rounded text-center">
                        {spec}
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => setShowDevModal(true)}
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
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

      {showDevModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" 
          onClick={() => setShowDevModal(false)}
        >
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Construction" size={40} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">В РАЗРАБОТКЕ</h3>
              <p className="text-muted-foreground mb-6">
                Страница с подробной информацией о датчике находится в разработке. 
                Пожалуйста, свяжитесь с нами для получения детальной информации.
              </p>
              <Button 
                onClick={() => setShowDevModal(false)}
                className="w-full"
              >
                Понятно
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}