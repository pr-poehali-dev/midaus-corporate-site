import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/b0816222-cfbd-4b3a-88c9-322faa989e45.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            О компании МИДАУС
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Производитель высокоточных датчиков давления по технологии «кремний на сапфире»
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading font-bold text-3xl mb-6">История компании</h2>
            <p className="text-muted-foreground mb-4">
              ООО «МИДАУС» основано в 2005 году в городе Ульяновске. За годы работы компания стала 
              одним из ведущих российских производителей датчиков давления для промышленности.
            </p>
            <p className="text-muted-foreground mb-4">
              Мы специализируемся на разработке и производстве датчиков давления по уникальной 
              технологии «кремний на сапфире», которая обеспечивает высокую точность, стабильность 
              и долговечность измерений.
            </p>
            <p className="text-muted-foreground">
              Наша продукция включена в реестр российской продукции Минпромторга РФ и широко 
              применяется в различных отраслях промышленности.
            </p>
          </div>
          <div>
            <img 
              src="https://cdn.poehali.dev/files/b0816222-cfbd-4b3a-88c9-322faa989e45.jpg"
              alt="Производственный корпус"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">18+ лет</h3>
              <p className="text-sm text-muted-foreground">на рынке датчиков давления</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">200+</h3>
              <p className="text-sm text-muted-foreground">квалифицированных специалистов</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">5000+ м²</h3>
              <p className="text-sm text-muted-foreground">производственных площадей</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-16">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'CheckCircle2',
                title: 'Собственное производство',
                description: 'Полный цикл производства от разработки до выпуска готовой продукции'
              },
              {
                icon: 'Shield',
                title: 'Контроль качества',
                description: 'Метрологическая лаборатория и многоступенчатый контроль качества'
              },
              {
                icon: 'Truck',
                title: 'Быстрая поставка',
                description: 'Склад готовой продукции и оперативная отгрузка по всей России'
              },
              {
                icon: 'Headphones',
                title: 'Техническая поддержка',
                description: 'Квалифицированная поддержка на всех этапах эксплуатации'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Сертификаты и документы</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Сертификат соответствия ГОСТ Р', icon: 'FileCheck' },
              { title: 'Разрешение на применение Ростехнадзора', icon: 'FileCheck' },
              { title: 'Декларация о соответствии ТР ТС', icon: 'FileCheck' },
              { title: 'Сертификат ISO 9001', icon: 'FileCheck' }
            ].map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name={cert.icon} size={32} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium">{cert.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>8-800-200-03-04</li>
                <li>info@midaus.com</li>
                <li>г. Ульяновск, проезд Энергетиков, д. 4</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 МИДАУС. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}