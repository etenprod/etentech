document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    uk: {
      'nav.home': 'ГОЛОВНА',
      'nav.services': 'ПОСЛУГИ',
      'nav.faq': 'ПИТАННЯ',

      'hero.leftTitle': 'МAРКЕТИНГ<br>ЯК СИСТЕМА,<br>А НЕ ВИПАДКОВІСТЬ',
      'hero.leftDesc': 'Ми будуємо цілісні рішення, де кожен елемент працює на спільний результат.',
      'hero.rightTitle': 'КРЕАТИВНА<br>МАРКЕТИНГОВА<br>АГЕНЦІЯ',
      'hero.desc': 'Ми створюємо бренди, що <span>виділяються</span> та маркетинг,<br>який приносить <span>результат</span>',
      'hero.years': 'роки досвіду',
      'hero.projects': 'успішних проєктів',

      'services.title': 'ПОСЛУГИ',
      'services.desc': 'Наші послуги для малого й середнього бізнесу, якому важливо бути помітним і зрозумілим клієнтам.',
      'services.strategy.title': 'Стратегія',
      'services.strategy.text': 'Допомагаємо бізнесу зрозуміти, куди рухатись далі: що розвивати, на чому зосередитись і як залучати клієнтів у довгостроковій перспективі.',
      'services.smm.title': 'SMM',
      'services.smm.text': 'Беремо на себе ведення сторінок: контент, подачу та регулярність. Робимо присутність бізнесу в соцмережах зрозумілою й корисною для клієнтів.',
      'services.ads.title': 'Реклама',
      'services.ads.text': 'Запускаємо та оптимізуємо рекламу з фокусом на звернення й продажі. Працюємо з тестами, цифрами та реальними результатами.',
      'services.branding.title': 'Брендинг',
      'services.branding.text': 'Оновлюємо або створюємо візуальний образ бізнесу: допомагаємо виглядати сучасно, впізнавано та викликати довіру.',

      'faq.title': 'ПИТАННЯ',
      'faq.desc': 'Найпоширеніші питання про послуги, формат роботи та співпрацю.',
      'faq.q1': 'Скільки коштують наші послуги?',
      'faq.a1': 'Вартість залежить від задач, обсягу робіт та цілей бізнесу. Після короткого обговорення ми пропонуємо індивідуальний формат і бюджет.',
      'faq.q2': 'Як швидко можна побачити результат?',
      'faq.a2': 'Перші зміни зазвичай видно вже в перші 1-2 місяці. Стабільний ріст - це система й робота на дистанції.',
      'faq.q3': 'Які послуги можна замовити окремо?',
      'faq.a3': 'Окремо можна замовити стратегію, SMM-ведення, запуск реклами або брендинг.',
      'faq.q4': 'З чого починається співпраця?',
      'faq.a4': 'Починаємо з короткого знайомства та брифу: цілі, продукт, аудиторія, бюджет і очікування.',
      'faq.q5': 'Чи працюєте ви з малим бізнесом?',
      'faq.a5': 'Так. Ми підбираємо реалістичний формат і пріоритети, щоб результат відчувався в продажах.',
      'faq.q6': 'Чим ви відрізняєтесь від інших агенцій?',
      'faq.a6': 'Ми не "робимо разово", а вибудовуємо систему: цілі → стратегія → контент → тести → аналітика.',

      'footer.title': 'THERE ARE NO LIMITS<br>TO PERFECTION',
      'footer.meta': 'МАРКЕТИНГОВА АГЕНЦІЯ',
      'footer.terms': 'УМОВИ & ПОЛОЖЕННЯ',
      'footer.privacy': 'ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ',
      'footer.cta': 'ПОЧАТИ<br>РОЗМОВУ'
    },

    en: {
      'nav.home': 'HOME',
      'nav.services': 'SERVICES',
      'nav.faq': 'FAQ',

      'hero.leftTitle': 'MARKETING<br>AS A SYSTEM,<br>NOT A COINCIDENCE',
      'hero.leftDesc': 'We build complete solutions where every element works toward one shared result.',
      'hero.rightTitle': 'CREATIVE<br>MARKETING<br>AGENCY',
      'hero.desc': 'We create brands that <span>stand out</span> and marketing<br>that delivers <span>results</span>',
      'hero.years': 'years of experience',
      'hero.projects': 'successful projects',

      'services.title': 'SERVICES',
      'services.desc': 'Our services are built for small and medium-sized businesses that want to be visible, clear, and trusted.',
      'services.strategy.title': 'Strategy',
      'services.strategy.text': 'We help businesses understand where to move next: what to develop, what to focus on, and how to attract clients long term.',
      'services.smm.title': 'SMM',
      'services.smm.text': 'We handle your social media presence: content, presentation, and consistency. We make your business clear and useful to clients online.',
      'services.ads.title': 'Advertising',
      'services.ads.text': 'We launch and optimize ads with a focus on leads and sales. We work with tests, numbers, and real results.',
      'services.branding.title': 'Branding',
      'services.branding.text': 'We create or refresh your business identity, helping it look modern, recognizable, and trustworthy.',

      'faq.title': 'FAQ',
      'faq.desc': 'Common questions about our services, workflow, and collaboration.',
      'faq.q1': 'How much do your services cost?',
      'faq.a1': 'The cost depends on the goals, scope of work, and business needs. After a short discussion, we offer a custom format and budget.',
      'faq.q2': 'How fast can we see results?',
      'faq.a2': 'The first changes are usually visible within the first 1–2 months. Stable growth comes from a clear system and consistent work.',
      'faq.q3': 'Which services can be ordered separately?',
      'faq.a3': 'You can order strategy, SMM management, advertising launch, or branding separately.',
      'faq.q4': 'How does cooperation start?',
      'faq.a4': 'We start with a short introduction and brief: goals, product, audience, budget, and expectations.',
      'faq.q5': 'Do you work with small businesses?',
      'faq.a5': 'Yes. We choose a realistic format and priorities so the result can be felt in sales.',
      'faq.q6': 'How are you different from other agencies?',
      'faq.a6': 'We do not just create one-off pieces. We build a system: goals → strategy → content → testing → analytics.',

      'footer.title': 'THERE ARE NO LIMITS<br>TO PERFECTION',
      'footer.meta': 'MARKETING AGENCY',
      'footer.terms': 'TERMS & CONDITIONS',
      'footer.privacy': 'PRIVACY POLICY',
      'footer.cta': 'START<br>A CONVERSATION'
    }
  };

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');

        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  const initAccordion = () => {
    const faqItems = document.querySelectorAll('.faqItem');

    faqItems.forEach(item => {
      const btn = item.querySelector('.faqBtn');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', String(!isOpen));
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  };

  const initMobileMenu = () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const drawer = document.querySelector('.header__drawer');

    if (!burger || !header) return;

    const toggleMenu = (forceClose = false) => {
      let isNowOpen;

      if (forceClose) {
        header.classList.remove('is-open');
        isNowOpen = false;
      } else {
        isNowOpen = header.classList.toggle('is-open');
      }

      burger.setAttribute('aria-expanded', String(isNowOpen));
      if (drawer) drawer.setAttribute('aria-hidden', String(!isNowOpen));
    };

    burger.addEventListener('click', () => toggleMenu());

    header.querySelectorAll('.header__drawer a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(true));
    });
  };

  const detectInitialLang = () => {
    const savedLang = localStorage.getItem('siteLang');

    if (savedLang === 'uk' || savedLang === 'en') {
      return savedLang;
    }

    const browserLang = navigator.language || navigator.userLanguage || '';

    if (browserLang.toLowerCase().startsWith('uk')) {
      return 'uk';
    }

    return 'en';
  };

  const setLang = (lang) => {
    const selectedLang = lang === 'uk' ? 'uk' : 'en';
    const dictionary = translations[selectedLang];

    document.documentElement.lang = selectedLang;
    localStorage.setItem('siteLang', selectedLang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');

      if (dictionary[key]) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(button => {
      button.textContent = selectedLang === 'uk' ? 'EN' : 'UA';
      button.setAttribute(
        'aria-label',
        selectedLang === 'uk' ? 'Switch to English' : 'Перемкнути українською'
      );
    });
  };

  const initLanguageSwitcher = () => {
    const langButtons = document.querySelectorAll('[data-lang-toggle]');

    setLang(detectInitialLang());

    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const currentLang = localStorage.getItem('siteLang') || detectInitialLang();
        const nextLang = currentLang === 'uk' ? 'en' : 'uk';

        setLang(nextLang);
      });
    });
  };

  initSmoothScroll();
  initAccordion();
  initMobileMenu();
  initLanguageSwitcher();
});
