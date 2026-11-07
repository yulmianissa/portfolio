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

const projects = [
  {
    number: '01',
    category: 'DELIVERY · ЭФФЕКТИВНОСТЬ',
    title: 'Оптимизация процесса сдачи продукта',
    problem: 'Трудоёмкий и непредсказуемый процесс сдачи.',
    approach: 'Внедрение единого шаблона и понятного порядка работы.',
    outcome: 'Снижение трудозатрат на 30%.',
    metric: '−30%',
  },
  {
    number: '02',
    category: 'PEOPLE · ONBOARDING',
    title: 'Оптимизация онбординга',
    problem: 'Новым сотрудникам требовалось больше времени на адаптацию.',
    approach: 'Создание системы адаптации и структурированного погружения.',
    outcome: 'Срок адаптации сокращён с 3 до 2 месяцев.',
    metric: '3 → 2',
  },
  {
    number: '03',
    category: 'STAKEHOLDERS · ПРОЦЕССЫ',
    title: 'Кросс-командное взаимодействие',
    problem: 'Длительные согласования замедляли совместную работу.',
    approach: 'Стандартизация процесса согласований.',
    outcome: 'Время согласований сокращено на 50%.',
    metric: '−50%',
  },
  {
    number: '04',
    category: 'PEOPLE · LEADERSHIP',
    title: 'Развитие автономности команд',
    problem: 'Ключевые процессы зависели от одного руководителя.',
    approach: 'Развитие двух заместителей и передача ответственности.',
    outcome: 'Меньше зависимости процессов от руководителя.',
    metric: '02',
  },
  {
    number: '05',
    category: 'ENGINEERING · RISK',
    title: 'Управление техническим долгом',
    problem: 'Технические риски и накопленный долг конкурируют с задачами продукта.',
    approach: 'Планирование ресурсов, приоритизация и контроль рисков.',
    outcome: 'Технические инициативы встроены в управляемый delivery.',
    metric: 'RISK',
  },
  {
    number: '06',
    category: 'PRODUCT · LAUNCH',
    title: 'Запуск маркетплейса',
    problem: 'Для запуска требовалось синхронизировать несколько команд и зависимостей.',
    approach: 'Согласование MVP и координация rollout с продуктовыми и core-командами.',
    outcome: 'Кросс-командная координация запуска продукта.',
    metric: 'MVP',
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

const profileCases = [
  {
    number: '01',
    category: 'ПРОДУКТ · ЗАПУСК',
    title: 'Маркетплейс: критерии MVP и rollout',
    description:
      'Согласовала обязательные требования и критерии приёмки для MVP и полноценного rollout. Синхронизировала планы с зависимыми командами и помогла защитить приоритеты запуска.',
    evidence: 'Зависимости от 3 команд',
  },
  {
    number: '02',
    category: 'ИНЦИДЕНТ · CI/CD',
    title: 'Обходной путь при блокировке релизов',
    description:
      'Когда сбой GitLab pipeline остановил сборки и заблокировал QA и релизных инженеров, подготовила инструкцию по ручной сборке и запуску необходимых тестов через IDE и поделилась ею с компанией.',
    evidence: 'QA и релизы продолжили работу',
  },
  {
    number: '03',
    category: 'РИСКИ · DELIVERY',
    title: 'Управление рисками с запуска команды',
    description:
      'При запуске продуктовой команды изучила возможные риски и согласовала их с командой, зафиксировала в документации вместе со сроками. На каждом спринте отслеживала блокеры и помогала устранить их до наступления риска.',
    evidence: 'Проактивный контроль на каждом спринте',
  },
  {
    number: '04',
    category: 'ТЕХНИЧЕСКОЕ КАЧЕСТВО · МЕТРИКИ',
    title: 'Технический долг и качество продукта',
    description:
      'Выделяла до 25% ресурсов спринта на технический долг. Для наблюдения за качеством использовала Jira и Grafana; среди примеров метрик — ошибки API, время ответа, переходы на страницы и покупки.',
    evidence: 'До 25% ресурсов спринта',
  },
  {
    number: '05',
    category: 'SCOPE · COMPLIANCE',
    title: 'Защита границ проекта',
    description:
      'Аргументировала отказ от требований, не соответствующих законодательству РФ, и помогала отложить менее приоритетные задачи, без которых нельзя было выйти в rollout.',
    evidence: 'Приоритеты MVP и rollout',
  },
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
        <a className="brand" href="#top" aria-label="Татьяна — на главную">
          <span className="brand-mark" aria-hidden="true">
            T
          </span>
          <span className="brand-name">Татьяна</span>
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
                Senior
                <br />
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
              <SectionLabel number="04">КЕЙСЫ И ПРОЕКТЫ</SectionLabel>
              <h2>Работа, которая меняет процессы</h2>
            </div>
            <p className="section-intro">
              От задачи и системного решения —
              <br />
              к результату, который можно увидеть.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span>{project.category}</span>
                  <span className="project-number">{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <dl className="project-story">
                  <div>
                    <dt>ЗАДАЧА</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>РЕШЕНИЕ</dt>
                    <dd>{project.approach}</dd>
                  </div>
                  <div>
                    <dt>РЕЗУЛЬТАТ</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>
                <span className="project-metric">{project.metric}</span>
              </article>
            ))}
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
              <h2>Senior Delivery Manager</h2>
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
                <span>НОЯБРЬ 2025 — СЕНТЯБРЬ 2026</span>
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
                  Для запуска маркетплейса согласовывала критерии MVP,
                  требования к rollout и зависимости с продуктовыми командами.
                </li>
                <li>
                  Сократила время согласований на 50%, а период адаптации —
                  с 3 до 2 месяцев; вырастила двух заместителей.
                </li>
                <li>
                  Резервировала до 25% ресурсов спринта на технический долг;
                  внедрила Performance Review, ИПР и технические и бизнес-метрики.
                </li>
              </ul>
            </article>

            <article className="experience-role">
              <div className="role-topline">
                <span>ГАЗИНФОРМСЕРВИС</span>
                <span>МАЙ 2024 — ОКТЯБРЬ 2025</span>
              </div>
              <h3>Руководитель проектов</h3>
              <p className="role-summary">
                Полный цикл проектов: от сбора требований и технического задания
                до внедрения и обучения заказчика.
              </p>
              <ul>
                <li>
                  Сократила трудозатраты на передачу продукта на 30% благодаря
                  единому шаблону сдачи проекта.
                </li>
                <li>
                  Планировала сроки и трудозатраты, координировала интеграции
                  и переводила бизнес-требования в технические решения.
                </li>
                <li>
                  Организовывала приёмочные испытания, демонстрации и сдачу
                  результатов заказчикам.
                </li>
              </ul>
            </article>
          </div>
          <div className="profile-cases">
            <div className="profile-cases-heading">
              <div>
                <p className="profile-cases-label">КЕЙСЫ</p>
                <h3>Как действую в реальных ситуациях</h3>
              </div>
            </div>
            <div className="profile-case-grid">
              {profileCases.map((item) => (
                <article className="profile-case-card" key={item.number}>
                  <div className="profile-case-topline">
                    <span>{item.category}</span>
                    <span>{item.number}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="profile-case-evidence">{item.evidence}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contacts section-shell" id="contacts">
          <div className="section-title-row">
            <div>
              <SectionLabel number="07">КОНТАКТЫ</SectionLabel>
              <h2>Senior Delivery Manager</h2>
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
          <span className="brand-name">Татьяна · Senior Delivery Manager</span>
        </a>
        <a href="#top">Наверх ↑</a>
      </footer>
    </>
  )
}

export default App
