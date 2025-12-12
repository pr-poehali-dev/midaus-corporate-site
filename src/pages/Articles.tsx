import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Article {
  title: string;
  authors: string;
  year: string;
  description: string;
  pdfUrl?: string;
}

interface ArticleCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  articles: Article[];
}

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<string>('research');

  const categories: ArticleCategory[] = [
    {
      id: 'research',
      title: 'Исследования и разработки',
      icon: 'FlaskConical',
      description: 'Статьи, посвященные фундаментальным исследованиям, конструкторским разработкам и моделированию датчиков на основе КНС-технологий',
      articles: [
        {
          title: 'Гистерезисные явления в тензопреобразователях на КНС',
          authors: 'Савченко Е.Г., Стучебников В.М., Устинов А.А.',
          year: 'Не указан',
          description: 'Анализ гистерезисных эффектов в высокоточных датчиках, важный для понимания и минимизации погрешности.'
        },
        {
          title: 'Особенности проектирования высокотемпературных датчиков на КНС',
          authors: 'Савченко Е.Г., Стучебников В.М., Устинов А.А.',
          year: 'Не указан',
          description: 'Раскрывает специфику создания датчиков давления для работы в экстремально высокотемпературных средах.'
        },
        {
          title: 'Гистерезис первого нагружения в преобразователях на КНС',
          authors: 'Савченко Е.Г., Стучебников В.М.',
          year: 'Не указан',
          description: 'Исследование ключевого фактора, влияющего на точность и стабильность датчиков при первом использовании.'
        },
        {
          title: 'Моделирование тензопреобразователей на КНС. Одномембранные преобразователи',
          authors: 'Козлов А.И., Пирогов А.В., Стучебников В.М.',
          year: 'ДАТЧИКИ И СИСТЕМЫ, 2008',
          description: 'Научная работа по компьютерному моделированию конструкций датчиков для оптимизации их характеристик.'
        },
        {
          title: 'Повышение точности преобразователей давления на КНС',
          authors: 'Козлов А.И., Мартынов Д.Б., Пирогов А.В., Стучебников В.М.',
          year: 'Конференция, 2008',
          description: 'Доклад о методах и результатах работ по повышению метрологических характеристик продукции.'
        },
        {
          title: 'Экспериментальное определение частот тензопреобразователей',
          authors: 'Пирогов А.В., Стучебников В.М.',
          year: 'ДАТЧИКИ И СИСТЕМЫ, 2006',
          description: 'Практическое исследование динамических характеристик чувствительных элементов датчиков.'
        },
        {
          title: 'Температурная коррекция тензопреобразователей на КНС',
          authors: 'Мартынов Д.Б., Стучебников В.М.',
          year: 'ДАТЧИКИ И СИСТЕМЫ, 2002',
          description: 'Описание технологий компенсации температурной погрешности — ключевого преимущества датчиков МИДА.',
          pdfUrl: 'https://cdn.poehali.dev/files/temperature-correction.pdf'
        },
        {
          title: 'Минимизация погрешности датчиков при нестандартной температуре',
          authors: 'Мокров Е.А., Белозубов Е.М., Тихомиров Д.В.',
          year: 'ДАТЧИКИ И СИСТЕМЫ, 2004',
          description: 'Техническое решение для обеспечения точности работы в широком диапазоне температур.'
        }
      ]
    },
    {
      id: 'applications',
      title: 'Применение в отраслях',
      icon: 'Factory',
      description: 'Практическое применение датчиков МИДА в различных отраслях промышленности и описание конкретных серий продукции',
      articles: [
        {
          title: 'Метрологические характеристики датчиков МИДА-ДА-15-Э в вакууме',
          authors: 'Васьков Ю.А., Савченко Е.Г., Стучебников В.М., Тюрин А.В., Саликеев С.И.',
          year: 'Не указан',
          description: 'Экспериментальное подтверждение высочайшей точности и стабильности датчиков в условиях вакуума.'
        },
        {
          title: 'Датчики давления для криогенных сред',
          authors: 'Савченко Е.Г., Стучебников В.М.',
          year: 'Не указан',
          description: 'Описание специализированных решений для измерения давления в средах с экстремально низкими температурами.'
        },
        {
          title: 'Датчики давления для нефтегазовой промышленности',
          authors: 'Савченко Е.Г., Стучебников В.М.',
          year: 'Не указан',
          description: 'Обзор надежных и высокотемпературных датчиков, созданных для сложных условий нефтегазодобычи.'
        },
        {
          title: 'Специальные датчики давления ПГ МИДА',
          authors: 'Стучебников В.М., Васьков Ю., Савченко Е.Г.',
          year: 'Не указан',
          description: 'Презентация уникальных, изготовленных по индивидуальным требованиям заказчика, датчиков.'
        },
        {
          title: 'Преимущества датчиков давления расплава МИДА',
          authors: 'Не указан (сравнение с аналогами)',
          year: 'Не указан',
          description: 'Сравнительный анализ, показывающий конкурентные преимущества датчиков для экструдеров перед зарубежными образцами.'
        },
        {
          title: 'Высокоточные датчики для систем учета энергоносителей',
          authors: 'Бушев Е.Е., Васьков Ю.А., Емельянов Г.А., Пушкарев М.М., Стучебников В.М.',
          year: 'Не указан',
          description: 'Описание решений для критически важных задач коммерческого учета газа, тепла и других ресурсов.'
        },
        {
          title: 'Высокоточные датчики для высокотемпературных сред',
          authors: 'Бушуев Н.А., Мартынов Д.Б., Николайчук О.Л., Стучебников В.М.',
          year: 'Не указан',
          description: 'Акцент на датчиках, способных длительно работать при температурах свыше 150-200°C.'
        },
        {
          title: 'Некоторые особенности цифровых датчиков МИДА-15',
          authors: 'Алашеев В.В., Васьков Ю.А., Емельянов Г.А.',
          year: 'Конференция, 2012',
          description: 'Доклад о внедрении и преимуществах цифровых интерфейсов в общепромышленных датчиках.',
          pdfUrl: 'https://cdn.poehali.dev/files/digital-mida-15.pdf'
        },
        {
          title: 'Серия общепромышленных датчиков давления МИДА-13П',
          authors: 'Бушев Е.Е., Николайчук О.Л., Стучебников В.М.',
          year: 'ДАТЧИКИ И СИСТЕМЫ, 2004',
          description: 'Презентация одной из ключевых серий надежных и доступных датчиков для широкого круга задач.',
          pdfUrl: 'https://cdn.poehali.dev/files/mida-13p-series.pdf'
        },
        {
          title: 'Серия микроэлектронных датчиков давления МИДА',
          authors: 'Бушев Е.Е., Николайчук О.Л., Стучебников В.М.',
          year: 'ДАТЧИКИ И СИСТЕМЫ, 2000',
          description: 'Исторически важная статья, представляющая первую серию датчиков, основанную на собственной технологии КНС.',
          pdfUrl: 'https://cdn.poehali.dev/files/mida-series-2000.pdf'
        }
      ]
    },
    {
      id: 'metrology',
      title: 'Метрология и эталоны',
      icon: 'Ruler',
      description: 'Материалы, подчеркивающие экспертизу компании в области обеспечения высочайшей точности и разработки эталонного оборудования',
      articles: [
        {
          title: 'Система для поверки на основе эталонных датчиков МИДА',
          authors: 'Савченко Е.Г., Стучебников В.М.',
          year: 'Не указан',
          description: 'Описание современной, эффективной и мобильной системы поверки, созданной на базе собственных эталонов.'
        },
        {
          title: 'Эталонные датчики абсолютного давления для вакуума',
          authors: 'Васьков Ю.А., Савченко Е.Г., Стучебников В.М.',
          year: 'Не указан',
          description: 'Информация о датчиках высшего класса точности (0.05%), используемых как рабочие эталоны в вакуумной технике.'
        },
        {
          title: 'Эталоны класса 0,05 в серии МИДА-15',
          authors: 'Алашеев В.В., Васьков Ю.А., Козлов А.И., Стучебников В.М.',
          year: 'Не указан',
          description: 'Подробный рассказ о разработке и производстве сверхточных эталонных датчиков внутри основной серии.'
        },
        {
          title: 'Измерение давления высокотемпературных сред',
          authors: 'Стучебников В.М.',
          year: 'Конференция, 2004',
          description: 'Тезисы доклада, посвященного комплексному подходу к созданию и метрологическому обеспечению высокотемпературных датчиков.',
          pdfUrl: 'https://cdn.poehali.dev/files/high-temp-measurement.pdf'
        },
        {
          title: 'О нормировании температурной погрешности датчиков',
          authors: 'Стучебников В.М.',
          year: 'ДАТЧИКИ И СИСТЕМЫ, 2004',
          description: 'Методологическая статья, предлагающая передовой подход к указанию точностных характеристик.',
          pdfUrl: 'https://cdn.poehali.dev/files/temperature-error-normalization.pdf'
        }
      ]
    },
    {
      id: 'archive',
      title: 'Обзоры и архив',
      icon: 'BookOpen',
      description: 'Материалы общего характера, интервью, исторические и архивные публикации, в том числе на английском языке',
      articles: [
        {
          title: 'Производители датчиков на российском рынке (интервью)',
          authors: 'Купырин В.М. (интервью)',
          year: 'Не указан',
          description: 'Мнение заместителя директора о позиционировании компании, технологиях и рыночных тенденциях.'
        },
        {
          title: 'Точное дистанционное измерение давления и температуры',
          authors: 'Васьков Ю.А., Пирогов А.В., Стучебников В.М., Устинов А.А.',
          year: 'Не указан',
          description: 'Описание комплексных систем мониторинга, построенных на базе датчиков МИДА.'
        },
        {
          title: 'Пайка сапфира титановым сплавом',
          authors: 'Савченко Е.Г., Стучебников В.М.',
          year: 'Не указан',
          description: 'Раскрытие уникальной производственной технологии, обеспечивающей герметичность и надежность.'
        },
        {
          title: 'Цифровые датчики на основе структур кремний на сапфире',
          authors: 'Васьков Ю.А., Савченко Е.Г., Стучебников В.М.',
          year: 'Не указан',
          description: 'О перспективах интеграции цифровых интерфейсов в датчики следующего поколения.'
        },
        {
          title: 'Интегральные датчики: обзор рынка и разработок',
          authors: 'Мокров Е.А.',
          year: 'ДАТЧИКИ И СИСТЕМЫ, 2000',
          description: 'Аналитический обзор состояния и перспектив рынка микроэлектронных датчиков на рубеже веков.',
          pdfUrl: 'https://cdn.poehali.dev/files/integrated-sensors-market.pdf'
        },
        {
          title: 'Измерение давления в криогенных средах (1989)',
          authors: 'Лурье Г.И., Стучебников В.М.',
          year: 'Журнал, 1989',
          description: 'Одна из ранних фундаментальных работ, заложившая основу для разработки современных криогенных датчиков.'
        },
        {
          title: 'Тензопреобразователи на КНС (1982)',
          authors: 'Стучебников В.М.',
          year: 'Сборник, 1982',
          description: 'Первая публикация, представляющая технологию «кремний на сапфире» как основу для новых датчиков.'
        },
        {
          title: 'Научные статьи на английском языке',
          authors: 'V.M. Stuchebnikov и др.',
          year: 'Разные годы',
          description: 'Подборка ключевых научных публикаций в международных журналах, подтверждающих признание технологии.'
        }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/b0816222-cfbd-4b3a-88c9-322faa989e45.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Научные публикации
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Исследования, разработки и практический опыт применения датчиков давления МИДА
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col">
              <button
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  selectedCategory === category.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Icon 
                  name={category.icon as any} 
                  size={32} 
                  className={selectedCategory === category.id ? 'text-primary' : 'text-muted-foreground'}
                />
                <h3 className="font-heading font-semibold text-lg mt-3">
                  {category.title}
                </h3>
              </button>
              <p className="text-sm text-muted-foreground mt-3 px-2 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {currentCategory && (
          <div>
            <div className="mb-8">
              <h2 className="font-heading font-bold text-3xl">
                {currentCategory.title}
              </h2>
            </div>

            <div className="space-y-4">
              {currentCategory.articles.map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
                          {article.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Icon name="Users" size={16} />
                            <span>{article.authors}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Calendar" size={16} />
                            <span>{article.year}</span>
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                      {article.pdfUrl && (
                        <a
                          href={article.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group"
                          aria-label="Скачать PDF"
                        >
                          <Icon name="FileText" size={24} className="text-primary" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}