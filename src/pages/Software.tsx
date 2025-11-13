import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Software() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const software = [
    {
      title: 'Драйвер для устройств связи МИДА-УС-408 и МИДА-УС-410',
      description: 'Драйвер для подключения устройств связи к компьютеру',
      downloads: [
        { label: 'Скачать драйвер', url: '#' }
      ]
    },
    {
      title: 'SearchConfig',
      description: 'Программа для поиска конфигурации настроек датчика МИДА-15 с протоколом обмена Modbus для связи с ПК',
      downloads: [
        { label: 'Скачать программу', url: '#' }
      ]
    },
    {
      title: 'Mida15Tool',
      description: 'Программа предназначена для проверки функционирования, настройки и для отображения измеряемого давления датчиком МИДА-15 с протоколом обмена Mida',
      downloads: [
        { label: 'Установщик (*.exe, 735 kb)', url: '#' },
        { label: 'Portable-версия (*.zip, 445 kb)', url: '#' },
        { label: 'Описание программы (*.doc, 445 kb)', url: '#' }
      ]
    },
    {
      title: 'Mida15Tool Modbus',
      description: 'Программа предназначена для проверки функционирования, настройки и для отображения измеряемого давления датчиком МИДА-15 с протоколом обмена Modbus',
      downloads: [
        { label: 'Актуальная версия (zip*.exe, 1.11 МБ)', url: '#' },
        { label: 'Описание программы (*.doc, 445 kb)', url: '#' }
      ]
    },
    {
      title: 'MIDA-Android-Modbus',
      description: 'Программа предназначена для проверки функционирования, настройки и для отображения измеряемого давления датчиком МИДА-15 с протоколом обмена Modbus с помощью устройств на базе ОС Android',
      downloads: [
        { label: 'Руководство пользователя (*.pdf, 432 kb)', url: '#' },
        { label: 'Google Play', url: '#', external: true },
        { label: 'Скачать программу (*.zip, 1213 kb)', url: '#' }
      ]
    },
    {
      title: 'CorrectZeroPGAI',
      description: 'Программа предназначена для корректировки (в случае необходимости) начального значения выходного сигнала датчиков давления МИДА-15 с токовым выходным сигналом 4-20 мА (код сигнала 01)',
      downloads: [
        { label: 'Скачать программу (*.zip, ~ 48Mb)', url: '#' }
      ]
    },
    {
      title: 'CorrectZeroPGAU',
      description: 'Программа предназначена для корректировки (в случае необходимости) начального значения выходного сигнала датчиков давления МИДА-15 с выходным сигналом в виде напряжения постоянного тока 0,4-2 В (код сигнала 051, 055, 058), 0,5-4,5 В (коды сигналов 052, 057, 059)',
      downloads: [
        { label: 'Скачать программу (*.zip, 49.7 МБ)', url: '#' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">М</span>
            </div>
            <span className="font-heading font-bold text-xl">МИДА</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Продукция
            </Link>
            <Link to="/software" className="text-sm font-medium text-primary transition-colors">
              Программное обеспечение
            </Link>
            <a href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О компании
            </a>
            <a href="/#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Поддержка
            </a>
          </nav>
          <Button variant="default" className="hidden md:flex">
            Заказать звонок
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
        
        <div 
          className={`md:hidden border-t border-border bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/products" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Продукция
            </Link>
            <Link 
              to="/software" 
              className="text-sm font-medium text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Программное обеспечение
            </Link>
            <a 
              href="/#about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              О компании
            </a>
            <a 
              href="/#support" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Поддержка
            </a>
            <Button variant="default" className="w-full">
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Программное обеспечение
            </h1>
            <p className="text-lg text-muted-foreground">
              Профессиональные инструменты для настройки, диагностики и работы с датчиками давления МИДА
            </p>
          </div>

          <div className="grid gap-6 max-w-5xl mx-auto">
            {software.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Icon name="Download" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <span>{item.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {item.downloads.map((download, idx) => (
                      <Button 
                        key={idx}
                        variant={idx === 0 ? "default" : "outline"}
                        size="sm"
                        asChild
                      >
                        <a href={download.url} target={download.external ? "_blank" : undefined} rel={download.external ? "noopener noreferrer" : undefined}>
                          <Icon name={download.external ? "ExternalLink" : "Download"} size={16} className="mr-2" />
                          {download.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-secondary/30">
              <div className="flex flex-col items-center gap-4">
                <Icon name="HelpCircle" size={48} className="text-primary" />
                <h3 className="font-heading font-bold text-xl">Нужна помощь?</h3>
                <p className="text-muted-foreground max-w-md">
                  Если у вас возникли вопросы по установке или использованию программного обеспечения, наши специалисты всегда готовы помочь
                </p>
                <div className="flex gap-3">
                  <Button variant="default">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Связаться с нами
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:support@mida.ru">
                      <Icon name="Mail" size={16} className="mr-2" />
                      support@mida.ru
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">М</span>
                </div>
                <span className="font-heading font-bold">МИДА</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Российский производитель датчиков давления промышленного класса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-primary transition-colors">Все датчики</Link></li>
                <li><Link to="/product/mida-13p" className="hover:text-primary transition-colors">МИДА-13П</Link></li>
                <li><Link to="/product/mida-12" className="hover:text-primary transition-colors">МИДА-12</Link></li>
                <li><Link to="/product/mida-15" className="hover:text-primary transition-colors">МИДА-15</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#about" className="hover:text-primary transition-colors">О компании</a></li>
                <li><Link to="/software" className="hover:text-primary transition-colors">Программное обеспечение</Link></li>
                <li><a href="/#support" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@mida.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 МИДА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
