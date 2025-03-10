export const links = [
  {
    name: 'результат',
    url: '/#results',
  },
  {
    name: 'как устроено',
    url: '/#process',
  },
  {
    name: 'программа',
    url: '/#program',
  },
  //{
  //  name: 'сертификат',
  //  url: '/#gift-certificate',
  //},
  {
    name: 'отзывы',
    url: '/#reviews',
  },

  {
    name: 'стоимость',
    url: '/#pricing',
  },
  {
    name: 'контакты',
    url: '/#contact',
  },
];

export const hero = {
  title: "Система письма",
  description: "Курс, где вы оптимизируете создание текстов и научитесь переводить заметки на полях в новые статьи, посты и даже диссертацию",
  //typeWriterText: ["на стероидах", "без неров", "как алгоритм", "as it should be"],
  buttonText: "Начать учиться",
  features: ["30 видеоуроков", "4 онлайн-занятия", "6 недель", "опубликованое эссе"],
  //video: "/video/landing.mp4",
  image: "/free_course.png",
  //asterisk: "*со скидкой 15% до 15 декабря" 
};

export const about = {
  title: "О чём курс",
  type: "basic",
  boxes: [
    {
      mainText:
        "Как преодолеть пропасть между чтением чужих и написанием своих текстов, создав систему заметок и инструментов",
      spanText: ["преодолеть пропасть между чтением", "написанием", "текстов"],
    },
    {
      mainText:
        "Как стабильно формулировать новые идеи и превращать их в увлекательные тексты",
      spanText: ["формулировать новые идеи", "превращать их в", "тексты"],
    },
    {
      padding: "0px",
      video:
        "/video/output.mp4",
    },
  ],
};

export const audience = {
  title: "Кому подойдёт",
  type: "basic",
  boxes: [
    {
      mainText: "PhD-студентам и исследователям, чтобы написать статью или диссертацию",
      spanText: ["PhD-студентам", "исследователям"],
    },
    {
      mainText: "экспертам и преподавателям, чтобы превращать знания в тексты и продукты",
      spanText: ["экспертам", "преподавателям"],
    },
    {
      mainText: "авторам нон-фикшна, чтобы быстрее собрать материал",
      spanText: ["авторам"],
    },
    {
      mainText:
        "всем, кто работает с источниками и хочет превращать их в растущую картотеку идей, чтобы писать увлекательные тексты",
      spanText: ["кто работает с источниками", "хочет", "превращать их в", "картотеку идей", "писать", "тексты"],
    },
  ],
};

export const outcomes = {
  title: "Чему вы научитесь",
  type: "list",
  boxes: [
    {
      mainText:
        "Понимать устройство системы заметок Zettelkasten в отрыве от приложений и пользоваться ей, чтобы создавать тексты",
      spanText: ["Понимать устройство системы", "Zettelkasten", "пользоваться ей"],
      gridArea: 1
    },
    {
      mainText:
        "Различать типы заметок и уверенно использовать нужные в разных сценариях",
      spanText: ["Различать типы заметок", "использовать нужные"],
      gridArea: 1
    },
    {
      mainText:
        "Связывать заметки между собой и не бояться, что связи потеряются",
      spanText: ["Связывать заметки", "объединять их"],
      gridArea: 1
    },
    {
      mainText:
        "Развивать последовательности идей, чтобы структурировать своё мышление и увидеть его «с высоты птичьего полёта»",
      spanText: ["Развивать последовательности идей", "структурировать", "мышление"],
      gridArea: 1
    },
    {
      mainText:
        "Использовать техники активного чтения и комментирования, чтобы делать пометки на полях источников и лучше понимать прочитанное",
      spanText: ["Использовать техники активного чтения", "лучше понимать прочитанное"],
      gridArea: 2
    },
    {
      mainText:
        "Использовать текстовые редакторы Obsidian и Zettlr для ведения картотеки идей",
      spanText: ["Использовать", "Obsidian", "Zettlr"],
      gridArea: 2
    },
    {
      mainText:
        "Централизованно хранить статьи и книги в вашей собственной библиотеке — референс-менеджере Zotero",
      spanText: ["хранить статьи", "книги", "референс-менеджере Zotero"],
      gridArea: 2
    },
    {
      mainText:
        "Автоматизировать рутину: мгновенно составлять библиографию, автоматически форматировать и экспортировать текст в PDF, docx или веб-сайт",
      spanText: ["Автоматизировать рутину"],
      gridArea: 2
    },
  ],
  //asterisk:
  //  "*по мере чтения у вас появится много «промежуточных» текстов по разным темам, готовыми для вставки в статью",
};

