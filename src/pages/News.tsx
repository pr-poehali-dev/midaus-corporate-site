import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/newsData';

export default function News() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

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
            События, достижения и обновления продукции
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={news.images ? news.images[currentImageIndex[news.id] || 0] : news.image} 
                  alt={news.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {news.images && news.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const current = currentImageIndex[news.id] || 0;
                        const prev = current === 0 ? news.images!.length - 1 : current - 1;
                        setCurrentImageIndex({ ...currentImageIndex, [news.id]: prev });
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                      aria-label="Предыдущее фото"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const current = currentImageIndex[news.id] || 0;
                        const next = current === news.images!.length - 1 ? 0 : current + 1;
                        setCurrentImageIndex({ ...currentImageIndex, [news.id]: next });
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                      aria-label="Следующее фото"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {news.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex({ ...currentImageIndex, [news.id]: idx });
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            (currentImageIndex[news.id] || 0) === idx
                              ? 'bg-white w-6'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Фото ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
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
                {news.attachments && news.attachments.length > 0 && (
                  <div className="flex items-center gap-2 mb-3 text-sm text-primary">
                    <Icon name="Paperclip" size={14} />
                    <span>{news.attachments.length} {news.attachments.length === 1 ? 'документ' : 'документа'}</span>
                  </div>
                )}
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {news.preview}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-semibold"
                  onClick={() => navigate(`/news/${news.id}`)}
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
            Подпишитесь на наши новости, чтобы оперативно узнавать о новых изменениях и событиях
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