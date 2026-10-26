import type { Language } from "@/types/language";

export const translations = {
  en: {
    languageSwitcher: "Select language",
    name: { first: "Anastasiia", last: "Totska" },
    header: { scrollToTop: "Scroll to top", openMenu: "Open menu", closeMenu: "Close menu" },
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      intro: "Hello, I am",
      role: "Junior Frontend Developer",
      description: "Junior Frontend Developer building responsive, user-friendly web applications with React, Next.js, and TypeScript.",
      skills: [
        "React & Next.js", "TypeScript", "Responsive Design", "REST API Integration",
        "State Management", "Reusable Components", "Git & GitHub", "Node.js Fundamentals",
        "Lazy Loading & Code Splitting", "Image Optimization", "SEO Fundamentals",
        "Testing", "CI/CD Fundamentals", "AI-Assisted Development",
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Frontend development with attention to structure and detail",
      role: "Junior Frontend Developer",
      lead: "I work with component-based interfaces, typed data, and APIs while choosing tools to match the task and expanding my skills through practice.",
      facts: [
        { label: "Current stack", value: "React · Next.js · TypeScript" },
        { label: "Frontend fundamentals", value: "HTML · CSS · JavaScript" },
        { label: "Workflow & Integration", value: "Git · GitHub · REST API · Vercel" },
      ],
      certification: "Certification",
      certificateTitle: "Fullstack Developer Course",
      certificateMeta: "GoIT · May 2026 · 872 hours",
      certificateStack: "HTML/CSS · JavaScript · React · Next.js · Node.js",
      certificateAlt: "GoIT Fullstack Developer Course certificate",
      practicalSkills: "Practical skills",
      abilities: [
        "Build responsive pages with a component-based approach",
        "Connect REST APIs and handle asynchronous data",
        "Create reusable, typed components",
        "Implement loading, empty, error, and success states",
        "Use Git, GitHub, ESLint, and Vercel in project workflows",
        "Implement Figma designs as responsive interfaces",
        "Apply lazy loading, code splitting, image optimization, and SEO metadata",
        "Use Vitest, Testing Library, and GitHub Actions for automated checks",
        "Use OpenAI Codex as an AI coding assistant and review its output",
      ],
      goalTitle: "Current goal",
      goal: "I am looking for a junior frontend role where I can contribute to team development, apply what I already know, and learn new technologies as project needs evolve. I value professional feedback and am ready to take on more complex tasks step by step.",
      downloadCv: "Download CV",
    },
    projects: {
      eyebrow: "Projects",
      title: "My Projects",
      description: "Selected projects and the technical decisions behind their interfaces, data flow, and responsive behaviour.",
      featured: "Featured project",
      openDetails: "Open details for",
      modal: { role: "My role", problem: "Problem", solution: "Solution", result: "Result", liveDemo: "Live Demo", close: "Close project details" },
      items: [
        {
          "title": "Portfolio Website",
          "description": "Multilingual portfolio built with Next.js, TypeScript, CSS Modules, and Framer Motion, with interactive project previews and CV downloads.",
          "role": "I built the responsive interface, DE/EN/UA content, project dialogs, SEO metadata, and language-specific CV downloads.",
          "problem": "The portfolio needed to present my projects clearly while keeping images, animations, and project details efficient to load.",
          "solution": "I separated typed project data from the UI, used next/image and next/font for asset optimization, and loaded the skills marquee dynamically. The Next.js Metadata API provides page and social preview metadata.",
          "result": "The portfolio is deployed on Vercel and presents my skills and projects in three languages, with optimized images and reusable components.",
          "highlights": [
            "DE/EN/UA content",
            "Image and font optimization",
            "SEO metadata",
            "Responsive CSS Modules"
          ]
        },
        {
          "title": "MovieFinder",
          "description": "React and Vite movie app with React Router, TMDB API search, genre and year filters, pagination, cast information, ratings, and reviews.",
          "role": "I implemented API requests with Axios, URL-based filters, nested routes, lazy loading, component tests, and a GitHub Actions CI workflow.",
          "problem": "Search and navigation needed to remain clear while remote data loaded, and changes needed repeatable checks before release.",
          "solution": "React.lazy and Suspense split routes into separate bundles; images load lazily. Vitest and React Testing Library cover movie cards, search, filters, and pagination. GitHub Actions runs lint, tests, and a build; the Vercel Git integration handles deployment separately.",
          "result": "The app combines asynchronous REST API requests, shareable search URLs, responsive UI, and automated validation. CI and Vercel deployments run independently.",
          "highlights": [
            "Lazy loading and code splitting",
            "Vitest and Testing Library",
            "GitHub Actions CI",
            "TMDB API with Axios"
          ]
        },
        {
          "title": "NoteHub",
          "description": "Responsive note manager built with Next.js App Router, TypeScript, TanStack Query, and Zustand, with search, tag filters, and modal previews.",
          "role": "I built the typed Axios API layer, server prefetching, query caching, note creation and deletion, draft persistence, and route-based detail modals.",
          "problem": "Remote notes needed to stay consistent across filters and mutations, while unfinished drafts had to survive a page refresh.",
          "solution": "TanStack Query handles server-state caching, hydration, and invalidation after mutations. Zustand persist saves drafts in localStorage. Debounced search and pagination control API requests, while CSS Modules provide a mobile-first layout.",
          "result": "Users can browse, search, create, and delete notes with cached server data, persistent drafts, and clear loading and error feedback.",
          "highlights": [
            "TanStack Query caching",
            "Zustand draft persistence",
            "Debounced search",
            "Next.js modal routing"
          ]
        },
        {
          "title": "sama-zlipula",
          "description": "Client storefront built with React, TypeScript, and Vite, with a product catalog, shopping cart, online ordering process, and admin interface.",
          "role": "I developed the storefront, Context API state, admin interface, Supabase REST integration, Telegram order notifications, and Vercel deployment.",
          "problem": "The client needed a mobile-friendly catalog and order flow, editable product data, and a website that search engines could identify as a local business.",
          "solution": "I used CSS Modules, lazy-loaded product images, and a Vercel serverless endpoint for Telegram notifications. The Supabase integration supports catalog data, authentication, and image storage when configured. Canonical metadata, Open Graph, JSON-LD, robots.txt, and a sitemap provide the SEO foundation.",
          "result": "The client website is published with a catalog, cart, order requests, and local SEO foundations. The source repository is private.",
          "highlights": [
            "React, TypeScript, and Vite",
            "Catalog, cart, and order form",
            "Telegram serverless API",
            "Local SEO and lazy images"
          ]
        }
      ],
    },
    contact: { eyebrow: "Contact", title: "Get in touch", email: "Send email to Anastasiia", linkedin: "Open LinkedIn", github: "Open GitHub", whatsapp: "Open WhatsApp" },
  },
  de: {
    languageSwitcher: "Sprache auswählen",
    name: { first: "Anastasiia", last: "Totska" },
    header: { scrollToTop: "Nach oben scrollen", openMenu: "Menü öffnen", closeMenu: "Menü schließen" },
    nav: { home: "Start", about: "Über mich", projects: "Projekte", contact: "Kontakt" },
    hero: {
      intro: "Hallo, ich bin",
      role: "Junior Frontend-Entwicklerin",
      description: "Junior Frontend-Entwicklerin mit Fokus auf responsive, benutzerfreundliche Webanwendungen mit React, Next.js und TypeScript.",
      skills: [
        "React & Next.js", "TypeScript", "Responsives Design", "REST-API-Integration",
        "State Management", "Wiederverwendbare Komponenten", "Git & GitHub", "Node.js-Grundlagen",
        "Lazy Loading & Code Splitting", "Bildoptimierung", "SEO-Grundlagen",
        "Testing", "CI/CD-Grundlagen", "KI-gestützte Entwicklung",
      ],
    },
    about: {
      eyebrow: "Über mich",
      title: "Frontend-Entwicklung mit Blick für Struktur und Details",
      role: "Junior Frontend-Entwicklerin",
      lead: "Ich arbeite mit komponentenbasierten Oberflächen, typisierten Daten und APIs, wähle Werkzeuge passend zur Aufgabe und erweitere meine Kenntnisse durch praktische Arbeit.",
      facts: [
        { label: "Aktueller Stack", value: "React · Next.js · TypeScript" },
        { label: "Frontend-Grundlagen", value: "HTML · CSS · JavaScript" },
        { label: "Workflow & Integration", value: "Git · GitHub · REST API · Vercel" },
      ],
      certification: "Zertifizierung",
      certificateTitle: "Fullstack-Developer-Kurs",
      certificateMeta: "GoIT · Mai 2026 · 872 Stunden",
      certificateStack: "HTML/CSS · JavaScript · React · Next.js · Node.js",
      certificateAlt: "Zertifikat des GoIT Fullstack-Developer-Kurses",
      practicalSkills: "Praktische Fähigkeiten",
      abilities: [
        "Responsive Seiten mit einem komponentenbasierten Ansatz entwickeln",
        "REST-APIs anbinden und asynchrone Daten verarbeiten",
        "Wiederverwendbare, typisierte Komponenten erstellen",
        "Lade-, Leer-, Fehler- und Erfolgszustände umsetzen",
        "Git, GitHub, ESLint und Vercel im Projektablauf nutzen",
        "Figma-Designs als responsive Oberflächen umsetzen",
        "Lazy Loading, Code Splitting, Bildoptimierung und SEO-Metadaten einsetzen",
        "Mit Vitest, Testing Library und GitHub Actions automatisiert prüfen",
        "OpenAI Codex als KI-Coding-Assistenten nutzen und Ergebnisse prüfen",
      ],
      goalTitle: "Aktuelles Ziel",
      goal: "Ich suche eine Junior-Frontend-Position, in der ich zur gemeinsamen Entwicklung beitragen, meine bisherigen Kenntnisse praktisch einsetzen und bei neuen Projektanforderungen weitere Technologien erlernen kann. Professionelles Feedback ist mir wichtig, und ich bin bereit, schrittweise anspruchsvollere Aufgaben zu übernehmen.",
      downloadCv: "Lebenslauf herunterladen",
    },
    projects: {
      eyebrow: "Projekte",
      title: "Meine Projekte",
      description: "Ausgewählte Projekte und die technischen Entscheidungen hinter ihren Oberflächen, Datenflüssen und responsiven Layouts.",
      featured: "Ausgewähltes Projekt",
      openDetails: "Details öffnen für",
      modal: { role: "Meine Rolle", problem: "Problem", solution: "Lösung", result: "Ergebnis", liveDemo: "Live-Demo", close: "Projektdetails schließen" },
      items: [
        {
          "title": "Portfolio-Website",
          "description": "Mehrsprachiges Portfolio mit Next.js, TypeScript, CSS Modules und Framer Motion sowie interaktiven Projektansichten und Lebenslauf-Downloads.",
          "role": "Ich entwickelte die responsive Oberfläche, Inhalte in DE/EN/UA, Projektdialoge, SEO-Metadaten und sprachabhängige Lebenslauf-Downloads.",
          "problem": "Das Portfolio sollte meine Projekte übersichtlich präsentieren und Bilder, Animationen sowie Projektdetails bedarfsgerecht laden.",
          "solution": "Ich trennte typisierte Projektdaten von der Oberfläche, nutzte next/image und next/font zur Optimierung der Medien und lud das Skills-Laufband dynamisch. Die Next.js Metadata API liefert Seitenmetadaten und Social Previews.",
          "result": "Das auf Vercel veröffentlichte Portfolio präsentiert meine Kenntnisse und Projekte in drei Sprachen mit optimierten Bildern und wiederverwendbaren Komponenten.",
          "highlights": [
            "Inhalte in DE/EN/UA",
            "Bild- und Schriftoptimierung",
            "SEO-Metadaten",
            "Responsive CSS Modules"
          ]
        },
        {
          "title": "MovieFinder",
          "description": "Filmsuche mit React, Vite, React Router und TMDB-API sowie Genre- und Jahresfiltern, Paginierung, Besetzung, Bewertungen und Rezensionen.",
          "role": "Ich implementierte Axios-Anfragen, URL-basierte Filter, verschachtelte Routen, Lazy Loading, Komponententests und einen CI-Workflow mit GitHub Actions.",
          "problem": "Suche und Navigation sollten beim Laden externer Daten verständlich bleiben; Änderungen benötigten wiederholbare Prüfungen vor der Veröffentlichung.",
          "solution": "React.lazy und Suspense teilen Routen in separate Bundles auf; Bilder werden verzögert geladen. Vitest und React Testing Library prüfen Filmkarten, Suche, Filter und Paginierung. GitHub Actions führt Linting, Tests und Build aus; die Vercel-Git-Integration übernimmt das Deployment separat.",
          "result": "Die Anwendung verbindet asynchrone REST-API-Anfragen, teilbare Such-URLs, ein responsives UI und automatisierte Prüfungen. CI und Vercel-Deployments laufen unabhängig voneinander.",
          "highlights": [
            "Lazy Loading und Code Splitting",
            "Vitest und Testing Library",
            "GitHub Actions CI",
            "TMDB-API mit Axios"
          ]
        },
        {
          "title": "NoteHub",
          "description": "Responsive Notizverwaltung mit Next.js App Router, TypeScript, TanStack Query und Zustand sowie Suche, Tag-Filtern und modalen Vorschauen.",
          "role": "Ich entwickelte die typisierte Axios-API-Schicht, serverseitiges Prefetching, Query-Caching, Erstellen und Löschen von Notizen, Entwurfsspeicherung und routenbasierte Detaildialoge.",
          "problem": "Externe Notizdaten mussten bei Filtern und Änderungen konsistent bleiben; unvollständige Entwürfe sollten beim Neuladen erhalten bleiben.",
          "solution": "TanStack Query übernimmt Caching, Hydration und Cache-Invalidierung nach Mutationen. Zustand persist speichert Entwürfe in localStorage. Debounced Search und Paginierung steuern API-Anfragen; CSS Modules bilden das Mobile-First-Layout.",
          "result": "Nutzer können Notizen mit gecachten Serverdaten suchen, anzeigen, erstellen und löschen. Entwürfe bleiben erhalten; Lade- und Fehlerzustände sind sichtbar.",
          "highlights": [
            "Caching mit TanStack Query",
            "Entwürfe mit Zustand persist",
            "Debounced Search",
            "Next.js Modal Routing"
          ]
        },
        {
          "title": "sama-zlipula",
          "description": "Kundenwebsite mit React, TypeScript und Vite sowie Produktkatalog, Warenkorb, Online-Bestellprozess und Administrationsoberfläche.",
          "role": "Ich entwickelte die Website, Zustandsverwaltung mit Context API, Administrationsoberfläche, Supabase-REST-Anbindung, Telegram-Bestellmeldungen und das Vercel-Deployment.",
          "problem": "Der Kunde benötigte einen mobilen Katalog und Bestellablauf, bearbeitbare Produktdaten und eine Website, die Suchmaschinen als lokales Unternehmen einordnen können.",
          "solution": "Ich setzte CSS Modules, Lazy Loading für Produktbilder und einen Vercel-Serverless-Endpunkt für Telegram-Meldungen ein. Die Supabase-Anbindung unterstützt bei entsprechender Konfiguration Katalogdaten, Authentifizierung und Bildspeicherung. Canonical-Metadaten, Open Graph, JSON-LD, robots.txt und Sitemap schaffen die SEO-Grundlage.",
          "result": "Die Kundenwebsite ist mit Katalog, Warenkorb, Bestellanfragen und Grundlagen für lokale SEO veröffentlicht. Das Quellcode-Repository ist privat.",
          "highlights": [
            "React, TypeScript und Vite",
            "Katalog, Warenkorb und Bestellungen",
            "Telegram-Serverless-API",
            "Lokale SEO und Lazy Loading"
          ]
        }
      ],
    },
    contact: { eyebrow: "Kontakt", title: "Kontakt aufnehmen", email: "E-Mail an Anastasiia senden", linkedin: "LinkedIn öffnen", github: "GitHub öffnen", whatsapp: "WhatsApp öffnen" },
  },
  ua: {
    languageSwitcher: "Оберіть мову",
    name: { first: "Анастасія", last: "Тоцька" },
    header: { scrollToTop: "Прокрутити нагору", openMenu: "Відкрити меню", closeMenu: "Закрити меню" },
    nav: { home: "Головна", about: "Про мене", projects: "Проєкти", contact: "Контакти" },
    hero: {
      intro: "Привіт, я",
      role: "Junior Frontend-розробниця",
      description: "Junior Frontend-розробниця, яка створює адаптивні та зручні вебзастосунки з React, Next.js і TypeScript.",
      skills: [
        "React і Next.js", "TypeScript", "Адаптивний дизайн", "Інтеграція REST API",
        "Керування станом", "Повторно використовувані компоненти", "Git і GitHub", "Основи Node.js",
        "Lazy Loading і Code Splitting", "Оптимізація зображень", "Основи SEO",
        "Тестування", "Основи CI/CD", "Розробка з ШІ-асистентами",
      ],
    },
    about: {
      eyebrow: "Про мене",
      title: "Frontend-розробка з увагою до структури та деталей",
      role: "Junior Frontend-розробниця",
      lead: "Працюю з компонентною побудовою інтерфейсів, типізованими даними та API, добираю інструменти відповідно до завдання й розширюю свої знання на практиці.",
      facts: [
        { label: "Поточний стек", value: "React · Next.js · TypeScript" },
        { label: "Основи frontend-розробки", value: "HTML · CSS · JavaScript" },
        { label: "Інструменти та інтеграції", value: "Git · GitHub · REST API · Vercel" },
      ],
      certification: "Сертифікат",
      certificateTitle: "Курс Fullstack Developer від GoIT",
      certificateMeta: "GoIT · травень 2026 · 872 години",
      certificateStack: "HTML/CSS · JavaScript · React · Next.js · Node.js",
      certificateAlt: "Сертифікат курсу GoIT Fullstack Developer",
      practicalSkills: "Практичні навички",
      abilities: [
        "Створювати адаптивні сторінки на основі компонентів",
        "Підключати REST API та обробляти асинхронні дані",
        "Розробляти повторно використовувані типізовані компоненти",
        "Реалізовувати стани завантаження, відсутності даних, помилки й успіху",
        "Використовувати Git, GitHub, ESLint і Vercel у роботі над проєктами",
        "Втілювати Figma-дизайн в адаптивних інтерфейсах",
        "Застосовувати lazy loading, code splitting, оптимізацію зображень і SEO-метадані",
        "Використовувати Vitest, Testing Library і GitHub Actions для перевірок",
        "Працювати з OpenAI Codex як ШІ-асистентом і перевіряти результати",
      ],
      goalTitle: "Поточна мета",
      goal: "Шукаю позицію junior frontend-розробниці, де зможу долучатися до командної розробки, застосовувати набуті знання та опановувати нові технології відповідно до потреб проєкту. Ціную професійний зворотний зв’язок і готова поступово брати на себе складніші завдання.",
      downloadCv: "Завантажити CV",
    },
    projects: {
      eyebrow: "Проєкти",
      title: "Мої проєкти",
      description: "Добірка проєктів і технічних рішень, використаних для побудови інтерфейсів, роботи з даними та адаптивних макетів.",
      featured: "Обраний проєкт",
      openDetails: "Відкрити деталі проєкту",
      modal: { role: "Моя роль", problem: "Проблема", solution: "Рішення", result: "Результат", liveDemo: "Переглянути сайт", close: "Закрити деталі проєкту" },
      items: [
        {
          "title": "Сайт-портфоліо",
          "description": "Багатомовне портфоліо на Next.js, TypeScript, CSS Modules і Framer Motion з інтерактивними проєктами та завантаженням резюме.",
          "role": "Розробила адаптивний інтерфейс, контент DE/EN/UA, діалоги проєктів, SEO-метадані та завантаження резюме відповідною мовою.",
          "problem": "Портфоліо мало зрозуміло показувати проєкти й завантажувати зображення, анімації та деталі відповідно до потреб інтерфейсу.",
          "solution": "Відокремила типізовані дані від компонентів, використала next/image і next/font для оптимізації ресурсів та динамічний імпорт стрічки навичок. Next.js Metadata API задає метадані сторінки та прев’ю для соцмереж.",
          "result": "Портфоліо опубліковане на Vercel і представляє навички та проєкти трьома мовами з оптимізованими зображеннями й повторно використовуваними компонентами.",
          "highlights": [
            "Контент DE/EN/UA",
            "Оптимізація зображень і шрифтів",
            "SEO-метадані",
            "Адаптивні CSS Modules"
          ]
        },
        {
          "title": "MovieFinder",
          "description": "Пошук фільмів на React і Vite з React Router, TMDB API, фільтрами жанру й року, пагінацією, акторським складом, рейтингами й відгуками.",
          "role": "Реалізувала запити через Axios, URL-фільтри, вкладені маршрути, lazy loading, компонентні тести та CI-процес у GitHub Actions.",
          "problem": "Пошук і навігація мали залишатися зрозумілими під час завантаження даних, а зміни потребували відтворюваних перевірок перед публікацією.",
          "solution": "React.lazy і Suspense розділяють маршрути на окремі бандли; зображення завантажуються відкладено. Vitest і React Testing Library перевіряють картки фільмів, пошук, фільтри й пагінацію. GitHub Actions запускає лінтер, тести та збірку; Git-інтеграція Vercel окремо відповідає за розгортання.",
          "result": "Застосунок поєднує асинхронні REST-запити, пошук зі збереженням параметрів у URL, адаптивний інтерфейс та автоматизовані перевірки. CI й розгортання Vercel працюють незалежно.",
          "highlights": [
            "Lazy loading і code splitting",
            "Vitest і Testing Library",
            "CI через GitHub Actions",
            "TMDB API та Axios"
          ]
        },
        {
          "title": "NoteHub",
          "description": "Адаптивний менеджер нотаток на Next.js App Router, TypeScript, TanStack Query і Zustand із пошуком, фільтрами тегів і модальним переглядом.",
          "role": "Створила типізований API-шар на Axios, серверне попереднє завантаження, кешування запитів, створення й видалення нотаток, збереження чернеток і модальні маршрути.",
          "problem": "Дані нотаток мали залишатися узгодженими після фільтрації та змін, а незавершені чернетки — зберігатися після перезавантаження сторінки.",
          "solution": "TanStack Query відповідає за кешування, гідратацію й інвалідацію кешу після мутацій. Zustand persist зберігає чернетки в localStorage. Debounced search і пагінація керують API-запитами, а CSS Modules забезпечують mobile-first верстку.",
          "result": "Користувачі можуть шукати, переглядати, створювати й видаляти нотатки з кешуванням серверних даних, збереженням чернеток та індикацією завантаження й помилок.",
          "highlights": [
            "Кешування TanStack Query",
            "Чернетки через Zustand persist",
            "Пошук із debounce",
            "Модальні маршрути Next.js"
          ]
        },
        {
          "title": "sama-zlipula",
          "description": "Клієнтський сайт на React, TypeScript і Vite з каталогом товарів, кошиком, онлайн-процесом замовлення та адміністративною панеллю.",
          "role": "Розробила сайт, керування станом через Context API, адмінпанель, інтеграцію Supabase REST, Telegram-сповіщення про замовлення та розгортання на Vercel.",
          "problem": "Клієнту потрібні були зручний мобільний каталог і процес замовлення, редагування товарів та зрозуміле для пошукових систем представлення локального бізнесу.",
          "solution": "Використала CSS Modules, lazy loading зображень товарів і serverless-ендпоінт Vercel для Telegram-сповіщень. Інтеграція Supabase за відповідного налаштування підтримує дані каталогу, автентифікацію та зберігання зображень. Canonical-метадані, Open Graph, JSON-LD, robots.txt і sitemap забезпечують основу SEO.",
          "result": "Клієнтський сайт опублікований із каталогом, кошиком, заявками на замовлення та основами локального SEO. Репозиторій із кодом приватний.",
          "highlights": [
            "React, TypeScript і Vite",
            "Каталог, кошик і замовлення",
            "Telegram serverless API",
            "Локальне SEO й lazy loading"
          ]
        }
      ],
    },
    contact: { eyebrow: "Контакти", title: "Зв’яжіться зі мною", email: "Написати Анастасії на email", linkedin: "Відкрити LinkedIn", github: "Відкрити GitHub", whatsapp: "Відкрити WhatsApp" },
  },
};

export type Translation = (typeof translations)[Language];