export const results = {
  title: "Каким будет результат",
  type: "basic",
  boxes: [
    {
      mainText:
        "Создадите 5-10 заметок из прочитанного, готовых к вставке в ваши тексты*",
      spanText: ["5-10", "заметок", "готовых к вставке в ваши тексты"],
    },
    {
      mainText: "Настроите долговечный, устойчивый и удобный алгоритм развития идей и создания текстов из них",
      spanText: ["Настроите", "алгоритм развития идей", "создания текстов "],
    },
    {
      mainText:
        "Напишете и опубликуете мини-эссе по вашей теме в веб-журнале школы «Конспект»",
      spanText: [
        "Напишете", "опубликуете мини-эссе", "в веб-журнале"
      ],
    },
  ],
  asterisk: "*для этого нужно будет уделять 5-10 часов в неделю чтению и созданию заметок",
};

export const process = {
  title: "Как устроен курс",
  type: "basic",
  boxes: [
    {
      mainText:
        "Смотрите видеоуроки, делаете задания, получаете обратную связь преподавателя",
      spanText: ["видеоуроки", "задания", "обратную связь преподавателя"],
    },
    {
      mainText:
        "Вместе с напарником обсуждаете заметки для ваших эссе",
      spanText: ["с напарником", "обсуждаете заметки"],
    },
    {
      mainText:
        "Раз в неделю — часовое занятие с практикой и ответами на вопросы",
      spanText: ["Раз в неделю", "занятие"],
    },
    {
      padding: "0px",
      image:
        "/format.png",
      imageWidth: "100%",
      imageHeight: "100%"
    },
    // {
    //   mainText: "",
    //   spanText: [""],
    //   steps: [
    //     {
    //       mainText: "1. Смотрите видеоуроки, выполняете задания",
    //       spanText: ["Смотрите видеоуроки", "выполняете задания"],
    //     },
    //     {
    //       mainText: "2. Задаёте вопросы преподавателю и обсуждаете тему на встрече раз в неделю",
    //       spanText: ["Задаёте вопросы преподавателю", "на встрече раз в неделю"],
    //     },
    //   ],
    // },
  ],
   //asterisk: "*если идёте на курс вдвоём, каждый из вас получит скидку 10%. Подробнее — в «Вопросах» ниже" 
};

export const program = {
  title: "Модули курса",
  type: "list",
  boxes: [
    {
      mainText: "Как устроена система письма",
      subText:
        "Вводный и самый теоретический модуль, где вы узнаете про метод ведения «умных» заметок Zettelkästen, фреймворк работы с информацией CODE, увидите работу системы целиком — от чтения и выделения хайлайтов до сборки готовой статьи, а также сделаете первые заметки в обычном «Блокноте» и напишете небольшой текст, чтобы прочувствовать работу систему без специальных программ",
      spanText: [""],
    },
    {
      mainText: "Поиск и хранение источников",
      subText:
        "Научитесь пользоваться референс-менеджером Zotero и сервисами ResearchRabbit, Google Scholar и Hypothesis для поиска источников и выделения важных мыслей в PDF-файлах и на веб-страницах, а также настроите свою библиотеку в Zotero",
      spanText: [""],
    },
    {
      mainText: "Чтение и заметки на полях",
      subText:
        "Научитесь делать «мимолётные заметки» с хайлайтами и аннотациями из прочитанного и подготавливать их к дальнейшей обработке и вычленению идей для текстов",
      spanText: [""],
      artifact: "Литературная заметка, содержащая пересказ основных идей прочитанного, основные идеи из текста, а также ваши собственные идеи о прочитанном"
    },
    {
      mainText: "Обобщение заметок на полях",
      subText:
        "Настроите рабочую среду, плагины и шаблоны в Obsidian, изучите язык разметки Markdown и сделаете «литературную заметку» — структурированный конспект прочитанного, где перескажете идеи автора своими словами и сформулируете идеи по прочитанному — фундамент ваших будущих текстов",
      spanText: [""],
      artifact: "3 перманентных заметки: с чужой идеей, со своей идеей, служебная (с понятием)"
    },
    {
      mainText: "Извлечение идей из обобщений",
      subText:
        "Научитесь вычленять идеи из литературных заметок и делать из них отдельные заметки, полностью готовые к вставке в тексты; связывать их друг с другом, чтобы обнаруживать неожиданные идеи",
      spanText: [""],
    },
    {
      mainText: "Черновик из заметок с идеями",
      subText:
        "Сделаете «скелет» текста из заметок c идеями и изучите методику ветвления заметок для почти автоматического развития ваших идей в аргументы со временем",
      spanText: [""],
    },
    {
      mainText: "Готовый текст из черновика с идеями",
      subText:
        "Прочитаете лонгрид о стилистике и стратегиях нехудожественного письма, напишете эссе по своей теме из заметок с идеями и научитесь автоматически собирать библиографию и форматировать текст, чтобы сделать готовый к публикации документ",
      spanText: [""],
    }
  ],
};

