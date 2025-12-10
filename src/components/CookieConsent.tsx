import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
      <Card className="max-w-4xl w-full animate-in slide-in-from-bottom duration-300">
        <CardContent className="p-6 sm:p-8">
          {!showSettings ? (
            <>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Cookie" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">
                    Мы используем файлы cookie
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Мы используем файлы cookie и другие технологии для обеспечения работы сайта, 
                    анализа посещаемости и улучшения качества обслуживания. Продолжая использовать 
                    наш сайт, вы соглашаетесь с использованием cookie в соответствии с{' '}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Политикой конфиденциальности
                    </Link>
                    {' '}и{' '}
                    <Link to="/privacy#cookies" className="text-primary hover:underline">
                      Политикой использования cookie
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-1">Обработка персональных данных</p>
                    <p>
                      В соответствии с Федеральным законом №152-ФЗ "О персональных данных" 
                      мы гарантируем конфиденциальность и защиту ваших данных.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleAcceptAll}
                  className="flex-1"
                  size="lg"
                >
                  <Icon name="CheckCircle2" size={18} className="mr-2" />
                  Принять все
                </Button>
                <Button 
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  size="lg"
                >
                  <Icon name="Settings" size={18} className="mr-2" />
                  Настроить
                </Button>
                <Button 
                  onClick={handleRejectAll}
                  variant="outline"
                  size="lg"
                >
                  <Icon name="X" size={18} className="mr-2" />
                  Отклонить
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-xl">
                  Настройки cookie
                </h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowSettings(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Shield" size={18} className="text-primary" />
                        <h4 className="font-semibold">Необходимые cookie</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Обеспечивают базовую функциональность сайта. Не могут быть отключены.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Всегда активны
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="BarChart3" size={18} className="text-primary" />
                        <h4 className="font-semibold">Аналитические cookie</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Помогают нам понимать, как посетители используют сайт, для улучшения его работы.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Target" size={18} className="text-primary" />
                        <h4 className="font-semibold">Маркетинговые cookie</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Используются для показа релевантной рекламы и отслеживания эффективности кампаний.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleSavePreferences}
                  className="flex-1"
                  size="lg"
                >
                  <Icon name="Save" size={18} className="mr-2" />
                  Сохранить настройки
                </Button>
                <Button 
                  onClick={handleAcceptAll}
                  variant="outline"
                  size="lg"
                >
                  Принять все
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
