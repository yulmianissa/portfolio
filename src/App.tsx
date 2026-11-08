const results = [
  {
    metric: '30%',
    title: 'Снижение трудозатрат',
    detail: 'на сдачу продукта',
  },
  {
    metric: '50%',
    title: 'Быстрее согласования',
    detail: 'между командами и стейкхолдерами',
  },
  {
    metric: '33%',
    title: 'Короче адаптация',
    detail: 'с трёх до двух месяцев',
  },
  {
    metric: '12+',
    title: 'Человек в управлении',
    detail: 'команды разработки',
  },
]

const starCases = [
  {
    number: '01',
    category: 'DELIVERY · ЭФФЕКТИВНОСТЬ',
    title: 'Сдача продукта заказчику',
    situation: 'Передача продукта заказчику требовала значительных трудозатрат.',
    task: 'Сократить трудоёмкость сдачи и сделать процесс более предсказуемым.',
    action:
      'Я разработала и внедрила единый шаблон сдачи продукта, который использовала при подготовке и передаче результата заказчику.',
    result: 'Трудозатраты на сдачу продукта снизились на 30%.',
    metric: '−30%',
  },
  {
    number: '02',
    category: 'PEOPLE · ONBOARDING',
    title: 'Адаптация новых сотрудников',
    situation: 'Адаптация новых сотрудников занимала около трёх месяцев.',
    task: 'Сократить срок выхода на самостоятельную работу и упростить передачу знаний.',
    action:
      'Я создала базу знаний и систему адаптации для разных ролей, а с помощью ИИ подготовила обучающие материалы.',
    result: 'Срок адаптации сократился с 3 до 2 месяцев — на 33%.',
    metric: '3 → 2 мес.',
  },
  {
    number: '03',
    category: 'STAKEHOLDERS · ПРОЦЕССЫ',
    title: 'Согласования между командами',
    situation: 'Длительные согласования замедляли совместную работу команд и стейкхолдеров.',
    task: 'Сократить время согласования решений и требований.',
    action:
      'Я стандартизировала процесс согласований и зафиксировала единый порядок взаимодействия участников.',
    result: 'Время согласований сократилось на 50%.',
    metric: '−50%',
  },
  {
    number: '04',
    category: 'QA · ПРИЁМОЧНЫЕ ИСПЫТАНИЯ',
    title: 'Ускорение приёмки продукта',
    situation: 'Приёмочные испытания занимали около недели.',
    task: 'Ускорить испытания, сохранив полноту API-проверок к приёмке.',
    action:
      'Я разработала единый шаблон приёмочных испытаний и подготовила API-автотесты к этапу приёмки.',
    result:
      'Испытания стали занимать 1 день вместо недели (на 85,7% быстрее); покрытие проекта API-автотестами к приёмке достигло 100%.',
    metric: '1 нед. → 1 день',
  },
  {
    number: '05',
    category: 'PRODUCT · РИСКИ · ЗАПУСК',
    title: 'Запуск маркетплейса',
    situation:
      'Запуск зависел от согласования MVP и работы трёх продуктовых и core-команд.',
    task: 'Синхронизировать зависимости и заранее выявлять риски и блокеры rollout.',
    action:
      'Я согласовала критерии MVP, сформировала с помощью ИИ карту рисков по вводным проекта, срокам и зависимостям, зафиксировала риски со сроками и проверяла блокеры каждый спринт.',
    result:
      'Блокеры выявлялись и устранялись до того, как начинали влиять на поставку; зависимости трёх команд были учтены в планировании.',
    metric: '3 команды',
  },
  {
    number: '06',
    category: 'КАЧЕСТВО · РЕЛИЗЫ · ИНЦИДЕНТЫ',
    title: 'Снижение ошибок и обращений в поддержку',
    situation:
      'Ошибки в релизах и повторяющиеся инциденты приводили к обращениям пользователей в поддержку.',
    task: 'Находить пропущенные риски до релиза и устранять повторяющиеся причины инцидентов.',
    action:
      'Используя ИИ и MCP, проанализировала причины инцидентов и выявила корневую причину их повторения. Инициировала системные изменения: организовала единый канал разбора инцидентов и внедрила практику Postmortem для предотвращения повторных ошибок.',
    result: 'Количество ошибок и обращений в поддержку сократилось на 20%.',
    metric: '−20%',
  },
  {
    number: '07',
    category: 'АВТОМАТИЗАЦИЯ · DEMO',
    title: 'Подготовка презентаций к спринтовым демо',
    situation: 'Подготовка презентации к спринтовому демо занимала около трёх часов.',
    task: 'Сократить ручную подготовку материалов к демонстрации.',
    action:
      'Я написала скрипт и настроила MCP-интеграцию с Jira для автоматического сбора данных в презентацию.',
    result: 'Подготовка занимает 30 минут вместо 3 часов — в 6 раз быстрее.',
    metric: '3 ч. → 30 мин.',
  },
]