export const pricing = {
  title: "Тарифы",
  tariffs: [
    //{
    //  title: "Main",
    //  name: "main",
    //  features: [
    //    {
    //      mainText: "30 видеоуроков и лонгриды:",
    //      spanText: ["анимированные видео по 2-5 минут и введение в практику системного письма и стилистику"],
    //    },
    //    {
    //      mainText: "4 встречи с преподавателем:",
    //      spanText: ["часовые занятия для тренироваки создания заметок и ответов на вопросы"],
    //    },
    //    {
    //      mainText: "Публикация в конце курса:",
    //      spanText: ["эссе от 300 до 1000 слов, опубликованное в веб-журнале школы «Конспект»"],
    //    },
    //    {
    //      mainText: "Работа в парах и группах:",
    //      spanText: ["чтобы лучше усвоить материал, проверить структуру заметок и понятность своих мини-эссе"],
    //    },
    //    {
    //      mainText: "Обратная связь: ",
    //      spanText: ["домашние задания, письменно проверяемые преподавателем два раза в неделю"],
    //    },
    //    {
    //      mainText: "Чат + Random Coffee: ",
    //      spanText: ["доступ к сообществу «Конспектирующих», новые знакомства"],
    //    },
    //    {
    //      mainText: "Готовая рабочая среда:",
    //      spanText: ["настроенное хранилище Obsidian со структурой папок, плагинами и шаблонами заметок для быстрого старта "],
    //    },
    //    // {
    //    //   mainText: "Частые обновления:",
    //    //   spanText: ["дополняем курс новыми видео каждый месяц"],
    //    // },
    //    {
    //      mainText: "Материалы доступны 3 месяца:",
    //      spanText: ["после — от 1 990₽/мес, сообщество — бесплатно"],
    //    }
    //  ],
    //  price: "Купить за 19 990 ₽",
    //},
    {
      title: "Сам(а)",
      name: "self-paced",
      features: [
        {
          mainText: "30 видеоуроков и лонгриды:",
          spanText: ["авторские тексты без воды, анимированные видео по 2-5 минут"],
        },
        {
          mainText: "Настроенное хранилище Obsidian:",
          spanText: ["структура папок, плагины и шаблоны заметок для быстрого старта"],
        },
        {
          mainText: "Сообщество + Random Coffee:",
          spanText: ["доступ к чату «Конспектирующих» и новые знакомства"],
        },
         {
           mainText: "Свой темп:",
           spanText: ["проходите курс в удобное время и без дедлайнов"],
         },
        {
          mainText: "Материалы доступны 3 месяца:",
          spanText: ["после — 1 990₽/мес"],
        }
      ],
      price: "Купить за 9 990 ₽",
    },
    {
      title: "С группой (24.03 - 03.05)",
      name: "active",
      features: [
        {
          mainText: "Всё из «Курса», но с дедлайнами:",
          spanText: ["видеоуроки, лонгриды, задания, шаблоны, сообщество"],
        },
        {
          mainText: "4 встречи с преподавателем и 6 недель работы:",
          spanText: ["часовые занятия для отработки навыков и ответов на вопросы"],
        },
        {
          mainText: "Обратная связь: ",
          spanText: ["проверка домашних заданий и комментарии дважды в неделю"],
        },
        {
          mainText: "Работа в парах и группах:",
          spanText: ["случайный напарник на весь курс, чтобы проверять структуру заметок и читать эссе друг друга"],
        },
        {
          mainText: "Публикация в конце курса:",
          spanText: ["эссе от 300 до 1000 слов, опубликованное в веб-журнале школы «Конспект»"],
        },
      ],
      price: "Купить за 19 990 ₽",
    }, 
    {
      title: "Бесплатный курс",
      name: "free-course",
      features: [],
      price: "Получить бесплатно"
    }
  ],
  //asterisk: "*цена со скидкой 15% до 7 января. Без неё — 19 990 ₽" 
  //asterisk: "*Также есть рассрочка на 3 месяца — 6663 ₽/мес" 
};

