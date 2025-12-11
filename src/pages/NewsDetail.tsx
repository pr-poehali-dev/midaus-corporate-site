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
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {news.title}
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-white/90">
              <Icon name="Calendar" size={16} />
              <span>{news.date}</span>
            </div>
            {Array.isArray(news.category) ? (
              news.category.map((cat, idx) => (
                <span key={idx} className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))
            ) : (
              <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full">
                {news.category}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/news')}
            className="mb-6 hover:bg-secondary"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к новостям
          </Button>
          <div className="relative mb-8">
            <img
              src={news.images ? news.images[currentImageIndex] : news.image}
              alt={news.title}
              className="w-full max-h-[500px] object-contain rounded-lg bg-secondary"
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

          <div className="flex items-center justify-between mb-6 pb-4 border-b">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Share2" size={18} />
              <span className="font-medium">Поделиться:</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const url = window.location.href;
                  window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
                }}
                className="p-2 rounded-lg bg-[#0077FF] hover:bg-[#0066DD] text-white transition-colors"
                aria-label="Поделиться ВКонтакте"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.785 16.241s.288-.032.436-.189c.136-.145.131-.417.131-.417s-.019-1.271.57-1.458c.579-.184 1.323 1.228 2.111 1.772.597.413 1.05.322 1.05.322l2.111-.029s1.104-.068.581-.937c-.043-.071-.306-.644-1.574-1.822-1.328-1.233-1.15-1.033.449-3.164.974-1.297 1.363-2.089 1.241-2.428-.116-.323-.833-.238-.833-.238l-2.375.015s-.176-.024-.307.054c-.128.076-.211.253-.211.253s-.378.997-.881 1.845c-1.061 1.787-1.486 1.882-1.66 1.771-.405-.259-.304-1.041-.304-1.596 0-1.734.263-2.457-.513-2.642-.258-.062-.448-.102-1.107-.109-.847-.009-1.563.003-1.969.201-.27.132-.478.426-.351.443.157.021.513.096.702.353.244.332.235 1.078.235 1.078s.14 2.042-.327 2.295c-.321.174-.761-.181-1.706-1.803-.484-.835-.85-1.76-.85-1.76s-.071-.173-.197-.265c-.153-.112-.367-.147-.367-.147l-2.256.015s-.339.01-.463.157c-.111.131-.009.401-.009.401s1.777 4.144 3.794 6.238c1.85 1.921 3.948 1.793 3.948 1.793h.952z"/>
                </svg>
              </button>
              <button
                onClick={() => {
                  const url = window.location.href;
                  const text = news.title;
                  window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=400');
                }}
                className="p-2 rounded-lg bg-[#0088cc] hover:bg-[#0077bb] text-white transition-colors"
                aria-label="Поделиться в Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </button>
              <button
                onClick={() => {
                  const url = window.location.href;
                  const text = news.title;
                  window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank', 'width=600,height=400');
                }}
                className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white transition-colors"
                aria-label="Поделиться в WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Ссылка скопирована в буфер обмена!');
                }}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                aria-label="Скопировать ссылку"
              >
                <Icon name="Link" size={20} />
              </button>
            </div>
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