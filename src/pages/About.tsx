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
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              ООО «МИДАУС» — ведущий российский разработчик и производитель высокоточных датчиков давления на базе уникальной технологии «кремний на сапфире» (КНС).
            </p>
            <p className="text-muted-foreground mb-6">
              С 1991 года мы создаём надёжные и инновационные решения для самых требовательных отраслей: нефтегазовой промышленности, энергетики, ЖКХ, космической и транспортной техники. Наша продукция работает в экстремальных условиях — при температурах от –197°C до +500°C, вибрациях и в агрессивных средах.
            </p>
            <p className="text-muted-foreground mb-6">
              Наш потенциал — это команда. Над совершенствованием технологий и созданием новых продуктов работает сплочённый коллектив опытных инженеров, конструкторов и учёных, включая кандидатов наук в области разработки датчиков. Это сочетание глубокой научной базы и практического опыта позволяет нам вести постоянные работы по улучшению метрологических характеристик и надёжности приборов.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">С 1991 года</h3>
              <p className="text-sm text-muted-foreground">на рынке датчиков давления</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">1000+</h3>
              <p className="text-sm text-muted-foreground">промышленных клиентов</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Экспорт</h3>
              <p className="text-sm text-muted-foreground">Китай, Индия, страны СНГ</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Полный цикл</h3>
              <p className="text-sm text-muted-foreground">производства в России</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-16">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Ключевые принципы нашей работы</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Flag',
                title: 'Отечественная технология',
                description: 'Используем собственные разработки и полный производственный цикл в России, что гарантирует независимость, контроль качества и стабильность поставок'
              },
              {
                icon: 'Package',
                title: 'Комплексные решения',
                description: 'Производим не только датчики, но и всю необходимую периферию: источники питания, средства защиты, устройства индикации и настройки'
              },
              {
                icon: 'Users',
                title: 'Сильная команда',
                description: 'Ключевые разработки и производство ведут опытные специалисты — инженеры и конструкторы с многолетним стажем'
              },
              {
                icon: 'Award',
                title: 'Доказанная надёжность',
                description: 'Нашими клиентами являются более 1000 промышленных компаний. Продукция поставляется как по России, так и на экспорт'
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

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg mb-16">
          <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto">
            Сегодня МИДАУС — это современное предприятие с замкнутым технологическим циклом, сильной инженерной командой и фокусом на создание конкурентоспособной, высокотехнологичной продукции для точного измерения давления.
          </p>
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