export const gift_certificate = {
  title: "Курс можно подарить",
  type: "basic",
  boxes: [
    {
      mainText:
        "Тариф «С группой» — на ближайший поток, «Самостоятельный» — на три месяца.",
      spanText: ["ближайший поток", "три месяца"],
    },
    {
      mainText:
        "Сертификат можно распечатать или и отправить цифровым. Чтобы купить, выберите тариф выше.",
      spanText: ["можно распечатать", "отправить цифровым", "купить", "выберите тариф"],
    },
    {
      padding: "0px",
      image:
        "/certif.png",
      imageWidth: "100%",
      imageHeight: "100%"
    },
    // {
    //   mainText: "",
    //   spanText: [""],
    //   steps: [
    //     {
    //       mainText: "1. Смотрите видеоуроки, выполняете задания",
    //       spanText: ["Смотрите видеоуроки", "выполняете задания"],
    //     },
    //     {
    //       mainText: "2. Задаёте вопросы преподавателю и обсуждаете тему на встрече раз в неделю",
    //       spanText: ["Задаёте вопросы преподавателю", "на встрече раз в неделю"],
    //     },
    //   ],
    // },
  ],
   //asterisk: "*если идёте на курс вдвоём, каждый из вас получит скидку 10%. Подробнее — в «Вопросах» ниже" 
};

export const trial = {
  title: "Попробуйте курс бесплатно",
  type: "basic",
  boxes: [
    {
      mainText:
        "Пройдите первый модуль бесплатно, чтобы понять, подходит ли вам курс",
      spanText: ["ближайший поток", "три месяца"],
    },
    {
      mainText:
        "Его достаточно, чтобы начать вести картотеку, даже если вы решите не продолжать курс",
      spanText: ["можно распечатать", "отправить цифровым", "купить", "выберите тариф"],
    },
    {
      mainText:
        "Его достаточно, чтобы начать вести картотеку, даже если вы решите не продолжать курс",
      spanText: ["можно распечатать", "отправить цифровым", "купить", "выберите тариф"],
    },

    {
      padding: "0px",
      imageWidth: "100%",
      imageHeight: "100%"
    },
  ],
    buttonText: "Начать бесплатно",
}

export const author = {
  title: "Автор курса",
  boxes: {
    mainText: "Валерий Шевченко",
    spanText: ["Валерий Шевченко"],
    steps: [
      {
        mainText: "— философ науки, аспирант НИУ ВШЭ",
        spanText: [""],
      },
      {
        mainText:
          "— публиковался в журналах Philosophy of the Social Sciences, Digital Landscape Architecture, «Логос» и других",
        spanText: ["Philosophy of the Social Sciences"],
      },
      {
        mainText: "— выпускник и преподаватель «Шанинки»",
        spanText: ["«Шанинки»"],
      },
      {
        mainText: "— ex-продакт-менеджер Яндекс Практикум",
        spanText: ["Яндекс Практикум"],
      },
      ,
    ],
  },
};

