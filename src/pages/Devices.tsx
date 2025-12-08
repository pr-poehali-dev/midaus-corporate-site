import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Devices() {
  const [showDevModal, setShowDevModal] = useState(false);

  const devices = [
    {
      id: 'mida-ic-202-ex',
      name: 'МИДА-ИЦ-202-Ех',
      title: 'Съемный взрывозащищенный цифровой индикатор МИДА-ИЦ-202-Ех',
      description: 'Взрывозащищенный цифровой индикатор для датчиков давления серии МИДА-15 с токовым выходом 4-20 мА. Съемная конструкция для удобства монтажа и обслуживания.',
      compatibility: ['МИДА-15'],
      icon: 'Gauge',
    },
    {
      id: 'digital-indicator',
      name: 'Цифровой индикатор',
      title: 'Цифровой индикатор с программируемой шкалой',
      description: 'Универсальный индикатор для отображения сигнала с датчиков с возможностью настройки диапазона индикации под конкретную задачу.',
      compatibility: [],
      icon: 'Monitor',
    },
    {
      id: 'mida-us-408',
      name: 'МИДА-УС-408',
      title: 'Устройство связи RS-485/USB МИДА-УС-408',
      description: 'Преобразователь интерфейса для подключения датчиков с интерфейсом RS-485 к персональному компьютеру через стандартный USB-порт.',
      note: 'Не имеет гальванической развязки',
      compatibility: [],
      icon: 'Usb',
    },
    {
      id: 'mida-us-410',
      name: 'МИДА-УС-410',
      title: 'Устройство связи RS-485/USB с гальванической развязкой МИДА-УС-410',
      description: 'Преобразователь интерфейса с гальванической развязкой для безопасного подключения датчиков с RS-485 к компьютеру через USB. Защищает аппаратуру от помех и разностей потенциалов.',
      note: 'С гальванической развязкой',
      isAdvantage: true,
      compatibility: [],
      icon: 'Shield',
    },
    {
      id: 'mida-us-411',
      name: 'МИДА-УС-411',
      title: 'Корректор нуля для токового сигнала МИДА-УС-411 (4-20 мА)',
      description: 'Устройство для точной корректировки начального значения (сдвига «нуля») выходного сигнала датчиков давления МИДА-15, МИДА-13П с токовым выходом 4-20 мА.',
      compatibility: ['МИДА-15', 'МИДА-13П'],
      icon: 'Settings',
    },
    {
      id: 'mida-us-412',
      name: 'МИДА-УС-412',
      title: 'Корректор нуля для напряжения МИДА-УС-412 (0-5В, 0-10В, 1-5В)',
      description: 'Устройство для корректировки начального значения выходного сигнала датчиков МИДА-15, МИДА-13П с выходом в виде напряжения (0-5В, 0-10В, 0,4-2В, 0,5-4,5В, 1-5В).',
      compatibility: ['МИДА-15', 'МИДА-13П'],
      icon: 'Zap',
    },
    {
      id: 'mida-uo-402',
      name: 'МИДА-УО-402',
      title: 'Устройство дистанционного обнуления МИДА-УО-402',
      description: 'Устройство для дистанционного обнуления показаний датчика, упрощающее процесс настройки и калибровки в полевых условиях.',
      compatibility: [],
      icon: 'RotateCcw',
    },
    {
      id: 'mida-upd-406',
      name: 'МИДА-УПД-406',
      title: 'Устройство переключения диапазона МИДА-УПД-406',
      description: 'Устройство позволяет оперативно переключать датчик между двумя предустановленными диапазонами измерения, повышая его гибкость применения.',
      compatibility: [],
      icon: 'SlidersHorizontal',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-foreground">Устройства настройки и индикации</span>
        </nav>

        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Устройства настройки и индикации
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Вспомогательное оборудование для настройки, калибровки и визуализации данных с датчиков давления МИДА. 
            Упрощает монтаж, обслуживание и интеграцию в системы автоматизации.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device) => (
            <Card key={device.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={device.icon} size={32} className="text-primary" />
                </div>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    🇷🇺 Россия
                  </span>
                  {device.note && (
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      device.isAdvantage 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {device.note}
                    </span>
                  )}
                </div>
                
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {device.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {device.description}
                </p>

                {device.compatibility.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Совместимость:</p>
                    <div className="flex gap-2 flex-wrap">
                      {device.compatibility.map((model) => (
                        <span key={model} className="text-xs bg-secondary px-2 py-1 rounded">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {device.id === 'mida-ic-202-ex' ? (
                  <Link to="/device/mida-ic-202-ex" className="block">
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    onClick={() => setShowDevModal(true)}
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="py-12 bg-secondary rounded-lg mt-12">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-center mb-4">
              Нужна консультация по выбору оборудования?
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальный комплект устройств 
              для решения ваших задач автоматизации и контроля
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать на email
              </Button>
            </div>
          </div>
        </section>
      </div>

      {showDevModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" 
          onClick={() => setShowDevModal(false)}
        >
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Construction" size={40} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">В РАЗРАБОТКЕ</h3>
              <p className="text-muted-foreground mb-6">
                Страница с подробной информацией об устройстве находится в разработке. 
                Пожалуйста, свяжитесь с нами для получения детальной информации.
              </p>
              <Button 
                onClick={() => setShowDevModal(false)}
                className="w-full"
              >
                Понятно
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}