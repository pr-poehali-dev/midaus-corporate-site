import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function ProductHeader() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
            alt="МИДАУС" 
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Продукция
          </Link>
          <Link to="/#solutions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Решения
          </Link>
          <Link to="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            О компании
          </Link>
          <Link to="/#specialists" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Специалисты
          </Link>
          <Link to="/#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Поддержка
          </Link>
        </nav>
        <Button variant="default" className="hidden md:flex">
          Заказать звонок
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </header>
  );
}