export const reviews = {
  type: "review",
  get title() {
    const reviewCount = this.reviewItems.length;
    return `Отзывы (${reviewCount})`;
  },
  reviewItems: [
    {
      author: "Евгения Митрохина",
      authorJob: "PhD candidate, University of Wisconsin-Madison",
      image: "/reviews_avatars/e_mitrokhina_5.png",
      score: "9/10",
      data: {
        mainText: 'Я учусь на PhD и пишу диссертацию про «Открытость в авторитарных режимах». В какой-то момент я поняла, что чтение стало для меня прокрастинацией и никак не помогает писать. Меня также привлекло то, что в курсе предлагалось использовать программы, чтобы систематизировать процесс. Курс помог мне переосмыслить подход к письму и чтению. До курса я никогда не слышала про Zettelkasten и мне понравилась сама идея. Валерий сразу же сказал нам, что программы не помогут написать текст, но могут облегчить эту работу и в принципе переосмыслить само чтение. Мне понравилось, что в курсе есть теория и практика: то, как эту теорию можно использовать в жизни с помощью различных программ. Я стала использовать Zotero не только для создания списка литературы, но и чтения (причем смогла синхронизировать личный и рабочий компьютеры, и планшет). Мне также понравился подход Валерия, каждый поставил себе цель в начале курса и работа в течение месяца прошла не зря, например, я смогла написать десятистраничный текст для конференции. Я понимаю, что продолжу использовать навыки, которым научилась за месяц, в моей работе и после окончания курса!',
        spanText: ["Курс помог мне переосмыслить подход к", "письму и", "чтению", "понравилось, что в", "курсе есть теория и", "практика", "стала использовать Zotero", "чтения", "понравился подход Валерия", "я смогла написать десятистраничный текст для", "конференции"],
      },
    },
        {
      author: "Маша Волкова",
      authorJob: "PhD student, University of Exeter",
      image: "/reviews_avatars/masha_v_3.png",
      score: "9/10",
      data: {
        mainText: "Это идеальный курс для тех, кто хочет превратить свое письмо в продуманную и систематическую практику. Курс прекрасно погружает как в техническую часть (как работать с программами, которые позволяют искать, хранить, анализировать литературу), так и в содержательную часть (как сделать заметки твоим партнером по коммуникации, то есть как следовать заветам Лумана). Курс постоянно обновляется, дополнется и улушается — это само по себе дает хороший пример, как можно изменять устаявшуюся систему, в какие стороны ее можно улучшать, как допилить ее под себя. В общем, советую!",
        spanText: ["прекрасно погружает как в техническую часть", "так и в содержательную часть", "постоянно обновляется, дополнется и улушается"],
      },
    },
    {
      author: "Оля Чумичёва",
      authorJob: "Культурный менеджер, PhD студентка Университета Манчестера",
      image: "/reviews_avatars/olya_ch_3.png",
      score: "8/10",
      data: {
        mainText: 'Про курс я узнала в тот момент, когда в моем исследовательском проекте накопилось столько данных, что ранее работающая система их хранения и поиска перестала справляться со своими задачами. Мне понравилась идея подойти к задаче системно: не просто упорядочить материалы, а выстроить логику работы с текстами (в широком смысле слова) от этапа "прочитала" до этапа "написала статью". Понравилось, что к этой логике работы подобраны доступные программы — про каждую из них я знала, но не знала, что их можно так сочетать в работе, а это значительно меняет их ценность для меня. В моем случае, курс дал мне инструменты, которые сложены друг с другом в достаточно сложном для меня техническом решении, которое я сама вряд ли бы нашла и разобралась в нем, но результат вполне доступен для понимания и очень облегчает жизнь человека, пишущего диссертацию.',
        spanText: ["выстроить логику работы с текстами", "подобраны доступные программы", "не знала, что их можно так сочетать в работе", "результат вполне доступен для понимания", "облегчает жизнь человека, пишущего диссертацию"],
      },
    },
    {
      author: "Сабина Балишян",
      authorJob: "Студентка магистратуры «Шанинки»",
      image: "/reviews_avatars/sabina_b.png",
      score: "8/10",
      data: {
        mainText: "Этот курс расколдовывает процесс создания текста и за руку проводит по пути  от первого найденного источника до готового pdf-файла с финальным вариантом статьи. Самым ценным для меня в курсе оказались даже не сами инструменты (безусловно, важные и полезные, и что важнее — осваиваемые сразу на практике), а тот способ связи процессов чтения и письма, который был предложен — он сильно снижает тревогу и превращает создание текста в по-настоящему итеративный, понятно выстроенный процесс.",
        spanText: ["расколдовывает процесс создания текста", "Самым ценным", "оказались", "не сами инструменты", "осваиваемые", "на практике", "способ связи процессов чтения и письма", "сильно снижает тревогу"],
      },
    },
    {
      author: "Дмитрий Безуглов",
      authorJob: "PhD-студент на программе по славистике в Кембридже",
      image: "/reviews_avatars/dmitrii_b.png",
      score: "9/10",
      data: {
        mainText: "Курс одновременно хорошо представляет логику работы над заметками и в равной степени хорошо тренирует механический навык ведения заметок. Я бы рекомендовал его вместо вороха видео «Как вести умные заметки», потому что курс не просто знакомит с системой, но разными способами закрепляет ее в памяти. \n\n\n Закончив курс, я получил новый и оформленный навык, который мне осталось только закрепить. Если вы не очень усидчивы, не очень умеете в одиночку выстраивать новый навык и очень хотите освоить вдумчивую работу с текстами и обойти боязнь чистого листа -- курс закрывает такую потребность. ",
        spanText: ["вместо вороха видео «Как вести умные заметки»", "Закончив курс, я получил новый и оформленный навык"],
      },
    },
    {
      author: "Роман Белых",
      authorJob: "PhD-студент в Hadas Mamane Lab",
      image: "/reviews_avatars/roman-b_1.png",
      score: "8/10",
      data: {
        mainText: "Мощный курс. Сначала открывает мир Zettelkasten и очаровывает возможностями этой системы работы с текстом, а потом дает конкретный инструмент для собирания научных статей из коллекции заметок. Я поменял свои привычки в работе с литературой после этого курса, и пересказываю некоторые идеи коллегам.",
        spanText: ["Мощный курс", "дает конкретный инструмент для собирания научных статей из коллекции заметок"],
      },
    },
    {
      author: "Леонид Юлдашев",
      authorJob: "Координатор клуба любителей интернета и общества, преподаватель курса «Социальная история инфраструктур» в магистратуре по Digital Humanities в ИТМО",
      image: "/reviews_avatars/leonid-yu_1.png",
      score: "10/10",
      longText: true,
      data: {
        mainText: "Как мы читаем? По ходу чтения все выписывают отдельные соображения, яркие цитаты, продуктивные идеи. Кто-то составляет конспект. Ещё полезно собирать ссылки с комментарием: «в такой-то статье показано, что дважды два четыре, а в таком-то тексте критикуется столь смелый тезис». Итого пять типов заметок — как минимум. Валерий Шевченко в ходе занятий курса показывает, как организовать и систематизировать этот пёстрый ворох, чтобы заметочник стал подспорьем для ума, а не кладбищем интересных штук. Для этого придётся поменять свой способ конспектирования — но оно того стоит. Новые конспекты буквально показывают вам, как связаны разные прочитанные тексты, как соотносятся идеи, как один и тот же концепт путешествует из работы в работу. Вдобавок Валерий готов объяснять непонятные аспекты и искать ответы на вопросы участников курса, и это существенно упрощает процессы настройки нового сервиса и привыкания к нему.",
        spanText: ["Валерий Шевченко в ходе занятий курса показывает, как организовать и систематизировать этот пёстрый ворох", "оно того стоит", ""],
      },
    },
    {
      author: "Александр Сувалко",
      authorJob: "Заместитель директора института исследований культуры НИУ ВШЭ, старший преподаватель",
      image: "/reviews_avatars/suvalko.png",
      score: "8/10",
      data: {
        mainText: "Валерий со своим инженерным подходом смог собрать любопытную связку инструментов для академической работы.",
        spanText: ["Валерий", "смог собрать любопытную связку инструментов"],
      },
    },

    {
      author: "Валерия А.",
      image: "/reviews_avatars/lera-a_1.png",
      score: "8/10",
      longText: true,
      data: {
        mainText: "Отличный курс для тех, кто строит академическую карьеру и ищет способы оптимизировать процесс подготовки статей, сконцентрировавшись на сути, а не форме. Также курс полезен для тех, кто далек от академии, но хочет делает первые робкие шажки: курс точно поможет преодолеть синдром самозванца, научит полезным тулам и познакомит с потрясающим комьюнити единомышленников, с которыми становится проще думать о своих будущих научных открытиях. В общем, если хочется расширить свои горизонты — обязательно записывайтесь, не пожалеете.",
        spanText: ["Отличный курс для тех, кто строит академическую карьеру"],
      },
    },
    {
      author: "Прохор Егорочкин",
      authorJob: "студент бакалавриата РГГУ по философии",
      image: "/reviews_avatars/prohor-e_1.png",
      score: "8/10",
      longText: true,
      data: {
        mainText: "Курс по академическому письму искал специально. До этого попробовал некоторые другие, в них было слишком много разговоров и мало действий. Курс Валерия подкупил позиционированием. Ожидания мои оправдал: получилось написать, пусть и не целую статью, но её небольшую часть, ещё за время курса; в голове сложилось понимание что делать и когда делать, что в свою очередь исключило сложности с тем, за что браться – теперь есть конкретное понимание шагов (некоторые ступени я немного менял для себя, но в общeм шаблона придерживаюсь); Zotero перестало быть абстрактным библиографическим приложением, став конкретным набором функций, которыми я постоянно пользуюсь, туда же добавилось понимание что можно сделать, что нельзя; Obsidian очень понравился, в виде предложенном Валерием, пользуюсь для всей академической деятельности; весь остальной софт немножко пугал, но посредством практики на курсе получилось перестать бояться и тупо писать текст. За время курса, с помощью общего шаблона действий набросал часть главы диплома, сделал несколько заданий, получил набросок статьи. Если в универе Вам никто не объясняет как писать статьи, ворд кошмарит слетающим форматированием, а в глазах рябит от Untitled документов, которые содержат то библиографию, то наброски, то заметки – не надо думать, что так и должно быть и страдать. Курс — конфета, встреть я его в конце бакалавриата – моя академическая жизнь была бы реально проще.",
        spanText: ["Ожидания мои оправдал: получилось написать, пусть и не целую статью, но её небольшую часть, ещё за время курса"],
      },
    },
  ],
};

