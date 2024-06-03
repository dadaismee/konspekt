export const hero = {
  title: "Конспекты, которые пригодятся",
  description: "Онлайн-курс о том, как делать из заметок на полях готовые тексты, чтобы написать диссертацию, сдать статью или показать научнику черновик",
  typeWriterText: ["на стероидах", "без неров", "как алгоритм", "as it should be"],
  buttonText: "Начать конспектировать",
  features: ["30 видеоуроков","4 шаблона заметок", "1 текст в портфолио" ],
};

export const about = {
  title: "О чём курс",
  type: "basic",
  boxes: [
    {
      mainText:
        "Как преодолеть пропасть между чтением чужих и письмом своих текстов с помощью системы заметок и цифровых инструментов",
      spanText: ["преодолеть пропасть между чтением", "и письмом"],
    },
    {
      mainText:
        "Как делать готовые публикации в 2 раза быстрее",
      spanText: ["в 2 раза быстрее"],
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
      mainText: "студентам / аспирантам",
      spanText: [""],
    },
    {
      mainText: "научным сотрудникам",
      spanText: [""],
    },
    {
      mainText: "писателям",
      spanText: [""],
    },
    {
      mainText:
        "всем, кто хочет превращать прочитанное в растущую картотеку идей для использования в своих текстах",
      spanText: ["превращать прочитанное в", "картотеку идей", "надёжный алгоритм создания ", "текстов"],
    },
  ],
};

export const outcomes = {
  title: "Чему вы научитесь",
  type: "list",
  boxes: [
    {
      mainText:
        "Делать заметки при чтении, чтобы лучше понимать прочитанное и записывать идеи для будущих текстов",
      spanText: ["Делать заметки при чтении"],
    },
    {
      mainText:
        "Использовать текстовый редактор Obsidian и создавать разные типы заметок, чтобы хранить и развивать ваши и чужие идеи*",
      spanText: ["Использовать", "Obsidian", "создавать разные типы заметок"],
    },
    {
      mainText:
        "Централизованно хранить статьи и книги в вашей собственной библиотеке — референс-менеджере Zotero",
      spanText: ["хранить статьи и книги в вашей собственной библиотеке"],
    },
    {
      mainText:
        "Автоматизировать рутину: мгновенно составлять библиографию, автоматически форматировать и экспортировать текст в PDF, docx или веб-сайт",
      spanText: ["Автоматизировать рутину"],
    },
  ],
  asterisk:
    "*по мере чтения у вас появится много «промежуточных» текстов по разным темам, готовыми для вставки в статью",
};

export const results = {
  title: "Каким будет результат",
  type: "basic",
  boxes: [
    {
      mainText:
        "Создадите постоянно пополняемую папку заметок с идеями, готовыми для вставки в ваши тексты",
      spanText: ["папку заметок с идеями"],
    },
    {
      mainText: "Научитесь пополнять папку с идеями и писать новые тексты в 2 раза быстрее",
      spanText: ["писать новые тексты в 2 раза быстрее"],
    },
    {
      mainText:
        "Подготовите черновик текста по вашей теме за месяц",
      spanText: [
        "черновик", "текста", "за месяц",
      ],
    },
  ],
  /* asterisk: "*правда, придётся много читать", */
};

export const process = {
  title: "Как устроен курс",
  type: "basic",
  boxes: [
    {
      mainText:
        "Смотрите 30 коротких видеоуроков, делаете домашние задания",
      spanText: ["30", "видеоуроков", "домашние задания"],
    },
    {
      mainText:
        "Еженедельно получаете письменную обратную связь преподавателя",
      spanText: ["обратную связь преподавателя"],
    },
    {
      mainText: "",
      spanText: [""],
      steps: [
        {
          mainText: "1. Смотрите видеоуроки, выполняете задания",
          spanText: ["Смотрите видеоуроки", "выполняете задания"],
        },
        {
          mainText: "2. Получаете обратную связь преподавателя, пишете текст",
          spanText: ["Получаете обратную связь", "пишете текст"],
        },
      ],
    },
  ],
  // asterisk: "*зависит от выбранного тарифа, о них — ниже"
};

