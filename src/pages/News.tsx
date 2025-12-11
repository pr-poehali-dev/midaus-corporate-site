import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  preview: string;
  fullText: string;
  image: string;
  category: string;
}

export default function News() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: 'Декабрь 2025',
      title: 'Запущен новый корпоративный сайт с онлайн-конфигуратором датчиков',
      preview: 'Рады сообщить, что началась работа над новым корпоративным сайтом нашей компании. Ресурс находится в активной разработке и постепенно пополняется контентом.',
      fullText: 'Рады сообщить, что началась работа над новым корпоративным сайтом нашей компании. Ресурс находится в активной разработке и постепенно пополняется контентом.\n\nУже сейчас полностью доступен и функционирует раздел, посвященный датчикам давления серии МИДА-13П. Его ключевая особенность — интеллектуальный онлайн-конфигуратор заказа. Система позволяет инженерам и проектировщикам самостоятельно, шаг за шагом, сформировать точную спецификацию нужного датчика. Конфигуратор гарантирует техническую корректность заказа, исключая ошибки в совместимости параметров.\n\nНа основе выбранных опций система автоматически генерирует габаритный чертеж будущего изделия, что значительно упрощает процесс проектирования и согласования.\n\nВ ближайшее время на сайт будут добавлены аналогичные разделы для серий МИДА-15 и МИДА-12.\n\nТакже на сайте уже работает сервис для наших клиентов: вы можете оформить заявку на поверку средств измерения давления напрямую через раздел «Метрологическая лаборатория».\n\nМы продолжаем работу над сайтом и скоро представим его в полном объеме!',
      image: 'https://cdn.poehali.dev/files/Рисунок1.png',
      category: 'Компания'
    },
    {
      id: 2,
      date: 'Ноябрь 2025',
      title: 'МИДА подтвердила 100% российское происхождение датчиков давления',
      preview: 'Компания «МИКРОЭЛЕКТРОННЫЕ ДАТЧИКИ И УСТРОЙСТВА» получила официальные заключения Министерства промышленности и торговли РФ, подтверждающие статус российской промышленной продукции.',
      fullText: 'Компания «МИКРОЭЛЕКТРОННЫЕ ДАТЧИКИ И УСТРОЙСТВА» получила официальные заключения Министерства промышленности и торговли РФ, подтверждающие статус российской промышленной продукции для всех трёх ключевых серий датчиков давления: МИДА-15, МИДА-13П и МИДА-12.\n\nРеестровые заключения № 10289080, 10289081, 10289082 устанавливают максимальный уровень локализации производства — 100%. Это означает, что все этапы — от проектирования и производства электронных компонентов до сборки, программирования и финальных испытаний — осуществляются на территории Российской Федерации.\n\nДанный статус не только подчеркивает наш вклад в развитие отечественного приборостроения, но и открывает для наших заказчиков дополнительные возможности при участии в государственных и корпоративных закупках, где предусмотрены преференции для российской продукции.',
      image: 'https://cdn.poehali.dev/files/Безымянный рисунок.jpg',
      category: 'Сертификаты'
    },
    {
      id: 3,
      date: 'Ноябрь 2025',
      title: 'Опытная эксплуатация датчиков МИДА-15 на Ульяновском пивзаводе прошла успешно',
      preview: 'Завершился этап опытной эксплуатации наших датчиков давления в условиях реального производства на Ульяновском пивзаводе.',
      fullText: 'Завершился этап опытной эксплуатации наших датчиков давления в условиях реального производства на Ульяновском пивзаводе.\n\nДля решения задач пищевого производства была разработана специальная модификация датчика МИДА-15 в гигиеническом исполнении. Основные требования — высокая коррозионная стойкость, возможность CIP-мойки и полное соответствие санитарным нормам.\n\nПо результатам испытаний получено положительное заключение. Датчики успешно зарекомендовали себя, полностью заменив импортные аналоги немецкого производства. На данную модификацию также получен соответствующий сертификат, подтверждающий ее пригодность для применения в пищевой и фармацевтической отраслях.\n\nЭтот проект наглядно демонстрирует способность нашей компании гибко реагировать на запросы рынка, разрабатывать специализированные решения и предлагать надежную отечественную альтернативу импортному оборудованию.',
      image: 'https://cdn.poehali.dev/files/ddaf71d8-5625-4d64-a187-6246be0b06d8.jpg',
      category: 'Компания'
    },
    {
      id: 4,
      date: 'Май 2025',
      title: 'Датчики давления расплава МИДА-12П подтвердили соответствие требованиям ИНТИ',
      preview: 'Компания «Мидаус» успешно прошла независимый аудит производственной площадки и получила Заключение АНО «Институт нефтегазовых технологических инициатив» (ИНТИ).',
      fullText: 'Компания «Мидаус» успешно прошла независимый аудит производственной площадки и получила Заключение АНО «Институт нефтегазовых технологических инициатив» (ИНТИ) № INTI.QS.PS.90-12-2024-510.\n\nЭксперты института подтвердили, что наше производство в г. Ульяновск технически и организационно способно выпускать продукцию, соответствующую строгим требованиям. В рамках аудита была оценена способность компании изготавливать датчики избыточного давления МИДА-ДИ-12П (датчики давления расплава полимера).\n\nПолученный документ удостоверяет соответствие наших процессов и продукции высоким стандартам, что особенно важно для поставок в нефтегазовый сектор и на другие ответственные объекты. Заключение действует до 11 декабря 2027 года.\n\nЭто достижение расширяет возможности для участия наших датчиков серии МИДА-12 в сложных промышленных проектах, где требуется подтверждение компетенции производителя от авторитетных отраслевых институтов.',
      image: 'https://cdn.poehali.dev/files/ac629dca-703c-49d9-a667-09393387e41f.jpeg',
      category: 'Сертификаты'
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
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{news.date}</span>
                  </div>
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {news.preview}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-semibold"
                  onClick={() => setSelectedNews(news)}
                >
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

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl mb-4">
              {selectedNews?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedNews && (
            <div>
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>{selectedNews.date}</span>
                </div>
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {selectedNews.category}
                </span>
              </div>
              <div className="prose prose-sm max-w-none">
                {selectedNews.fullText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}