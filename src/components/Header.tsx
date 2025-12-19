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
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
              alt="МИДАУС" 
              className="h-10 w-auto object-contain"
            />
            
            {/* Танцующий снеговик */}
            <svg 
              className="w-10 h-12 flex-shrink-0" 
              viewBox="0 0 50 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>
                {`
                  @keyframes dance {
                    0%, 100% { transform: rotate(-2deg); }
                    50% { transform: rotate(2deg); }
                  }
                  @keyframes wave-left {
                    0%, 100% { transform: rotate(-20deg); }
                    50% { transform: rotate(-50deg); }
                  }
                  @keyframes wave-right {
                    0%, 100% { transform: rotate(20deg); }
                    50% { transform: rotate(50deg); }
                  }
                  @keyframes bounce {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-2px); }
                  }
                  .snowman-body { animation: dance 1.2s ease-in-out infinite; transform-origin: 25px 50px; }
                  .arm-left { animation: wave-left 1s ease-in-out infinite; transform-origin: 12px 28px; }
                  .arm-right { animation: wave-right 1s ease-in-out infinite; transform-origin: 38px 28px; }
                  .snowman-legs { animation: bounce 0.6s ease-in-out infinite; }
                `}
              </style>
              
              <g className="snowman-body">
                {/* Ножки */}
                <g className="snowman-legs">
                  <ellipse cx="22" cy="53" rx="3" ry="5" fill="#64748b" />
                  <ellipse cx="28" cy="53" rx="3" ry="5" fill="#64748b" />
                </g>
                
                {/* Нижний ком */}
                <circle cx="25" cy="43" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Средний ком */}
                <circle cx="25" cy="28" r="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Ручки */}
                <g className="arm-left">
                  <line x1="17" y1="26" x2="8" y2="22" stroke="#8b4513" strokeWidth="2" strokeLinecap="round" />
                  <line x1="8" y1="22" x2="5" y2="20" stroke="#8b4513" strokeWidth="1.5" strokeLinecap="round" />
                </g>
                <g className="arm-right">
                  <line x1="33" y1="26" x2="42" y2="22" stroke="#8b4513" strokeWidth="2" strokeLinecap="round" />
                  <line x1="42" y1="22" x2="45" y2="20" stroke="#8b4513" strokeWidth="1.5" strokeLinecap="round" />
                </g>
                
                {/* Голова */}
                <circle cx="25" cy="13" r="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Глаза */}
                <circle cx="23" cy="12" r="1" fill="#1e293b" />
                <circle cx="27" cy="12" r="1" fill="#1e293b" />
                
                {/* Нос-морковка */}
                <path d="M 25 14 L 29 15 L 25 15.5 Z" fill="#f97316" />
                
                {/* Улыбка */}
                <path d="M 22 16 Q 25 17 28 16" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeLinecap="round" />
                
                {/* Пуговицы */}
                <circle cx="25" cy="27" r="0.8" fill="#dc2626" />
                <circle cx="25" cy="30" r="0.8" fill="#dc2626" />
                <circle cx="25" cy="41" r="0.8" fill="#dc2626" />
                
                {/* Ведро на голове */}
                <rect x="20" y="5" width="10" height="5" fill="#64748b" rx="0.5" />
                <rect x="19" y="9" width="12" height="1.5" fill="#64748b" rx="0.3" />
              </g>
            </svg>
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