export const program = {
  title: "Модули курса",
  type: "list",
  boxes: [
    {
      mainText: "Процесс письма",
      subText:
        "Вводный и самый теоретический модуль, где вы узнаете про метод ведения «умных» заметок Zettelkästen,  фреймворк работы с информацией CODE, увидите работу системы целиком — от чтения и выделения хайлайтов до сборки готовой статьи, а также установите и настроите необходимые программы",
      spanText: [""],
    },
    {
      mainText: "Чтение и мимолётные заметки",
      subText:
        "Узнаете о методах поиска, добавления и хранения источников, научитесь пользоваться референс-менеджером Zotero и сервисами ResearchRabbit, Researcher, Google Scholar и Hypothesis для поиска источников и выделения важных мыслей в PDF-файлах и на веб-страницах, а также сделаете мимолётную заметку и экспортируете её в Obsidian",
      spanText: [""],
    },
    {
      mainText: "Литературные заметки",
      subText:
        "Настроите рабочую среду, плагины и шаблоны в Obsidian, изучите язык разметки Markdown и сделаете литературную заметку — структурированный конспект прочитанного, где перескажете идеи автора своими словами и сформулируете свои идеи по прочитанному — фундамент ваших будущих текстов",
      spanText: [""],
      artifact: "Литературная заметка, содержащая пересказ основных идей прочитанного, основные идеи из текста, а также ваши собственные идеи о прочитанном"
    },
    {
      mainText: "Перманентные заметки",
      subText:
        "Научитесь вычленять идеи из литературных заметок и делать из них одельные заметки, полностью готовые к вставке в тексты; связывать их друг с другом, чтобы обнаруживать неожиданные идеи; сделаете скелет текста из перманентных заметок и изучите методику ветвления заметок для почти автоматического развития ваших идей в аргументы со временем",
      spanText: [""],
      artifact: "3 перманентных заметки: с чужой идеей, со своей идеей, служебная (с понятием)"
    },
    {
      mainText: "Конвертация",
      subText:
        "Научитесь использовать конвертер документов Pandoc и создадите профессионально выглядящий черновик статьи",
      spanText: [""],
    }
  ],
};

