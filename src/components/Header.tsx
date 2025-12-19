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
      <header className="bg-white border-b border-border sticky top-0 z-50 relative overflow-hidden">
        {/* Снеговик с мешком подарков */}
        <div className="absolute top-1 left-0 w-full h-8 pointer-events-none">
          <style>
            {`
              @keyframes walk-back-forth {
                0% { left: -80px; transform: scaleX(1); }
                48% { left: calc(100% - 20px); transform: scaleX(1); }
                50% { left: calc(100% - 20px); transform: scaleX(-1); }
                98% { left: -80px; transform: scaleX(-1); }
                100% { left: -80px; transform: scaleX(1); }
              }
              @keyframes step {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-1px); }
              }
              @keyframes drag-arm {
                0%, 100% { transform: rotate(-45deg); }
                50% { transform: rotate(-55deg); }
              }
              @keyframes wave-arm {
                0%, 100% { transform: rotate(10deg); }
                50% { transform: rotate(30deg); }
              }
              @keyframes bag-swing {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(3deg); }
              }
              .walking-snowman-container {
                animation: walk-back-forth 24s linear infinite;
                position: absolute;
              }
              .snowman-step { animation: step 0.8s ease-in-out infinite; }
              .drag-arm { animation: drag-arm 0.8s ease-in-out infinite; transform-origin: 36px 26px; }
              .wave-arm { animation: wave-arm 0.8s ease-in-out infinite; transform-origin: 14px 26px; }
              .gift-bag { animation: bag-swing 0.8s ease-in-out infinite; transform-origin: 45px 35px; }
            `}
          </style>
          
          {/* Снеговик с мешком */}
          <div className="walking-snowman-container">
            <svg 
              className="w-20 h-14" 
              viewBox="0 0 80 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="snowman-step">
                {/* Мешок с подарками */}
                <g className="gift-bag">
                  <ellipse cx="48" cy="42" rx="8" ry="11" fill="#8b4513" stroke="#6b3410" strokeWidth="1" />
                  <path d="M 40 35 Q 48 32 56 35" fill="none" stroke="#6b3410" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 42 36 L 48 32 L 54 36" fill="none" stroke="#d4a574" strokeWidth="1" strokeLinecap="round" />
                  {/* Узелок на мешке */}
                  <ellipse cx="48" cy="31" rx="2.5" ry="2" fill="#6b3410" />
                  {/* Блики на мешке */}
                  <ellipse cx="45" cy="38" rx="2" ry="3" fill="#a0652d" opacity="0.5" />
                </g>
                
                {/* Веревка от мешка к руке */}
                <line x1="48" y1="31" x2="38" y2="24" stroke="#8b4513" strokeWidth="1" />
                
                {/* Ножки */}
                <ellipse cx="22" cy="53" rx="3" ry="5" fill="#64748b" />
                <ellipse cx="28" cy="53" rx="3" ry="5" fill="#64748b" />
                
                {/* Нижний ком */}
                <circle cx="25" cy="43" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Средний ком */}
                <circle cx="25" cy="28" r="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Левая ручка (машет) */}
                <g className="wave-arm">
                  <ellipse cx="14" cy="26" rx="2.5" ry="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(-30 14 26)" />
                  <ellipse cx="10" cy="23" rx="2" ry="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(-40 10 23)" />
                  <circle cx="7" cy="21" r="1.5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" />
                </g>
                
                {/* Правая ручка (тянет мешок) */}
                <g className="drag-arm">
                  <ellipse cx="36" cy="26" rx="2.5" ry="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(30 36 26)" />
                  <ellipse cx="40" cy="24" rx="2" ry="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(35 40 24)" />
                  <circle cx="43" cy="23" r="1.5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" />
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
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
              alt="МИДАУС" 
              className="h-10 w-auto object-contain"
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