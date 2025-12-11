import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsentCheckbox from '@/components/ConsentCheckbox';

export default function DeviceMidaIC202() {
  const [activeTab, setActiveTab] = useState('specs');
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [modalConsentChecked, setModalConsentChecked] = useState(false);
  const [withoutExplosionProtection, setWithoutExplosionProtection] = useState(false);

  const specs = [
    { label: 'Диапазон индикации', value: '0-100% ВПИ датчика' },
    { label: 'Входной сигнал', value: '4-20 мА' },
    { label: 'Напряжение питания', value: '12-36 В постоянного тока' },
    { label: 'Потребляемая мощность', value: 'не более 0,5 Вт' },
    { label: 'Разрядность индикатора', value: '4 разряда' },
    { label: 'Погрешность индикации', value: '±0,5% от диапазона' },
    { label: 'Маркировка взрывозащиты', value: '0ExiaIICT6' },
    { label: 'Температура эксплуатации', value: '-40...+80°C' },
    { label: 'Степень защиты', value: 'IP65' },
    { label: 'Габаритные размеры', value: '72×72×40 мм' },
    { label: 'Масса', value: 'не более 0,15 кг' },
  ];

  const features = [
    'Искробезопасное исполнение для работы во взрывоопасных зонах',
    'Съемная конструкция для удобства монтажа и обслуживания',
    'Четырехразрядный цифровой дисплей с высокой читаемостью',
    'Работа с датчиками с токовым выходом 4-20 мА',
    'Широкий диапазон питающего напряжения 12-36 В',
    'Низкое энергопотребление',
    'Компактные габариты для монтажа в стандартные щиты',
    'Высокая точность индикации ±0,5%',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/devices" className="hover:text-primary">Устройства настройки и индикации</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-foreground">МИДА-ИЦ-202-Ех</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-white rounded-lg p-8 mb-4 border border-border flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gauge" size={64} className="text-primary" />
                </div>
                <p className="text-muted-foreground">Изображение устройства</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-3">
              <span className="text-primary font-semibold text-sm">🇷🇺 Российское производство</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full mb-3 ml-2">
              <span className="text-green-700 font-semibold text-sm">Взрывозащита 0ExiaIICT6</span>
            </div>
            
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              МИДА-ИЦ-202-Ех
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Съемный взрывозащищенный цифровой индикатор для датчиков давления
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Icon name="Zap" size={18} className="text-primary" />
                Принцип работы
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                МИДА-ИЦ-202-Ех принимает токовый сигнал 4-20 мА от датчика давления и преобразует его в цифровое значение, отображаемое на четырехразрядном дисплее.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg mb-6">
              <h3 className="font-heading font-semibold text-lg mb-3">Основные преимущества</h3>
              <ul className="space-y-2">
                {features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
              <div className="flex gap-3">
                <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Совместимость</h4>
                  <p className="text-sm text-blue-800">
                    Индикатор совместим с датчиками давления серии <strong>МИДА-15</strong> с токовым выходом 4-20 мА
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-4 rounded-lg mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={withoutExplosionProtection}
                  onChange={(e) => setWithoutExplosionProtection(e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <div>
                  <span className="font-semibold text-foreground">Вариант без взрывозащиты</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Для применения в обычных (невзрывоопасных) условиях
                  </p>
                </div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" size="lg" onClick={() => setShowPriceModal(true)}>
                <Icon name="DollarSign" size={20} className="mr-2" />
                Запросить цену
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex gap-2 border-b border-border mb-6 overflow-x-auto">
            {['specs', 'features', 'application'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab === 'specs' && 'Технические характеристики'}
                {tab === 'features' && 'Особенности'}
                {tab === 'application' && 'Применение'}
              </button>
            ))}
          </div>

          {activeTab === 'specs' && (
            <div className="space-y-4">
              {specs.map((spec, index) => (
                <div key={index} className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold text-lg mb-2">{spec.label}</div>
                  <div className="text-muted-foreground">{spec.value}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckCircle2" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm">{feature}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'application' && (
            <div className="max-w-3xl space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Области применения</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Нефтегазовая промышленность</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Химическое производство</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Взрывоопасные производства</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Системы контроля и автоматизации</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Принцип работы</h3>
                  <p className="text-muted-foreground mb-3">
                    МИДА-ИЦ-202-Ех принимает токовый сигнал 4-20 мА от датчика давления и преобразует его 
                    в цифровое значение, отображаемое на четырехразрядном дисплее.
                  </p>
                  <p className="text-muted-foreground">
                    Съемная конструкция позволяет производить монтаж и настройку индикатора отдельно от датчика, 
                    что значительно упрощает процесс установки и обслуживания оборудования во взрывоопасных зонах.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="font-heading font-bold text-2xl mb-6 text-center">
            Остались вопросы?
          </h2>
          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea id="message" placeholder="Ваш вопрос..." rows={4} />
            </div>
            <ConsentCheckbox 
              checked={consentChecked} 
              onChange={setConsentChecked}
              id="device-consent"
            />
            <Button className="w-full" size="lg" disabled={!consentChecked}>
              Отправить запрос
            </Button>
          </form>
        </div>
      </div>

      <Footer />

      {showPriceModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowPriceModal(false)}>
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-xl">Запросить цену</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowPriceModal(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Заполните форму, и мы отправим вам коммерческое предложение с актуальными ценами на МИДА-ИЦ-202-Ех
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowPriceModal(false); }}>
                <div className="space-y-2">
                  <Label htmlFor="modal-name">Имя *</Label>
                  <Input id="modal-name" placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-company">Компания *</Label>
                  <Input id="modal-company" placeholder="ООО Компания" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-phone">Телефон *</Label>
                  <Input id="modal-phone" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-email">Email *</Label>
                  <Input id="modal-email" type="email" placeholder="email@company.ru" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-quantity">Количество</Label>
                  <Input id="modal-quantity" type="number" min="1" defaultValue="1" />
                </div>
                <ConsentCheckbox 
                  checked={modalConsentChecked} 
                  onChange={setModalConsentChecked}
                  id="modal-consent"
                />
                <div className="flex gap-3 pt-2">
                  <Button type="submit" className="flex-1" disabled={!modalConsentChecked}>
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить запрос
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowPriceModal(false)}>
                    Отмена
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}