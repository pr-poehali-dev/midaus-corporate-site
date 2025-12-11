import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/newsData';

const getAttachmentIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'FileText';
    case 'doc':
      return 'File';
    case 'image':
      return 'Image';
    default:
      return 'Paperclip';
  }
};

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const news = newsItems.find(item => item.id === Number(id));

  if (!news) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-heading mb-4">Новость не найдена</h1>
          <Button onClick={() => navigate('/news')}>
            Вернуться к новостям
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[300px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/b0816222-cfbd-4b3a-88c9-322faa989e45.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="ghost"
            onClick={() => navigate('/news')}
            className="text-white hover:text-white/80 mb-4"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к новостям
          </Button>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {news.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/90">
              <Icon name="Calendar" size={16} />
              <span>{news.date}</span>
            </div>
            <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {news.category}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mb-8">
            <img
              src={news.images ? news.images[currentImageIndex] : news.image}
              alt={news.title}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            {news.images && news.images.length > 1 && (
              <>
                <button
                  onClick={() => {
                    const prev = currentImageIndex === 0 ? news.images!.length - 1 : currentImageIndex - 1;
                    setCurrentImageIndex(prev);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all"
                  aria-label="Предыдущее фото"
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>
                <button
                  onClick={() => {
                    const next = currentImageIndex === news.images!.length - 1 ? 0 : currentImageIndex + 1;
                    setCurrentImageIndex(next);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all"
                  aria-label="Следующее фото"
                >
                  <Icon name="ChevronRight" size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {news.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentImageIndex === idx
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Фото ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            {news.fullText.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {news.attachments && news.attachments.length > 0 && (
            <div className="border-t pt-8">
              <h3 className="font-heading font-semibold text-xl mb-6 flex items-center gap-2">
                <Icon name="Paperclip" size={24} />
                Прикрепленные документы
              </h3>
              <div className="space-y-4">
                {news.attachments.map((attachment, index) => (
                  <a
                    key={index}
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 border border-border rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={getAttachmentIcon(attachment.type)} size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {attachment.name}
                      </div>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
