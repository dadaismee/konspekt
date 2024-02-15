export const hero = {
  title: 'Академическое письмо',
  typeWriterText: ['на стероидах', 'как алгоритм', 'здорового человека'],
  description:
    'Онлайн-лаборатория продвинутого академического письма',
  buttonText: 'Начать учиться 4 марта',
};

export const about = {
  title: 'О чём курс',
  type: 'basic',
  boxes: [
    {
      mainText: 'Как превратить написание статей в понятный алгоритм — от чтения литературы до готовности к публикации',
      spanText: ['превратить написание статей в понятный алгоритм'],
    },
    {
      mainText: 'Как править библиографию и форматирование не вручную, а автоматически',
      spanText: ['править библиографию и форматирование', 'автоматически'],
    },
    {
      padding: '0px',
      video: 'https://player.vimeo.com/video/490655996?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    },
  ],
};

export const audience = {
  title: 'Кому подойдёт',
  type: 'basic',
  boxes: [
    {
      mainText: 'студентам / аспирантам',
      spanText: [''],
    },
    {
      mainText: 'исследователям',
      spanText: [''],
    },
    {
      mainText: 'журналистам',
      spanText: [''],
    },
    {
      mainText:
        'всем, кто часто пишет академические и нон-фикшн статьи в любых дисциплинах',
      spanText: ['кто часто пишет', 'в любых дисциплинах'],
    },
  ],
};

export const outcomes = {
  title: 'Чему вы научитесь',
  type: 'list',
  boxes: [
    {
      mainText:
        'Делать полезные заметки при чтении, обобщать их и собирать из них черновики статей',
      spanText: ['Делать полезные заметки'],
    },
    {
      mainText:
        'Организовывать ваши мысли о прочитанном, чтобы синтезировать неожиданные идеи*',
      spanText: ['Организовывать ваши мысли о прочитанном'],
    },
    {
      mainText:
        'Централизованно хранить (и быстро находить) интересные вам статьи и книги в вашей собственной библиотеке — референс-менеджере Zotero',
      spanText: ['хранить (и быстро находить) интересные вам статьи и книги'],
    },
    {
      mainText:
        'Автоматизировать рутину: мгновенно составлять библиографию, автоматически форматировать и экспортировать текст в PDF, docx или веб-сайт',
      spanText: ['Автоматизировать рутину'],
    },
  ],
  asterisk:
    '*по мере чтения у вас появится много «промежуточных» текстов по разным темам, готовых для вставки в статью',
};

export const results = {
  title: 'Каким будет результат',
  type: 'basic',
  boxes: [
    {
      mainText:
        'Создадите хранилище избранных мыслей из прочитанного вами, чтобы начать видеть неожиданные связи и синтезировать идеи',
      spanText: ['Создадите хранилище избранных мыслей из прочитанного вами'],
    },
    {
      mainText: 'Поставите написание текстов на поток',
      spanText: ['написание текстов на поток'],
    },
    {
      mainText: 'Подготовите черновик научной статьи или научно-популярного текста за месяц, даже если нет темы*',
      spanText: ['черновик научной статьи или научно-популярного текста за месяц'],
    },
  ],
  asterisk: '*правда, придётся много читать',
};

export const process = {
  title: 'Как устроен курс',
  type: 'basic',
  boxes: [
    {
      mainText: 'Длится 1 месяц, состоит из 8 онлайн-воркшопов и базы знаний: уроков с видеоинструкциями, текстами и квизами',
      spanText: ['1 месяц', '8 онлайн-воркшопов', 'базы знаний'],
    },
    {
      mainText:
        'Обратная связь от преподавателя каждому студенту после каждого воркшопа, чтобы точно получилось',
      spanText: ['Обратная связь', 'после каждого воркшопа'],
    },
    {
      mainText: '',
      spanText: [''],
      steps: [
        '1. Перед занятиями изучаете нужную тему в базе знаний',
        '2. На воркшопах учите друг друга и делаете задания в группах',
      ],
    },
  ],
};

export const program = {
  title: 'Программа курса',
  type: 'list',
  boxes: [
    {
      mainText: 'Чтение и мимолётные заметки',
      subText:
        'Узнаете про метод ведения «умных» заметок Zettelkästen, научитесь пользоваться Zotero, чтобы хранить, систематизировать и аннотировать тексты и начнёте работать над статьёй',
      spanText: [''],
    },
    {
      mainText: 'Литературные заметки',
      subText:
        'Научитесь использовать язык Markdown и приложение Obsidian и начнёте формировать свою собственную «сеть знаний»',
      spanText: [''],
    },
    {
      mainText: 'Перманентные заметки',
      subText:
        'Научитесь вычленять идеи из литературных заметок, связывать их друг с другом и составлять «карты контента», чтобы визуализировать свою сеть знаний',
      spanText: [''],
    },
    {
      mainText: 'Как собрать драфт статьи',
      subText:
        'Научитесь использовать конвертер документов Pandoc и создадите профессионально выглядящий драфт статьи',
      spanText: [''],
    },
  ],
};

export const pricing = {
  title: 'Тарифы',
  tariffs: [
    {
      title: 'Пассивный',
      features: [
        '— онлайн-занятия',
        '— обратная связь от преподавателя',
        '— доступ к чату сообщества',
      ],
      price: '9 990 ₽',
    },
    {
      title: 'Активный',
      features: [
        '— всё из «Базового»',
        '— 2 часовых консультации 1х1 в формате Q&A',
        '— посмотрим на вашу статью* и подумаем, как и где её опубликовать',
      ],
      price: '14 990 ₽',
    },
  ],
  asterisk:
    '*если ваша тема связана с социальными науками, философией и особенно философией науки',
};

export const author = {
  title: 'Автор курса',
  boxes: {
    mainText: 'Валерий Шевченко',
    spanText: ['Валерий Шевченко'],
    steps: [
      {
        mainText: '— преподаватель «Шанинки»',
        spanText: ['«Шанинки»'],
      },
      {
        mainText: '— продакт-менеджер Яндекс Практикум',
        spanText: ['Яндекс Практикум'],
      },
      {
        mainText:
          '— публиковался в журналах Philosophy of the Social Sciences, «Логос» и других',
        spanText: ['Philosophy of the Social Sciences'],
      },
      {
        mainText: '— аспирант-философ НИУ ВШЭ',
        spanText: ['НИУ ВШЭ'],
      },
      {
        mainText: '— оптимизирует всё, что видит',
        spanText: [''],
      },
    ],
  },
};

export const requestForm = {
  title: 'Заявка на курс',
  type: 'basic',
  boxes: [
    {
      mainText:
        'Второй поток будет в марте. Подробности будут в конце февраля. Если есть вопросы, пишите на почту ниже.',
      spanText: [
        'Второй поток будет в марте',
        'пишите на почту ниже.',
      ],
    },
    {
      mainText:
        'Спасибо! Если вы оплатили, к началу курса пришлём письмо с инструкциями и расписанием, а также добавим в Telegram-чат.',
      spanText: ['пришлём письмо с инструкциями', 'добавим в Telegram-чат'],
    },
  ],
  forms: [
    {
      type: 'form',
      placeholder: 'Имя',
    },
    {
      type: 'form',
      placeholder: 'Telegram',
    },
    {
      type: 'form',
      placeholder: 'Почта',
    },
  ],
};

export const contact = {
  title: 'Контакты',
  type: 'basic',
};

export const faq = {
  title: 'Вопросы и ответы',
  questions: [
    {
      question: 'Ещё не писал(а) статей, мне подойдёт курс?',
      answer:
        'В теории да, но лучше иметь опыт написания статей, нон-фикшн текстов или студенческих эссе — процесс их написания схож. На курсе не будет базовой информации об их структуре, стилистике и стратегиях написания.',
    },
    {
      question: 'Использую Word/Google Docs. Что мне даст ваша система?',
      answer:
        'Вместо одной проблемы — написания текста и, возможно, создания библиографии, наша система решает четыре: хранение и систематизация литературы, извлечение и соединение прочитанных идей, редактирование текста, сборка профессионально выглядящего документа.',
    },
    {
      question: 'В каком случае стоит выбрать «Продвинутый» тариф?',
      answer:
        'Ключевое отличие — 2 индивидуальные консультации. Если вы пишете статью, связанную с социальными науками — социологией, социальной психологией, философией социальной науки или философией науки в целом — и хотите профессиональной консультации по содержанию и подготовке статьи к публикации. Это что-то среднее между коучингом и научным руководством.',
    },
  ],
};