const deliveryPractices = [
  {
    title: 'Метрики и прозрачность',
    description:
      'Я отслеживала Cycle Time, задержки, загрузку команды и отклонения от планов через MCP Jira и диаграмму Ганта, а качество продукта — по ошибкам API и времени ответа в Jira и Grafana.',
  },
  {
    title: 'Зависшие задачи и технический долг',
    description:
      'Я написала скрипт поиска задач, которые долго находятся в заданных статусах, и резервировала до 25% ресурсов спринта на техдолг.',
  },
  {
    title: 'Итоги встреч',
    description:
      'Я использовала ИИ, чтобы выделять из заметок решения, задачи, ответственных и сроки, и публиковала итоги в чате встречи. Дискоммуникация по договорённостям исчезла — снижение на 100%.',
  },
  {
    title: 'SDLC и CI/CD',
    description:
      'Я использовала ИИ для поиска узких мест SDLC и автоматизации рутины; перенос части ручных проверок в CI/CD сократил время тестирования на 10%.',
  },
  {
    title: 'Непрерывность релизов',
    description:
      'Когда сбой GitLab pipeline остановил сборки, я подготовила инструкцию по ручной сборке и запуску тестов через IDE, чтобы QA и релизные инженеры могли продолжить работу.',
  },
  {
    title: 'Защита границ проекта',
    description:
      'Я аргументировала отказ от требований, не соответствующих законодательству РФ, и помогала отложить менее приоритетные задачи, блокировавшие rollout.',
  },
]

const skills = [
  'Delivery Management',
  'People Management',
  'Stakeholder Management',
  'Risk Management',
  'Agile/Scrum/Kanban/SAFe',
  'SDLC',
  'Capacity Planning',
  'Technical Background',
]

