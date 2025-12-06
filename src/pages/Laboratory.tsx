import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

export default function Laboratory() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/ddaf71d8-5625-4d64-a187-6246be0b06d8.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Метрологическая лаборатория
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Аккредитованная лаборатория с современным оборудованием для калибровки и поверки
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading font-bold text-3xl mb-6">О лаборатории</h2>
            <p className="text-muted-foreground mb-4">
              Метрологическая лаборатория МИДАУС аккредитована в системе Росаккредитации и 
              оснащена современным высокоточным оборудованием ведущих мировых производителей.
            </p>
            <p className="text-muted-foreground mb-4">
              Мы выполняем калибровку, поверку и метрологическую аттестацию датчиков давления, 
              манометров и другого измерительного оборудования в соответствии с требованиями 
              ГОСТ и международных стандартов.
            </p>
            <p className="text-muted-foreground">
              Лаборатория поддерживает эталонную базу с прослеживаемостью к государственным 
              первичным эталонам и регулярно проходит межлабораторные сличения.
            </p>
          </div>
          <div>
            <img 
              src="https://cdn.poehali.dev/files/ac629dca-703c-49d9-a667-09393387e41f.jpeg"
              alt="Калибровочная лаборатория"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-16">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Услуги лаборатории</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Gauge',
                title: 'Калибровка датчиков давления',
                description: 'Первичная и периодическая калибровка с выдачей протокола'
              },
              {
                icon: 'ClipboardCheck',
                title: 'Поверка средств измерений',
                description: 'Метрологическая поверка в соответствии с методиками ГОСТ'
              },
              {
                icon: 'Settings',
                title: 'Настройка и регулировка',
                description: 'Настройка нуля и диапазона измерения датчиков'
              },
              {
                icon: 'FileText',
                title: 'Аттестация методик',
                description: 'Разработка и аттестация методик калибровки и измерений'
              },
              {
                icon: 'Wrench',
                title: 'Ремонт и обслуживание',
                description: 'Диагностика, ремонт и техническое обслуживание приборов'
              },
              {
                icon: 'GraduationCap',
                title: 'Консультации',
                description: 'Метрологическое сопровождение и технические консультации'
              }
            ].map((service, index) => (
              <div key={index} className="flex gap-4 bg-white p-4 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">±0.05%</h3>
              <p className="text-sm text-muted-foreground">точность калибровки</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Thermometer" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">-40...+150°C</h3>
              <p className="text-sm text-muted-foreground">диапазон температур</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Gauge" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">0...100 МПа</h3>
              <p className="text-sm text-muted-foreground">диапазон давлений</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Оборудование лаборатории</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Грузопоршневые манометры',
                description: 'Первичные эталоны для калибровки высокого класса точности',
                image: 'https://cdn.poehali.dev/files/ac629dca-703c-49d9-a667-09393387e41f.jpeg'
              },
              {
                title: 'Климатические камеры',
                description: 'Для калибровки в широком диапазоне температур',
                image: 'https://cdn.poehali.dev/files/ddaf71d8-5625-4d64-a187-6246be0b06d8.jpg'
              }
            ].map((equipment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={equipment.image} 
                  alt={equipment.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{equipment.title}</h3>
                  <p className="text-sm text-muted-foreground">{equipment.description}</p>
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