export const pricing = {
  title: "Стоимость",
  tariffs: [
    {
      title: "9 990 ₽",
      name: "passive",
      features: [
        {
          mainText: "→ 30 видеоуроков с заданиями",
          spanText: ["30 видеоуроков"],
        },
        {
          mainText: "→ Письменная обратная связь 1 раз в неделю",
          spanText: ["обратная связь", "1 раз в неделю"],
        },
        {
          mainText: "→ Можно изучать в любое время",
          spanText: ["в любое время"],
        },
        {
          mainText: "→ Доступ к материалам курса — 2 месяца",
          spanText: ["Доступ", "2 месяца"],
        },
      ],
        price: "Купить",
    },
    /* {
      title: "Спринт",
      name: "active",
      features: [
        {
          mainText: "→ 8 онлайн-воркшопов по 1 часу",
          spanText: ["8 онлайн-воркшопов по 1 часу"],
        },
        {
          mainText: "→ 30 видеоуроков с заданиями",
          spanText: ["30 видеоуроков"],
        },
        {
          mainText: "→ Длится 1 месяц",
          spanText: ["1 месяц"],
        },
        {
          mainText: "→ Старт ближайшего потока — 17 июня",
          spanText: ["17 июня"],
        }
      ],
      price: "19 990 ₽",
    }, */
  ],
  /* asterisk: "*если наберётся группа от 10 человек. Если нет, вернём деньги или запишем вас на следующий поток" */
};

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
    author: "Роман Белых",
    image: "/reviews_avatars/roman-b_1.png",
    score: "8/10",
    data: {
      mainText: "Мощный курс. Сначала открывает мир Zettelkasten и очаровывает возможностями этой системы работы с текстом, а потом дает конкретный инструмент для собирания научных статей из коллекции заметок. Я поменял свои привычки в работе с литературой после этого курса, и пересказываю некоторые идеи коллегам.",
      spanText: ["Мощный курс", "дает конкретный инструмент для собирания научных статей из коллекции заметок"],
      },
    },
    {
    author: "Лёня Юлдашев",
    image: "/reviews_avatars/leonid-yu_1.png",
    score: "10/10",
    longText: true,
    data: {
      mainText: "Как мы читаем? По ходу чтения все выписывают отдельные соображения, яркие цитаты, продуктивные идеи. Кто-то составляет конспект. Ещё полезно собирать ссылки с комментарием: «в такой-то статье показано, что дважды два четыре, а в таком-то тексте критикуется столь смелый тезис». Итого пять типов заметок — как минимум. Валерий Шевченко в ходе занятий курса показывает, как организовать и систематизировать этот пёстрый ворох, чтобы заметочник стал подспорьем для ума, а не кладбищем интересных штук. Для этого придётся поменять свой способ конспектирования — но оно того стоит. Новые конспекты буквально показывают вам, как связаны разные прочитанные тексты, как соотносятся идеи, как один и тот же концепт путешествует из работы в работу. Вдобавок Валерий готов объяснять непонятные аспекты и искать ответы на вопросы участников курса, и это существенно упрощает процессы настройки нового сервиса и привыкания к нему.",
      spanText: ["Валерий Шевченко в ходе занятий курса показывает, как организовать и систематизировать этот пёстрый ворох", "оно того стоит", ""],
      },
    },
    {
      author: "Лера А.",
      image: "/reviews_avatars/lera-a_1.png",
      score: "8/10",
      longText: true,
      data: {
        mainText: "Отличный курс для тех, кто строит академическую карьеру и ищет способы оптимизировать процесс подготовки статей, сконцентрировавшись на сути, а не форме. Также курс полезен для тех, кто далек от академии, но хочет делает первые робкие шажки: курс точно поможет преодолеть синдром самозванца, научит полезным тулам и познакомит с потрясающим комьюнити единомышленников, с которыми становится проще думать о своих будущих научных открытиях. В общем, если хочется расширить свои горизонты — обязательно записывайтесь, не пожалеете.",
        spanText: ["Отличный курс для тех, кто строит академическую карьеру"],
      },
    },
    {
      author: "Прохор",
      image: "/reviews_avatars/prohor-e_1.png",
      score: "8/10",
      longText: true,
      data: {
      mainText: "Курс по академическому письму искал специально. До этого попробовал некоторые другие, в них было слишком много разговоров и мало действий. Курс Валерия подкупил позиционированием. Ожидания мои оправдал: получилось написать, пусть и не целую статью, но её небольшую часть, ещё за время курса; в голове сложилось понимание что делать и когда делать, что в свою очередь исключило сложности с тем, за что браться – теперь есть конкретное понимание шагов (некоторые ступени я немного менял для себя, но в общeм шаблона придерживаюсь); Zotero перестало быть абстрактным библиографическим приложением, став конкретным набором функций, которыми я постоянно пользуюсь, туда же добавилось понимание что можно сделать, что нельзя; Obsidian очень понравился, в виде предложенном Валерием, пользуюсь для всей академической деятельности; весь остальной софт немножко пугал, но посредством практики на курсе получилось перестать бояться и тупо писать текст. За время курса, с помощью общего шаблона действий набросал часть главы диплома, сделал несколько заданий, получил набросок статьи. Если в универе Вам никто не объясняет как писать статьи, ворд кошмарит слетающим форматированием, а в глазах рябит от Untitled документов, которые содержат то библиографию, то наброски, то заметки – не надо думать, что так и должно быть и страдать. Курс — конфета, встреть я его в конце бакалавриата – моя академическая жизнь была бы реально проще.",
      spanText: ["Ожидания мои оправдал: получилось написать, пусть и не целую статью, но её небольшую часть, ещё за время курса"],
      },
    },
    {
    author: "Александр Сувалко",
    image: "/reviews_avatars/alexandr-s_1.png",
    score: "8/10",
    data: {
      mainText: "Валерий со своим инженерным подходом смог собрать любопытную связку инструментов для академической работы.",
      spanText: ["Валерий", "смог собрать любопытную связку инструментов"],
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
        "Доступ к «Курсу» откроется после оплаты. Если есть вопросы, пишите на почту ниже.",
      spanText: ["Доступ","после оплаты", "пишите на почту ниже."],
    },
    {
      mainText:
        "Спасибо! Проверьте почту — там чек и письмо для создания личного кабинета. Пожалуйста, нажмите в письме «подтвердить email».",
      spanText: ["Проверьте почту ", "чек ", "создания личного кабинета", "нажмите в письме «подтвердить email»", "пришлём письмо с инструкциями", "добавим в Telegram-чат"],
    },
    {
      mainText:
        "Старт — 17 июня. Занятия — по понедельникам и четвергам c 19 до 20 МСК. Если есть вопросы, пишите на почту ниже.",
      spanText: ["17 июня","по понедельникам и четвергам", "пишите на почту ниже."],
    },
    {
      mainText:
        "Спасибо! Проверьте почту — там чек и письмо для создания личного кабинета. Пожалуйста, нажмите в письме «подтвердить email». К началу курса пришлём инструкции для старта, а также добавим в Telegram-чат. До встречи!",
      spanText: ["Проверьте почту ", "чек ", "создания личного кабинета", "нажмите в письме «подтвердить email»", "пришлём письмо с инструкциями", "добавим в Telegram-чат"],
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
};


export const requestFormFree = {
  title: "Бесплатный урок",
  type: "basic",
  boxes: [
    {
      mainText:
        "Оставьте свою почту, и мы пришлём бесплатный урок, чтобы вы оценили, решает ли курс вашу проблему",
      spanText: ["Оставьте свою почту", "пришлём", "бесплатный урок"],
    },
    {
      mainText:
        "Спасибо! Проверьте почту — там чек и письмо для создания личного кабинета. Пожалуйста, нажмите в письме «подтвердить email». К началу курса пришлём инструкции для старта, а также добавим в Telegram-чат. До встречи!",
      spanText: ["Проверьте почту ", "чек ", "создания личного кабинета", "нажмите в письме «подтвердить email»", "пришлём письмо с инструкциями", "добавим в Telegram-чат"],
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
  buttonText: "Получить урок"
};
export const contact = {
  title: "Контакты",
  type: "basic",
};

export const faq = {
  title: "Вопросы и ответы",
  questions: [
    {
      question: "Ещё не писал(а) статей, мне подойдёт курс?",
      answer:
        "В теории да, но лучше иметь опыт написания статей, нон-фикшн текстов или студенческих эссе — процесс их написания схож. На курсе не будет базовой информации об их структуре, стилистике и стратегиях написания.",
    },
    {
      question: "Использую Word/Google Docs. Что мне даст ваша система?",
      answer:
        "Вместо одной проблемы — написания текста и, возможно, создания библиографии, наша система решает четыре: хранение и систематизация литературы, извлечение и соединение прочитанных идей, редактирование текста, сборка профессионально выглядящего документа.",
    },
    {
      question: "Как можно оплатить?",
      answer: "Оплатить можно российской или зарубежной картой. Если у вас не проходил оплата, напишите, пожалуйста, нам на почту."
    },
    {
      question: "А я точно напишу текст после вашего курса?",
      answer: "Да, если будете выполнять задания, читать литературу и делать по ней заметки. Однако более простого пути, к сожалению, нет (разве что ChatGPT)."
    }
    /* {
      question: "Какой тариф выбрать?",
      answer:
        "«Курс» подходит для самостоятельного изучения в удобном темпе: вам будет доступна теория и инструкции по настройке системы на платформе. Этот тариф подойдёт, если вы хотите попробовать настроить систему и не можете посещать воркшопы. В нём нет отработки навыков в режиме реального времени, но есть асинхронная обратная связь от преподавателя. В тарифе «Спринт» фокус — на формировании и закреплении навыков. Он подойдёт, если вам важно как можно скорее и эффективнее упорядочить работу над своими текстами и начать писать.",
    }, */
  ],
};
