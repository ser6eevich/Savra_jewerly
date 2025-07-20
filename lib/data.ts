import { Product } from './types';

export const rings: Product[] = [
  // Classic Rings (1-8)
  {
    id: '1',
    name: 'Кольцо Классик',
    description: 'Элегантное серебро с полированной поверхностью',
    detailedDescription: 'Это уникальное кольцо создано в технике имитации природного выветривания. Каждая неровность и текстура тщательно проработана вручную, создавая ощущение камня, отшлифованного временем и стихией.',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Природные Формы',
    article: 'SVR-001-CLS',
    material: 'Серебро 925°, полированное покрытие',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '2',
    name: 'Кольцо Минимал',
    description: 'Тонкое серебряное кольцо простой формы',
    detailedDescription: 'Минималистичный дизайн, воплощающий философию простоты и элегантности. Тонкие линии и безупречная полировка создают утонченный образ.',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Минимализм',
    article: 'SVR-002-MIN',
    material: 'Серебро 925°, матовое покрытие',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '3',
    name: 'Кольцо Элегант',
    description: 'Классическое серебро с глянцевой отделкой',
    detailedDescription: 'Воплощение классической элегантности в современном исполнении. Глянцевая поверхность отражает свет, создавая игру бликов.',
    price: 9200,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Классика',
    article: 'SVR-003-ELG',
    material: 'Серебро 925°, глянцевая полировка',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '4',
    name: 'Кольцо Грация',
    description: 'Изящное серебряное кольцо с плавными линиями',
    detailedDescription: 'Плавные изгибы и мягкие формы создают ощущение движения и грации. Каждая линия продумана до мелочей.',
    price: 7900,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Грация',
    article: 'SVR-004-GRC',
    material: 'Серебро 925°, сатиновая отделка',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '5',
    name: 'Кольцо Утончение',
    description: 'Деликатное серебро с матовой поверхностью',
    detailedDescription: 'Утонченность в каждой детали. Матовая поверхность придает кольцу особую глубину и благородство.',
    price: 8100,
    image: 'https://images.unsplash.com/photo-1596944946645-d9fcfd2b7684?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Утонченность',
    article: 'SVR-005-UTN',
    material: 'Серебро 925°, матовое покрытие',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '6',
    name: 'Кольцо Софт',
    description: 'Мягкие формы в классическом серебре',
    detailedDescription: 'Мягкость форм и нежность линий создают ощущение комфорта и уюта. Идеально для повседневной носки.',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Комфорт',
    article: 'SVR-006-SFT',
    material: 'Серебро 925°, комбинированная отделка',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '7',
    name: 'Кольцо Люкс',
    description: 'Премиальное серебро высокого качества',
    detailedDescription: 'Воплощение роскоши и качества. Каждое кольцо проходит тщательный контроль качества и ручную доводку.',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Люкс',
    article: 'SVR-007-LUX',
    material: 'Серебро 925°, премиум отделка',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '8',
    name: 'Кольцо Идеал',
    description: 'Совершенные пропорции в серебре',
    detailedDescription: 'Математически выверенные пропорции создают ощущение идеальной гармонии. Результат многолетних исследований.',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Идеал',
    article: 'SVR-008-IDL',
    material: 'Серебро 925°, идеальная полировка',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },

  // Textured Rings (9-16)
  {
    id: '9',
    name: 'Кольцо Эрозии',
    description: 'Серебро с выветренной текстурой камня',
    detailedDescription: 'Это уникальное кольцо создано в технике имитации природного выветривания. Каждая неровность и текстура тщательно проработана вручную, создавая ощущение камня, отшлифованного временем и стихией. Серебро покрыто специальным составом для придания естественного матового блеска.',
    price: 10250,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Природные Формы',
    article: 'SVR-009-ERO',
    material: 'Серебро 925°, текстурированная поверхность',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '10',
    name: 'Кольцо Трещин',
    description: 'Серебро с узором древних разломов',
    detailedDescription: 'Вдохновленное древними геологическими процессами, это кольцо воссоздает узоры трещин в камне. Каждая линия уникальна.',
    price: 11400,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Геологические Формы',
    article: 'SVR-010-TRC',
    material: 'Серебро 925°, рельефная текстура',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '11',
    name: 'Кольцо Патины',
    description: 'Окисленное серебро с темной патиной',
    detailedDescription: 'Искусственно состаренное серебро с благородной патиной. Процесс окисления контролируется мастером для достижения идеального результата.',
    price: 12300,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Патина',
    article: 'SVR-011-PAT',
    material: 'Серебро 925°, патинированная поверхность',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '12',
    name: 'Кольцо Коры',
    description: 'Текстура древесной коры в серебре',
    detailedDescription: 'Воссоздание текстуры древесной коры с невероятной точностью. Каждая бороздка и выпуклость передает естественную красоту дерева.',
    price: 10800,
    image: 'https://images.unsplash.com/photo-1596944946645-d9fcfd2b7684?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Природные Текстуры',
    article: 'SVR-012-KOR',
    material: 'Серебро 925°, органическая текстура',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '13',
    name: 'Кольцо Волн',
    description: 'Рельеф морских волн на серебре',
    detailedDescription: 'Динамичный рельеф, имитирующий движение морских волн. Игра света и тени создает ощущение постоянного движения.',
    price: 11700,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Морские Мотивы',
    article: 'SVR-013-VOL',
    material: 'Серебро 925°, волнообразная текстура',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '14',
    name: 'Кольцо Молота',
    description: 'Молотая текстура ручной работы',
    detailedDescription: 'Каждый удар молота создает уникальный узор. Древняя техника ковки придает кольцу особый характер и индивидуальность.',
    price: 13200,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Кованые Изделия',
    article: 'SVR-014-MOL',
    material: 'Серебро 925°, кованая текстура',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '15',
    name: 'Кольцо Пламени',
    description: 'Огненная текстура в темном серебре',
    detailedDescription: 'Языки пламени застыли в серебре. Контрастная игра света и тени создает драматический эффект.',
    price: 14500,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Стихии',
    article: 'SVR-015-PLA',
    material: 'Серебро 925°, огненная текстура',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '16',
    name: 'Кольцо Вулкана',
    description: 'Лавовая текстура с окислением',
    detailedDescription: 'Воссоздание текстуры застывшей лавы. Грубая поверхность контрастирует с благородством серебра.',
    price: 15800,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Вулканические Породы',
    article: 'SVR-016-VUL',
    material: 'Серебро 925°, лавовая текстура',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },

  // Men's Sizes - Classic (17-20)
  {
    id: '17',
    name: 'Кольцо Силы',
    description: 'Широкое классическое серебро для мужчин',
    detailedDescription: 'Мужественный дизайн с акцентом на силу и надежность. Широкая форма подчеркивает характер владельца.',
    price: 15200,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic_mens',
    collection: 'Мужская Классика',
    article: 'SVR-017-SIL',
    material: 'Серебро 925°, усиленная конструкция',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  },
  {
    id: '18',
    name: 'Кольцо Авторитет',
    description: 'Массивное серебро с полированной поверхностью',
    detailedDescription: 'Символ статуса и авторитета. Массивная конструкция и безупречная полировка создают впечатляющий образ.',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic_mens',
    collection: 'Статус',
    article: 'SVR-018-AVT',
    material: 'Серебро 925°, премиум полировка',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  },
  {
    id: '19',
    name: 'Кольцо Лидер',
    description: 'Представительное серебро строгих форм',
    detailedDescription: 'Строгие геометрические формы подчеркивают лидерские качества. Идеально для деловых встреч.',
    price: 16800,
    image: 'https://images.unsplash.com/photo-1596944946645-d9fcfd2b7684?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic_mens',
    collection: 'Лидерство',
    article: 'SVR-019-LID',
    material: 'Серебро 925°, геометрическая форма',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  },
  {
    id: '20',
    name: 'Кольцо Статус',
    description: 'Элегантное мужское серебро премиум класса',
    detailedDescription: 'Воплощение элегантности и статуса. Каждая деталь продумана для создания образа успешного мужчины.',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic_mens',
    collection: 'Премиум',
    article: 'SVR-020-STA',
    material: 'Серебро 925°, люксовая отделка',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  },

  // Men's Sizes - Textured (21-24)
  {
    id: '21',
    name: 'Кольцо Воин',
    description: 'Боевая текстура на широком серебре',
    detailedDescription: 'Грубая текстура, напоминающая о древних воинах. Каждая царапина и неровность рассказывает свою историю.',
    price: 19200,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured_mens',
    collection: 'Воинская Доблесть',
    article: 'SVR-021-VOI',
    material: 'Серебро 925°, боевая текстура',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  },
  {
    id: '22',
    name: 'Кольцо Титан',
    description: 'Металлическая текстура с патиной',
    detailedDescription: 'Имитация титановой поверхности с естественной патиной. Сочетание прочности и красоты.',
    price: 21500,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured_mens',
    collection: 'Металлы',
    article: 'SVR-022-TIT',
    material: 'Серебро 925°, титановая текстура',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  },
  {
    id: '23',
    name: 'Кольцо Шторм',
    description: 'Бурная текстура темного серебра',
    detailedDescription: 'Динамичная текстура, воссоздающая силу природной стихии. Темное серебро усиливает драматический эффект.',
    price: 20800,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured_mens',
    collection: 'Стихии',
    article: 'SVR-023-SHT',
    material: 'Серебро 925°, штормовая текстура',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  },
  {
    id: '24',
    name: 'Кольцо Гром',
    description: 'Молниеносная текстура на массивном серебре',
    detailedDescription: 'Зигзагообразные линии, напоминающие молнии. Массивная конструкция подчеркивает мощь природной стихии.',
    price: 24000,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured_mens',
    collection: 'Небесные Силы',
    article: 'SVR-024-GRO',
    material: 'Серебро 925°, молниеносная текстура',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  }
];

export const categoryNames = {
  classic: 'Классические',
  textured: 'Текстурные',
  mens: 'Мужские размеры'
};

export const getRingsByCategory = (category: string) => {
  switch (category) {
    case 'classic':
      return rings.filter(ring => ring.type === 'classic' || ring.type === 'classic_mens');
    case 'textured':
      return rings.filter(ring => ring.type === 'textured' || ring.type === 'textured_mens');
    case 'mens':
      return rings.filter(ring => ring.type === 'classic_mens' || ring.type === 'textured_mens');
    default:
      return rings;
  }
};

export const getRingById = (id: string): Product | undefined => {
  return rings.find(ring => ring.id === id);
};