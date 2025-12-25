import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const searchDatabase = [
  { title: 'MIDI 15', category: 'Датчики давления', link: '/products', description: 'Микропроцессорный датчик избыточного давления' },
  { title: 'MIDI 13P', category: 'Датчики давления', link: '/products', description: 'Датчик абсолютного давления' },
  { title: 'MIDI 12', category: 'Датчики давления', link: '/products', description: 'Датчик давления с цифровым выходом' },
  { title: 'MIDI 11', category: 'Датчики давления', link: '/products', description: 'Датчик давления общепромышленный' },
  { title: 'MIDI 10', category: 'Датчики давления', link: '/products', description: 'Датчик давления базовый' },
  { title: 'ПИ-1', category: 'Индикаторы', link: '/products', description: 'Показывающий индикатор давления' },
  { title: 'УС-1', category: 'Устройства связи', link: '/products', description: 'Устройство связи с датчиками' },
  { title: 'БП-15', category: 'Источники питания', link: '/products', description: 'Блок питания 15В' },
  { title: 'УЗ-1', category: 'Средства защиты', link: '/products', description: 'Устройство защиты от перенапряжений' },
  { title: 'МКА', category: 'Арматура', link: '/products', description: 'Монтажная коммутационная арматура' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResults = searchQuery.length > 0 
    ? searchDatabase.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/bf9d6490-da2b-41da-829f-65eea317fd60.png" 
              alt="МИДАУС" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
              Продукция
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
              О компании
            </Link>
            <Link to="/laboratory" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
              Лаборатория
            </Link>
            <Link to="/software" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
              ПО
            </Link>
            <Link to="/news" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
              Новости
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setShowSearchModal(true)}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors hidden sm:flex"
              aria-label="Открыть поиск"
            >
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="default" onClick={() => setShowCallModal(true)} className="hidden sm:flex">
              Заказать звонок
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
        
        <div 
          className={`lg:hidden border-t border-border bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Устройства настройки и индикации
                  </a>
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
            <button
              className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors animate-slide-up"
              style={{ animationDelay: '350ms' }}
              onClick={() => { setShowSearchModal(true); setMobileMenuOpen(false); }}
            >
              <Icon name="Search" size={18} />
              Поиск
            </button>
            <Button variant="default" className="w-full animate-slide-up" style={{ animationDelay: '400ms' }} onClick={() => { setShowCallModal(true); setMobileMenuOpen(false); }}>
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      {showSearchModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 p-4" onClick={() => setShowSearchModal(false)}>
          <Card className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-xl">Поиск по сайту</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowSearchModal(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <div className="relative mb-6">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  type="search"
                  placeholder="Введите запрос: датчик давления, сертификаты, контакты..." 
                  className="pl-10 pr-4 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
              {searchQuery.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {filteredResults.length > 0 
                      ? `Найдено результатов: ${filteredResults.length}` 
                      : 'Ничего не найдено'}
                  </p>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {filteredResults.length > 0 ? (
                      filteredResults.map((item, index) => (
                        <Link 
                          key={index}
                          to={item.link} 
                          className="block p-3 rounded-lg hover:bg-primary/5 transition-colors border border-border"
                          onClick={() => { setShowSearchModal(false); setSearchQuery(''); }}
                        >
                          <div className="flex items-start gap-3">
                            <Icon name="Package" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                              <p className="text-xs text-primary mb-1">{item.category}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <Icon name="SearchX" size={48} className="mx-auto mb-3 opacity-50" />
                        <p className="text-sm">По вашему запросу ничего не найдено</p>
                        <p className="text-xs mt-1">Попробуйте изменить поисковый запрос</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon name="Search" size={48} className="mx-auto text-muted-foreground/30 mb-3" />
                  <p className="text-sm text-muted-foreground">Начните вводить запрос для поиска</p>
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    <button 
                      className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      onClick={() => setSearchQuery('датчики давления')}
                    >
                      Датчики давления
                    </button>
                    <button 
                      className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      onClick={() => setSearchQuery('сертификаты')}
                    >
                      Сертификаты
                    </button>
                    <button 
                      className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      onClick={() => setSearchQuery('контакты')}
                    >
                      Контакты
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

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