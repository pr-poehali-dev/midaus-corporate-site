import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

export default function Laboratory() {
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/Img_190321083531617-1.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Метрологическая лаборатория
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Аккредитованная лаборатория с современным оборудованием для поверки средств измерения давления
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
              Мы выполняем поверку датчиков давления, манометров и других средств измерения 
              давления в соответствии с требованиями ГОСТ и аттестованными методиками поверки.
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
                icon: 'ClipboardCheck',
                title: 'Поверка датчиков давления',
                description: 'Первичная и периодическая поверка датчиков давления с выдачей свидетельства'
              },

              {
                icon: 'Settings',
                title: 'Настройка и регулировка',
                description: 'Настройка нуля и диапазона измерения датчиков давления'
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
              },
              {
                icon: 'FileText',
                title: 'Документация',
                description: 'Полный комплект документов по результатам поверки'
              },
              {
                icon: 'Database',
                title: 'Загрузка в ФГИС АРШИН',
                description: 'Загрузка сведений о поверке в ФГИС АРШИН в день поверки'
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

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">от 0.05%</h3>
              <p className="text-sm text-muted-foreground">основная погрешность поверяемых датчиков</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Gauge" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">0...250 МПа</h3>
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
                description: 'Первичные эталоны для поверки высокого класса точности',
                image: 'https://cdn.poehali.dev/files/20250924_153212.jpg'
              },
              {
                title: 'Климатические камеры',
                description: 'Для поверки в широком диапазоне температур',
                image: 'https://cdn.poehali.dev/files/IMG_9891.jpg'
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

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Аттестат аккредитации</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Лаборатория аккредитована в национальной системе аккредитации Росаккредитации
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" download>
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать аттестат
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="ClipboardList" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Область аккредитации</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Перечень средств измерений, поверку которых выполняет лаборатория
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" download>
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать область аккредитации
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Icon name="ClipboardCheck" size={48} className="text-white mx-auto mb-4" />
              <h2 className="font-heading font-bold text-3xl mb-2">
                Заказать поверку средств измерения
              </h2>
              <p className="text-white/90 text-lg">
                Оставьте заявку, и наши специалисты свяжутся с вами для уточнения деталей
              </p>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-white text-primary hover:bg-white/90"
              onClick={() => setShowVerificationModal(true)}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Оставить заявку на поверку
            </Button>
          </CardContent>
        </Card>
      </div>

      {showVerificationModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowVerificationModal(false)}>
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-xl">Заявка на поверку СИ давления</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowVerificationModal(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Заполните форму, и мы свяжемся с вами для согласования сроков и стоимости поверки
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowVerificationModal(false); }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ver-company">Организация *</Label>
                    <Input id="ver-company" placeholder="ООО Компания" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ver-inn">ИНН</Label>
                    <Input id="ver-inn" placeholder="1234567890" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ver-contact">Контактное лицо *</Label>
                    <Input id="ver-contact" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ver-phone">Телефон *</Label>
                    <Input id="ver-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ver-email">Email *</Label>
                  <Input id="ver-email" type="email" placeholder="email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ver-equipment">Перечень СИ для поверки *</Label>
                  <Textarea 
                    id="ver-equipment" 
                    placeholder="Укажите наименование, тип, заводской номер и диапазон измерения средств измерения..." 
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ver-quantity">Количество приборов</Label>
                  <Input id="ver-quantity" type="number" placeholder="1" min="1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ver-deadline">Желаемые сроки</Label>
                  <Input id="ver-deadline" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ver-comment">Дополнительная информация</Label>
                  <Textarea id="ver-comment" placeholder="Особые требования, адрес доставки и т.д." rows={3} />
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