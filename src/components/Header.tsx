import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 relative">
            {/* Новогодний венок */}
            <svg 
              className="absolute -inset-3 w-16 h-16 pointer-events-none" 
              viewBox="0 0 100 100"
              style={{ left: '-12px', top: '-12px' }}
            >
              {/* Венок из еловых веток */}
              <g>
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180;
                  const x = 50 + Math.cos(angle) * 35;
                  const y = 50 + Math.sin(angle) * 35;
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="6" fill="#2d5016" opacity="0.8" />
                      <circle cx={x + 2} cy={y - 2} r="4" fill="#3d6b1f" opacity="0.9" />
                      <circle cx={x - 2} cy={y + 1} r="3" fill="#4a7c2a" opacity="0.7" />
                    </g>
                  );
                })}
                {/* Красные ягодки */}
                <circle cx="70" cy="30" r="3" fill="#dc2626" opacity="0.9" />
                <circle cx="75" cy="35" r="2.5" fill="#dc2626" opacity="0.85" />
                <circle cx="30" cy="70" r="3" fill="#dc2626" opacity="0.9" />
                <circle cx="25" cy="65" r="2.5" fill="#dc2626" opacity="0.85" />
                <circle cx="50" cy="15" r="2.5" fill="#dc2626" opacity="0.9" />
                <circle cx="85" cy="50" r="2.5" fill="#dc2626" opacity="0.85" />
              </g>
            </svg>
            
            <img 
              src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
              alt="МИДАУС" 
              className="h-10 w-auto object-contain relative z-10"
            />
          </Link>
          <Button variant="default" className="hidden md:flex" onClick={() => setShowCallModal(true)}>
            Заказать звонок
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
        
        <div 
          className={`border-t border-border bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="animate-slide-up" style={{ animationDelay: '50ms' }}>
              <button
                onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between w-full"
              >
                Продукция
                <Icon name={productsMenuOpen ? "ChevronUp" : "ChevronDown"} size={16} />
              </button>
              {productsMenuOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/products"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Датчики давления
                  </Link>
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Сенсоры давления
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Источники питания
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Средства защиты
                  </a>
                  <Link
                    to="/devices"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Устройства настройки и индикации
                  </Link>
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Монтажная арматура
                  </a>
                </div>
              )}
            </div>
            <Link 
              to="/about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '100ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              О компании
            </Link>
            <Link 
              to="/laboratory" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '150ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Метрологическая лаборатория
            </Link>
            <Link 
              to="/software" 
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '250ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Программное обеспечение
            </Link>
            <Link 
              to="/news" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-slide-up"
              style={{ animationDelay: '300ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Новости
            </Link>
            <Button variant="default" className="w-full animate-slide-up" style={{ animationDelay: '350ms' }} onClick={() => { setShowCallModal(true); setMobileMenuOpen(false); }}>
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      {showCallModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowCallModal(false)}>
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-xl">Заказать звонок</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowCallModal(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Оставьте свои контакты, и мы перезвоним вам в течение рабочего дня
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowCallModal(false); }}>
                <div className="space-y-2">
                  <Label htmlFor="call-name">Имя *</Label>
                  <Input id="call-name" placeholder="Ваше имя" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="call-phone">Телефон *</Label>
                  <Input id="call-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="call-comment">Комментарий</Label>
                  <Textarea id="call-comment" placeholder="Опишите ваш вопрос или задачу" rows={3} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}