export const requestFormBuy = {
  title: "Заявка на курс",
  type: "basic",
  boxes: [
    {
      mainText:
        "Следующий поток — с 24.03 по 03.05. Доступ к платформе откроется в день старта курса или мгновенно на тарифе «Сам(а)». Если есть вопросы, пишите нам.",
      spanText: ["Следующий поток", "январе 2025-го", "Доступ", "день старта", "мгновенно", "вопросы","пишите"],
    },
    {
      mainText:
        "Спасибо! Проверьте почту — там чек и письмо для создания личного кабинета. Пожалуйста, нажмите в письме «подтвердить email».",
      spanText: ["Проверьте почту ", "чек ", "создания личного кабинета", "нажмите в письме «подтвердить email»", "пришлём письмо с инструкциями", "добавим в Telegram-чат"],
    },
    {
      mainText:
        "Спасибо! Сообщим, когда откроем продажи на новый поток.",
      spanText: ["укажите", "имя", "почту", "пришлём ", "сертификат", "расскажем"],
    },
  ],
  forms: [
    {
      type: "form",
      placeholder: "Имя",
    },
    {
      type: "form",
      placeholder: "Telegram",
    },
    {
      type: "form",
      placeholder: "Почта",
    },
  ],
  buttonText: "Купить за 19 990 ₽",
  //asterisk: "*Также есть рассрочка на 3 месяца — 6663 ₽/мес" 
  //asterisk: "*со скидкой 15% до 7 января. Без неё — 19 990 ₽" 
};

