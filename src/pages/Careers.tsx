import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
              alt="МИДАУС" 
              className="h-10 w-auto object-contain"
            />
          </Link>
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
          <Link to="/">
            <Button variant="default" className="hidden md:flex">
              Главная
            </Button>
          </Link>
        </div>
      </header>

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
            Вакансии
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Присоединяйтесь к команде профессионалов МИДАУС
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Briefcase" size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-2xl mb-2">
                    Инженер-электронщик (Разработчик)
                  </h2>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" size={16} />
                      <span>г. Ульяновск</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>Полная занятость</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>График 5/2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="ClipboardList" size={20} className="text-primary" />
                    Обязанности:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Проектирование измерительной аппаратуры с использованием микроконтроллеров (датчики давления, индикаторы)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Написание и отладка низкоуровневого ПО для микроконтроллеров</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Разработка компьютерного ПО для отладки и сервисного обслуживания устройств</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="UserCheck" size={20} className="text-primary" />
                    Требования:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Опыт разработки аналоговых и цифровых схем</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Навыки программирования под микроконтроллеры и ПК</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Базовые знания в области метрологии</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Star" size={20} className="text-primary" />
                    Условия:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Оформление по ТК РФ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>График: 5/2, пн-чт с 8:00 до 17:00, пт с 8:00 до 16:00</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Работа в команде опытных специалистов</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Mail" size={20} className="text-primary" />
                    Контактная информация:
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Для рассмотрения вашей кандидатуры просим направлять резюме на адрес{' '}
                    <a href="mailto:info@midaus.com" className="text-primary hover:underline font-semibold">
                      info@midaus.com
                    </a>
                    {' '}с указанием названия вакансии в теме письма.
                  </p>
                  <Button size="lg" className="w-full sm:w-auto">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить резюме
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">
                Присоединяйтесь к команде МИДАУС
              </h3>
              <p className="text-muted-foreground mb-6">
                Мы всегда ищем талантливых специалистов для развития нашей компании. 
                Если вы не нашли подходящую вакансию, но хотите работать с нами, отправьте своё резюме на общий адрес.
              </p>
              <Button variant="outline" size="lg">
                <Icon name="Mail" size={20} className="mr-2" />
                info@midaus.com
              </Button>
            </CardContent>
          </Card>
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
