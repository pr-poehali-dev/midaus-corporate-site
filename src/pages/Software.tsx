import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Software() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const software = [
    {
      title: 'Драйвер для устройств связи МИДА-УС-408 и МИДА-УС-410',
      description: 'Драйвер для подключения устройств связи к компьютеру',
      compatible: ['МИДА-15', 'МИДА-13П', 'МИДА-12П'],
      downloads: [
        { label: 'Скачать драйвер', url: '#' }
      ]
    },
    {
      title: 'SearchConfig',
      description: 'Программа для поиска конфигурации настроек датчика МИДА-15 с протоколом обмена Modbus для связи с ПК',
      compatible: ['МИДА-15'],
      downloads: [
        { label: 'Скачать программу', url: '#' }
      ]
    },
    {
      title: 'Mida15Tool',
      description: 'Программа предназначена для проверки функционирования, настройки и для отображения измеряемого давления датчиком МИДА-15 с протоколом обмена Mida',
      compatible: ['МИДА-15'],
      downloads: [
        { label: 'Установщик (*.exe, 735 kb)', url: '#' },
        { label: 'Portable-версия (*.zip, 445 kb)', url: '#' },
        { label: 'Описание программы (*.doc, 445 kb)', url: '#' }
      ]
    },
    {
      title: 'Mida15Tool Modbus',
      description: 'Программа предназначена для проверки функционирования, настройки и для отображения измеряемого давления датчиком МИДА-15 с протоколом обмена Modbus',
      compatible: ['МИДА-15'],
      downloads: [
        { label: 'Актуальная версия (zip*.exe, 1.11 МБ)', url: '#' },
        { label: 'Описание программы (*.doc, 445 kb)', url: '#' }
      ]
    },
    {
      title: 'MIDA-Android-Modbus',
      description: 'Программа предназначена для проверки функционирования, настройки и для отображения измеряемого давления датчиком МИДА-15 с протоколом обмена Modbus с помощью устройств на базе ОС Android',
      compatible: ['МИДА-15'],
      downloads: [
        { label: 'Руководство пользователя (*.pdf, 432 kb)', url: '#' },
        { label: 'Google Play', url: '#', external: true },
        { label: 'Скачать программу (*.zip, 1213 kb)', url: '#' }
      ]
    },
    {
      title: 'CorrectZeroPGAI',
      description: 'Программа предназначена для корректировки (в случае необходимости) начального значения выходного сигнала датчиков давления МИДА-15 с токовым выходным сигналом 4-20 мА (код сигнала 01)',
      compatible: ['МИДА-15'],
      downloads: [
        { label: 'Скачать программу (*.zip, ~ 48Mb)', url: '#' }
      ]
    },
    {
      title: 'CorrectZeroPGAU',
      description: 'Программа предназначена для корректировки (в случае необходимости) начального значения выходного сигнала датчиков давления МИДА-15 с выходным сигналом в виде напряжения постоянного тока 0,4-2 В (код сигнала 051, 055, 058), 0,5-4,5 В (коды сигналов 052, 057, 059)',
      compatible: ['МИДА-15'],
      downloads: [
        { label: 'Скачать программу (*.zip, 49.7 МБ)', url: '#' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header />

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
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="flex items-start gap-3 flex-1">
                      <Icon name="Download" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <span>{item.title}</span>
                    </CardTitle>
                    {item.compatible && (
                      <div className="flex flex-wrap gap-2 justify-end">
                        {item.compatible.map((device, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 whitespace-nowrap"
                          >
                            <Icon name="Gauge" size={12} className="mr-1.5" />
                            {device}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
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

      <Footer />
    </div>
  );
}