export const aboutFreeCourse = {
  title: "Если хочется попробовать",
  type: "basic",
  boxes: [
    {
      mainText:
        "У нас есть бесплатная пробная часть курса, чтобы вы могли попробовать и понять, подходит ли вам курс",
      spanText: ["бесплатный курс","начать делать академические заметки", "и написанием", "публикаций"],
    },
    {
      mainText:
        "На нём вы узнаете, как выделять и аннотировать интересные веб-страницы, сохранять их в заметки и систематизировать их в индексе",
      spanText: ["в 2 раза быстрее"],
    },
    {
      padding: "0px",
      video:
        "/video/output.mp4",
    },
  ],
  buttonText: "Подробнее про курс"
}


export const requestFormBuyPromo = {
  title: "Заявка на курс со скидкой",
  type: "basic",
  boxes: [
    {
      mainText:
        "Старт последнего в этом году — 11 ноября. Доступ к платформе откроется за день до старта. Если есть вопросы, пишите нам.",
      spanText: ["Старт ", "юбилейного потока ", "11 ноября", "Доступ", "в день старта", "вопросы","пишите на почту ниже."],
    },
    {
      mainText:
        "Спасибо! Проверьте почту — там чек и письмо для создания личного кабинета. Пожалуйста, нажмите в письме «подтвердить email».",
      spanText: ["Проверьте почту ", "чек ", "создания личного кабинета", "нажмите в письме «подтвердить email»", "пришлём письмо с инструкциями", "добавим в Telegram-чат"],
    },
    //{
    //  mainText:
    //    "Старт — 17 июня. Занятия — по понедельникам и четвергам c 19 до 20 МСК. Если есть вопросы, пишите на почту ниже.",
    //  spanText: ["17 июня", "по понедельникам и четвергам", "пишите на почту ниже."],
    //},
  ],
  forms: [
    {
      type: "form",
      placeholder: "Имя",
    },
    {
      type: "form",
      placeholder: "Telegram",
    },
    {
      type: "form",
      placeholder: "Почта",
    },
  ],
  buttonText: "Перейти к оплате — 15 992₽*",
  asterisk: "*если у вас есть промокод, без него — 19 990₽" 
  //asterisk: "*Также есть рассрочка на 3 месяца — 6663 ₽/мес" 
  //asterisk: "*цена со скидкой 10 %. Без неё — 19 990₽"
};

export const requestFormFree = {
  title: "Рассылка",
  type: "basic",
  boxes: [
    {
      mainText:
        "Каждую неделю — инструменты и практики цифровой продуктивности",
      spanText: ["Каждую неделю", "инструменты и практики"],
    },
    {
      mainText:
        "Спасибо! Проверьте почту — письмо придёт в течение 5 минут 🙌",
      spanText: ["Проверьте почту ", "5 минут", "письмо"],
    }
  ],
  forms: [
    {
      type: "form",
      placeholder: "Имя",
    },
    {
      type: "form",
      placeholder: "Telegram",
    },
    {
      type: "form",
      placeholder: "Почта",
    },
  ],
  buttonText: "Подписаться на рассылку"
};

export const contact = {
  title: "Контакты",
  type: "basic",
};

