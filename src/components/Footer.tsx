import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
              <li><Link to="/devices" className="hover:text-primary font-semibold">Устройства настройки и индикации</Link></li>
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 МИДАУС. Все права защищены.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/privacy#cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Использование cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}