const navigation = [
  { href: '#about', label: 'Обо мне' },
  { href: '#results', label: 'Результаты' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#skills', label: 'Компетенции' },
  { href: '#experience', label: 'Опыт' },
  { href: '#contacts', label: 'Контакты' },
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      <span aria-hidden="true">·</span>
      {children}
    </p>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Татьяна Максименко-Литвак — на главную">
          <span className="brand-mark" aria-hidden="true">
            T
          </span>
          <span className="brand-name">Татьяна Максименко-Литвак</span>
        </a>
        <nav className="main-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-link" href="mailto:yulmianissa@gmail.com">
          Написать <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-inner">
            <div className="hero-copy">
              <SectionLabel number="01">ПОРТФОЛИО</SectionLabel>
              <h1>
                Delivery
                <br />
                <span>Manager</span>
              </h1>
              <p className="hero-description">
                Управляю командами, процессами и поставкой IT-продуктов.
                Соединяю техническую экспертизу, системное управление и
                ориентацию на бизнес-результат.
              </p>
              <div className="hero-actions">
                <a className="button button-outline" href="#contacts">
                  Связаться <ArrowIcon />
                </a>
              </div>
              <div className="social-links" aria-label="Профессиональные профили">
                <a
                  href="https://github.com/yulmianissa"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yulmianissa"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="hero-aside" aria-label="Ключевые показатели">
              <div className="hero-aside-top">
                <span>ОПЫТ И МАСШТАБ</span>
              </div>
              <div className="hero-stat">
                <strong>10<span>+</span></strong>
                <span>лет в IT</span>
              </div>
              <div className="hero-stat">
                <strong>12<span>+</span></strong>
                <span>человек в командах</span>
              </div>
              <div className="hero-stat">
                <strong>2,5</strong>
                <span>года Leadership</span>
              </div>
              <div className="hero-aside-bottom">
                <span>ЛЮДИ</span>
                <span aria-hidden="true">/</span>
                <span>ПРОЦЕССЫ</span>
                <span aria-hidden="true">/</span>
                <span>РЕЗУЛЬТАТ</span>
              </div>
            </aside>
            <a className="hero-scroll" href="#about">
              <span aria-hidden="true">↓</span> ЛИСТАЙТЕ ДАЛЬШЕ
            </a>
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-heading">
            <SectionLabel number="02">ОБО МНЕ</SectionLabel>
            <h2>
              От инженерии —
              <br />
              к сильным командам
              <br />
              и устойчивой поставке.
            </h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              Мой путь в IT — это последовательный переход от понимания
              технологии к ответственности за команду и результат.
            </p>
            <div className="career-path" aria-label="Профессиональный путь">
              {['Инженер-проектировщик', 'QA', 'Team Lead', 'Delivery Management'].map(
                (role, index) => (
                  <div className="career-step" key={role}>
                    <span className="career-index">0{index + 1}</span>
                    <span>{role}</span>
                  </div>
                ),
              )}
            </div>
            <p className="about-detail">
              Технический бэкграунд помогает видеть взаимосвязи и риски, а опыт
              руководства — создавать условия, в которых люди могут работать
              автономно и доводить продукт до результата.
            </p>
          </div>
        </section>

        <section className="results section-shell" id="results">
          <div className="section-title-row">
            <div>
              <SectionLabel number="03">КЛЮЧЕВЫЕ РЕЗУЛЬТАТЫ</SectionLabel>
              <h2>Изменения в цифрах</h2>
            </div>
            <p className="section-intro">
              Не просто процессы — измеримый эффект
              <br />
              для команды и продукта.
            </p>
          </div>
          <div className="results-grid">
            {results.map((result, index) => (
              <article className="result-card" key={result.metric}>
                <span className="result-index">0{index + 1}</span>
                <p className="result-metric">
                  {result.metric}
                </p>
                <h3>{result.title}</h3>
                <p className="result-detail">{result.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cases section-shell" id="cases">
          <div className="section-title-row">
            <div>
              <SectionLabel number="04">ЗАДАЧИ, РЕШЕНИЯ И РЕЗУЛЬТАТЫ</SectionLabel>
              <h2>Семь историй по STAR</h2>
            </div>
            <p className="section-intro">
              Ситуация · задача · мои действия ·
              <br />
              результат в каждой истории.
            </p>
          </div>
          <div className="star-grid">
            {starCases.map((item) => (
              <article className="star-card" key={item.number}>
                <div className="star-topline">
                  <span>{item.category}</span>
                  <span>{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <dl className="star-story">
                  <div className="star-field">
                    <dt>СИТУАЦИЯ</dt>
                    <dd>{item.situation}</dd>
                  </div>
                  <div className="star-field">
                    <dt>ЗАДАЧА</dt>
                    <dd>{item.task}</dd>
                  </div>
                  <div className="star-field">
                    <dt>МОИ ДЕЙСТВИЯ</dt>
                    <dd>{item.action}</dd>
                  </div>
                  <div className="star-field star-result">
                    <dt>РЕЗУЛЬТАТ</dt>
                    <dd>
                      <strong>{item.metric}</strong>
                      {item.result}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="practice-summary">
            <div className="practice-summary-heading">
              <p>ДОПОЛНИТЕЛЬНЫЕ ПРАКТИКИ</p>
              <h3>Как я усиливаю delivery</h3>
            </div>
            <div className="practice-list">
              {deliveryPractices.map((practice) => (
                <article className="practice-card" key={practice.title}>
                  <h4>{practice.title}</h4>
                  <p>{practice.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section-shell" id="skills">
          <div className="section-title-row">
            <div>
              <SectionLabel number="05">КОМПЕТЕНЦИИ</SectionLabel>
              <h2>Уверенно соединяю</h2>
            </div>
            <p className="section-intro">
              Управление, люди и технология —
              <br />
              в контексте бизнес-целей.
            </p>
          </div>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li className="skill-item" key={skill}>
                <span>0{index + 1}</span>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="experience section-shell" id="experience">
          <div className="section-title-row">
            <div>
              <SectionLabel number="06">ОПЫТ</SectionLabel>
              <h2>Опыт, который работает</h2>
            </div>
          </div>
          <div className="experience-contact">
            <span className="experience-years">10+ <span>лет</span></span>
            <div className="experience-summary">
              <h3>От инженерии и QA к delivery</h3>
              <p>
                Путь от инженера-проектировщика и QA до Team Lead и Delivery
                Management.
              </p>
              <p className="experience-summary-context">
                Технический опыт позволяет находить баланс между бизнес-целями,
                техническими ограничениями и ресурсами команды.
              </p>
            </div>
          </div>
          <div className="experience-history">
            <article className="experience-role">
              <div className="role-topline">
                <span>iiko</span>
                <span>НОЯБРЬ 2024 — СЕНТЯБРЬ 2026</span>
              </div>
              <h3>Руководитель группы разработки</h3>
              <p className="role-summary">
                Команда 12+ специалистов, координация смежных команд и
                зависимостей — до трёх команд.
              </p>
              <ul>
                <li>
                  Выстроила roadmap, квартальное и спринтовое планирование,
                  приоритизацию и контроль изменений scope.
                </li>
                <li>
                  Внедрила Performance Review, ИПР и технические и
                  бизнес-метрики; вырастила двух заместителей.
                </li>
              </ul>
              <div className="experience-position-secondary">
                <h3>QA Engineer / Заместитель Team Lead</h3>
                <p className="role-summary">
                  Ручное и автоматизированное тестирование, развитие QA-процессов
                  и формирование единой системы обмена знаниями внутри
                  подразделения.
                </p>
                <ul>
                  <li>
                    Выполняла функциональное тестирование и разрабатывала
                    API-автотесты; участвовала в приёмочных испытаниях.
                  </li>
                  <li>
                    Выступала заместителем тимлида: участвовала в организации
                    работы команды и развитии QA-направления; провела онбординг
                    2 коллег.
                  </li>
                  <li>
                    Создала единую базу знаний и систему адаптации новых
                    сотрудников для разных ролей: QA, разработчиков, аналитиков
                    и других специалистов.
                  </li>
                  <li>
                    Внедрила регулярные ретроспективы для всего QA-подразделения,
                    разработала единые регламенты и инициировала устранение
                    системных проблем.
                  </li>
                  <li>
                    Организовала систему сбора и распространения знаний по
                    итогам профильных митапов и конференций, инициировала
                    встречи об ИИ и провела несколько докладов на
                    общекорпоративных встречах.
                  </li>
                </ul>
              </div>
            </article>

            <article className="experience-role">
              <div className="role-topline">
                <span>ГАЗИНФОРМСЕРВИС</span>
                <span>ИЮЛЬ 2017 — ОКТЯБРЬ 2024</span>
              </div>
              <h3>Руководитель проектов</h3>
              <p className="role-summary">
                Полный цикл проектов: от сбора требований и технического задания
                до внедрения и обучения заказчика.
              </p>
              <ul>
                <li>
                  Собирала и уточняла требования, переводила бизнес-задачи в
                  технические решения, планировала сроки и трудозатраты.
                </li>
                <li>
                  Координировала интеграции, организовывала приёмочные
                  испытания, демонстрации и сдачу результатов заказчикам.
                </li>
              </ul>
              <div className="experience-position-secondary">
                <h3>Инженер-проектировщик</h3>
                <p className="role-summary">
                  Полный цикл технической реализации и внедрения продукта: от
                  согласования требований с заказчиком до интеграции, испытаний
                  и передачи в эксплуатацию.
                </p>
                <ul>
                  <li>
                    Участвовала в реализации 18 проектов: согласовывала
                    технические задания с заказчиками, прорабатывала требования
                    и технические решения, проводила пострелизный мониторинг.
                  </li>
                  <li>
                    Выполняла интеграционные работы по настройке IDM-системы,
                    проводила функциональное тестирование и участвовала в
                    приёмочных испытаниях.
                  </li>
                  <li>
                    Разрабатывала автотесты и настраивала CI/CD-процессы в
                    TeamCity для автоматизации проверок и поставки продукта.
                  </li>
                  <li>
                    Создавала техническую и пользовательскую документацию,
                    проводила обучение заказчиков и сопровождала передачу
                    продукта в эксплуатацию.
                  </li>
                  <li>
                    Провела онбординг 3 сотрудников, обеспечивая передачу
                    технических знаний и погружение в рабочие процессы.
                  </li>
                  <li>
                    Разработала систему мониторинга разграничения доступов,
                    обеспечивающую контроль корректности назначенных прав.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="contacts section-shell" id="contacts">
          <div className="section-title-row">
            <div>
              <SectionLabel number="07">КОНТАКТЫ</SectionLabel>
              <h2>Открыта к новым возможностям</h2>
            </div>
          </div>
          <div className="contacts-panel">
            <div className="contact-list">
              <a
                className="contact-row"
                href="https://t.me/yulmianissa"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-type">TELEGRAM</span>
                <span>@yulmianissa</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="contact-row"
                href="https://www.linkedin.com/in/yulmianissa"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-type">LINKEDIN</span>
                <span>linkedin.com/in/yulmianissa</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
              <a className="contact-row" href="mailto:yulmianissa@gmail.com">
                <span className="contact-type">ПОЧТА</span>
                <span>yulmianissa@gmail.com</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="contact-row"
                href="https://github.com/yulmianissa"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-type">GITHUB</span>
                <span>github.com/yulmianissa</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">T</span>
          <span className="brand-name">Татьяна · Delivery Manager</span>
        </a>
        <a href="#top">Наверх ↑</a>
      </footer>
    </>
  )
}

export default App
