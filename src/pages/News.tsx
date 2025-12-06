import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: '15 ноября 2024',
      title: 'МИДАУС представил новую линейку датчиков МИДА-15',
      description: 'Компания анонсировала выпуск датчиков давления нового поколения с цифровым выходом и расширенными функциями диагностики.',
      image: 'https://cdn.poehali.dev/files/f8cbff73-54cc-4cd0-8d05-1a83dab572df.JPG',
      category: 'Продукция'
    },
    {
      id: 2,
      date: '3 ноября 2024',
      title: 'Участие в выставке "Нефтегаз-2024"',
      description: 'МИДАУС принял участие в крупнейшей международной выставке нефтегазового оборудования и представил новые решения для отрасли.',
      image: 'https://cdn.poehali.dev/files/b0816222-cfbd-4b3a-88c9-322faa989e45.jpg',
      category: 'События'
    },
    {
      id: 3,
      date: '20 октября 2024',
      title: 'Расширение метрологической лаборатории',
      description: 'Введено в эксплуатацию новое оборудование для калибровки датчиков в расширенном диапазоне температур.',
      image: 'https://cdn.poehali.dev/files/ddaf71d8-5625-4d64-a187-6246be0b06d8.jpg',
      category: 'Компания'
    },
    {
      id: 4,
      date: '5 октября 2024',
      title: 'Получен новый сертификат соответствия',
      description: 'Продукция МИДАУС успешно прошла сертификацию по обновленным требованиям ГОСТ Р.',
      image: 'https://cdn.poehali.dev/files/ac629dca-703c-49d9-a667-09393387e41f.jpeg',
      category: 'Сертификаты'
    },
    {
      id: 5,
      date: '18 сентября 2024',
      title: 'Обновление программного обеспечения MIDA Configurator',
      description: 'Выпущена версия 2.5 с поддержкой новых моделей датчиков и улучшенным интерфейсом.',
      image: 'https://cdn.poehali.dev/files/1b6c8ea8-5bea-48db-b363-50ae180491ca.jpeg',
      category: 'ПО'
    },
    {
      id: 6,
      date: '1 сентября 2024',
      title: 'День знаний в МИДАУС',
      description: 'Компания провела экскурсии для школьников и студентов технических вузов Ульяновска.',
      image: 'https://cdn.poehali.dev/files/48ace166-ee49-4617-b80f-a5ff3e3b8ac1.jpeg',
      category: 'События'
    }
  ];

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
            Новости компании
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            События, достижения и обновления продукции МИДАУС
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>{news.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {news.description}
                </p>
                <Button variant="link" className="p-0 h-auto font-semibold">
                  Читать полностью <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Показать больше новостей
          </Button>
        </div>
      </div>

      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Будьте в курсе новостей</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подпишитесь на наши новости, чтобы первыми узнавать о новых продуктах, акциях и событиях
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>
              Подписаться
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}