export type Language = 'ru' | 'kk';

export interface Translations {
  // Header
  header: {
    title: string;
    subtitle: string;
    phone: string;
  };
  
  // Menu
  menu: {
    home: string;
    benefits: string;
    howItWorks: string;
    calculators: string;
    services: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    callNow: string;
    calculate: string;
    stats: {
      yearsOnMarket: string;
      fromValue: string;
      evaluation: string;
      workTime: string;
    };
  };
  
  // Benefits Section
  benefits: {
    title: string;
    subtitle: string;
    items: {
      time: string;
      cash: string;
      availability: string;
      value: string;
      security: string;
      location: string;
    };
    cta: {
      title: string;
      description: string;
      callNow: string;
      calculate: string;
    };
  };
  
  // How It Works Section
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      bring: {
        title: string;
        description: string;
      };
      evaluate: {
        title: string;
        description: string;
      };
      getMoney: {
        title: string;
        description: string;
      };
    };
  };
  
  // Calculators Section
  calculators: {
    title: string;
    subtitle: string;
    gold: {
      title: string;
      description: string;
      purityLabel: string;
      weightLabel: string;
      totalLabel: string;
      info: {
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
      };
    };
    interest: {
      title: string;
      description: string;
      amountLabel: string;
      termLabel: string;
      days: string;
      dailyRate: string;
      dailyInterest: string;
      totalInterest: string;
      totalAmount: string;
      info: {
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
        point5: string;
      };
    };
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    items: {
      goldBuyout: {
        title: string;
        description: string;
      };
      loans: {
        title: string;
        description: string;
      };
      reliability: {
        title: string;
        description: string;
      };
      fastService: {
        title: string;
        description: string;
      };
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    address: {
      title: string;
      location1: string;
      location2: string;
    };
    phone: {
      title: string;
    };
    schedule: {
      title: string;
      time: string;
    };
    branches: {
      esenberlin: string;
      baiseitova: string;
      openMap: string;
    };
  };
  
  // Footer
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    header: {
      title: "01 ломбард",
      subtitle: "Надежность и выгода",
      phone: "+7 (777) 039-99-21",
    },
    menu: {
      home: "Главная",
      benefits: "Преимущества",
      howItWorks: "Как это работает",
      calculators: "Калькуляторы",
      services: "Услуги",
      contact: "Контакты",
    },
    hero: {
      title: "Выгодный выкуп золота",
      subtitle: "Профессиональная оценка за 7 минут • Честные цены • Выплата сразу наличными",
      callNow: "Позвонить сейчас",
      calculate: "Рассчитать стоимость",
      stats: {
        yearsOnMarket: "лет на рынке",
        fromValue: "от стоимости",
        evaluation: "оценка",
        workTime: "работаем",
      },
    },
    benefits: {
      title: "Почему выбирают нас",
      subtitle: "Более 10 лет на рынке Казахстана — надежность и честность в каждой сделке",
      items: {
        time: "Оценка за 7-15 минут",
        cash: "Выплата сразу наличными",
        availability: "Работаем круглосуточно, без перерывов и выходных",
        value: "Выкуп до 95% от стоимости",
        security: "Конфиденциальность сделок",
        location: "Удобное расположение",
      },
      cta: {
        title: "Получите оценку прямо сейчас",
        description: "Приходите в любое из наших отделений с изделием и документом — получите деньги за 15 минут",
        callNow: "Позвонить сейчас",
        calculate: "Рассчитать стоимость",
      },
    },
    howItWorks: {
      title: "Как это работает",
      subtitle: "Простой и прозрачный процесс в 3 шага",
      steps: {
        bring: {
          title: "Принесите изделие",
          description: "Приходите в любое отделение с золотом и документом",
        },
        evaluate: {
          title: "Бесплатная оценка",
          description: "Специалист проверит пробу и взвесит изделие за 7 минут",
        },
        getMoney: {
          title: "Получите деньги",
          description: "Принимаем решение о сделке и выдаем деньги сразу",
        },
      },
    },
    calculators: {
      title: "Онлайн калькуляторы",
      subtitle: "Рассчитайте предварительную стоимость сделки прямо сейчас",
      gold: {
        title: "Калькулятор приема золота",
        description: "Рассчитайте стоимость вашего золота • Цены актуальны на",
        purityLabel: "Проба золота",
        weightLabel: "Вес (граммы)",
        totalLabel: "Сумма оценки:",
        info: {
          title: "ℹ️ Важная информация:",
          point1: "• Цены обновляются ежедневно",
          point2: "• Финальная оценка после проверки изделия",
          point3: "• Оплата сразу после оценки",
          point4: "• Требуется документ, удостоверяющий личность",
        },
      },
      interest: {
        title: "Калькулятор процентов",
        description: "Рассчитайте сумму займа с процентами",
        amountLabel: "Сумма займа (₸)",
        termLabel: "Срок займа:",
        days: "дней",
        dailyRate: "Ставка в день:",
        dailyInterest: "Процент в день:",
        totalInterest: "Всего процентов:",
        totalAmount: "Сумма на выкуп:",
        info: {
          title: "ℹ️ Важная информация:",
          point1: "• Минимальный срок 14 дней",
          point2: "• Основной срок до 100 000 - 0.25% в день, свыше 100 000 - 0.19% в день",
          point3: "• Гарантийный срок 30 дней по 0.25% в день",
          point4: "• Досрочное погашение без штрафов",
          point5: "• Онлайн продление",
        },
      },
    },
    services: {
      title: "Наши услуги",
      subtitle: "Профессиональный подход к каждому клиенту и выгодные условия",
      items: {
        goldBuyout: {
          title: "Выкуп золота",
          description: "Принимаем золото 585, 750 и 999 пробы по выгодным ценам",
        },
        loans: {
          title: "Займы под залог",
          description: "Низкие процентные ставки от 0.19% в день",
        },
        reliability: {
          title: "Надежность",
          description: "Полная безопасность и конфиденциальность сделок",
        },
        fastService: {
          title: "Быстрое обслуживание",
          description: "Оценка и выплата за 15 минут",
        },
      },
    },
    contact: {
      title: "Контакты",
      subtitle: "Мы всегда рады помочь вам",
      address: {
        title: "Адреса",
        location1: "город Астана, ул. Есенберлина 20",
        location2: "город Астана, ул. К. Байсеитовой 103",
      },
      phone: {
        title: "Телефон",
      },
      schedule: {
        title: "Режим работы",
        time: "Круглосуточно,<br />без перерывов и выходных",
      },
      branches: {
        esenberlin: "Филиал Есенберлина",
        baiseitova: "Филиал Байсеитовой",
        openMap: "Открыть на карте →",
      },
    },
    footer: {
      copyright: "© 2024 01 ломбард. Все права защищены.",
    },
  },
  kk: {
    header: {
      title: "01 ломбард",
      subtitle: "Сенімділік және тиімділік",
      phone: "+7 (777) 039-99-21",
    },
    menu: {
      home: "Басты бет",
      benefits: "Артықшылықтар",
      howItWorks: "Бұл қалай жұмыс істейді",
      calculators: "Калькуляторлар",
      services: "Қызметтер",
      contact: "Байланыс",
    },
    hero: {
      title: "Алтынды тиімді сатып алу",
      subtitle: "Кәсіби бағалау 7 минутта • Адал бағалар • Бірден қолма-қол ақша",
      callNow: "Қазір қоңырау шалу",
      calculate: "Құнын есептеу",
      stats: {
        yearsOnMarket: "жыл нарықта",
        fromValue: "құнынан",
        evaluation: "бағалау",
        workTime: "жұмыс істейміз",
      },
    },
    benefits: {
      title: "Бізді неге таңдайды",
      subtitle: "Қазақстан нарығында 10 жылдан астам — әрбір мәміледе сенімділік пен адалдық",
      items: {
        time: "7-15 минутта бағалау",
        cash: "Бірден қолма-қол ақша төлеу",
        availability: "Тәулік бойы, үзіліссіз және демалыссыз жұмыс істейміз",
        value: "Құнының 95%-ға дейін сатып алу",
        security: "Мәмілелердің құпиялылығы",
        location: "Ыңғайлы орналасу",
      },
      cta: {
        title: "Бағалауды қазір алыңыз",
        description: "Өнім мен құжатпен кез келген бөлімшеге келіңіз — 15 минутта ақша алыңыз",
        callNow: "Қазір қоңырау шалу",
        calculate: "Құнын есептеу",
      },
    },
    howItWorks: {
      title: "Бұл қалай жұмыс істейді",
      subtitle: "3 қадамдағы қарапайым және ашық процесс",
      steps: {
        bring: {
          title: "Бұйымды әкеліңіз",
          description: "Алтын мен құжатпен кез келген бөлімшеге келіңіз",
        },
        evaluate: {
          title: "Тегін бағалау",
          description: "Маман сынамаға тексеріп, 7 минутта бұйымды өлшейді",
        },
        getMoney: {
          title: "Ақша алыңыз",
          description: "Мәміле туралы шешім қабылдап, бірден ақша береміз",
        },
      },
    },
    calculators: {
      title: "Онлайн калькуляторлар",
      subtitle: "Мәміленің алдын ала құнын қазір есептеңіз",
      gold: {
        title: "Алтын қабылдау калькуляторы",
        description: "Алтыныңыздың құнын есептеңіз • Бағалар өзекті",
        purityLabel: "Алтын сынамасы",
        weightLabel: "Салмағы (грамм)",
        totalLabel: "Бағалау сомасы:",
        info: {
          title: "ℹ️ Маңызды ақпарат:",
          point1: "• Бағалар күн сайын жаңартылады",
          point2: "• Бұйымды тексергеннен кейін түпкілікті бағалау",
          point3: "• Бағалаудан кейін бірден төлем",
          point4: "• Жеке басын куәландыратын құжат қажет",
        },
      },
      interest: {
        title: "Пайыз калькуляторы",
        description: "Пайызбен қарыз сомасын есептеңіз",
        amountLabel: "Қарыз сомасы (₸)",
        termLabel: "Қарыз мерзімі:",
        days: "күн",
        dailyRate: "Күндік мөлшерлеме:",
        dailyInterest: "Күндік пайыз:",
        totalInterest: "Барлық пайыздар:",
        totalAmount: "Сатып алу сомасы:",
        info: {
          title: "ℹ️ Маңызды ақпарат:",
          point1: "• Ең аз мерзім 14 күн",
          point2: "• Негізгі мерзім 100 000 дейін - күніне 0.25%, 100 000 астам - күніне 0.19%",
          point3: "• Кепілдік мерзімі 30 күн күніне 0.25% бойынша",
          point4: "• Мерзімінен бұрын өтеу айыппұлсыз",
          point5: "• Онлайн ұзарту",
        },
      },
    },
    services: {
      title: "Біздің қызметтер",
      subtitle: "Әрбір клиентке кәсіби көзқарас және тиімді шарттар",
      items: {
        goldBuyout: {
          title: "Алтын сатып алу",
          description: "585, 750 және 999 сынамалы алтынды тиімді бағамен қабылдаймыз",
        },
        loans: {
          title: "Кепілмен қарыздар",
          description: "Күніне 0.19%-дан бастап төмен пайыздық мөлшерлемелер",
        },
        reliability: {
          title: "Сенімділік",
          description: "Мәмілелердің толық қауіпсіздігі мен құпиялылығы",
        },
        fastService: {
          title: "Жылдам қызмет көрсету",
          description: "15 минутта бағалау және төлем",
        },
      },
    },
    contact: {
      title: "Байланыс",
      subtitle: "Біз сізге әрқашан көмектесуге дайынбыз",
      address: {
        title: "Мекенжайлар",
        location1: "Астана қаласы, Есенберлин көшесі 20",
        location2: "Астана қаласы, Қ. Байсейітова көшесі 103",
      },
      phone: {
        title: "Телефон",
      },
      schedule: {
        title: "Жұмыс режимі",
        time: "Тәулік бойы,<br />үзіліссіз және демалыссыз",
      },
      branches: {
        esenberlin: "Есенберлин бөлімшесі",
        baiseitova: "Байсейітова бөлімшесі",
        openMap: "Картада ашу →",
      },
    },
    footer: {
      copyright: "© 2024 01 ломбард. Барлық құқықтар қорғалған.",
    },
  },
};