export const faq = {
  title: "Вопросы и ответы",
  questions: [
    {
      question: "Ещё не писал(а) текстов, мне подойдёт курс?",
      answer:
        "Если совсем не писали, то нет, а если вы писали блог, студенческое эссе, научную статью, план урока или что-то другое — курс вам подойдёт. Важно, что на курсе не будет совсем базовой информации о том, как писать, но будут советы по структуре, стилистике и стратегиях написания текстов.",
    },
    {
      question: "Использую Word/Google Docs. Что мне даст ваша система?",
      answer:
        "Вместо одной проблемы — написания текста и, возможно, создания библиографии, наша система решает четыре: хранение и систематизация литературы, извлечение и соединение прочитанных идей, редактирование текста, сборка профессионально выглядящего документа.",
    },
        {
      question: "Что за эссе?",
      answer: "В результате работы с источниками и заметками вы разовьёте свою идею и в небольшом эссе по интересующей вас теме от 300 до 1000 слов, на русском или английском языке. Но это необычное эссе: в нём вы укажете, из каких источников и заметок по ним оно получилось. Так вы сможете увидеть и показать результаты своей работы."
      //question: "А я напишу текст после вашего курса?",
      //answer: "Это возможно, но зависит от вашей цели и готовности читать и делать заметки. Как минимум, вы напишете часть (план, страницу или главу в зависимости от того, что вы пишете), делая задания на курсе. Большая часть работы — чтение, аннотирование, ведение заметок и работа над черновиком — самостоятельные процессы. Однако вы всегда можете задавать вопросы преподавателю и одногруппникам, а также вместе делать задания в группах."
    },
    {
      question: "Что за журнал?",
      answer: "Журнал школы «Конспект» (в разработке), в котором будем публиковать работы студентов курса, чтобы показывать работу системы себе, друзьям и коллегам и культивировать публичное создание знания и рефлексию над ним." 
    },
    {
      question: "Сколько времени в неделю займёт курс?",
      answer: "10-15 часов в неделю на всё — просмотр видео (1-2 часа), освоение программ, системы и задания (5-7 часов), чтение и создание заметок (3-5 часов) и встречи (1 час)."
      //answer: "висимости от того, что вы пишете и насколько глубоко погружены в проект, можно выделять разное количество времени. Если вы пишете статью, диссертацию или другой исследовательский проект, выделите 10-15 часов в неделю на всё вместе — просмотр видео (1 час), освоение программ, системы и задания (3-5 часов) и встречи (1 час). Если у вас нет активного проекта, то будет достаточно 5 часов в неделю."
    },
    {
      question: "Что нужно знать и уметь, чтобы проходить курс?",
      answer: "Важно обладать базовой цифровой грамотностью: уметь устанавливать программы, пользоваться мессенджером Телеграм и облачным хранилищем вроде Google Drive, а также сервисом записи экрана Loom. Всему остальному, нужному для создания базы заметок, мы научим. Самое главное — не бояться технических вещей и быть готовыми разобраться в них. Например, «покопаться» в настройках программы, поискать решение проблемы в интернете или спросить одногруппников."
    },
    {
      question: "Сколько длится курс?",
      answer: "Активная часть курса длится 6 недель, но доступ к видео — 3 месяца. Модули с видео и заданиями построены так, чтобы их можно было проходить по одному в неделю, и каждый модуль сопровождается встречей с преподавателем для прояснения сложных моментов."
    },
    //{
    //  question: "У меня будет один напарник на весь курс или каждую неделю разные?",
    //  answer: "У вас будет один напарник, выбранный случайным образом. Один — чтобы глубже вникнуть в его/её тему или помочь её найти. Так вы потратите меньше энергии на «подстройку» под нового человека и сосредоточитесь на текстах друг друга. В дополнение к этому, каждую неделю вы сможете ходить на встречу со случайным участником сообщества, в том числе из предыдущих потоков."
    //},
    //{
    //  question: "Как получить скидку, если мы идём на курс вдвоём?",
    //  answer: "При оплате выберите тариф «Со своим напарником» и введите  имя и электронную почту вас обоих."
    //},

    {
      question: "Как можно оплатить?",
      answer: "Оплатить можно российской или зарубежной картой. Если у вас не проходил оплата, напишите, пожалуйста, нам в Телеграм или на почту."
    },
    {
      question: "Можно ли купить курс в подарок?",
      answer: "Да, для этого напишите нам в Телеграм."
    },
    {
      question: "Какой тариф выбрать?",
      answer:
        "«Сам(а)» подходит, чтобы заниматься в удобном темпе: вы будете смотреть видео, читать лонгриды и делать задания на платформе. В нём нет отработки навыков в режиме реального времени и обратной связи от преподавателя. В тарифе «С группой» фокус — на формировании и закреплении навыков и быстром решение возникающих у студентов сложностей. Он подойдёт, если нужно как можно скорее упорядочить работу над текстами и начать писать.",
    }, 
  ],
};
